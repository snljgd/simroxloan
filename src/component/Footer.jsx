import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo3.png'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaTwitter } from 'react-icons/fa'; // ✅ icons import

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-green-500 to-blue-600 text-white mt-0">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand / About */}
        <div>
          <img
            src={logo}
            alt="SimRox Logo"
            className="h-21 w-60"
          />
          <p className="mt-4 text-sm">
            Your trusted partner in personal, home, and business loans.
            Helping you achieve financial freedom with flexible EMI plans.
            <br />
            <br />

            SimRox loan office, Tiyagi Market,
            Rathori kuwa Sharda bal school road,
            Nagaur 341001, Rajasthan
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><Link to="/personal" className="hover:text-green-300 transition">Personal Loan</Link></li>
            <li><Link to="/Homeloan" className="hover:text-green-300 transition">Home Loan</Link></li>
            <li><Link to="/Carloan" className="hover:text-green-300 transition">Car Loan</Link></li>
            <li><Link to="/Businessloan" className="hover:text-green-300 transition">Business Loan</Link></li>
            <li><Link to="/MutualFund" className="hover:text-green-300 transition"> MutualFund</Link> </li>
            <li><Link to="/Insurance" className="hover:text-green-300 transition"> Insurance</Link> </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/helpcenter" className="hover:text-green-300 transition">Help Center</Link></li>
            <li><Link to="/faqs" className="hover:text-green-300 transition">FAQs</Link></li>
            <li><Link to="/LoanCalculator" className="hover:text-green-300 transition">Loan Calculator</Link></li>
            <li><Link to="/SipCalculator" className='hover:text-green-300 transition'> SIP Calculator</Link> </li>
            <li><Link to="/contact" className="hover:text-green-300 transition">Contact Us</Link></li>

            <a
              href="https://myscore.cibil.com/CreditView/enrollShort_new.page?enterprise=CIBIL&offer=FACRA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              CIBIL Score
            </a>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:text-green-300 transition">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-green-300 transition">Privacy Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-green-300 transition">Disclaimer</Link></li>
            <li> <Link to="/blogs" className='hover:text-green-300 transition' > Blogs</Link> </li>
          </ul>


          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-4">
            {/* Facebook */}
            <a
              href="https://facebook.com/simrox"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-10 h-10 flex items-center justify-center rounded-full
              bg-gradient-to-r from-blue-500 to-blue-700
             hover:from-blue-600 hover:to-blue-800
              shadow-lg hover:shadow-xl
            transform hover:scale-110
            transition-all duration-300
            "
            >
              <FaFacebookF className="text-white w-4 h-4" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/simroxloans_/"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-10 h-10 flex items-center justify-center rounded-full
      bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400
      hover:from-pink-600 hover:via-purple-600 hover:to-yellow-500
      shadow-lg hover:shadow-xl
      transform hover:scale-110
      transition-all duration-300
    "
            >
              <FaInstagram className="text-white w-4 h-4" />
            </a>
            {/* youtube */}

            <a
              href="https://youtube.com/@Simroxlaons"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-10 h-10 flex items-center justify-center rounded-full
      bg-gradient-to-r from-red-500 to-red-700
      hover:from-red-600 hover:to-red-800
      shadow-lg hover:shadow-xl
      transform hover:scale-110
      transition-all duration-300
    "
            >
              <FaYoutube className="text-white w-4 h-4" />
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/simroxloans"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-10 h-10 flex items-center justify-center rounded-full
      bg-gradient-to-r from-gray-800 to-black
      hover:from-gray-700 hover:to-gray-900
      shadow-lg hover:shadow-xl
      transform hover:scale-110
      transition-all duration-300
    ">
              <FaTwitter className="text-white w-4 h-4" />
            </a>



            {/* WhatsApp */}
            <a
              href="https://wa.me/8696624101"
              target="_blank"
              rel="noopener noreferrer"
              className="
      w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 shadow-lg hover:shadow-xltransform hover:scale-110transition-all duration-300
    "
            >
              <FaWhatsapp className="text-white w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-300/40 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} SimRox Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
