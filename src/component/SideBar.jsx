import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../assets/Images/Slide1.jpg";
import img2 from "../assets/Images/ceoimg.png";
import img3 from "../assets/Images/mutual.png";

const slides = [
  { id: 1, title: "Personal Loan", description: "Quick loans.", img: img1 },
  { id: 2, title: "Insurance", description: "Secure your future.", img: img2 },
  { id: 3, title: "Mutual Funds", description: "Invest smartly.", img: img3 },
  { id: 4, title: "Business Loan", description: "Grow your business.", img: img2 },
];

export default function SideBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  // touch handlers for mobile swipe
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart == null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#BDE1F9] to-[#E7F6FF]">
      {/* wrapper width: full of parent container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        // translate in % (100% of parent container) so it matches inner slide width
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex flex-col md:flex-row items-center justify-between min-w-full flex-none h-[420px] md:h-[520px] p-4"
          >
            <div className="w-full md:w-1/2 p-4 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-gray-700">{slide.description}</p>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-[90%] md:w-full h-[220px] md:h-[420px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* controls */}
      <button onClick={prevSlide} className="absolute top-1/2 left-3 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white">
        <FaChevronLeft />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-3 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white">
        <FaChevronRight />
      </button>

      {/* indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
