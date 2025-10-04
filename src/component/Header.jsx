import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import LoanForm from '../Pages/LoanForm' // LoanForm import
import logo from '../assets/Images/logo3.png' // ✅ Correct import

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Escape key se modal close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowModal(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <header className="bg-gradient-to-r from-blue-700 via-green-500 to-blue-600 text-white shadow-lg relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="SimRox Logo"
              className="h-12 w-auto"
            />
          </Link>
          <span className="text-lg font-semibold hidden md:inline">
            Empowering Your Dreams
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-green-300 transition">Home</Link>
          <Link to="/loans" className="hover:text-green-300 transition">Loans</Link>
          <Link to="/MutualFund" className="hover:text-green-300 transition">MutualFund</Link>
          <Link to="/Insurance" className="hover:text-green-300 transition">Insurance</Link>
          <Link to="/contact" className="hover:text-green-300 transition">Contact</Link>
          <Link to="/about" className="hover:text-green-300 transition">About Us</Link>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <button
            onClick={() => setShowModal(true)} // ✅ Show LoanForm popup
            className="bg-green-400 text-blue-900 font-bold px-4 py-2 rounded-lg hover:bg-green-500 transition"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
          </button>
        </div>
      </div> {/* ✅ div properly closed */}

      {/* Decorative Pattern */}
      <div className="h-2 bg-gradient-to-r from-green-400 via-blue-300 to-green-500"></div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-blue-800/95 p-6 space-y-4 flex flex-col rounded-b-xl shadow-lg animate-slideDown">
          <Link to="/" className="hover:text-green-300 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/loans" className="hover:text-green-300 transition" onClick={() => setIsOpen(false)}>Loans</Link>
          <Link to="/about" className="hover:text-green-300 transition" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="hover:text-green-300 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          <a
            href="https://myscore.cibil.com/CreditView/enrollShort_new.page?enterprise=CIBIL&offer=FACRA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            CIBIL Score
          </a>
          <button
            onClick={() => { setShowModal(true); setIsOpen(false) }}
            className="bg-green-400 text-blue-900 font-bold px-4 py-2 rounded-lg hover:bg-green-500 transition"
          >
            Apply Now
          </button>
        </nav>
      )}

      {/* LoanForm Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <LoanForm setShowModal={setShowModal} />
        </div>
      )}
    </header>
  )
}

export default Header
