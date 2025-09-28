// src/components/RobotLoanChatBot.jsx
import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";

const RobotLoanChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "🤖 ASSISTANT: Welcome to Simrox Finance. How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [loanData, setLoanData] = useState({});

  const bankOptions = ["LIC", "HFL", "SBI", "Bank of Baroda", "Piramal", "Awash Finance", "Other Bank"];

  const handleBotResponse = (text) => {
    let reply = "";
    const lowerText = text.trim().toLowerCase();

    switch (step) {
      case 0:
        // Accept any message as starting query
        reply = "🤖 ASSISTANT: Please specify the type of loan you require (Personal, Home, Education, etc.).";
        setStep(1);
        break;

      case 1:
        if (!text) {
          reply = "🤖 ASSISTANT: Sorry, I have no idea about this.";
        } else {
          setLoanData({ ...loanData, type: text });
          reply = `🤖 ASSISTANT: Noted. You have selected a ${text} loan.\nNext, which bank do you want to apply through?\nOptions: ${bankOptions.join(", ")}`;
          setStep(1.5);
        }
        break;

      case 1.5:
        // Bank selection (case-insensitive)
        const matchedBank = bankOptions.find(bank => bank.toLowerCase() === lowerText);
        if (!matchedBank) {
          reply = `🤖 ASSISTANT: Sorry, I have no idea about this.\nPlease select a bank from the options: ${bankOptions.join(", ")}`;
        } else {
          setLoanData({ ...loanData, bank: matchedBank });
          reply = `🤖 ASSISTANT: Bank ${matchedBank} selected.\nPlease enter the interest rate (%) applicable.`;
          setStep(2);
        }
        break;

      case 2:
        // Interest rate validation: must be a number
        if (isNaN(text)) {
          reply = "🤖 ASSISTANT: Sorry, I have no idea about this. Please enter a valid number for interest rate.";
        } else {
          setLoanData({ ...loanData, interest: text });
          reply = `🤖 ASSISTANT: Interest rate of ${text}% recorded. Enter the duration of the loan in years.`;
          setStep(3);
        }
        break;

      case 3:
        // Duration validation: must be a number
        if (isNaN(text)) {
          reply = "🤖 ASSISTANT: Sorry, I have no idea about this. Please enter a valid number for duration in years.";
        } else {
          setLoanData({ ...loanData, years: text });
          reply = `🤖 ASSISTANT: Processing complete. Summary:\n- Loan Type: ${loanData.type}\n- Bank: ${loanData.bank}\n- Interest Rate: ${loanData.interest}%\n- Duration: ${text} years\nFor detailed assistance, contact: +91-8696624101`;
          setStep(4);
        }
        break;

      default:
        reply = "🤖 ASSISTANT: Sorry, I have no idea about this.";
        break;
    }

    setMessages(prev => [...prev, { from: "bot", text: reply }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages([...messages, { from: "user", text: userMessage }]);
    setInput("");

    setTimeout(() => handleBotResponse(userMessage), 500);
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

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border rounded-lg shadow-lg flex flex-col z-50">
          <div className="p-3 bg-blue-600 text-white font-bold rounded-t-lg">
            🤖 Loan Assistant
          </div>

          <div className="flex-1 p-3 overflow-y-auto h-64">
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

          <div className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 outline-none"
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="bg-blue-600 text-white px-4">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RobotLoanChatBot;
