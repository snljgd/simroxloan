import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const reviews = [
  {
    name: "Sunil Jangid",
    review: "SimRox ne mera SIP plan banana easy kar diya!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ajit Singh",
    review: "Excellent calculator tools! Returns clearly samajh aate hain.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Kuldeep Singh",
    review: "Customer support aur tools dono amazing hain!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Ram sharma",
    review: "Best platform for beginners.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    name: "Neha Singh",
    review: "Investment ke liye perfect tool!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Rohan Kapoor",
    review: "Very easy to use and responsive.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];

export default function ReviewCarousel() {
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const carousel = document.getElementById("carousel-inner");
    setWidth(carousel.scrollWidth - carousel.offsetWidth);

    // Auto-scroll
    controls.start({
      x: [-width, 0],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } },
    });
  }, [width, controls]);

  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        What Our Investors Say
      </h2>

      <div className="overflow-hidden">
        <motion.div
          id="carousel-inner"
          className="flex gap-6"
          animate={controls}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-xl min-w-[20%] flex-shrink-0"
            >
              <img
                src={r.image}
                alt={r.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-green-500"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">{r.name}</h3>
              <div className="flex justify-center mt-2 mb-2">
                {Array(r.rating).fill().map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm">{r.review}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
