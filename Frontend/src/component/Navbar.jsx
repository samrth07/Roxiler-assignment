"use client";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import { useAuth } from "../context/Authcontext";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hideNavbar = location.pathname.startsWith("/Dashboard");
  if (hideNavbar) return null;

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[90vw] rounded-full bg-black px-6 py-3 shadow-lg border-2 border-white">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white transition-colors hover:text-green-400 md:text-3xl"
        >
          StoreManger
        </Link>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <div className="hidden items-center gap-4 text-sm md:flex">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/signin")}
                className="rounded-full border-2 border-white px-5 py-2 text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-gray-800"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="rounded-full bg-green-600 px-5 py-2 text-base font-semibold text-white transition-colors duration-300 hover:bg-green-500"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/findstores")}
                className="rounded-full border-2 border-white px-5 py-2 text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-gray-800"
              >
                FindStore
              </button>
              <button
                onClick={() => navigate("/Dashboard")}
                aria-label="Go to Profile"
                className="flex items-center justify-center rounded-full border-2 border-white p-2 text-white transition-shadow duration-100 hover:shadow-[0_0_10px_2px_white]"
              >
                <User className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 rounded-xl bg-gray-700 px-4 py-4 text-base font-medium text-white md:hidden">
          {!user ? (
            <>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/signin");
                }}
                className="rounded-full border-2 border-white px-4 py-2 transition-all duration-300 hover:bg-white hover:text-gray-800"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/signup");
                }}
                className="rounded-full bg-green-600 px-4 py-2 font-semibold transition-colors hover:bg-green-500"
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/dashboard");
              }}
              aria-label="Go to Profile"
              className="flex items-center justify-center rounded-full border-2 border-white p-2 transition-shadow duration-100 hover:shadow-[0_0_10px_2px_white]"
            >
              <User className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
