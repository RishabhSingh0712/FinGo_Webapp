import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.jpeg'; // adjust the path as needed

const VerificationPage = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate('/Dashboard'); 
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-[#1C1C23] flex flex-col items-center justify-center p-8 text-white">
        {/* Logo Box */}
        <div className="bg-gray-300 w-40 h-40 md:w-80 md:h-80 rounded-md mb-6 flex items-center justify-center">
          <img src={logo} alt="FinGo Logo" className="object-contain h-20 w-20 md:h-40 md:w-40" />
        </div>

        {/* Heading & Text */}
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2 px-2">
          FinGo is personal finance, made simple.
        </h2>
        <p className="text-center text-gray-400 max-w-xs text-sm">
          All your accounts, cards, savings, and investments in one place.
        </p>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white py-10 md:py-0">
        <div className="w-full max-w-sm md:max-w-md px-6 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-[#1C1C23] mb-4">
            Verify your identity
          </h1>
          <p className="text-gray-700 mb-2">
            We've just sent a text message with your security code to the number +45 ** *** 89.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Please enter the code below to continue.
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(4)].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                className="w-10 h-10 md:w-12 md:h-12 border text-center text-xl border-gray-300 rounded focus:outline-none"
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition mb-2"
          >
            Verify
          </button>

          {/* Message */}
          <p className="text-sm text-gray-500">I haven’t received the code.</p>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
