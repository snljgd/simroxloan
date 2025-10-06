import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaPiggyBank, FaWallet, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import sip from "../assets/Images/sip.png";
import mutual from "../assets/Images/mutual.png";
import taxconsult from "../assets/Images/taxconsult.png";
import safe from "../assets/Images/safe.png";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const MutualFund = () => {
  const sections = [
    {
      title: "Systematic Investment Plans (SIP)",
      desc: "SIP allows you to invest a fixed amount regularly into mutual funds, helping you build wealth gradually without worrying about market timing. Perfect for beginners and disciplined investors.",
      features: ["Start with as low as ₹500/month", "Auto-debit from your account", "Compounding benefits over time"],
      img: sip,
      textColor: "text-blue-700",
      reverse: false,
    },
    {
      title: "Top Mutual Fund Options",
      desc: "Invest in diversified portfolios managed by experts. Choose from equity, debt, or hybrid funds based on your goals and risk appetite.",
      features: ["Diversified fund selection", "Professionally managed portfolio", "Long-term capital growth"],
      img: mutual,
      textColor: "text-green-700",
      reverse: true,
    },
    {
      title: "Save Tax While You Invest",
      desc: "With ELSS mutual funds, you can save up to ₹46,800 in taxes annually under Section 80C while growing your wealth through equity markets.",
      features: ["Lock-in period of 3 years", "Tax deduction up to ₹1.5 lakh", "Dual benefit: tax savings + returns"],
      img: taxconsult,
      textColor: "text-blue-700",
      reverse: false,
    },
    {
      title: "Your Investments Are Safe",
      desc: "We only partner with SEBI-registered AMCs and follow strict compliance to ensure your investments are secure, transparent, and 100% reliable.",
      features: ["SEBI-regulated platform", "Encrypted transactions", "Trusted by 10,000+ investors"],
      img: safe,
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
          Your Smart Investment Partner
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{ delay: 0.2 }}
        >
          Empowering you to grow wealth with smarter investment options — SIPs, Mutual Funds, and more.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Start Investing
          </Link>
        </motion.div>
      </section>

      {/* Investment Sections */}
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
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Why Choose SimRox Investments?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <FaChartLine className="text-blue-500 text-4xl mb-3" />, title: "High Returns", desc: "Get better returns with well-diversified portfolios." },
              { icon: <FaPiggyBank className="text-green-500 text-4xl mb-3" />, title: "Small Start", desc: "Start investing with as low as ₹500/month." },
              { icon: <FaWallet className="text-yellow-500 text-4xl mb-3" />, title: "Easy Withdrawals", desc: "Withdraw anytime with instant processing." },
              { icon: <FaShieldAlt className="text-purple-500 text-4xl mb-3" />, title: "Safe & Secure", desc: "Fully regulated & SEBI-compliant investments." },
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
          Ready to Start Your Investment Journey?
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8"
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
          transition={{ delay: 0.2 }}
        >
          Join thousands of investors who trust SimRox for their mutual funds and SIP planning.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
          <Link to="/SipCalculator"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Estimate Your Returns
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default MutualFund;
