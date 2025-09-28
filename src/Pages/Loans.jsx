import React from "react";

function Loans() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-700 mb-12">
          Our Loan Services
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          We offer a wide range of loan products tailored to meet your financial needs. 
          Explore our different loan types below and choose the one that suits you best.
        </p>

        {/* Home Loan Section */}
        <div className="mb-12 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">🏠 Home Loan</h2>
          <p className="text-gray-600 mb-3">
            Fulfill your dream of owning a house with our affordable home loan options.
            We provide flexible repayment terms and competitive interest rates.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Low interest rates starting from 7.5%</li>
            <li>Repayment tenure up to 30 years</li>
            <li>Tax benefits under Section 80C</li>
          </ul>
        </div>

        {/* Personal Loan Section */}
        <div className="mb-12 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">💳 Personal Loan</h2>
          <p className="text-gray-600 mb-3">
            Whether it’s for a wedding, medical emergency, or travel, our personal loan 
            provides quick access to funds without collateral.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Loan amount up to ₹25 Lakhs</li>
            <li>Fast approval and disbursal</li>
            <li>No collateral required</li>
          </ul>
        </div>

        {/* Car Loan Section */}
        <div className="mb-12 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">🚗 Car Loan</h2>
          <p className="text-gray-600 mb-3">
            Drive your dream car with our easy car loan options. Affordable EMIs and quick approvals 
            make it easier than ever.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Loan up to 90% of car value</li>
            <li>Flexible EMI plans</li>
            <li>Instant loan approval for select customers</li>
          </ul>
        </div>

        {/* Business Loan Section */}
        <div className="mb-12 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">🏢 Business Loan</h2>
          <p className="text-gray-600 mb-3">
            Expand your business with our specially designed business loans. 
            We support small and medium enterprises with flexible funding solutions.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Loan up to ₹50 Lakhs</li>
            <li>Collateral-free loan options</li>
            <li>Quick processing and minimal documentation</li>
          </ul>
        </div>

        {/* Education Loan Section */}
        <div className="mb-12 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">🎓 Education Loan</h2>
          <p className="text-gray-600 mb-3">
            Invest in your future with our education loan schemes. Get financial assistance 
            for higher studies in India or abroad.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Coverage of tuition fees, hostel fees & other expenses</li>
            <li>Loan up to ₹20 Lakhs</li>
            <li>Easy repayment after course completion</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Loans;
