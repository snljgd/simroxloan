import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions about our loans? We’d love to hear from you.  
          Get in touch with our support team.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg border"
          >
            <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:ring focus:ring-green-400 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:ring focus:ring-green-400 outline-none"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:ring focus:ring-green-400 outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full mb-4 p-3 border rounded-lg focus:ring focus:ring-green-400 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>

          {/* Right - Contact Info */}
          <div className="p-8 rounded-xl shadow-lg border bg-white">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

            <p className="mb-4 text-gray-700">
              📍 <strong>Address:</strong> Tiyagi Market , Nagaur, Rajasthan
            </p>
            <p className="mb-4 text-gray-700">
              📞 <strong>Phone:</strong> +91 86966 24101
            </p>
            <p className="mb-6 text-gray-700">
              📧 <strong>Email:</strong> info@simrox.com
            </p>

            {/* Google Map Embed */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131.71668184413662!2d73.73383186441947!3d27.217025595604696!2m3!1f62.4757351050129!2f45!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x396a9168f66b18b7%3A0xf6ba146d6a9e716e!2sWelcome%20Computer%20Nagaur!5e1!3m2!1sen!2sin!4v1758796463931!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact;
