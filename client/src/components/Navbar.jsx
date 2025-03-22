import { useState } from "react";
import { Link } from "react-router-dom"; 
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import logo from "../assets/tedxlogo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const handleBookTicket = () => {
    setShowBanner(true);
    setTimeout(() => setShowBanner(false), 3000); 
  };

  return (
    <nav className="bg-black text-white fixed w-screen z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Link to="/">
            { <img src={logo} alt="Logo" className="h-12 w-auto" /> }
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link to="/" className="hover:text-red-500 transition flex items-center">
              <FaHome size={24} className="mr-2" /> 
            </Link>
          <a href="https://www.ted.com" className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer">TED</a>
          <Link to="/" className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer">About</Link>
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
          <Link to="/about-team" className="hover:text-red-500 transition">About Team</Link>
        </div>

        {/* "Book Ticket" Button on the right */}
        <div className="hidden md:block">
          <button
            onClick={handleBookTicket}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
          >
            Book Ticket
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-center py-4 space-y-4">
          <Link to="/" className="block hover:text-red-500" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="https://www.ted.com" className="block hover:text-red-500" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>TED</a>
          <a href="https://medium.com" className="block hover:text-red-500" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Blog</a>
          <Link to="/contact" className="block hover:text-red-500" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/about-team" className="block hover:text-red-500" onClick={() => setIsOpen(false)}>About Team</Link>
          <button
            onClick={handleBookTicket}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition w-full"
          >
            Book Ticket
          </button>
        </div>
      )}

      {/* Flickering Banner */}
      {showBanner && (
        <div className="fixed top-16 left-0 w-full bg-red-600 text-white text-center py-2 animate-flicker z-40 ">
           Tickets will soon be available! Stay tuned. 
        </div>
      )}
    </nav>
  );
};

export default Navbar;