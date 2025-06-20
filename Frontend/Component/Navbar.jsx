import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `hover:text-black flex items-center gap-2 cursor-pointer ${
      isActive ? "text-black font-semibold" : "text-gray-600"
    }`;

  return (
    <aside className="w-[15%] h-screen bg-gray-100 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">FinGo</h2>
        <nav className="space-y-4">
          <NavLink to="/dashboard" className={linkClass}>
            🏠 Dashboard
          </NavLink>
          <NavLink to="/transfer" className={linkClass}>
            ↩️ Transfer
          </NavLink>
          <NavLink to="/transactions" className={linkClass}>
            🔁 Transactions
          </NavLink>
          <NavLink to="/AccountsAndCards" className={linkClass}>
            💳 Accounts and Cards
          </NavLink>
          <NavLink to="/Investment" className={linkClass}>
            📈 Investments
          </NavLink>
        </nav>
      </div>
      <div className="space-y-4">
        <NavLink to="/settings" className={linkClass}>
          👤 Settings
        </NavLink>
        <NavLink to="/" className="text-gray-600 hover:text-black flex items-center gap-2">
          🔚 Log out
        </NavLink>
      </div>
    </aside>
  );
};

const NavbarPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default NavbarPage;
