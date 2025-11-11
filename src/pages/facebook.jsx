import React, { useState } from "react";
import NavBar from "../components/navBar";

export default function Facebook() {
  const [openIndex, setOpenIndex] = useState(null);

  const [link, setLink] = useState("");
  const [numWinners, setNumWinners] = useState(1);
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(false);

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Validate and fetch from backend, then set winners
  const handleFetch = async (e) => {
    e.preventDefault();

    var formError = document.getElementById("form-error");

    if (link.trim() === "") {
      formError.style.display = "block";
      formError.textContent = "Please enter a valid Facebook link";
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
        `http://localhost:5000/api/facebook/comments?${params}`,
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
      q: "What does the Facebook Giveaway Tool do?",
      a: "This tool extracts comments from a public Facebook post and allows you to randomly select winners for your giveaways.",
    },
    {
      q: "Do I need to log in with my Facebook account?",
      a: "No. LuckyPick does not require or store any login credentials. Simply paste the public Facebook post link to proceed.",
    },
    {
      q: "Are the extracted comments stored or shared?",
      a: "Absolutely not. Comments are processed temporarily to select winners and are never stored on our servers.",
    },
    {
      q: "Can I use this tool for private Facebook posts?",
      a: "No. Only public Facebook posts can be used, since Facebook limits access to private content for security and privacy reasons.",
    },
    {
      q: "Is this tool affiliated with Facebook?",
      a: "No. LuckyPick is an independent platform and is not connected to Facebook, Meta, or any of its subsidiaries.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#eef2f3] flex flex-col items-center justify-center p-6">
      {/* NavBar*/}
      <NavBar />

      {/* Hero Section */}
      <section className="text-center mb-10 mt-16">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <h1 className="text-3xl font-semibold text-gray-800">
            <span className="text-blue-400">LUCKYPICK</span>.com
          </h1>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700">
          Facebook Giveaway Tool
        </h2>
        <p className="text-gray-500 mt-1">
          Extract and Select Random Giveaway Winners from Facebook
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
        className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-md overflow-hidden shadow-md border border-gray-200 p-4 gap-3"
      >
        <input
          type="text"
          value={link}
          placeholder="Enter Facebook Link Only..."
          onChange={(e) => setLink(e.target.value)}
          className="flex-1 px-4 py-3 outline-none text-gray-700 border border-gray-300 rounded"
        />

        <label className="text-black flex gap-2 items-center" htmlFor="winners">
          No. of Winners:
          <input
            type="number"
            value={numWinners}
            min="1"
            onChange={(e) => setNumWinners(e.target.value)}
            className="w-32 px-4 py-2 border border-gray-300 rounded text-gray-700"
            placeholder="Winners"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded transition cursor-pointer"
          disabled={loading}
        >
          {loading ? "Picking..." : "Pick Winners"}
        </button>
      </form>

      {/* Winners display */}
      {winners.length > 0 && (
        <div className="mt-6 bg-white shadow-md rounded-md p-4 w-full max-w-4xl text-center">
          <h3 className="font-semibold mb-2 text-black">🎉 Lucky Winners 🎉</h3>
          <ul className="text-gray-700">
            {winners.map((w, i) => (
              <li key={i} className="py-1">
                {typeof w === "string" ? (
                  w
                ) : (
                  // If backend returns objects e.g. { id, user, text } show nice formatting
                  <span>
                    <strong>
                      {w.user ??
                        w.username ??
                        w.from?.name ??
                        `Winner ${i + 1}`}
                    </strong>
                    {w.text ? ` - ${w.text}` : ""}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* FAQ Section */}
      <section className="w-full max-w-4xl mt-16 border-1 border-blue-400 rounded-sm">
        <h2 className="text-xl font-bold mb-6 text-white text-left bg-blue-400 p-2 pl-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 px-6 pb-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg border border-gray-300 "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-gray-800 bg-gray-300 border-gray-300 hover:bg-gray-200 transition cursor-pointer"
              >
                <span>{`${index + 1}. ${faq.q}`}</span>
                <span className="text-blue-600 text-xl font-bold cursor-pointer">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 text-gray-600 border-t text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section
        id="disclaimer"
        className="w-full max-w-4xl mt-16 mb-10 p-4 text-center text-sm text-black leading-relaxed bg-gray-200"
      >
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Disclaimer</h2>
        <p className="">
          LuckyPick does not keep any record of user information on its servers.
          All comments extracted on this platform are not stored. <br />{" "}
          <span className="font-bold">
            LuckyPick is a social media utility service and is not associated in
            any way with Facebook or the Meta Platforms, Inc. brand.
          </span>
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-100 pt-4 border-t text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LuckyPick.com - All Rights Reserved
      </footer>
    </div>
  );
}
