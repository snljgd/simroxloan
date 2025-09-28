import React from 'react'
import img1 from "../assets/Images/homeimage.png"

function SideBar() {
  return (
  <section className="relative bg-gray-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-70"
          src={img1}
          alt="Investment Banner"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center sm:py-40 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Grow Your Wealth with SimRox Finance
        </h1>
        <p className="mt-6 text-lg text-gray-200 sm:text-xl max-w-2xl mx-auto">
          Get quick and flexible loans tailored to your needs, helping you achieve your financial goals with ease.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          {/* <a
            href="#invest"
            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-blue-700 transition"
          >
            Loan Now
          </a>
          <a
            href="#learn"
            className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-md hover:bg-gray-100 transition"
          >
            EMI
          </a> */}
        </div>
      </div>
    </section>
  )
}

export default SideBar