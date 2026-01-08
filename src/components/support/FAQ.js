import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const faqData = [
    {
      q: "How do I track my order?",
      a: "Go to the 'Orders' section and click on the tracking link for real-time updates.",
    },
    {
      q: "What if my order is delayed?",
      a: "If your delivery is delayed, you may contact support or request a refund depending on the situation.",
    },
    {
      q: "How do I reset my password?",
      a: "Navigate to the Login page → click 'Forgot Password' → follow the reset steps.",
    },
    {
      q: "How do I request a refund?",
      a: "Refunds can be requested within 24 hours of delivery through the 'Help Center'.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-5">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-4 px-6 text-left text-lg font-semibold text-gray-800"
              >
                {item.q}
                <i
                  className={`fa-solid fa-chevron-${
                    openIndex === i ? "up" : "down"
                  } text-gray-500`}
                ></i>
              </button>

              {openIndex === i && (
                <p className="px-6 pb-4 text-gray-600">{item.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
