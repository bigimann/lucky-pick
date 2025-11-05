import { IntroCard } from "./instructions";

export default function HowTo() {
  const introCards = IntroCard();

  const introCardElements = introCards.map((intro, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div className="text-blue-700">{intro.logo}</div>
        <h2 className="mt-4 text-lg font-semibold text-gray-800">
          {intro.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {intro.description}
        </p>
      </div>
    );
  });

  return (
    <section className="py-14 px-6 md:px-12 bg-gray-50">
      <h2 className="text-2xl font-semibold text-center text-gray-900">
        How Lucky Pick Works
      </h2>
      <p className="max-w-4xl mx-auto text-center mt-4 text-gray-600 leading-relaxed">
        Lucky Pick makes social media giveaways simple and fair. Just paste your
        post link, fetch all the comments, and let our tool randomly select your
        winners - no stress, no bias, just pure luck! Whether it's for Facebook,
        X, Instagram, or TikTok, you can host giveaways that your audience will
        trust and enjoy.
      </p>

      {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {introCardElements}
      </div> */}

      <p className="max-w-4xl mx-auto mt-8 text-gray-600 leading-relaxed">
        Lucky Pick is built to make giveaways fun, flexible, and completely fair
        — no matter the size. Whether you're giving away a few gift cards or
        hundreds of prizes, our system can handle it with ease. You can
        customize the number of winners and prizes however you like, and our
        random selection ensures every participant gets a fair shot.
      </p>

      {/* <p className="max-w-4xl mx-auto mt-4 text-gray-600 leading-relaxed">
        Want to test things first? You can run as many demo draws as you like
        before going live — perfect for learning how Lucky Pick works or showing
        transparency to your followers during a livestream.
      </p> */}

      <p className="max-w-4xl mx-auto mt-4 text-sm text-gray-500">
        <small>
          *Lucky Pick is meant for social media giveaways — not for gambling,
          lotteries, or any regulated games of chance. Please make sure your
          promotions follow the rules in your region.
        </small>
      </p>

      <div className="mt-8 max-w-4xl mx-auto text-center bg-blue-50 p-10">
        <p className="text-gray-700 font-medium">
          Ready to see how it works? <br /> Take a quick tour and watch Lucky
          Pick in action!
        </p>
        <button className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-white px-5 py-2 rounded-lg cursor-pointer">
          Random Name Picker
        </button>
      </div>
    </section>
  );
}
