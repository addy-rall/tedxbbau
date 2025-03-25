import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
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
      style={{
        backgroundColor: `rgb(200, 0, 0, ${scrollPercentage / 100})`,
      }}
    >
      <div
        className="h-1 bg-red-500 fixed top-0 left-0"
        style={{ width: `${scrollPercentage}%` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
     
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 text-lg font-semibold text-white">
          <Link to="/" className="hover:text-gray-200 transition flex items-center">
            <FaHome size={24} className="mr-2 text-white" />
          </Link>
          <a href="https://www.ted.com" className="hover:text-gray-200 transition" target="_blank" rel="noopener noreferrer">
            TED
          </a>
          <Link to="/" className="hover:text-gray-200 transition">About</Link>
          <Link to="/speakers" className="hover:text-gray-200 transition">Speakers</Link>
          <Link to="/contact" className="hover:text-gray-200 transition">About Team</Link>
          <Link to="/about-team" className="hover:text-gray-200 transition">Contact Us</Link>
        </div>

        <div className="hidden md:block">
          <a
            href="https://konfhub.com/widget/f062fb1c-b20e-42a0-9a9e-e7801882b363?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10"  // Replace with your actual ticket link
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg transition"
            style={{
              backgroundColor: `rgb(${255 - (scrollPercentage * 2.5)}, 0, 0)`, // Dynamic red-black
              color: "white",
            }}
          >
            Book Ticket
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black text-center py-4 space-y-4 text-white">
          <Link to="/" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="https://www.ted.com" className="block hover:text-gray-300" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>TED</a>
          <Link to="/" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/about-team" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>About Team</Link>
          <a
            href="https://konfhub.com/widget/f062fb1c-b20e-42a0-9a9e-e7801882b363?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10"  // Replace with your actual ticket link
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg transition w-full"
            style={{
              backgroundColor: `rgb(${255 - (scrollPercentage * 2.5)}, 0, 0)`,
              color: "white",
            }}
          >
            Book Ticket
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;