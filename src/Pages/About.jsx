import React from "react";
import img2 from "../assets/Images/loan.png"

function About() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Welcome to <span className="font-semibold text-blue-600">SimRox</span>!  
          We are committed to empowering your dreams by providing easy, fast, 
          and transparent loan services. Our mission is to bring financial 
          solutions closer to you with trust and simplicity.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide hassle-free loan options that help individuals 
              and businesses achieve their financial goals.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted financial partner in the industry 
              with customer-first policies and digital innovations.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Transparency, Trust, and Innovation are at the core of 
              everything we do for our customers.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">Ajit Singh</h4>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">Sunil Jangid</h4>
              <p className="text-sm text-gray-500">Finance Head</p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">Ajit Singh</h4>
              <p className="text-sm text-gray-500">Loan Advisor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
