import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const dataInvestment = [
  { year: "201", value: 3000 },
  { year: "201", value: 2200 },
  { year: "201", value: 1800 },
  { year: "202", value: 3400 },
  { year: "2021", value: 2500 },
  { year: "2022", value: 3000 },
];

const dataRevenue = [
  { year: "201", value: 800 },
  { year: "201", value: 1300 },
  { year: "201", value: 2100 },
  { year: "202", value: 2600 },
  { year: "2021", value: 3100 },
  { year: "2022", value: 3900 },
];

const trendingStocks = [
  { name: "Coinspace", price: "$100", return: "+10%" },
  { name: "DocSign", price: "$100", return: "-8%" },
  { name: "Target & Co.", price: "$100", return: "+10%" },
  { name: "HNL Bank", price: "$100", return: "+10%" },
  { name: "Average Motors", price: "$100", return: "0%" },
];

const myInvestments = [
  {
    name: "Apple Market",
    category: "Ecommerce, Marketplace",
    value: "$200.00",
    return: "-23%",
    icon: "🍎",
  },
  {
    name: "Greenery",
    category: "Ecommerce, Marketplace",
    value: "$200.00",
    return: "0%",
    icon: "🌿",
  },
  {
    name: "T Motors",
    category: "Electric vehicles",
    value: "$200.00",
    return: "+16%",
    icon: "🚗",
  },
];

export default function Investments() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Investments</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Total invested</p>
          <p className="text-xl font-semibold">$10,000.00</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-500">No. of investments</p>
          <p className="text-xl font-semibold">1,600</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Rate of return</p>
          <p className="text-xl font-semibold">+4.75</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="mb-2 font-semibold">Yearly total investment</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dataInvestment}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#bbb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <p className="mb-2 font-semibold">Yearly total revenue</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dataRevenue}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="mb-2 font-semibold">My investment</p>
          <div className="space-y-2">
            {myInvestments.map((item, idx) => (
              <div key={idx} className={`flex justify-between items-center p-4 rounded-lg ${item.return === "0%" ? "bg-gray-200" : "bg-white"}`}>
                <div className="flex gap-3 items-center">
                  <div className="text-xl">{item.icon}</div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p>{item.value}</p>
                  <p className="text-sm text-gray-500">{item.return} Return value</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-semibold">Trending stock</p>
          <div className="bg-black text-white p-4 rounded-lg">
            <div className="grid grid-cols-3 font-semibold border-b border-gray-600 pb-2 mb-2">
              <p>Name</p>
              <p>Price</p>
              <p>Return</p>
            </div>
            {trendingStocks.map((stock, idx) => (
              <div key={idx} className="grid grid-cols-3 text-sm py-1 border-b border-gray-700 last:border-0">
                <p>{stock.name}</p>
                <p>{stock.price}</p>
                <p>{stock.return}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
