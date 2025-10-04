import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCar, FaBriefcase, FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";

import homeLoanImg from "../assets/Images/homeloan.png";
import personalLoanImg from "../assets/Images/personalloan.png";
import carLoanImg from "../assets/Images/carloan.png";
import businessLoanImg from "../assets/Images/bussnicsloan.png";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Loans = () => {
  const sections = [
    {
      title: "Home Loan",
      desc: "Buy your dream home with flexible home loan options, low interest rates, and easy EMI plans.",
      features: ["Low interest rates", "Long repayment tenure", "Quick processing"],
      img: homeLoanImg,
      textColor: "text-blue-700",
      reverse: false,
    },
    {
      title: "Personal Loan",
      desc: "Get instant personal loans for your personal needs, emergency expenses, or major purchases without collateral.",
      features: ["No collateral needed", "Fast approval", "Flexible repayment options"],
      img: personalLoanImg,
      textColor: "text-green-700",
      reverse: true,
    },
    {
      title: "Car Loan",
      desc: "Own your car with affordable car loans and convenient EMIs designed to fit your budget.",
      features: ["Low EMI options", "Quick disbursal", "Flexible tenure"],
      img: carLoanImg,
      textColor: "text-blue-700",
      reverse: false,
    },
    {
      title: "Business Loan",
      desc: "Grow your business with our customized business loans offering capital for expansion, inventory, or working capital.",
      features: ["Custom loan plans", "Fast processing", "Minimal documentation"],
      img: businessLoanImg,
      textColor: "text-green-700",
      reverse: true,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-green-500 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          Your Trusted Loan Partner
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{ delay: 0.2 }}
        >
          We provide smart loan solutions for your home, personal, car, and business needs.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </section>

      {/* Loan Sections */}
      {sections.map((section, i) => (
        <section
          key={i}
          className={`py-16 px-6 max-w-7xl mx-auto flex flex-col ${
            section.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-12 ${i % 2 !== 0 ? "bg-white" : ""}`}
        >
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariant}
          >
            <h2 className={`text-3xl font-bold ${section.textColor} mb-4`}>{section.title}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{section.desc}</p>
            <ul className="space-y-2 text-gray-700">
              {section.features.map((feature, idx) => (
                <li key={idx}>✔ {feature}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariant}
          >
            <img
              src={section.img}
              alt={section.title}
              className="rounded-2xl shadow-xl h-85 w-130"
            />
          </motion.div>
        </section>
      ))}

      {/* Features Grid Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Why Choose SimRox Loans?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <FaHome className="text-blue-500 text-4xl mb-3" />, title: "Home Loans", desc: "Flexible EMI and low interest rates." },
              { icon: <FaWallet className="text-yellow-500 text-4xl mb-3" />, title: "Personal Loans", desc: "Quick approval and minimal documentation." },
              { icon: <FaCar className="text-green-500 text-4xl mb-3" />, title: "Car Loans", desc: "Own your dream car easily." },
              { icon: <FaBriefcase className="text-purple-500 text-4xl mb-3" />, title: "Business Loans", desc: "Grow your business with our support." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariant}
              >
                <div className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 via-green-600 to-blue-700 text-white text-center py-20 px-6">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
        >
          Apply for Your Loan Today
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
          transition={{ delay: 0.2 }}
        >
          Fast, secure, and flexible loan solutions tailored to your needs.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
          <Link
            to="/contact"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Loans;
