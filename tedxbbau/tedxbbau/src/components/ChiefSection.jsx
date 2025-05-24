import React, { useState } from 'react';
import CG1 from "../assets/CG1.png";
import CG2 from "../assets/CG2.png";
import CG3 from "../assets/CG3.png";
import CG4 from "../assets/guestc.png";

const ChiefCard = ({ name, surname, title, image, rotateClass }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative w-72 h-96 md:w-80 md:h-[440px] cursor-pointer transition-transform duration-500 ${
        isClicked ? 'rotate-0' : rotateClass
      }`}
    >
      {/* Glow and Diagonal Light */}
      <div className="relative w-full h-full p-1 bg-gradient-to-br from-red-600 via-black to-red-800 shadow-[0_0_20px_rgba(255,0,0,0.4)]">
        
        {/* Diagonal light shadow */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)"
          }}
        />

        {/* Image Frame - sharp edges */}
        <div className="relative w-full h-full bg-black p-1 border-4 border-red-800">
          <div className="relative w-full h-full overflow-hidden border-2 border-black">
            
            {/* Guest image */}
            <img
              src={image}
              alt={`${name} ${surname}`}
              className="w-full h-full object-cover"
            />

            {/* Red Squares - larger with 70% opacity */}
            <div className="absolute top-0 left-0 w-12 h-12 bg-red-600 opacity-30 z-20" />
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-600 opacity-30 z-20" />

            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-white text-2xl font-bold">{name}</h2>
              <h2 className="text-white text-2xl font-bold">{surname}</h2>
              <p className="text-white text-sm mt-1">{title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Red Bars */}
      <div className="absolute -right-6 top-1/4 w-10 h-8 bg-red-600" />
      <div className="absolute -left-6 bottom-1/4 w-10 h-8 bg-red-600" />
    </div>
  );
};

const ChiefSection = () => {
  const guests = [
    {
      name: "Mr. Vishak G Iyer",
      surname: "",
      title: "District Magistrate, Lucknow",
      image: CG1,
    },
    {
      name: "Dr. Heera Lal",
      surname: "",
      title: "Commissioner and Registrar of Cooperative Societies in U.P",
      image: CG2,
    },
    {
      name: "Prof. Raj K Mittal",
      surname: "",
      title: "Vice Chancellor of BBAU, Lucknow",
      image: CG3,
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden px-4 py-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Title */}
      <div className="relative z-10 mb-12 mt-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-red-600 text-center">
          Chief <span className="text-white">Guests</span>
        </h1>
        <div className="w-24 h-1 bg-red-700 mx-auto mt-3"></div>
        <p className="text-white font-bold text-sm md:text-base mt-6">
          Meet the inspiring personalities joining us this edition
        </p>
      </div>

      {/* Cards Layout */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 mt-4">
        {guests.map((guest, index) => {
          const rotateClass = index === 1 ? 'rotate-[5deg]' : 'rotate-[-5deg]';
          return <ChiefCard key={index} {...guest} rotateClass={rotateClass} />;
        })}
      </div>
    </div>
  );
};

export default ChiefSection;
