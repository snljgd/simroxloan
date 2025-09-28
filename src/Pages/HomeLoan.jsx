import React, { useState } from "react";
import LoanForm from "./LoanForm"; // Import your LoanForm component

function HomeLoan() {
  const [showModal, setShowModal] = useState(false); // state to show/hide modal

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Loan in India</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Own your dream home with affordable home loan options from top banks in India.
          Compare interest rates, eligibility, documents required, and apply easily.
        </p>
      </section>

      {/* About Home Loan */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">What is a Home Loan?</h2>
        <p className="text-gray-700 leading-relaxed">
          A Home Loan is a secured loan offered by banks and financial institutions to help you purchase,
          construct, or renovate your house. The loan amount is repaid through EMIs (Equated Monthly Instalments).
        </p>
      </section>

      {/* Eligibility */}
      <section className="py-12 px-6 bg-white shadow-md rounded-xl max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Eligibility Criteria</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Applicant must be between 21 and 60 years of age.</li>
          <li>Minimum monthly income of ₹25,000 (varies by bank).</li>
          <li>Stable employment or business proof required.</li>
          <li>Good credit score (700+ preferred).</li>
        </ul>
      </section>

      {/* Required Documents */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto mb-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Documents Required</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>Identity Proof (Aadhaar, PAN, Passport, Voter ID)</li>
          <li>Address Proof (Utility bill, Aadhaar, Passport)</li>
          <li>Income Proof (Salary slips, Form 16, ITR)</li>
          <li>Bank Statements (last 6 months)</li>
          <li>Property Documents (Sale deed, Builder agreement)</li>
          <li>Photographs</li>
        </ul>
      </section>

      {/* Bank Interest Rates */}
      <section className="py-12 px-6 max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-700">Home Loan Interest Rates (2025)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3">Bank / Institution</th>
                <th className="p-3">Interest Rate (p.a.)</th>
                <th className="p-3">Processing Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3">SBI Home Loan</td>
                <td className="p-3">8.40% - 9.50%</td>
                <td className="p-3">0.35% (Max ₹10,000)</td>
              </tr>
              <tr>
                <td className="p-3">LIC Housing Finance</td>
                <td className="p-3">8.45% - 9.60%</td>
                <td className="p-3">₹10,000 - ₹15,000</td>
              </tr>
              <tr>
                <td className="p-3">Axis Bank</td>
                <td className="p-3">8.55% - 9.65%</td>
                <td className="p-3">Up to 1% of loan amount</td>
              </tr>
              <tr>
                <td className="p-3">HDFC Ltd</td>
                <td className="p-3">8.50% - 9.70%</td>
                <td className="p-3">0.50% (Max ₹10,000)</td>
              </tr>
              <tr>
                <td className="p-3">Piramal Finance</td>
                <td className="p-3">8.75% - 10.25%</td>
                <td className="p-3">Up to 1% of loan amount</td>
              </tr>
              <tr>
                <td className="p-3">ICICI Bank</td>
                <td className="p-3">8.60% - 9.75%</td>
                <td className="p-3">0.50% (Max ₹11,000)</td>
              </tr>
              <tr>
                <td className="p-3">Kotak Mahindra Bank</td>
                <td className="p-3">8.50% - 9.60%</td>
                <td className="p-3">₹10,000 - ₹15,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto mb-12 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. What is the maximum tenure for a home loan?</h3>
            <p className="text-gray-700">Up to 30 years, depending on the bank and applicant’s age.</p>
          </div>
          <div>
            <h3 className="font-semibold">2. Can I get 90% of property value as a loan?</h3>
            <p className="text-gray-700">Most banks provide 75% - 90% of the property value depending on eligibility.</p>
          </div>
          <div>
            <h3 className="font-semibold">3. Is prepayment allowed?</h3>
            <p className="text-gray-700">Yes, most banks allow prepayment with minimal or no charges.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Get Your Home Loan?</h2>
        <p className="text-gray-600 mb-6">Apply now and fulfill your dreams with ease and flexibility.</p>
        <button
          onClick={() => setShowModal(true)} // ✅ Open modal
          className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Apply Now
        </button>
      </section>

      {/* LoanForm Modal */}
      {showModal && <LoanForm setShowModal={setShowModal} />}
    </div>
  );
}

export default HomeLoan;
