import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

/* ===== IMAGES ===== */

import OrganiserImg from "../assets/Lakhan.png";
import CoorganiserImg from "../assets/Aditya.png";
import abc from "../assets/abc.jpeg";
import nisha from "../assets/nisha.jpeg";
import jai from "../assets/jai.jpeg";
import umra from "../assets/umra.jpeg";
import kanak from "../assets/kanak.jpeg";
import pankaj from "../assets/pankaj.jpeg";
import saumya from "../assets/saumya.jpeg";
import harshika from "../assets/harshika.jpeg";
import divi from "../assets/divi.jpeg";
import dev from "../assets/dev.jpeg";
import a from "../assets/a.png";

/* ===== TEAM MEMBERS ===== */

const teamMembers = [
  { name: "Lakhan Varshney", role: "Organizer", image: OrganiserImg, linkedin: "#" },
  { name: "Aditya Kumar Bharti", role: "Co-Organizer", image: CoorganiserImg, linkedin: "#" },
  { name: "Divyanshi Vishwakarma", role: "Head Operations", image: divi, linkedin: "#" },
  { name: "Harshika Singh", role: "Web Operations Team", image: harshika, linkedin: "#" },
  { name: "Jai Kishan Dhurwe", role: "Web Operations Team", image: jai, linkedin: "#" },
  { name: "Pankaj Pal", role: "Web Operations Team", image: pankaj, linkedin: "#" },
  { name: "Adya Misra", role: "Head of Web Operations Team", image: a, linkedin: "#" },
  { name: "Nisha Tiwari", role: "Design Team", image: nisha, linkedin: "#" },
  { name: "Umra Shaheen", role: "Design Team", image: umra, linkedin: "#" },
  { name: "Kanak Singh", role: "Design Team", image: kanak, linkedin: "#" },
  { name: "Devansh Giri", role: "Head of Content Team", image: dev, linkedin: "#" },
  { name: "Saumya Rani", role: "Marketing Lead", image: saumya, linkedin: "#" },
  { name: "Raman Choudhary", role: "Head of Design Team", image: abc, linkedin: "#" },
 
  

];

/* ===== TEAM CARD ===== */

const TeamCard = ({ member }) => {
  const [hovered, setHovered] = useState(false);

  const radius = 92;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className="flex flex-col items-center cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* CIRCLE CONTAINER */}
      <div className="relative w-56 h-56 flex items-center justify-center">

        {/* SVG RING */}
        <svg
          className="absolute w-full h-full -rotate-90"
          viewBox="0 0 200 200"
        >
          {/* BASE RING */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="rgba(255,80,80,0.25)"
            strokeWidth="3"
            fill="transparent"
          />

          {/* PROGRESS RING */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="rgba(255,80,80,0.65)"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={hovered ? 0 : circumference}
            style={{
              transition:
                "stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </svg>

        {/* IMAGE */}
        <img
          src={member.image}
          alt={member.name}
          className="
            w-48 h-48 rounded-full object-cover z-10
            transition duration-500
            group-hover:scale-95
          "
        />
      </div>

      {/* NAME */}
      <h3 className="mt-6 text-xl font-semibold text-white text-center">
        {member.name}
      </h3>

      {/* ROLE */}
      <span
        className="
          mt-2 text-sm px-4 py-1 rounded-full
          bg-red-900/30 text-red-300
          transition duration-300
          group-hover:bg-red-500 group-hover:text-white
        "
      >
        {member.role}
      </span>

      {/* LINKEDIN */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-4 text-gray-400 text-lg
          transition duration-300
          group-hover:text-red-400
        "
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

/* ===== TEAM PAGE ===== */

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6">

      {/* TITLE */}
      <h1 className="text-5xl font-bold text-center mb-10">
        Meet Our Team
      </h1>
      <p className="mb-12 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
       The passionate individuals working behind the scenes to bring ideas worth spreading to life through TEDx.
  </p>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>

    </div>
  );
};

export default TeamPage;
