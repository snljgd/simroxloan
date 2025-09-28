// src/components/ProfessionalLoanAssistant.jsx
import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";

const loanTypes = ["Personal Loan", "Home Loan", "Education Loan", "Business Loan"];
const bankOptions = ["LIC", "HFL", "SBI", "Bank of Baroda", "Piramal", "Awash Finance", "Other Bank"];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "🤖 ASSISTANT: Welcome to Simrox Finance. How can I assist you today?" }
  ]);
  const [step, setStep] = useState(0);
  const [loanData, setLoanData] = useState({});

  const sendBotMessage = (text) => {
    setMessages(prev => [...prev, { from: "bot", text }]);
  };

  const handleLoanTypeClick = (type) => {
    setLoanData({ ...loanData, type });
    sendBotMessage(`🤖 ASSISTANT: You selected "${type}". Now, please choose the bank.`);
    setStep(2);
  };

  const handleBankClick = (bank) => {
    setLoanData({ ...loanData, bank });
    sendBotMessage(`🤖 ASSISTANT: Bank "${bank}" selected. Please enter the interest rate (%) applicable.`);
    setStep(3);
  };

  const handleInputSubmit = (text) => {
    const value = text.trim();
    if (step === 3) {
      if (isNaN(value)) {
        sendBotMessage("🤖 ASSISTANT: Please enter a valid number for interest rate.");
        return;
      }
      setLoanData({ ...loanData, interest: value });
      sendBotMessage(`🤖 ASSISTANT: Interest rate of ${value}% recorded. Please enter the duration of the loan in years.`);
      setStep(4);
    } else if (step === 4) {
      if (isNaN(value)) {
        sendBotMessage("🤖 ASSISTANT: Please enter a valid number for loan duration in years.");
        return;
      }
      setLoanData({ ...loanData, years: value });
      sendBotMessage(
        `🤖 ASSISTANT: Processing complete. Summary:\n- Loan Type: ${loanData.type}\n- Bank: ${loanData.bank}\n- Interest Rate: ${loanData.interest}%\n- Duration: ${value} years\nFor detailed assistance, contact: +91-8696624101`
      );
      setStep(5);
    } else {
      sendBotMessage("🤖 ASSISTANT: Sorry, I have no idea about this. Please follow the instructions.");
    }
  };

  const handleSend = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { from: "user", text }]);
    handleInputSubmit(text);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 z-50"
        title="Chat with Loan Assistant"
      >
        <FaCommentDots size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-96 bg-white border rounded-lg shadow-lg flex flex-col z-50">
          <div className="p-3 bg-blue-600 text-white font-bold rounded-t-lg">
            🤖 Loan Assistant
          </div>

          <div className="flex-1 p-3 overflow-y-auto h-80">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 p-2 rounded whitespace-pre-line ${
                  msg.from === "user" ? "bg-gray-200 text-right" : "bg-blue-100 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t">
            {step === 1 && (
              <div className="flex flex-wrap gap-2">
                {loanTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleLoanTypeClick(type)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-wrap gap-2">
                {bankOptions.map((bank) => (
                  <button
                    key={bank}
                    onClick={() => handleBankClick(bank)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    {bank}
                  </button>
                ))}
              </div>
            )}

            {(step === 3 || step === 4) && (
              <div className="flex">
                <input
                  type="text"
                  placeholder={step === 3 ? "Enter interest rate (%)" : "Enter duration in years"}
                  className="flex-1 p-2 border rounded-l outline-none"
                  onKeyDown={(e) => e.key === "Enter" && handleSend(e.target.value) && (e.target.value = "")}
                />
                <button
                  onClick={(e) => {
                    const inputEl = e.target.previousSibling;
                    handleSend(inputEl.value);
                    inputEl.value = "";
                  }}
                  className="bg-blue-600 text-white px-4 rounded-r"
                >
                  Send
                </button>
              </div>
            )}

            {step === 0 && (
              <button
                onClick={() => {
                  sendBotMessage("🤖 ASSISTANT: Please select a loan type to proceed.");
                  setStep(1);
                }}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Start
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
