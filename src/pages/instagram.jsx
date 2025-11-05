import React, { useState } from "react";
import NavBar from "../components/navBar";

export default function Instagram() {
  const [openIndex, setOpenIndex] = useState(null);

  const [link, setLink] = useState("");

  const handleFetch = (e) => {
    e.preventDefault();
    if (link.trim() === "") {
      alert("Please enter an Instagram post link");
    } else {
      alert(`Fetching data for: ${link}`);
    }
  };

  const faqs = [
    {
      q: "What does the Instagram Giveaway Tool do?",
      a: "This tool extracts comments from a public Instagram post and allows you to randomly select winners for your giveaways.",
    },
    {
      q: "Do I need to log in with my Instagram account?",
      a: "No. LuckyPick does not require or store any login credentials. Simply paste the public Instagram post link to proceed.",
    },
    {
      q: "Are the extracted comments stored or shared?",
      a: "Absolutely not. Comments are processed temporarily to select winners and are never stored on our servers.",
    },
    {
      q: "Can I use this tool for private Instagram posts?",
      a: "No. Only public Instagram posts can be used, since Instagram limits access to private content for security and privacy reasons.",
    },
    {
      q: "Is this tool affiliated with Instagram?",
      a: "No. LuckyPick is an independent platform and is not connected to Instagram, Meta, or any of its subsidiaries.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          Instagram Giveaway Tool
        </h2>
        <p className="text-gray-500 mt-1">
          Extract and Select Random Giveaway Winners from Instagram
        </p>
      </section>

      {/* Input Section */}
      <form
        onSubmit={handleFetch}
        className="flex w-full max-w-2xl bg-white rounded-md overflow-hidden shadow-md border border-gray-200"
      >
        <input
          type="text"
          value={link}
          placeholder="Enter Instagram link only..."
          onChange={(e) => setLink(e.target.value)}
          className="flex-1 px-4 py-3 outline-none text-gray-700"
        />
        <button
          type="submit"
          className="bg-[#2d3e50] hover:bg-[#1c2938] text-white font-medium px-6 flex items-center space-x-2 cursor-pointer"
        >
          Proceed
        </button>
      </form>

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
            any way with Instagram or the Meta Platforms, Inc. brand.
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
