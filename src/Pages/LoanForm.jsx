import React, { useState } from "react";
import Swal from "sweetalert2";
import { HiX } from "react-icons/hi";
import axios from "axios";

function LoanForm({ setShowModal }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    loanType: "",
    loanAmount: "",
    city: "",
    state: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API call to backend
      const res = await axios.post("http://localhost:5000/api/apply-now", formData);

      Swal.fire({
        title: "Success!",
        text: res.data.message || "Submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset form and close modal
      setFormData({
        name: "",
        number: "",
        loanType: "",
        loanAmount: "",
        city: "",
        state: "",
        message: "",
      });
      setShowModal(false);

    } catch (err) {
  console.error(err.response ? err.response.data : err.message);
  Swal.fire({
    title: "Error!",
    text: err.response?.data?.message || "Something went wrong. Please try again.",
    icon: "error",
    confirmButtonText: "OK",
  });
}

  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blur bg-opacity-40">
      <div className="bg-gray-50 rounded-xl p-6 w-full max-w-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
          onClick={() => setShowModal(false)}
        >
          <HiX className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-black">Apply for Loan</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full border border-black text-black p-2 rounded placeholder-black" />
          <input type="tel" name="number" placeholder="Mobile Number" value={formData.number} onChange={handleChange} required className="w-full border border-black text-black p-2 rounded placeholder-black" />
          <input type="number" name="loanAmount" placeholder="Loan Amount" value={formData.loanAmount} onChange={handleChange} className="w-full border border-black text-black p-2 rounded placeholder-black" />
          <select name="loanType" value={formData.loanType} onChange={handleChange} className="w-full border border-black text-black p-2 rounded">
            <option value="" className="text-black">Select Loan Type</option>
            <option value="Home Loan" className="text-black">Home Loan</option>
            <option value="Personal Loan" className="text-black">Personal Loan</option>
            <option value="Car Loan" className="text-black">Car Loan</option>
            <option value="Business Loan" className="text-black">Business Loan</option>
          </select>
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full border border-black text-black p-2 rounded placeholder-black" />
          <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="w-full border border-black text-black p-2 rounded placeholder-black" />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full border border-black text-black p-2 rounded placeholder-black" rows="3" />
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoanForm;
