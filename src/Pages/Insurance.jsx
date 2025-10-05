import React from "react";
import { Link } from "react-router-dom";
import { FaHeartbeat, FaCar, FaShieldAlt, FaBriefcaseMedical } from "react-icons/fa";
import { motion } from "framer-motion";

import bussnicsimg from "../assets/Images/bussnics.png";
import health from "../assets/Images/health.png";
import vichal from "../assets/Images/vichal.png";
import life from "../assets/Images/life.png";
import back2 from "../assets/Images/back1.png";
import back3 from "../assets/Images/back3.jpg"
// import back4 from "../assets/Images/back4.png"


import tataimg from "../assets/Images/tataimg.png"
import iciciimg from "../assets/Images/iciciimg.png"
import licimg from "../assets/Images/licimg.png"
import sbiimg from "../assets/Images/sbiimg.jpg"
import policyimg from "../assets/Images/policyimg.jpg"
import hdfcimg from "../assets/Images/hdfcimg.jpg"

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Insurance = () => {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white text-center"
        style={{ backgroundImage: `url(${back2})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 py-40 px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-white backdrop-brightness-75 " 
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Secure Your Future with SimRox Insurance
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto underline text-white shadow-amber-50 backdrop-brightness-75 "
            initial="hidden"
            animate="visible"
            variants={textVariant}
            transition={{ delay: 0.2 }}
          >
            Protect your family, health, and assets with trusted insurance plans from India's top providers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <Link
              to="/contact"
              className="mt-8 inline-block bg-white text-blue-900 text-shadow-blue-50font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Get Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      {[
        {
          title: "Health Insurance",
          desc:
            "Medical emergencies can come unexpectedly. Secure your and your family’s health with affordable health insurance plans.",
          features: [
            "Cashless hospitalization across 5000+ hospitals",
            "Covers pre & post-hospitalization expenses",
            "Tax benefits under Section 80D",
          ],
          img: health,
          textColor: "text-blue-700",
          reverse: false,
        },
        {
          title: "Life Insurance",
          desc:
            "Secure your family’s financial future in your absence with flexible life insurance policies offering high coverage at low premiums.",
          features: ["Guaranteed protection & peace of mind", "Flexible policy terms", "Instant claim settlements"],
          img: life,
          textColor: "text-green-700",
          reverse: true,
        },
        {
          title: "Vehicle Insurance",
          desc:
            "Drive with confidence! Get complete protection for your car or bike with easy claim processing and 24/7 support.",
          features: ["Third-party & comprehensive cover", "Cashless repairs at authorized garages", "Hassle-free renewals"],
          img: vichal,
          textColor: "text-blue-700",
          reverse: false,
        },
        {
          title: "Business & Property Insurance",
          desc:
            "Protect your business assets, employees, and property from unforeseen risks with customizable insurance plans.",
          features: ["Fire & theft protection", "Liability & employee cover", "Business continuity assurance"],
          img: bussnicsimg,
          textColor: "text-green-700",
          reverse: true,
        },
      ].map((section, i) => (
        <section
          key={i}
          className={`py-16 px-6 max-w-7xl mx-auto flex flex-col ${
            section.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-12 bg-white`}
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
            <img src={section.img} alt={section.title} className="rounded-2xl shadow-lg" />
          </motion.div>
        </section>
      ))}

      {/* Feature Highlights */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">Why Choose SimRox Insurance?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <FaHeartbeat className="text-red-500 text-4xl mb-3" />, title: "Trusted Companies", desc: "We partner with India's leading insurers." },
              { icon: <FaCar className="text-blue-500 text-4xl mb-3" />, title: "Fast Claim Process", desc: "Get claims approved and settled quickly." },
              { icon: <FaShieldAlt className="text-green-600 text-4xl mb-3" />, title: "Reliable Coverage", desc: "Customized plans that suit your needs." },
              { icon: <FaBriefcaseMedical className="text-purple-500 text-4xl mb-3" />, title: "24x7 Support", desc: "Dedicated assistance for every policyholder." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
                initial="hidden"
                whileInView={{ opacity: 1, y: 0 }}
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

    
      {/* Our Partners Section */}
<section className="py-16 bg-white text-center">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-green-600 to-blue-700 bg-clip-text text-transparent mb-10"
  >
    Our Trusted Partners
  </motion.h2>

  <div className="flex flex-wrap justify-center gap-10 px-6">
    {[
      { name: "Tata AIA Life Insurance", logo: tataimg },
      { name: "LIC (Life Insurance Corporation)", logo: licimg },
      { name: "SBI Life Insurance", logo: sbiimg },
      { name: "Policybazaar", logo: policyimg },
      { name: "HDFC Life", logo: hdfcimg },
      { name: "ICICI Prudential", logo: iciciimg },
    ].map((partner, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
        className="bg-white rounded-2xl shadow-md p-6 w-52 flex flex-col items-center hover:shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-16 object-contain mb-3"
        />
        <p className="text-gray-700 font-semibold text-sm text-center">
          {partner.name}
        </p>
      </motion.div>
    ))}
  </div>
</section>


      {/* Call to Action */}
      <section  className="relative bg-cover bg-center bg-no-repeat text-white text-center h-80  "
        style={{ backgroundImage: `url(${back3})` }} > 
        <motion.h2
          className="text-5xl font-bold mb-4 py-10 backdrop-brightness-75"
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
        >
          Protect What Matters Most
        </motion.h2>
        <motion.p
          className="text-2xl max-w-2xl mx-auto mb-8 backdrop-brightness-75"
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
          transition={{ delay: 0.2 }}
        >
          Compare plans, get instant quotes, and secure your future with SimRox Insurance today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
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

export default Insurance;
