import React, { useState } from "react";
import { CalendarDays, ChevronDown, ChevronUp, Plus } from "lucide-react";

const TransferPage = () => {
  const [showOtherData, setShowOtherData] = useState(false);

  return (
    <div className="p-10 font-sans bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-8">Transfer</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Select payer</label>
            <select className="w-full p-2 border rounded bg-white">
              <option>Checking Account</option>
            </select>
          </div>

          {/* Account Info */}
          <div className="bg-black text-white p-6 rounded">
            <div className="text-lg font-semibold">Checking Account</div>
            <p className="text-sm text-gray-400">Balance</p>
            <p className="text-3xl font-bold my-2">USD 10,000.00</p>
            <hr className="border-gray-600 my-3" />
            <p className="text-sm">IBAN</p>
            <p className="font-mono text-sm">AB11 0000 0000 1111 1111</p>
            <p className="mt-2 text-sm">Account owner</p>
            <p className="font-semibold text-white">Nicola Rich</p>
          </div>

          {/* Share and Request Buttons */}
          <div className="flex gap-2">
            <button className="w-1/2 border py-2 rounded text-sm">📤 Share IBAN</button>
            <button className="w-1/2 border py-2 rounded text-sm">🔁 Request payment</button>
          </div>

          {/* Saved Beneficiaries */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Saved Beneficiaries</span>
              <a href="#" className="text-sm text-gray-500">View all</a>
            </div>
            <div className="flex gap-3 items-center">
              <button className="flex flex-col items-center justify-center">
                <div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center">
                  <Plus size={18} />
                </div>
                <span className="text-xs mt-1">Add New</span>
              </button>

              {["Maria Purple", "Leonard Smith", "Oscar Wild"].map((name) => (
                <div key={name} className="flex flex-col items-center">
                  <div className="bg-gray-300 w-10 h-10 rounded-full" />
                  <span className="text-xs mt-1 text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="lg:col-span-2">
          <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 rounded bg-gray-100 text-black">Own account</button>
            <button className="px-4 py-2 rounded bg-black text-white">Other account</button>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="IBAN *" className="w-full p-2 border rounded" />
            <input type="number" placeholder="Amount *" className="w-full p-2 border rounded" />
            <div className="relative">
              <input type="date" className="w-full p-2 border rounded" />
              <CalendarDays className="absolute right-3 top-2.5 text-gray-400" />
            </div>

            {/* Toggle Other Data */}
            <div>
              <button
                type="button"
                onClick={() => setShowOtherData(!showOtherData)}
                className="flex items-center text-sm text-black border rounded p-2 w-full justify-between"
              >
                <span>Other data</span>
                {showOtherData ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            </div>

            {showOtherData && (
              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Transfer purpose" className="p-2 border rounded" />
                  <input type="text" placeholder="Beneficiary’s name" className="p-2 border rounded" />
                  <input type="email" placeholder="Beneficiary’s email" className="p-2 border rounded" />
                  <input type="text" placeholder="Payer’s reference" className="p-2 border rounded" />
                </div>
                <input type="text" placeholder="Information for beneficiary" className="w-full p-2 border rounded" />
              </div>
            )}

            <button type="submit" className="w-full py-3 bg-black text-white rounded mt-4">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
