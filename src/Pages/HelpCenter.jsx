import React from "react";

function HelpCenter() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Help Center</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the SimRox Help Center. Find answers to common questions, learn how to apply for loans, and contact support if you need help.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Section 1 */}
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-xl font-semibold mb-3">How to Apply for a Loan?</h2>
            <p className="text-gray-600">
              You can apply for a loan online by filling the application form, uploading required documents, and completing verification.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-xl font-semibold mb-3">Track Your Application</h2>
            <p className="text-gray-600">
              Use your application number to track loan status. Updates will also be sent via SMS and Email.
            </p>
          </div>

          {/* Section 3 */}
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-xl font-semibold mb-3">Loan Repayment</h2>
            <p className="text-gray-600">
              Repay your loan using NetBanking, UPI, or Auto-Debit from your bank account.
            </p>
          </div>

          {/* Section 4 */}
          <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
            <h2 className="text-xl font-semibold mb-3">Need More Help?</h2>
            <p className="text-gray-600">
              Contact our support team via the Contact Us page or call our helpline: <strong>8696-624-101</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
