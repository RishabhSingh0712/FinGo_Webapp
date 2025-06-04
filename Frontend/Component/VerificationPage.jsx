// src/VerificationPage.jsx
import React from 'react';

const VerificationPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-1/2 bg-[#1C1C23] flex flex-col items-center justify-center p-8 text-white">
        <div className="bg-gray-300 w-80 h-80 rounded-md mb-6" />
        <h2 className="text-2xl font-bold text-center mb-2">
          FinGo is personal finance, made simple.
        </h2>
        <p className="text-center text-gray-400 max-w-xs text-sm">
          All your accounts, cards, savings, and investments in one place.
        </p>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md px-6 text-center">
          <h1 className="text-2xl font-bold text-[#1C1C23] mb-4">
            Verify your identity
          </h1>
          <p className="text-gray-700 mb-2">
            We've just sent a text message with your security code on the number +45 ** *** 89.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Please enter the code in order to continue.
          </p>

          <div className="flex justify-center space-x-2 mb-4">
            <input type="text" maxLength="1" className="w-12 h-12 border text-center text-xl border-gray-300 rounded" />
            <input type="text" maxLength="1" className="w-12 h-12 border text-center text-xl border-gray-300 rounded" />
            <input type="text" maxLength="1" className="w-12 h-12 border text-center text-xl border-gray-300 rounded" />
            <input type="text" maxLength="1" className="w-12 h-12 border text-center text-xl border-gray-300 rounded" />
          </div>

          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition mb-2">
            Verify
          </button>

          <p className="text-sm text-gray-500">I haven’t received the code.</p>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
