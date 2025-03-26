import { useState, useEffect } from "react";
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

  // Smooth scroll function
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

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
          <div onClick={() => scrollToSection('home')} className="cursor-pointer">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>
        </div>

        <div className="hidden md:flex space-x-6 text-lg font-semibold text-white">
          <div onClick={() => scrollToSection('home')} className="hover:text-gray-200 transition flex items-center cursor-pointer">
            <FaHome size={24} className="mr-2 text-white" />
          </div>
          <a href="https://www.ted.com/tedx/events/62035" className="hover:text-gray-200 transition" target="_blank" rel="noopener noreferrer">
            TED
          </a>
          <div onClick={() => scrollToSection('about')} className="hover:text-gray-200 transition cursor-pointer">About</div>
          <div onClick={() => scrollToSection('speakers')} className="hover:text-gray-200 transition cursor-pointer">Speakers</div>
          <div onClick={() => scrollToSection('team')} className="hover:text-gray-200 transition cursor-pointer">Team</div>
          <div onClick={() => scrollToSection('contact')} className="hover:text-gray-200 transition cursor-pointer">Contact</div>
        </div>

        <div className="hidden md:block">
          <a
            href="https://konfhub.com/widget/f062fb1c-b20e-42a0-9a9e-e7801882b363?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg transition"
            style={{
              backgroundColor: `rgb(${255 - (scrollPercentage * 2.5)}, 0, 0)`,
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
          <div onClick={() => scrollToSection('home')} className="block hover:text-gray-300 cursor-pointer">Home</div>
          <a href="https://www.ted.com" className="block hover:text-gray-300" target="_blank" rel="noopener noreferrer">TED</a>
          <div onClick={() => scrollToSection('about')} className="block hover:text-gray-300 cursor-pointer">About</div>
          <div onClick={() => scrollToSection('speakers')} className="block hover:text-gray-300 cursor-pointer">Speakers</div>
          <div onClick={() => scrollToSection('team')} className="block hover:text-gray-300 cursor-pointer">Team</div>
          <div onClick={() => scrollToSection('contact')} className="block hover:text-gray-300 cursor-pointer">Contact</div>
          <a
            href="https://konfhub.com/widget/f062fb1c-b20e-42a0-9a9e-e7801882b363?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10"
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
