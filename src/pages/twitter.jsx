import React, { useState } from "react";
import NavBar from "../components/navBar";

export default function Twitter() {
  const [openIndex, setOpenIndex] = useState(null);
  const [link, setLink] = useState("");
  const [numWinners, setNumWinners] = useState(1);
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const handleFetch = async (e) => {
    e.preventDefault();

    var formError = document.getElementById("form-error");

    if (link.trim() === "") {
      formError.style.display = "block";
      formError.textContent = "Please enter a valid Twitter link";
      return;
    }

    const count = parseInt(numWinners, 10);
    if (Number.isNaN(count) || count <= 0) {
      formError.style.display = "block";
      formError.textContent =
        "Please enter a valid number of winners (1 or more)";
      return;
    }

    setLoading(true);
    setWinners([]);

    try {
      // Build query string for GET request
      const params = new URLSearchParams({
        postUrl: link,
        winners: count,
      });

      const res = await fetch(
        `http://localhost:5000/api/twitter/comments?${params}`,
        {
          method: "GET",
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Server responded with ${res.status}`);
      }

      const data = await res.json();
      // Expect backend to return { platform, postUrl, winners: [...] }
      setWinners(Array.isArray(data.winners) ? data.winners : []);
      formError.style.display = "none";
    } catch (error) {
      console.error("Fetch error:", error);
      formError.style.display = "block";
      formError.textContent = "Error fetching data. Please try again.";
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      question: "What does the Twitter Giveaway Tool do?",
      answer:
        "It extracts comments (replies) from a public tweet and allows random selection of winners.",
    },
    {
      question: "Do I need to log in with my Twitter account?",
      answer: "No. LuckyPick does not require or store your credentials.",
    },
    {
      question: "Are replies stored or shared?",
      answer: "No, data is processed temporarily to select winners.",
    },
    {
      question: "Can I use private tweets?",
      answer: "No, only public tweets are supported.",
    },
    {
      question: "Is LuckyPick affiliated with X?",
      answer:
        "No. LuckyPick is independent and not affiliated with X Corp or Twitter.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#eef2f3] flex flex-col items-center justify-center p-6">
      {/* NavBar*/}
      <NavBar />

      {/* Hero Section */}
      <section className="text-center mb-10 mt-16">
        <h1 className="text-3xl font-semibold text-gray-800">
          <span className="text-sky-500">LUCKYPICK</span>.com
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700">
          Twitter (X) Giveaway Tool
        </h2>
        <p className="text-gray-500 mt-1">
          Extract and Select Random Giveaway Winners from X (Twitter)
        </p>
      </section>

      {/* Form Validation Error Response */}
      <div className="bg-white w-full max-w-4xl">
        <p
          id="form-error"
          className="text-red-400 bg-slate-100 p-1.5 m-2 hidden"
        ></p>
      </div>

      {/* Input Section */}
      <form
        onSubmit={handleFetch}
        className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-md shadow-md border border-gray-200 p-4 gap-3"
      >
        <input
          type="text"
          value={link}
          placeholder="Enter Twitter/X Link Only..."
          onChange={(e) => setLink(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded text-gray-700"
        />

        <label className="text-black flex gap-2 items-center" htmlFor="winners">
          No. of Winners:
          <input
            type="number"
            min="1"
            value={numWinners}
            onChange={(e) => setNumWinners(e.target.value)}
            className="w-32 px-4 py-3 border border-gray-300 rounded text-gray-700"
            placeholder="Winners"
          />
        </label>

        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded transition cursor-pointer"
          disabled={loading}
        >
          {loading ? "Picking..." : "Pick Winners"}
        </button>
      </form>

      {/* Winners Display */}
      {winners.length > 0 && (
        <div className="mt-6 bg-white shadow-md rounded-md p-4 w-full max-w-4xl text-center">
          <h3 className="font-semibold mb-2 text-sky-600">
            🎉 Lucky Winners 🎉
          </h3>
          <ul className="text-gray-700">
            {winners.map((winner, index) => (
              <li key={index} className="py-1">
                {typeof winner === "string" ? (
                  winner
                ) : (
                  // If backend returns objects e.g. { id, user, text } show nice formatting
                  <span>
                    <strong>
                      {winner.user ??
                        winner.username ??
                        winner.from?.name ??
                        `Winner ${index + 1}`}
                    </strong>
                    {winner.text ? ` - ${winner.text}` : ""}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mt-16 border-1 border-sky-500 rounded-sm">
        <h2 className="text-xl font-bold mb-6 text-white bg-sky-500 p-2 pl-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 px-6 pb-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-sm rounded-lg border">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 font-medium text-gray-800 bg-gray-300 hover:bg-gray-200 transition cursor-pointer"
              >
                <span>{`${index + 1}. ${faq.question}`}</span>
                <span className="text-sky-600 text-xl font-bold">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 text-gray-600 border-t text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mt-16 mb-10 p-4 text-center text-sm text-black bg-gray-200">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Disclaimer</h2>
        <p>
          LuckyPick does not keep any record of user information. <br />
          <span className="font-bold">
            LuckyPick is not affiliated with Twitter or X Corp.
          </span>
        </p>
      </section>

      <footer className="w-full bg-gray-100 pt-4 border-t text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LuckyPick.com by Eneojo - All Rights
        Reserved
      </footer>
    </div>
  );
}
