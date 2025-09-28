import React from 'react'

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header placeholder */}
      <header className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto text-xl font-bold">Loan Website</div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="space-y-4 text-gray-700">
          <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website and use our loan services.</p>

          <h2 className="text-2xl font-semibold mt-4">Information We Collect:</h2>
          <ul className="list-disc list-inside">
            <li>Personal information (Name, Email, Phone Number, Address)</li>
            <li>Financial information related to loan applications</li>
            <li>Usage data, such as pages visited and interactions</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-4">How We Use Your Information:</h2>
          <ul className="list-disc list-inside">
            <li>To process your loan applications</li>
            <li>To communicate with you regarding your loans</li>
            <li>To improve our services and website experience</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-4">Data Sharing:</h2>
          <p>We do not sell your personal data. We may share your information with:</p>
          <ul className="list-disc list-inside">
            <li>Financial institutions for loan processing</li>
            <li>Service providers who help us operate our website</li>
            <li>Legal authorities as required by law</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-4">Cookies:</h2>
          <p>We use cookies to enhance user experience, analyze site traffic, and improve website functionality.</p>

          <h2 className="text-2xl font-semibold mt-4">Security:</h2>
          <p>We implement appropriate security measures to protect your information against unauthorized access or disclosure.</p>

          <h2 className="text-2xl font-semibold mt-4">Your Rights:</h2>
          <p>You can request access to, correction, or deletion of your personal information. You may also unsubscribe from our communications at any time.</p>

          <h2 className="text-2xl font-semibold mt-4">Contact Us:</h2>
          <p>
            For any privacy concerns or questions, contact us at:<br />
            Email: <a href="mailto:info@simroxfinance.com" className="text-blue-600">info@simroxfinance.com</a><br />
            Phone: +91-8696624101
          </p>
        </section>
      </main>

      {/* Footer placeholder */}
      <footer className="bg-white shadow-inner p-4 text-center text-gray-600">
        © 2025 Loan Website. All rights reserved.
      </footer>
    </div>
  )
}

export default Privacy