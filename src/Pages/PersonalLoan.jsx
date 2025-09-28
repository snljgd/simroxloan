import React, { useState } from "react";
import LoanForm from "./LoanForm"; // Import your LoanForm component
import loanimg from "../assets/Images/loan.png"

function PersonalLoan() {
  const [showModal, setShowModal] = useState(false); // state to show/hide modal

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Personal Loans to Achieve Your Dreams
            </h1>
            <p className="text-gray-700 mb-6">
              Get instant personal loans with low interest rates, flexible tenure, and minimal documentation. Apply online and get approved quickly.
            </p>
            
          </div>
          <div className="md:w-1/2 flex justify-center ">
            <img src={loanimg} alt="Personal Loan" className="w-80 h-auto rounded-2xl shadow-lg shadow-green-500/50" />

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Our Personal Loans?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Quick Approval</h3>
            <p className="text-gray-600">Get your loan approved within 24-48 hours after document submission.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Flexible EMI Options</h3>
            <p className="text-gray-600">Choose a repayment plan that suits your budget and lifestyle.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Minimal Documentation</h3>
            <p className="text-gray-600">Apply with just basic KYC documents and bank statements.</p>
          </div>
        </div>
      </section>

      {/* Steps to Apply Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How to Apply?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-3">1. Fill Application</h3>
              <p className="text-gray-600">Complete the online application form with your details.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-3">2. Submit Documents</h3>
              <p className="text-gray-600">Upload KYC documents and bank statements for verification.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold mb-3">3. Get Approved</h3>
              <p className="text-gray-600">Receive instant approval and disbursement to your bank account.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Get Your Personal Loan?</h2>
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

export default PersonalLoan;
