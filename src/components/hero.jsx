import { ToolCard } from "./instructions";

export default function Hero() {
  const toolCards = ToolCard();

  const toolCardElements = toolCards.map((tool, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <img
          src={tool.img}
          alt={tool.alt}
          className="w-32 h-32 leading-relaxed object-contain mix-blend-multiply"
        />
        <div className="lg:h-24">
          <h2 className="mt-4 text-lg font-bold text-gray-800">{tool.name}</h2>
          <p className="mt-2 text-sm text-gray-600 font-medium leading-relaxed">
            {tool.description}
          </p>
        </div>
        {tool.customNav}
      </div>
    );
  });

  return (
    <section className="bg-white pb-10 px-6 pt-20 md:px-12 lg:pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 leading-tight pb-2">
        Run Giveaways the Easy Way <br />{" "}
        <span className="font-medium">Facebook, X, Instagram & TikTok</span>{" "}
        <br />{" "}
        <span className="text-blue-500 font-normal">Quick, Fair & Fun!</span>
      </h1>
      <p className="max-w-3xl mx-auto text-center mt-4 text-gray-600 leading-relaxed pb-2">
        <strong>Lucky Pick</strong> takes the stress out of online giveaways!
        Just drop your post link, and we'll fetch the comments, shuffle them up,
        and pick your winners at random - fast, fair, and totally unbiased.
      </p>

      <button
        className="mt-6 mx-auto block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 cursor-pointer lg:mb-16"
        aria-label="Get started"
      >
        <a href="#explore">Get Started</a>
      </button>

      <p id="explore"></p>
      <div className="mt-8 flex flex-col items-center bg-amber-50 px-6 pt-6 pb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Explore Our Tools
        </h2>
        <p className="mt-4 text-gray-700 text-center">
          From fetching comments to picking random winners,{" "}
          <strong>Lucky Pick</strong> gives you everything you need to run fun,
          fair, and stress-free giveaways across your favorite social platforms
          - all in one place! 🚀
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {" "}
          {toolCardElements}
        </div>
      </div>
    </section>
  );
}
