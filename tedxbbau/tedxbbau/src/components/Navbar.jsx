import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/tedxlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed w-full top-0 z-50 transition-all duration-300"
      style={{ backgroundColor: `rgb(200, 0, 0, ${scrollPercentage / 100})` }}
    >
      <div className="h-1 bg-red-500 fixed top-0 left-0" style={{ width: `${scrollPercentage}%` }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <NavLink to="/" className="cursor-pointer">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </NavLink>
        </div>

        <div className="hidden md:flex space-x-6 text-lg font-semibold text-white">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500' : 'hover:text-gray-200 transition flex items-center'}>
            <FaHome size={24} className="mr-2 text-white" />
          </NavLink>
          <a href="https://www.ted.com/tedx/events/62035" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition">TED</a>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-500' : 'hover:text-gray-200 transition'}>About</NavLink>
          <NavLink to="/speakers" className={({ isActive }) => isActive ? 'text-red-500' : 'hover:text-gray-200 transition'}>Speakers</NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'text-red-500' : 'hover:text-gray-200 transition'}>Team</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-500' : 'hover:text-gray-200 transition'}>Contact</NavLink>
        </div>

        <div className="hidden md:block">
          <a href="https://konfhub.com/widget/f062fb1c-b20e-42a0-9a9e-e7801882b363" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg transition" style={{ backgroundColor: `rgb(${255 - (scrollPercentage * 2.5)}, 0, 0)`, color: "white" }}>Book Ticket</a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-center py-4 space-y-4 text-white">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'text-red-500 block' : 'block hover:text-gray-300'}>Home</NavLink>
          <a href="https://www.ted.com/tedx/events/62035" target="_blank" rel="noopener noreferrer" className="block hover:text-gray-300">TED</a>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'text-red-500 block' : 'block hover:text-gray-300'}>About</NavLink>
          <NavLink to="/speakers" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'text-red-500 block' : 'block hover:text-gray-300'}>Speakers</NavLink>
          <NavLink to="/team" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'text-red-500 block' : 'block hover:text-gray-300'}>Team</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'text-red-500 block' : 'block hover:text-gray-300'}>Contact</NavLink>
          <a href="https://konfhub.com/widget/f062fb1c-b20e-42a0-9a9e-e7801882b363" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg transition w-full" style={{ backgroundColor: `rgb(${255 - (scrollPercentage * 2.5)}, 0, 0)`, color: "white" }}>Book Ticket</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
