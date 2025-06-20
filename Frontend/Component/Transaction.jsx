import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Bell, Search, CreditCard, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const data = [
  { name: '1/1', amount: 2400 },
  { name: '1/2', amount: 1398 },
  { name: '1/3', amount: 3800 },
  { name: '1/4', amount: 3000 },
  { name: '1/5', amount: 2400 },
  { name: '1/6', amount: 2500 },
  { name: '1/7', amount: 2600 },
];

const categories = [
  { label: 'Groceries', value: 400 },
  { label: 'Withdrawal', value: 350 },
  { label: 'Retail', value: 280 },
  { label: 'Leisure', value: 150 },
];

const transactions = [
  { id: 1, label: 'Central Burger', type: 'Expense', amount: -189.36, date: 'Pending', category: 'Cafe and Restaurant' },
  { id: 2, label: 'The Market', type: 'Expense', amount: -92.50, date: 'Today', category: 'Groceries' },
  { id: 3, label: 'Quick Transfer', type: 'Income', amount: 350.00, date: 'Today', category: 'Maria Purple' },
  { id: 4, label: 'The Market', type: 'Expense', amount: -36.20, date: 'Today', category: 'Groceries' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Transactions overview</h1>
        <div className="flex items-center gap-4">
          <Bell className="h-5 w-5 text-gray-600" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span>Rishabh Singh</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Checking Account Card */}
            <div className="bg-black text-white rounded-2xl p-4 shadow">
              <p className="text-sm mb-1">Checking Account</p>
              <h2 className="text-3xl font-bold">USD 10,000.00</h2>
              <p className="text-sm">Available: <span className="font-medium">USD 8,000.00</span></p>
              <div className="flex justify-between text-xs mt-4 border-t border-white/10 pt-2">
                <span>+ Income USD 30,000.00</span>
                <span>- Expense USD 20,000.00</span>
              </div>
            </div>

            {/* Credit Card */}
            <div className="bg-gray-200 rounded-2xl p-4">
              <CreditCard className="w-6 h-6 mb-2" />
              <p>Available balance</p>
              <h2 className="text-2xl font-semibold">USD 10,000.00</h2>
              <p className="mt-2 text-sm">1111 **** **** 0000</p>
              <p className="text-xs text-gray-500">Rishabh Singh • 12/24</p>
            </div>
          </div>

          {/* Spending Overview */}
          <div className="bg-white rounded-2xl p-4 shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Spending overview</h3>
              <select className="border p-1 text-sm rounded">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-2xl p-4 shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Top categories</h3>
              <select className="border p-1 text-sm rounded">
                <option>Last 30 days</option>
              </select>
            </div>
            <div className="space-y-2">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span>{cat.label}</span>
                  <span>${cat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Transactions */}
        <div className="bg-white rounded-2xl p-4 shadow">
          <div className="flex items-center border rounded-md px-2 mb-4">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none p-2 text-sm"
            />
          </div>
          <div>
            {['Pending', 'Today'].map((section) => (
              <div key={section} className="mb-4">
                <h4 className="text-xs uppercase text-gray-400 mb-2">{section}</h4>
                {transactions
                  .filter((t) => t.date === section)
                  .map((tx) => (
                    <div key={tx.id} className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="text-sm font-medium">{tx.label}</p>
                        <p className="text-xs text-gray-500">{tx.category}</p>
                      </div>
                      <p className={`text-sm ${tx.amount < 0 ? 'text-red-500' : 'text-green-600'}`}>
                        {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
