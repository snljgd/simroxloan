import React, { useState } from "react";

export default function Disclaimer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const sections = [
    {
      title: "General Disclaimer",
      body:
        "The information provided is for general informational purposes only and should not be taken as financial, legal, or professional advice. Loan eligibility, interest rates, repayment terms, and fees are subject to lender review and may change without notice.",
    },
    {
      title: "No Offer or Contract",
      body:
        "This website does not constitute an offer to lend. Any loan application is subject to the lender's credit approval process and formal agreement in writing.",
    },
    {
      title: "Accuracy of Information",
      body:
        "We make reasonable efforts to keep information accurate, but do not guarantee its completeness or reliability. Users should confirm details with the lender before making financial decisions.",
    },
    {
      title: "Third-Party Links",
      body:
        "This site may include references or links to third-party sites. We are not responsible for their content, accuracy, or practices, and inclusion does not imply endorsement.",
    },
    {
      title: "Rates, Fees & Charges",
      body:
        "Any displayed loan rates, fees, or charges are indicative only. Final applicable terms are determined by the lender after assessing the applicant's creditworthiness and other criteria.",
    },
    {
      title: "Limitation of Liability",
      body:
        "We disclaim all liability for any direct, indirect, incidental, or consequential damages arising from the use of this site or reliance on its content, to the fullest extent allowed by law.",
    },
    {
      title: "Privacy & Data",
      body:
        "Your information is handled as described in our Privacy Policy. Please avoid sharing sensitive details unless requested on secured channels.",
    },
    {
      title: "Governing Law",
      body:
        "This disclaimer is governed by the laws of the jurisdiction where our company operates. All disputes will fall under the exclusive jurisdiction of the respective courts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 p-6 md:p-12">
      <header className="max-w-5xl mx-auto mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700">Loan Disclaimer</h1>
        <p className="text-base text-slate-600 mt-3">
          Please review this important legal information before using our loan services.
        </p>
      </header>

      <main className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-slate-100">
        <section className="prose prose-slate max-w-none mb-6">
          <p>
            By accessing or using our website/app, you acknowledge that you have read, understood, and agree to the terms
            outlined below. This page is designed to protect both you as a customer and us as a service provider.
          </p>
        </section>

        <section>
          <div className="space-y-4">
            {sections.map((s, i) => (
              <article
                key={i}
                className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-4 py-3 md:px-6 md:py-4 flex items-center justify-between focus:outline-none bg-slate-50 hover:bg-slate-100"
                  aria-expanded={openIndex === i}
                >
                  <div>
                    <h3 className="text-md font-semibold text-slate-800">{s.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 hidden md:block">Click to view details</p>
                  </div>
                  <div className="ml-4">
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`px-4 md:px-6 pb-4 transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                    openIndex === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-slate-700 pt-2 leading-relaxed">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t pt-6">
          <h4 className="text-lg font-semibold text-slate-800">Contact & Queries</h4>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            For legal concerns, email us at
            <a href="mailto:legal@yourloancompany.com" className="text-indigo-600 hover:underline ml-1">legal@yourloancompany.com</a>.
            For customer service inquiries, reach us at
            <a href="mailto:support@yourloancompany.com" className="text-indigo-600 hover:underline ml-1">support@yourloancompany.com</a>.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/privacy-policy"
              className="inline-block px-5 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="inline-block px-5 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-50"
            >
              Terms & Conditions
            </a>
          </div>
        </section>

        <section className="mt-8 text-xs text-slate-500 text-center">
          <p>
            Last updated: <time dateTime={new Date().toISOString().split("T")[0]}>{new Date().toLocaleDateString()}</time>
          </p>
        </section>

        
      </main>

      <footer className="max-w-5xl mx-auto mt-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Your Loan Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
