export default function Faq() {
  return (
    <section className="py-14 px-6 md:px-12 bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Frequently Asked Questions
      </h2>

      <h3 className="mt-6 text-lg font-medium text-gray-800">
        What random method does Lucky Pick use?
      </h3>
      <p className="mt-2 text-gray-600 max-w-4xl leading-relaxed">
        Lucky Pick uses two super-reliable methods for generating randomness:
        (1) True random numbers powered by special hardware (for that real “luck
        of the draw” feel). (2) A secure GUID-based algorithm that runs on our
        servers for lightning-fast results. Either way, your winners are always
        chosen fairly and transparently.
      </p>

      <h3 className="mt-6 text-lg font-medium text-gray-800">
        How is Lucky Pick different from other giveaway apps?
      </h3>
      <p className="mt-2 text-gray-600 max-w-4xl leading-relaxed">
        We don’t just pick names - we build trust. Lucky Pick is made for
        creators and brands who want transparency and credibility in every
        giveaway. Each draw includes built-in checks to prove the results were
        100% random and unbiased.
      </p>

      <h3 className="mt-6 text-lg font-medium text-gray-800">
        Do I need to install Lucky Pick on my computer?
      </h3>
      <p className="mt-2 text-gray-600 max-w-4xl leading-relaxed">
        Nope! Lucky Pick runs completely online - no downloads, no setup. Just
        open your browser, create a draw, and go live. We handle everything
        securely on our end so you can focus on engaging your audience.
      </p>

      <h3 className="mt-6 text-lg font-medium text-gray-800">
        Can Lucky Pick select multiple winners?
      </h3>
      <p className="mt-2 text-gray-600 max-w-4xl leading-relaxed">
        Absolutely! You can set up multiple prizes and choose how many winners
        each should have. All winners are drawn together in one smooth, verified
        round.
      </p>

      <h3 className="mt-6 text-lg font-medium text-gray-800">
        What's the difference between quick draws and live events?
      </h3>
      <p className="mt-2 text-gray-600 max-w-4xl leading-relaxed">
        Quick draws are perfect when you just need results fast - no audience,
        no animations, just instant winners and a shareable record. Live events,
        on the other hand, let you show off the excitement - ideal for streaming
        your giveaway or engaging your followers in real time.
      </p>

      <h3 className="mt-6 text-lg font-medium text-gray-800">
        What is a public record?
      </h3>
      <p className="mt-2 text-gray-600 max-w-4xl leading-relaxed">
        Every draw on Lucky Pick automatically creates a{" "}
        <strong>Public Record</strong> - a transparent summary showing when the
        draw happened, how many entries it had, and who won. You can share the
        record link on your social media or website so participants can verify
        their entry and trust the process.
      </p>
    </section>
  );
}
