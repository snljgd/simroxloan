import React, { useState } from "react";
import LoanForm from "./LoanForm"; // Import your LoanForm component

function CarLoan() {
  const [showModal, setShowModal] = useState(false); // state to show/hide modal

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-green-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Car Loan in India</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Drive your dream car with attractive car loan options from top Indian banks & NBFCs.  
          Compare interest rates, eligibility, documents required, and apply with ease.
        </p>
      </section>

      {/* About Car Loan */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">What is a Car Loan?</h2>
        <p className="text-gray-700 leading-relaxed">
          A Car Loan is a secured loan provided by banks and financial institutions to help
          individuals purchase new or used cars. The car itself serves as collateral for the loan.
          Repayments are made in EMIs (Equated Monthly Instalments).
        </p>
      </section>

      {/* Eligibility */}
      <section className="py-12 px-6 bg-white shadow-md rounded-xl max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Eligibility Criteria</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Applicant must be between 21 and 65 years of age.</li>
          <li>Minimum annual income of ₹2.5 Lakhs (varies by bank).</li>
          <li>Salaried or self-employed with stable income proof.</li>
          <li>Good CIBIL score (700+ preferred).</li>
        </ul>
      </section>

      {/* Required Documents */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto mb-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Documents Required</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>Identity Proof (Aadhaar, PAN, Passport, Voter ID)</li>
          <li>Address Proof (Utility bill, Aadhaar, Passport)</li>
          <li>Income Proof (Salary slips, ITR, Form 16)</li>
          <li>Bank Statements (last 6 months)</li>
          <li>Photographs</li>
          <li>Proforma Invoice / Quotation of the Car</li>
        </ul>
      </section>

      {/* Bank Interest Rates */}
      <section className="py-12 px-6 max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">Car Loan Interest Rates (2025)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3">Bank / Institution</th>
                <th className="p-3">Interest Rate (p.a.)</th>
                <th className="p-3">Processing Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3">SBI Car Loan</td>
                <td className="p-3">8.80% - 9.40%</td>
                <td className="p-3">0.35% (Max ₹10,000)</td>
              </tr>
              <tr>
                <td className="p-3">Axis Bank Car Loan</td>
                <td className="p-3">9.00% - 10.25%</td>
                <td className="p-3">Up to ₹5,000</td>
              </tr>
              <tr>
                <td className="p-3">HDFC Bank Car Loan</td>
                <td className="p-3">8.95% - 10.50%</td>
                <td className="p-3">0.50% (Max ₹10,000)</td>
              </tr>
              <tr>
                <td className="p-3">ICICI Bank Car Loan</td>
                <td className="p-3">9.10% - 10.75%</td>
                <td className="p-3">₹5,000 - ₹10,000</td>
              </tr>
              <tr>
                <td className="p-3">Kotak Mahindra Bank</td>
                <td className="p-3">8.90% - 10.20%</td>
                <td className="p-3">Up to ₹6,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto mb-12 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. What is the maximum tenure for a car loan?</h3>
            <p className="text-gray-700">Up to 7 years depending on the bank and loan scheme.</p>
          </div>
          <div>
            <h3 className="font-semibold">2. Can I get a loan for a used car?</h3>
            <p className="text-gray-700">Yes, many banks offer loans for used/pre-owned cars.</p>
          </div>
          <div>
            <h3 className="font-semibold">3. Is prepayment allowed in car loans?</h3>
            <p className="text-gray-700">Yes, but some banks charge foreclosure/prepayment penalties.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Get Your Car Loan?</h2>
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

export default CarLoan;
