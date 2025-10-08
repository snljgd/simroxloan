import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/Images/Slide1.jpg";
import img2 from "../assets/Images/ceoimg.png";
import img3 from "../assets/Images/mutual.png";
import img4 from "../assets/Images/slide4.jpg";
const slides = [
  {
    id: 1,
    title: "Get the Best Loan Options at One Place",
    description: `Get instant personal loans for your every need — travel, wedding, medical, or education. 
    <br /><br />
    Quick approval, minimal documents, and flexible EMIs designed for your comfort.`,
    img: img1,
  },
  {
    id: 2,
    title: "Meet Our CEO",
    description: `Mr. <b>Ajit Singh</b>, an experienced financial expert with over <b> 5 years</b> in the industry, 
    leads SimRox with dedication and integrity. 
    <br /><br />
    Under his guidance, we focus on <b>customer-first</b> solutions, innovation, and transparency. 
    <br /><br />
    He is responsible for building a team that delivers trust, efficiency, and excellent service across all our products.`,
    img: img2,
  },
  {
    id: 3,
    title: "Mutual Funds",
    description: `Grow your wealth smartly with expert-managed mutual fund portfolios. 
    <br /><br />
    Start your SIP today and build long-term financial security for your future.`,
    img: img3,
  },
  {
    id: 4,
    title: "Because Your Family Deserves the Best Protection",
    description: `Easy, fast, and secure — get the right coverage in just a few clicks.. 
    <br /><br />
    Be prepared for life’s uncertainties with affordable insurance plans tailored to your needs.`,
    img: img4,
  },
];

const SideBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#c3e7ff] to-[#ffffff]">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <section
            key={slide.id}
            className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20 flex-shrink-0"
          >
            {/* Left Text Section */}
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                {slide.title}
              </h2>
              <p
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: slide.description }}
              />
            </div>

            {/* Right Image Section */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-[280px] md:w-[400px] rounded-xl object-cover shadow-lg"
              />
            </div>
          </section>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SideBar;
