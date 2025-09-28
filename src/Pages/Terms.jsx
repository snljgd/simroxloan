import React from 'react';

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header placeholder */}
      <header className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto text-xl font-bold">SimRox</div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <section className="space-y-4 text-gray-700">
          <p>Welcome to SimRox. By accessing our website or using our services, you agree to comply with the following terms:</p>

          <h2 className="text-2xl font-semibold mt-4">1. Eligibility</h2>
          <p>You must be at least 18 years old and legally able to enter into contracts.</p>

          <h2 className="text-2xl font-semibold mt-4">2. Use of Services</h2>
          <p>You agree to use our loan services for lawful purposes only. Misuse may result in account suspension.</p>

          <h2 className="text-2xl font-semibold mt-4">3. Loan Applications</h2>
          <p>All information provided during the loan application must be accurate. SimRox reserves the right to verify your information.</p>

          <h2 className="text-2xl font-semibold mt-4">4. Privacy</h2>
          <p>Your use of our services is subject to our Privacy Policy.</p>

          <h2 className="text-2xl font-semibold mt-4">5. Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and designs, is the property of SimRox and cannot be used without permission.</p>

          <h2 className="text-2xl font-semibold mt-4">6. Limitation of Liability</h2>
          <p>SimRox is not responsible for any damages arising from use of our services, except where prohibited by law.</p>

          <h2 className="text-2xl font-semibold mt-4">7. Changes to Terms</h2>
          <p>We may update these terms at any time. Updated terms will be posted on this page.</p>

          <h2 className="text-2xl font-semibold mt-4">8. Contact Us</h2>
          <p>
            For questions about these terms, contact us at:<br />
            Email: <a href="mailto:info@simrox.com" className="text-blue-600">info@simrox.com</a><br />
            Phone: +91-8696624101
          </p>
        </section>
      </main>

      {/* Footer placeholder */}
      <footer className="bg-white shadow-inner p-4 text-center text-gray-600">
        © {new Date().getFullYear()} SimRox. All rights reserved.
      </footer>
    </div>
  );
}

export default Terms;
