import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const SidebarMenu = ({ userData }) => {
  const { logout } = useAuth();

  return (
    <div className="h-screen w-56 mt-3 bg-gradient-to-b from-white to-blue-50 text-gray-800 p-6 fixed left-0 shadow-xl z-50 rounded-r-2xl border-r border-blue-100">
      {/* Logo / Title */}
      <Link
        to="/"
        className="flex items-center gap-2 text-blue-600 text-2xl font-extrabold mb-10 transition-all hover:text-green-500"
      >
        StoreManager
      </Link>

      {/* Profile Link */}
      <Link
        to="/dashboard"
        className="flex items-center text-lg font-medium mb-4 px-3 py-2 rounded-lg hover:bg-green-100 hover:text-green-600 transition-all"
      >
        Profile
      </Link>

      {/* Dynamic Menu Items */}
      {userData && userData.length > 0 ? (
        userData.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center text-lg font-medium mb-4 px-3 py-2 rounded-lg hover:bg-green-100 hover:text-green-600 transition-all"
          >
            {item.label}
          </Link>
        ))
      ) : (
        <span className="text-gray-400 text-sm italic">No data</span>
      )}

      {/* Logout */}
      <Link
        to="/"
        onClick={logout}
        className="mt-10 flex items-center gap-2 text-lg font-medium px-3 py-2 rounded-lg hover:bg-red-100 hover:text-red-500 transition-all"
      >
        Logout
      </Link>
    </div>
  );
};

export default SidebarMenu;
