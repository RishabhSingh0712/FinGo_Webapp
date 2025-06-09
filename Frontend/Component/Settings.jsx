import React, { useState } from "react";
import { FaBell, FaUser, FaLock, FaBellSlash, FaCreditCard } from "react-icons/fa";

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    firstName: "Rishabh",
    lastName: "Singh",
    email: "email@gmail.com",
    phone: "+91 1234567890",
    address: "RS Tower, 1234 ",
    zip: "226010",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Data:", formData);
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <div className="flex items-center gap-4">
          <FaBell className="text-lg" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span>Rishabh Singh</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-10 border-b mb-10 text-gray-600">
        <div className="flex items-center gap-2 pb-2 border-b-2 border-black text-black cursor-pointer">
          <FaUser /> Personal info
        </div>
        <div className="flex items-center gap-2 pb-2 cursor-pointer">
          <FaLock /> Password and security
        </div>
        <div className="flex items-center gap-2 pb-2 cursor-pointer">
          <FaBellSlash /> Notification
        </div>
        <div className="flex items-center gap-2 pb-2 cursor-pointer">
          <FaCreditCard /> Choose plan
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-start items-center gap-4 mb-8">
        <div className="relative w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="absolute bottom-0 right-0 bg-black text-white text-xs rounded-full p-1 cursor-pointer">✎</span>
        </div>
      </div>

      {/* Form */}
      <form className="max-w-3xl space-y-6" onSubmit={handleSubmit}>
        <div className="flex gap-6">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="flex-1 border p-3 rounded"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            className="flex-1 border p-3 rounded"
          />
        </div>

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone number"
          className="w-full border p-3 rounded"
        />

        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Street Address"
          className="w-full border p-3 rounded"
        />

        <div className="flex gap-6">
          <input
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="ZIP code"
            className="w-1/3 border p-3 rounded"
          />
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-1/3 border p-3 rounded"
          />
        </div>

        <div className="flex gap-6">
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="w-1/2 border p-3 rounded"
          />
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="w-1/2 border p-3 rounded"
          />
        </div>

        <button type="submit" className="bg-black text-white py-3 px-6 rounded hover:opacity-90">
          Save changes
        </button>
      </form>
    </div>
  );
};

export default AccountSettings;
