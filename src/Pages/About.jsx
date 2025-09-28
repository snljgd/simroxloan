import React from "react";
import ceoimg from "../assets/Images/ceoimg.png"


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

        {/* CEO */}
          <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-12 mt-16 mb-8">
          
          {/* CEO Image */}
          <div className="flex-shrink-0">
            <img 
              src={ceoimg} 
              alt="CEO Ajit Singh" 
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg" 
            />
          </div>

          {/* Right: CEO Text */}
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Meet Our CEO – Ajit Singh
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Ajit Singh is the visionary leader behind SimRox. With more than
              5 years of experience in the finance industry, he has guided our
              team to deliver transparent, reliable, and customer-friendly
              services. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              Under his leadership, SimRox has grown rapidly and continues to
              focus on innovation, customer satisfaction, and building long-term
              trust with clients. His mission is to make financial services 
              accessible for everyone. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
