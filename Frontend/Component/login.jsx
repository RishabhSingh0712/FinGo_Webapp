import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.jpeg';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/verify');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-[#1C1C23] flex flex-col items-center justify-center p-8 text-white">
        <div className="bg-gray-300 w-40 h-40 md:w-80 md:h-80 rounded-md mb-6 flex items-center justify-center">
          <img src={logo} alt="FinGo Logo" className="object-contain h-20 w-20 md:h-40 md:w-40" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-center mb-2 px-2">
          FinGo is personal finance, made simple.
        </h2>
        <p className="text-center text-gray-400 max-w-xs text-sm">
          All your accounts, cards, savings, and investments in one place.
        </p>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white py-10 md:py-0">
        <div className="w-full max-w-sm md:max-w-md px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1C1C23] mb-6">Log in</h1>

          <label className="block text-gray-700 mb-1">Account number</label>
          <input
            type="text"
            placeholder="1100 0000 0000 0000"
            className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none"
          />

          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Log in
          </button>

          <p className="text-sm text-gray-500 mt-4 text-center">Forgot your password?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
