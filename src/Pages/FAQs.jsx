import React, { useState } from "react";

const faqs = [
  {
    question: "What types of loans do you offer?",
    answer: "We offer Personal Loans, Home Loans, Car Loans, and Business Loans.",
  },
  {
    question: "What documents are required to apply for a loan?",
    answer: "You'll typically need identity proof, address proof, income proof, and bank statements.",
  },
  {
    question: "How long does loan approval take?",
    answer: "Approval usually takes 24-48 hours once documents are verified.",
  },
  {
    question: "Can I prepay my loan?",
    answer: "Yes, you can prepay your loan anytime. Prepayment charges may apply.",
  },
  {
    question: "How do I calculate my EMI?",
    answer: "You can use our Loan Calculator tool to estimate your monthly EMI based on loan amount, tenure, and interest rate.",
  },
  {
    question: "What happens if I miss an EMI payment?",
    answer: "Missing payments may attract late fees and affect your CIBIL score.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Placeholder */}
      <header className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto text-xl font-bold">SimRox</div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-sm">
              <button
                className="w-full text-left px-4 py-3 font-medium text-gray-800 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer Placeholder */}
      <footer className="bg-white shadow-inner p-4 text-center text-gray-600">
        © {new Date().getFullYear()} SimRox. All rights reserved.
      </footer>
    </div>
  );
}

export default FAQs;
