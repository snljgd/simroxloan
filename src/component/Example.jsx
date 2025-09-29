import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
}

from "recharts";

export default function Example() {
  const [loanAmount, setLoanAmount] = useState(1000000); // 10 Lakh
  const [interestRate, setInterestRate] = useState(10); // Annual %
  const [tenure, setTenure] = useState(10); // Years

  // EMI Calculation
  const principal = loanAmount;
  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) /
              (Math.pow(1 + monthlyRate, months) - 1);

  // Prepare chart data
  const data = Array.from({ length: months }, (_, i) => {
    const month = i + 1;
    const totalPayment = emi * month;
    return {
      month,
      "Principal Paid": (principal / months) * month,
      "Total Payment": totalPayment,
    };
  });

  return (
   <div className="w-full min-h-screen bg-white pb-12">
  <div className="max-w-7xl mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center md:text-left">
      EMI Calculator
    </h1>

    {/* Desktop: Left inputs, Right chart */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Left: Inputs */}
      <div className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
        {/* Loan Amount */}
        <div>
          <label className="block mb-2 font-semibold sha text-gray-700">Loan Amount (₹)</label>
          <input
            type="number"
            placeholder=""
            className="w-full border rounded px-3 py-2 bg-green-50"
            value={loanAmount || ''}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
          <input
            type="range"
            min="100000"
            max="100000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Interest Rate (% per annum)</label>
          <input
            type="number"
            placeholder=""
            className="w-full border rounded px-3 py-2 bg-green-50"
            value={interestRate || ''}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
          <input
            type="range"
            min="1"
            max="24"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

        {/* Tenure */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Tenure (Years)</label>
          <input
            type="number"
            placeholder=""
            className="w-full border rounded px-3 py-2 bg-green-50"
            value={tenure || ''}
            onChange={(e) => setTenure(Number(e.target.value))}
          />
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>
      </div>

      {/* Right: EMI Display + Chart */}
      <div className="space-y-6 bg-green-50 p-4 rounded-xl shadow-lg justify-center">
        {/* EMI Card */}
        <div className="bg-green-50 p-6 rounded shadow w-full">
          <h2 className="text-2xl font-semibold text-gray-800">
            Your Monthly EMI: ₹ {emi.toFixed(0)}
          </h2>
          <p className="text-gray-600 mt-2">
            Total Payment: ₹ {(emi * months).toFixed(0)}
          </p>
        </div>

        {/* Chart */}
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" label={{ value: "Month", position: "insideBottomRight", offset: -5 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Principal Paid" stroke="#1f77b4" />
              <Line type="monotone" dataKey="Total Payment" stroke="#ff7f0e" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  </div>
</div>

  );
}
