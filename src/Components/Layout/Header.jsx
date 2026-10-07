import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Traditional Fetch",
      path: "/trad",
    },
    {
      name: "React Query",
      path: "/rq",
    },
    {
      name: "Infinite Scroll",
      path: "/infinite",
    },
  ];

  return (
    <header className="border-b border-blue-900 bg-slate-950 text-white shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide text-blue-400 transition duration-300 hover:text-blue-300"
        >
          API<span className="text-white">App</span>
        </NavLink>

        {/* Navbar Links */}
        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                    : "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;