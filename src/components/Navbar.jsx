import React from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import BgImage from "../assets/BgImage.png";
import Search from "./Search"



export default function Navbar() {
  const navLinks = [
    { name: "Popular", path: "/popular" },
    { name: "Guide", path: "/guide" },
  ];

  return (
    <nav
      aria-label="Main Navigation"
      className="p-0 m-0 top-0 w-full min-h-screen text-white z-[1000] bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-around items-center px-2">
        <Link to="/" className="flex items-center">
          <img
            className="w-[300px] h-[60px] object-cover"
            src={Logo}
            alt="CineVault Logo"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-5 font-semibold text-[20px]">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400" : "text-white"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Search />
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="flex justify-center py-4 mt-40 px-4 text-center">
        <h1 className="font-serif text-[40px] md:text-[75px] max-w-[800px]">
          Your ultimate vault for movies & shows
        </h1>
      </div>
    </nav>
  );
}
