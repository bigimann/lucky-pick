import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { TwitterApi } from "twitter-api-v2";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Helper: Mock comments (for other platforms)
function generateMockComments(platform) {
  const mockData = [
    { name: "Sarah Johnson", comment: "This is amazing! Count me in! 🎉" },
    { name: "Mike Chen", comment: "Fingers crossed! 🤞" },
    { name: "Emma Davis", comment: "Yes please! I'd love to win this!" },
    { name: "Alex Rodriguez", comment: "Thanks for the opportunity!" },
    { name: "Lisa Thompson", comment: "Awesome giveaway! Participating! ✨" },
    { name: "David Kim", comment: "Hope I win! Good luck everyone! 🍀" },
    { name: "Rachel Green", comment: "This would be perfect for me!" },
    { name: "Tom Wilson", comment: "Count me in! Thanks for doing this! 🙏" },
    { name: "Jessica Lee", comment: "Entering! This is so cool!" },
    { name: "Chris Brown", comment: "Let's go! I'm in! 💪" },
    { name: "Amanda White", comment: "Participating! Thank you! ❤️" },
    { name: "Kevin Martinez", comment: "Yes! I hope I win this time!" },
    { name: "Sophia Garcia", comment: "Amazing! Count me in! 🎁" },
    { name: "Ryan Taylor", comment: "This is awesome! Entering now!" },
    { name: "Olivia Anderson", comment: "Fingers crossed! Good luck all! 🌟" },
  ];

  return mockData.map((item, i) => ({
    id: `${platform}-comment-${i}`,
    user: item.name,
    text: item.comment,
    username: item.name.toLowerCase().replace(" ", "_"),
  }));
}

// Helper: Random selection
function pickRandomWinners(comments, numWinners) {
  const validNum = Math.max(1, Math.min(numWinners, comments.length));
  const shuffled = [...comments].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, validNum);
}

// Helper: Extract Tweet ID from URL
function extractTweetId(url) {
  const match = url.match(/status\/(\d+)/);
  return match ? match[1] : null;
}

// Initialize Twitter Client (with better error handling)
let twitterClient = null;
try {
  if (process.env.TWITTER_API_KEY && process.env.TWITTER_API_SECRET) {
    twitterClient = new TwitterApi({
      appKey: process.env.TWITTER_API_KEY,
      appSecret: process.env.TWITTER_API_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_SECRET,
    });
  } else if (process.env.TWITTER_BEARER_TOKEN) {
    twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
  }
} catch (error) {
  console.warn("⚠️ Twitter API not configured. Using mock data for Twitter.");
}

// Helper: Fetch Twitter replies with better error handling
async function fetchTwitterComments(tweetId) {
  if (!twitterClient) {
    throw new Error("Twitter API not configured");
  }

  try {
    const readOnlyClient = twitterClient.readOnly;

    // Get the original tweet first
    const tweet = await readOnlyClient.v2.singleTweet(tweetId, {
      "tweet.fields": ["conversation_id", "author_id"],
    });

    const conversationId = tweet.data.conversation_id;

    // Search for replies in the conversation
    const searchResults = await readOnlyClient.v2.search({
      query: `conversation_id:${conversationId}`,
      max_results: 100,
      "tweet.fields": ["author_id", "created_at", "text"],
      "user.fields": ["name", "username"],
      expansions: ["author_id"],
    });

    // Format the results
    const comments = [];

    for await (const tweet of searchResults.tweets) {
      // Skip the original tweet
      if (tweet.id === tweetId) continue;

      const author = searchResults.includes.users?.find(
        (user) => user.id === tweet.author_id
      );

      comments.push({
        id: tweet.id,
        user: author ? `${author.name} (@${author.username})` : "Unknown User",
        text: tweet.text,
        username: author?.username || "unknown",
      });
    }

    return comments;
  } catch (error) {
    console.error("Twitter API Error:", error);
    throw error;
  }
}

// TWITTER ROUTE with fallback to mock data
app.get("/api/twitter/comments", async (req, res) => {
  const { postUrl, winners } = req.query;

  try {
    // Validate inputs
    if (!postUrl || postUrl.trim() === "") {
      return res.status(400).json({ error: "Tweet URL is required" });
    }

    const numWinners = parseInt(winners) || 1;
    if (numWinners < 1) {
      return res.status(400).json({ error: "Winners must be at least 1" });
    }

    // Extract tweet ID
    const tweetId = extractTweetId(postUrl);
    if (!tweetId) {
      return res.status(400).json({
        error:
          "Invalid Twitter URL. Please use format: https://twitter.com/user/status/123456",
      });
    }

    // Try to fetch real comments, fallback to mock if API unavailable
    let comments;
    let usingMockData = false;

    if (twitterClient) {
      try {
        comments = await fetchTwitterComments(tweetId);
      } catch (apiError) {
        console.warn(
          "⚠️ Twitter API error, falling back to mock data:",
          apiError.message
        );
        comments = generateMockComments("twitter");
        usingMockData = true;
      }
    } else {
      console.warn("⚠️ Twitter API not configured, using mock data");
      comments = generateMockComments("twitter");
      usingMockData = true;
    }

    if (comments.length === 0 && !usingMockData) {
      return res.json({
        platform: "twitter",
        postUrl,
        winners: [],
        message:
          "No comments found on this tweet. Make sure it's a public tweet with replies.",
      });
    }

    // Pick random winners
    const selectedWinners = pickRandomWinners(comments, numWinners);

    res.json({
      platform: "twitter",
      postUrl,
      totalComments: comments.length,
      winners: selectedWinners,
      usingMockData, // Let frontend know if we're using mock data
    });
  } catch (error) {
    console.error("Error in Twitter route:", error);

    // Fallback to mock data on any error
    const comments = generateMockComments("twitter");
    const selectedWinners = pickRandomWinners(comments, parseInt(winners) || 1);

    res.json({
      platform: "twitter",
      postUrl,
      totalComments: comments.length,
      winners: selectedWinners,
      usingMockData: true,
      warning: "Using mock data due to API limitations",
    });
  }
});

// OTHER PLATFORMS (Still using mock data)
["facebook", "instagram", "tiktok"].forEach((platform) => {
  app.get(`/api/${platform}/comments`, (req, res) => {
    const { postUrl, winners } = req.query;
    const comments = generateMockComments(platform);
    const result = pickRandomWinners(comments, parseInt(winners || 1));
    res.json({ platform, postUrl, winners: result });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  if (!twitterClient) {
    console.log("⚠️ Twitter API not configured - using mock data for Twitter");
  } else {
    console.log("✅ Twitter API configured successfully");
  }
});
