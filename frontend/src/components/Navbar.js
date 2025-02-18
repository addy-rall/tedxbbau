"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "TEDxBBAU 2025", path: "/event" },
    { name: "Past Talks", path: "/talks" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md px-6 md:px-10 py-4 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-red-700">TED<span className="text-black">x</span>BBAU</span>
        </Link>


        <button className="md:hidden text-black" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu size={24} />
        </button>


        <ul className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                onClick={() => setActive(link.name)}
                className={`relative transition duration-300 hover:text-red-500 ${active === link.name ? "text-red-500" : "text-white"
                  }`}
              >
                {link.name}
                {active === link.name && (
                  <span className="absolute left-0 bottom-[-3px] w-full h-[2px] bg-red-500"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>


      {menuOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md text-black flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                onClick={() => {
                  setActive(link.name);
                  setMenuOpen(false);
                }}
                className="block text-lg hover:text-red-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
