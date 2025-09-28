// src/pages/EducationLoan.jsx
import React from "react";

export default function EducationLoan() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white h-64 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold">Education Loan</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          Secure Your Future with Easy Education Loans
        </h2>
        <p className="text-gray-700 mb-4">
          Our Education Loans help you fund your higher education without financial stress. Whether you want to study in India or abroad, we provide flexible repayment options and competitive interest rates.
        </p>
        <p className="text-gray-700 mb-4">
          Key Benefits:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Quick and easy loan approval process</li>
          <li>Minimal documentation required</li>
          <li>Flexible repayment plans up to 10 years</li>
          <li>Loans available for domestic and international education</li>
          <li>Tax benefits under Section 80E (India)</li>
        </ul>

        {/* Apply Now Button */}
        <div className="mt-6">
          <a
            href="/apply-education-loan"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white py-12 mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">Eligibility Criteria</h3>
          <p className="text-gray-700">
            - Indian citizen or NRI students pursuing higher education.<br />
            - Admission confirmation from a recognized college/university.<br />
            - Age limit: 18 - 35 years at the time of loan application.
          </p>
        </div>
      </div>
    </div>
  );
}
