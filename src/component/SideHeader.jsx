// src/components/HoverExpandSlider.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  { id: 1, title: "Personal Loan", desc: "Quick approval with minimal documents.", img: "https://images.unsplash.com/photo-1669012520437-5102e3fd4589?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "Home Loan", desc: "Turn your dream home into reality.", img: "https://images.unsplash.com/photo-1736319666684-a0f1f6b679cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "Car Loan", desc: "Drive your dream car today.", img: "https://images.unsplash.com/photo-1652769924904-c316754e354d?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "Business Loan", desc: "Scale your business with instant funding.", img: "https://images.unsplash.com/photo-1657727534676-cac1bb160d64?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "Education Loan", desc: "Secure your future with easy education loans.", img: "https://images.unsplash.com/photo-1659080907097-6153cd4ff69d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const getSlideLink = (title) => {
  switch(title) {
    case "Home Loan": return "/homeLoan";
    case "Personal Loan": return "/personal";
    case "Car Loan": return "/carloan";
    case "Business Loan": return "/businessloan";
    case "Education Loan": return "/educationloan";
    default: return "/loans";
  }
}

export default function SideHeader() {
  return (
    <div className="w-full py-12 bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/3 flex flex-col justify-center px-6 md:px-10 py-4 bg-gray-50 h-[250px] md:h-[330px]">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-800">
            Choose the Right Loan
          </h1>
          <p className="text-sm md:text-lg text-gray-600">
            Explore multiple loan options designed to meet your financial needs.
          </p>
        </div>

        {/* Right Slider */}
        <div className="w-full md:w-2/3">
          {/* Desktop Hover-Expand */}
          <div className="hidden md:flex h-[330px] overflow-hidden rounded-2xl shadow-lg">
            {slides.map((slide) => (
              <Link
                key={slide.id}
                to={getSlideLink(slide.title)}
                className="group relative flex-1 flex items-end justify-start transition-all duration-500 ease-in-out hover:flex-[3] cursor-pointer"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all"></div>
                <div className="relative p-6 text-white z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  <h2 className="text-xl font-semibold">{slide.title}</h2>
                  <p className="text-sm">{slide.desc}</p>
                  <button className="mt-3 flex items-center gap-2 text-sm font-medium hover:underline">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-3 gap-2 md:hidden mt-4">
            {slides.map((slide, index) => (
              <Link
                key={slide.id}
                to={getSlideLink(slide.title)}
                className={`relative h-32 rounded-2xl overflow-hidden col-span-1 ${index >= 3 ? 'col-span-1' : ''}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.img})` }}
                ></div>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs z-10">
                  {slide.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
