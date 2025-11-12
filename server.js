import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Helper: Mock comments
function generateMockComments(platform) {
  const names = [
    "John Doe",
    "Mary Smith",
    "Ada Lovelace",
    "James Bond",
    "Amara Obi",
    "Tony Stark",
    "Bruce Wayne",
    "Jane Doe",
    "Peter Parker",
    "Natasha Romanoff",
  ];
  return names.map((name, index) => ({
    id: `${platform}-comment-${index}`,
    user: name,
    text: `This is a ${platform} comment from ${name}`,
  }));
}

// Helper: Random selection
function pickRandomWinners(comments, numWinners) {
  const validNum = Math.max(1, Math.min(numWinners, comments.length));
  const shuffled = [...comments].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, validNum);
}

// Routes for all platforms
["facebook", "twitter", "instagram", "tiktok"].forEach((platform) => {
  app.get(`/api/${platform}/comments`, (req, res) => {
    const { postUrl, winners } = req.query;
    const numWinners = parseInt(winners) || 1;

    if (numWinners < 1) {
      return res.status(400).json({ error: "Winners must be at least 1" });
    }

    const comments = generateMockComments(platform);
    const result = pickRandomWinners(comments, numWinners);
    res.json({ platform, postUrl, winners: result });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
