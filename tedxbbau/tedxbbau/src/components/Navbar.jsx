import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/tedxlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navigateToTeam = () => {
    setIsOpen(false);
    navigate('/team');
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    if (sectionId === 'home') {
      scrollToTop();
      return;
    }
    if (sectionId === 'team') {
      navigateToTeam();
      return;
    }
    if (!isHomePage && ["home", "about", "speakers", "contact"].includes(sectionId)) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; 
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <div className="fixed w-full top-0 z-40 h-16 bg-black"></div>
      <nav className="fixed w-full top-0 z-50 transition-all duration-300" style={{ backgroundColor: `rgba(200, 0, 0, ${scrollPercentage / 100})` }}>
        <div className="h-1 bg-red-500 fixed top-0 left-0" style={{ width: `${scrollPercentage}%` }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-auto cursor-pointer" 
              onClick={() => scrollToSection('home')} 
            />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-lg font-semibold text-white">
            <NavLink to="/">
              <button 
                className="hover:text-gray-200 transition cursor-pointer bg-transparent border-none text-white text-lg font-semibold p-0" 
                onClick={() => scrollToTop()}
              >
                Home
              </button>
            </NavLink>
            <a 
              href="https://www.ted.com/tedx/events/62035" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-200 transition"
            >
              TED
            </a>
            <button 
              className="hover:text-gray-200 transition cursor-pointer bg-transparent border-none text-white text-lg font-semibold p-0" 
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className="hover:text-gray-200 transition cursor-pointer bg-transparent border-none text-white text-lg font-semibold p-0" 
              onClick={() => scrollToSection('speakers')}
            >
              Speakers
            </button>
            <NavLink 
              to="/team"
              className="hover:text-gray-200 transition cursor-pointer bg-transparent border-none text-white text-lg font-semibold p-0"
            >
              Team
            </NavLink>
            <button 
              className="hover:text-gray-200 transition cursor-pointer bg-transparent border-none text-white text-lg font-semibold p-0" 
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>
          <div className="hidden md:block">
            <a 
              href="https://konfhub.com/f062fb1c-b20e-42a0-9a9e-e7801882b363" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-lg transition-all duration-300" 
              style={{ backgroundColor: `rgb(${255 - (scrollPercentage * 2.5)}, 0, 0)`, color: "white" }}
            >
              Register Now
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white bg-transparent border-none">
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-black text-center py-4 w-full text-white">
            <div className="flex flex-col px-4">
              <button onClick={() => scrollToTop()} className="block hover:text-gray-300 cursor-pointer w-full py-2 text-left">Home</button>
              <a href="https://www.ted.com/tedx/events/62035" target="_blank" rel="noopener noreferrer" className="block hover:text-gray-300 py-2 text-left">TED</a>
              <button onClick={() => scrollToSection('about')} className="block hover:text-gray-300 cursor-pointer w-full py-2 text-left">About</button>
              <button onClick={() => scrollToSection('speakers')} className="block hover:text-gray-300 cursor-pointer w-full py-2 text-left">Speakers</button>
              <NavLink to="/team" className="block hover:text-gray-300 cursor-pointer w-full py-2 text-left" onClick={() => setIsOpen(false)}>Team</NavLink>
              <button onClick={() => scrollToSection('contact')} className="block hover:text-gray-300 cursor-pointer w-full py-2 text-left">Contact</button>
              <a 
                href="https://konfhub.com/f062fb1c-b20e-42a0-9a9e-e7801882b363" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-center"
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
