import React, { useState } from "react";
import LoanForm from "./LoanForm";

function BusinessLoan() {

  const [showModal , setShowModal] = useState(false);
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Loan in India</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Expand and grow your business with flexible business loan options from top Indian banks & NBFCs.  
          Check eligibility, documents required, interest rates, and apply easily.
        </p>
      </section>

      {/* About Business Loan */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">What is a Business Loan?</h2>
        <p className="text-gray-700 leading-relaxed">
          A Business Loan is a type of unsecured or secured financing provided by banks and financial institutions to entrepreneurs and businesses. 
          It helps in meeting working capital requirements, expansion, purchasing machinery, or covering operational expenses.
        </p>
      </section>

      {/* Eligibility */}
      <section className="py-12 px-6 bg-white shadow-md rounded-xl max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Eligibility Criteria</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Applicant age between 21 and 65 years.</li>
          <li>Business must be operational for at least 2-3 years.</li>
          <li>Minimum annual turnover: ₹10 Lakhs – ₹40 Lakhs (varies by bank).</li>
          <li>Good CIBIL Score (700+ preferred).</li>
          <li>Business registration documents must be available.</li>
        </ul>
      </section>

      {/* Required Documents */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto mb-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Documents Required</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>KYC Documents (Aadhaar, PAN, Passport)</li>
          <li>Business Proof (GST, Shop Act, Partnership Deed, Udyam Certificate)</li>
          <li>Income Proof (ITR of last 2-3 years)</li>
          <li>Bank Statements (last 12 months)</li>
          <li>Business Balance Sheet & P&L Account</li>
          <li>Ownership proof of office/shop</li>
        </ul>
      </section>

      {/* Bank Interest Rates */}
      <section className="py-12 px-6 max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">Business Loan Interest Rates (2025)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-purple-700 text-white">
                <th className="p-3">Bank / Institution</th>
                <th className="p-3">Interest Rate (p.a.)</th>
                <th className="p-3">Loan Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3">SBI Business Loan</td>
                <td className="p-3">8.90% – 11.20%</td>
                <td className="p-3">Up to ₹20 Crores</td>
              </tr>
              <tr>
                <td className="p-3">Axis Bank Business Loan</td>
                <td className="p-3">9.25% – 12.50%</td>
                <td className="p-3">₹50,000 – ₹10 Crores</td>
              </tr>
              <tr>
                <td className="p-3">HDFC Bank Business Loan</td>
                <td className="p-3">10.00% – 14.00%</td>
                <td className="p-3">₹1 Lakh – ₹40 Lakhs</td>
              </tr>
              <tr>
                <td className="p-3">ICICI Bank Business Loan</td>
                <td className="p-3">10.50% – 15.00%</td>
                <td className="p-3">₹50,000 – ₹5 Crores</td>
              </tr>
             
              
              <tr>
                <td className="p-3">Kotak Mahindra Bank</td>
                <td className="p-3">9.75% – 12.85%</td>
                <td className="p-3">₹3 Lakhs – ₹75 Lakhs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto mb-12 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. Can I get a business loan without collateral?</h3>
            <p className="text-gray-700">Yes, unsecured business loans are available but usually at a higher interest rate.</p>
          </div>
          <div>
            <h3 className="font-semibold">2. What is the maximum tenure of a business loan?</h3>
            <p className="text-gray-700">Business loans are generally offered for 1 to 7 years depending on the institution.</p>
          </div>
          <div>
            <h3 className="font-semibold">3. Can startups apply for business loans?</h3>
            <p className="text-gray-700">Yes, some banks and NBFCs offer startup loans, but collateral or guarantor may be required.</p>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Get Your Business Loan?</h2>
        <p className="text-gray-600 mb-6">Apply now and fulfill your dreams with ease and flexibility.</p>
        <button onClick={()=> setShowModal(true)}
        className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition">
          Apply Now
        </button>
      </section>

      {showModal && <LoanForm setShowModal={setShowModal}/>}
    </div>
  );
}

export default BusinessLoan;
