import React, { useEffect, useState } from "react";

const ToBeAnnounced = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-25T00:00:00");
    
    const now = new Date();
    const difference = targetDate - now;
    
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div  
      className="relative h-[60vh] flex items-center justify-center bg-black text-white"
    >
      <div className="absolute inset-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center opacity-30"></div>
      
      <div className="text-center relative z-10">
        <h1 className="text-center text-2xl md:text-6xl text-red-800 p-3">
          Event Will Be LIVE in:
        </h1>
        
        <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8 text-3xl">
          <div className="flex justify-center gap-8">
            <div>
              <span className="font-bold">{timeLeft.days}</span> <span className="text-gray-400">Days</span>
            </div>
            <div>
              <span className="font-bold">{timeLeft.hours}</span> <span className="text-gray-400">Hours</span>
            </div>
          </div>
          <div className="flex justify-center gap-8">
            <div>
              <span className="font-bold">{timeLeft.minutes}</span> <span className="text-gray-400">Minutes</span>
            </div>
            <div>
              <span className="font-bold">{timeLeft.seconds}</span> <span className="text-gray-400">Seconds</span>
            </div>
          </div>
        </div>
        
        <h1 className="py-6 text-4xl md:text-3xl font-bold tracking-wider">
          <span className="block sm:inline">BOOK YOUR TICKETS</span> <span className="block sm:inline text-red-800">NOW</span>
        </h1>
        
        <p className="mt-10 text-gray-400">STAY TUNED!</p>
      </div>
    </div>
  );
};

export default ToBeAnnounced;