import React from "react";
import { FaBell, FaPlus } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-8 bg-white min-h-screen text-black">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <FaBell className="text-xl" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span>Rishabh Singh</span>
          </div>
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-100 p-6 rounded shadow">
          <p className="text-sm text-gray-500">Total Balance <span className="text-xs">↑ 2.36%</span></p>
          <h2 className="text-2xl font-bold">USD 10,000.00</h2>
          <div className="flex justify-between text-sm mt-4">
            <span>↑ Income: USD 30,000.00</span>
            <span>↓ Expense: USD 20,000.00</span>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow">
          <p className="text-sm text-gray-500">Total Savings <span className="text-xs">↑ 2.36%</span></p>
          <h2 className="text-2xl font-bold">USD 5,000.00</h2>
          {/* Placeholder for chart */}
          <div className="h-12 bg-gray-300 mt-4 rounded" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Statistics */}
        <div className="col-span-2 bg-black text-white p-6 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Statistics</h3>
            <select className="bg-gray-800 px-2 py-1 text-sm rounded">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          {/* Fake Chart */}
          <div className="h-48 bg-gray-700 rounded"></div>
        </div>

        {/* Transactions */}
        <div className="bg-white border p-6 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Transactions</h3>
            <a href="#" className="text-sm text-gray-500">View all</a>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-4 text-sm text-gray-500">
            <span className="border-b border-black text-black cursor-pointer">All</span>
            <span className="cursor-pointer">Expenses</span>
            <span className="cursor-pointer">Income</span>
          </div>

          {/* Items */}
          {[
            { title: "Central Burger", desc: "Cafe and Restaurant", amount: "-$189.36" },
            { title: "The Market", desc: "Groceries", amount: "-$92.50" },
            { title: "Quick Transfer", desc: "Maria Purple", amount: "+$350.00", highlight: true },
            { title: "The Market", desc: "Groceries", amount: "-$36.20" },
            { title: "Central Burger", desc: "Cafe and Restaurant", amount: "-$189.36" },
          ].map((t, i) => (
            <div key={i} className={`flex justify-between items-center p-3 rounded ${t.highlight ? "bg-gray-100" : ""}`}>
              <div>
                <p className="font-medium">{t.title}</p>
                <p className="text-sm text-gray-500">{t.desc}</p>
              </div>
              <span className={`font-semibold ${t.amount.startsWith("-") ? "text-red-600" : "text-green-600"}`}>
                {t.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Goals */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="font-bold mb-2">Goals</h3>
          <p className="text-sm text-gray-500 mb-2">Summer Vacation</p>
          <p className="text-sm font-medium mb-1">62% reached</p>
          <div className="w-full bg-gray-300 rounded h-2 mb-2">
            <div className="bg-black h-2 rounded" style={{ width: "62%" }}></div>
          </div>
          <p className="text-xs text-gray-500">$1,485 out of $2,385</p>
        </div>

        {/* Spending Overview */}
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="font-bold mb-4">Spending Overview</h3>
          {[
            ["Groceries", 68],
            ["Withdrawal", 20],
            ["Retail", 10],
            ["Leisure", 2],
          ].map(([label, val], i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>{label}</span>
                <span>{val}%</span>
              </div>
              <div className="bg-gray-300 h-2 rounded">
                <div className="bg-black h-2 rounded" style={{ width: `${val}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Transfer */}
        <div className="bg-black text-white p-6 rounded shadow">
          <div className="flex justify-between mb-4">
            <h3 className="font-bold">Quick Transfer</h3>
            <span className="cursor-pointer">‹ ›</span>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto">
            {["Add New", "Maria Purple", "Leonard Smith", "Oscar Wild", "Karen Potter"].map((name, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                  {i === 0 ? <FaPlus /> : null}
                </div>
                <p className="text-xs mt-1 text-center">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
