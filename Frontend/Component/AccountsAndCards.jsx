import React from "react";
import { useNavigate } from "react-router-dom";

export function AccountsAndCards() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/card-details");
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Accounts and Cards</h1>

      {/* My Accounts */}
      <div>
        <h2 className="text-lg font-semibold mb-4">My accounts</h2>
        <div className="grid grid-cols-3 gap-6">
          {["Checking Account", "Savings Account", "Budget Account"].map((title, i) => (
            <div key={i} className="bg-gray-900 text-white p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{title}</h3>
                <span className="text-xs">2.36%</span>
              </div>
              <p className="text-sm text-gray-400 mb-1">Available balance</p>
              <p className="text-2xl font-bold mb-2">USD {10000 - i * 2000}.00</p>
              <p className="text-sm text-gray-300">IBAN</p>
              <p className="text-sm mb-2">AB11 0000 0000 1111 1111</p>
              <p className="text-sm text-gray-300">Account owner</p>
              <p className="text-sm">Nicola Rich</p>
              <div className="mt-4 text-center text-sm bg-gray-200 text-black py-1 rounded">
                See details
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Cards */}
      <div>
        <h2 className="text-lg font-semibold mb-4">My cards</h2>
        <div className="grid grid-cols-2 gap-6">
          {["Credit Card", "Debit Card"].map((type, i) => (
            <div key={i} className="bg-gray-100 rounded-lg">
              <div
                className="p-4 cursor-pointer hover:bg-gray-200"
                onClick={handleCardClick}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-gray-300 rounded-full" />
                  <span className="text-sm text-gray-600">Available Balance</span>
                </div>
                <p className="text-xl font-bold">USD {i === 0 ? "10,000.00" : "8,500.00"}</p>
                <p className="text-sm mt-1 mb-2">1111 **** **** 0000</p>
                <p className="text-sm">Nicola Rich</p>
                <p className="text-sm">12/24</p>
              </div>
              <div className="px-4 pb-4 text-sm text-gray-600">
                <div className="border-t pt-2">
                  <p className="text-xs">Type: Physical</p>
                  <p className="text-xs">Status: Active</p>
                  <p className="text-xs">CVC: ***</p>
                  <p className="text-xs text-gray-400">Permission required</p>
                </div>
                <div className="mt-2 bg-gray-200 text-center py-1 rounded cursor-pointer">
                  See details
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CardDetails() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        ← Accounts and Cards
      </div>
      <h1 className="text-2xl font-bold">Credit card</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          <p className="text-xs text-gray-500">Available Balance</p>
          <p className="text-2xl font-bold">USD 10,000.00</p>
          <p className="text-sm">1111 **** **** 0000</p>
          <p className="text-sm">Nicola Rich</p>
          <p className="text-sm">12/24</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          <p className="text-xs">Type: Physical</p>
          <p className="text-xs">Status: Active</p>
          <p className="text-xs">Card number: 1111 0000 1100 0000</p>
          <p className="text-xs">Expiration date: 12/2 (1 month left)</p>
          <p className="text-xs">CVC: ***</p>
          <p className="text-xs text-gray-500">Permission required</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {["Show PIN", "Card blocking", "Card settings", "Change limit", "Change address", "Order card"].map((text, i) => (
            <div key={i} className="bg-gray-200 text-center text-sm p-2 rounded cursor-pointer">
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Top</h2>
          <p className="text-sm text-gray-600">Groceries $400</p>
          <p className="text-sm text-gray-600">Withdrawal $350</p>
          <p className="text-sm text-gray-600">Retail $280</p>
          <p className="text-sm text-gray-600">Leisure $150</p>
        </div>
        <div className="bg-black text-white p-4 rounded-lg">
          <h2 className="font-semibold mb-2">My subscriptions</h2>
          {["Netflix", "Super Gym", "Pear Music"].map((sub, i) => (
            <div key={i} className="flex justify-between text-sm py-1 border-b border-gray-700">
              <p>{sub}</p>
              <p>$29/month</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold">Card transactions</h2>
        <input
          type="text"
          placeholder="Search"
          className="border px-4 py-1 rounded w-1/3"
        />

        <div className="pt-4">
          {["Pending", "Today", "21 January 2022"].map((section, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold mb-1">{section}</p>
              {["Central Burger", "The Market"].map((merchant, j) => (
                <div key={j} className="flex justify-between text-sm py-1 border-b">
                  <p>{merchant}</p>
                  <p className="text-red-500">-${Math.random() * 200 + 10}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccountsAndCards;