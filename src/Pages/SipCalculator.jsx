import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000); // ₹10,000
  const [expectedReturn, setExpectedReturn] = useState(12); // Annual %
  const [timePeriod, setTimePeriod] = useState(10); // Years

  // SIP Formula: M * (((1 + i)^n - 1) / i) * (1 + i)
  const months = timePeriod * 12;
  const monthlyRate = expectedReturn / 12 / 100;
  const futureValue =
    monthlyInvestment *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

  const investedAmount = monthlyInvestment * months;
  const estimatedReturns = futureValue - investedAmount;

  // Chart Data
  const data = Array.from({ length: months }, (_, i) => {
    const m = i + 1;
    const value =
      monthlyInvestment *
      (((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate) * (1 + monthlyRate));
    return {
      month: m,
      "Invested Amount": monthlyInvestment * m,
      "Total Value": value,
    };
  });

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 pt-5">
          SIP Calculator
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Section - Inputs */}
          <div className="space-y-6 bg-white p-6 rounded-xl shadow-2xl mt-4 mb-4">
            
            {/* Monthly Investment */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Monthly Investment (₹)
              </label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2 bg-green-50"
                value={monthlyInvestment || ""}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              />
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            {/* Expected Return Rate */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Expected Return (% per annum)
              </label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2 bg-green-50"
                value={expectedReturn || ""}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
              />
              <input
                type="range"
                min="1"
                max="30"
                step="0.1"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            {/* Time Period */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Time Period (Years)
              </label>
              <input
                type="number"
                className="w-full border rounded px-3 py-2 bg-green-50"
                value={timePeriod || ""}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
              />
              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>
          </div>

          {/* Right Section - Result & Chart */}
          <div className="space-y-6 bg-green-50 p-4 rounded-xl shadow-2xl mt-4 mb-4">

            {/* Result Card */}
            <div className="bg-green-50 p-6 rounded shadow w-full">
              <h2 className="text-2xl font-semibold text-gray-800">
                Estimated Value: ₹ {futureValue.toFixed(0).toLocaleString("en-IN")}
              </h2>
              <p className="text-gray-600 mt-2">
                Invested Amount: ₹ {investedAmount.toFixed(0).toLocaleString("en-IN")}
              </p>
              <p className="text-gray-600 mt-1">
                Estimated Returns: ₹ {estimatedReturns.toFixed(0).toLocaleString("en-IN")}
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
                  <Line type="monotone" dataKey="Invested Amount" stroke="#1f77b4" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="Total Value" stroke="#16a34a" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
