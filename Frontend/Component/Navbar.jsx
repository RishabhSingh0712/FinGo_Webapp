import React, { useState } from "react";
import Settings from "./Settings"; 
import Dashboard from "./Dashboard"; 

const Sidebar = ({ onSelect }) => {
  return (
    <aside className="w-[15%] h-screen bg-gray-100 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">FinGo</h2>
        <nav className="space-y-4">
          <div onClick={() => onSelect("Dashboard")} className="hover:text-black text-gray-600 cursor-pointer flex items-center gap-2">
            🏠 Dashboard
          </div>
          <div onClick={() => onSelect("transfer")} className="hover:text-black text-gray-600 cursor-pointer flex items-center gap-2">
            ↩️ Transfer
          </div>
          <div onClick={() => onSelect("transaction")} className="hover:text-black text-gray-600 cursor-pointer flex items-center gap-2">
            🔁 Transaction
          </div>
          <div onClick={() => onSelect("accounts")} className="hover:text-black text-gray-600 cursor-pointer flex items-center gap-2">
            💳 Accounts and Cards
          </div>
          <div onClick={() => onSelect("investments")} className="hover:text-black text-gray-600 cursor-pointer flex items-center gap-2">
            📈 Investments
          </div>
        </nav>
      </div>
      <div className="space-y-4">
        <div onClick={() => onSelect("settings")} className="hover:text-black text-gray-600 cursor-pointer flex items-center gap-2">
          👤 Settings
        </div>
        <div className="hover:text-black text-gray-600 cursor-pointer flex items-center gap-2">
          🔚 Log out
        </div>
      </div>
    </aside>
  );
};

const DashboardContent = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <p>Welcome to your dashboard!</p>
  </div>
);

export default function AccountLayout() {
  const [selected, setSelected] = useState("dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={setSelected} />
      <main className="flex-1 overflow-y-auto bg-white">
        {selected === "Dashboard" && <Dashboard />}
        {selected === "settings" && <Settings />}
      </main>
    </div>
  );
}
