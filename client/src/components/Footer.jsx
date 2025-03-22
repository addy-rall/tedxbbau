import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import logo from "../assets/tedxlogo.png"; // Update with your actual logo path
import { Link } from "react-router-dom"; // Remove if not using React Router

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
        
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Center - Social Media & Quick Links */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-red-700">Follow Us On:</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} className="hover:text-red-500 transition" />
              </a>
              <a href="https://www.youtube.com/@TEDx" target="_blank" rel="noopener noreferrer">
                <ImYoutube2 size={24} className="hover:text-red-500 transition" />
              </a>
              <a href="https://instagram.com/tedxbbau" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="hover:text-red-500 transition" />
              </a>
              <a href="https://linkedin.com/company/tedxbbau/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="hover:text-red-500 transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-red-700">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
              <li><a href="https://www.ted.com" className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer">TED</a></li>
              <li><Link to="/" className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer">About</Link></li>
              <li><Link to="/about-team" className="hover:text-red-500 transition">Team</Link></li>
            </ul>
          </div>
        </div>

        {/* Right - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-red-700">Contact Us On:</h3>
          <p className="mt-3"><a href="mailto:tedx.bbau@gmail.com" className="hover:text-red-500 transition">tedx.bbau@gmail.com</a></p>
          <p className="mt-2"><a href="tel:+91 7906473285" className="hover:text-red-500 transition">+91 7906473285</a></p>
          <p className="mt-1"><a href="tel:+91 6394893708" className="hover:text-red-500 transition">+91 6394893708</a></p>
        </div>

      </div>

      {/* Bottom - Copyright */}
      <div className="text-center mt-8 text-gray-400">
        © 2025 TEDxBBAU. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;