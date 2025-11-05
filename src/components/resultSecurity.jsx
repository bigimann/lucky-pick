import { ResultCard, SecurityCard } from "./instructions";

export default function ResultSecurity() {
  const resultCards = ResultCard();
  const securityCards = SecurityCard();

  const resultsCardElements = resultCards.map((intro, index) => {
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

  const securityCardElements = securityCards.map((intro, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
      >
        <div className="text-red-700">{intro.logo}</div>
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
    <>
      {/* <section className="py-14 px-6 md:px-12 bg-white">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          What Happens After You Draw?
        </h2>
        <p className="max-w-3xl mx-auto text-center mt-4 text-gray-600 leading-relaxed">
          Once the draw is done, Lucky Pick instantly shows your winners and
          keeps a record of the results. You'll get a clean, shareable summary
          you can post on your social media - keeping your giveaway 100%
          transparent and fair for everyone.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resultsCardElements}
        </div>
      </section> */}

      <section className="py-14 pt-2 px-6 md:px-12 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Fairness You Can Trust
        </h2>
        <p className="max-w-3xl mx-auto text-center mt-4 text-gray-600 leading-relaxed">
          Lucky Pick is built to keep things honest - every draw is completely
          random and free from human bias. Our system quietly checks for
          suspicious activity, so your followers can trust that every win is
          100% fair and transparent.
        </p>

        <button className="mt-6 block mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-white px-6 py-2 rounded-lg cursor-pointer">
          Learn more
        </button>
        {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {securityCardElements}
        </div> */}
      </section>

      <section className="py-14 px-6 md:px-12 bg-white">
        <h2 className="text-2xl font-semibold text-gray-900">
          Different Ways to Pick Your Winners
        </h2>
        <p className="mt-4 text-gray-600 max-w-4xl leading-relaxed">
          Every giveaway is unique, so Lucky Pick lets you choose how you want
          your winners selected - from one lucky fan to multiple prize tiers.
        </p>
        <p className="mt-2 text-gray-600">
          You can easily pick one or multiple winners at once.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-gray-800">
          Classic Random Draw
        </h3>
        <p className="mt-2 text-gray-600 max-w-4xl leading-relaxed">
          This is the go-to option for most creators. Lucky Pick randomly
          selects winners from all valid participants, giving everyone an equal
          shot at the prize - no bias, no repeats, just pure luck!
        </p>
      </section>
    </>
  );
}
