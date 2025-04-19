import React from 'react';
import CG1 from "../assets/CG1.png"
import CG2 from "../assets/CG2.png"
import CG3 from "../assets/CG3.png"
const ChiefCard = ({ name, surname, title, image, rotateClass }) => {
  return (
    <div className={`relative w-72 h-96 bg-red-600 p-1 transform  ${rotateClass}`}>
      <div className="w-full h-full bg-black relative overflow-hidden">
        <img 
          src={image} 
          alt={`${name} ${surname}`} 
          className="w-full h-full object-cover z-100"
        />
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h2 className="text-white text-2xl font-bold">{name}</h2>
          <h2 className="text-white text-2xl font-bold">{surname}</h2>
          <p className="text-white text-sm mt-1">{title}</p>
        </div>
      </div>
      <div className="absolute -right-6 top-1/4 w-14 h-8 bg-red-600" />
      <div className="absolute -left-6 bottom-1/4 w-14 h-8 bg-red-600" />
    </div>
  );
};

const ChiefSection = () => {
  const guests = [
    {
      name: "Vishak G IYER",
     
      title: "DM",
      image: CG1,
    },
    {
      name: "Heera lal",
      
      title: "IAS",
      image: CG2,
    },
    {
      name: "Prof. Raj K Mittal",
     
      title: "VC",
      image: CG3,
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden px-4 py-10">
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 mb-12 mt-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-red-600 text-center">
          Chief <span className="text-white">Guests</span>
        </h1>
        <div className="w-24 h-1 bg-red-700 mx-auto mt-3"></div>
        <p className="text-gray-400 text-sm md:text-base mt-8">
          Meet the inspiring personalities joining us this edition
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-10 mt-4">
        {guests.map((guest, index) => {
          const rotateClass = index === 1 ? 'rotate-[5deg]' : 'rotate-[-5deg]';
          return <ChiefCard key={index} {...guest} rotateClass={rotateClass} />;
        })}
      </div>
    </div>
  );
};

export default ChiefSection;
