import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Example static blog data
const staticBlogs = [
  {
    id: 1,
    title: "How to Save Money Effectively",
    excerpt: "Learn practical tips to save money, invest smartly, and grow your wealth gradually.",
    date: "2025-10-01",
    img: "https://www.iciciprulife.com/content/dam/icicipru/all/how-to-save-money.jpg",
  },
  {
    id: 2,
    title: "Top Investment Options in India",
    excerpt: "Discover top mutual funds, SIPs, and other investment options suitable for beginners.",
    date: "2025-09-25",
    img: "https://lakshmishree.com/blog/wp-content/uploads/2025/03/Blog-Img-2025-03-03T172855.731.jpg",
  },
  {
    id: 3,
    title: "Understanding Home Loans",
    excerpt: "A beginner’s guide to home loans, interest rates, and EMI calculations in India.",
    date: "2025-09-20",
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-04/03/full/20250403131844.jpg",
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState(staticBlogs);

  // Future: fetch blogs from API
  /*
  useEffect(() => {
    fetch("https://api.example.com/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.log(err));
  }, []);
  */

  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-green-500 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          Our Blog
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
        >
          Read articles, tips, and guides on investment, loans, insurance, and wealth management.
        </motion.p>
      </section>

      {/* Blog Cards */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: blog.id * 0.2 }}
          >
            <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <p className="text-sm text-gray-400 mb-4">{blog.date}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-blue-700 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Blogs;
