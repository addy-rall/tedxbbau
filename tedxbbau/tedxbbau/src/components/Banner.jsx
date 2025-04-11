import React, { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react"; // Calendar Icon

const ToBeAnnounced = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-04-29T00:00:00");
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

  const isCountdownOver = Object.keys(timeLeft).length === 0;

  return (
    <div className="relative py-20 flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center opacity-30"></div>

      <div className="text-center relative z-10 px-4">
        <h1 className="font-bold text-5xl md:text-7xl text-red-800">
          {isCountdownOver ? (
            <>We're <span className="text-white">LIVE</span> Now!</>
          ) : (
            <>Event Will Be <span className="text-white">LIVE</span> in:</>
          )}
        </h1>

        {/* Event Date */}
        <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl text-gray-300 font-medium mt-6">
          <CalendarDays size={36} className="text-white" />
          <span>
            Date: <span className="text-white font-semibold">April 29, 2025</span>
          </span>
        </div>

        {!isCountdownOver && (
          <>
            <div className="flex flex-col sm:flex-row justify-center gap-12 mt-12 text-4xl md:text-5xl font-bold">
              <div className="flex justify-center gap-10">
                <div>
                  <span>{timeLeft.days}</span>{" "}
                  <span className="text-gray-400 text-2xl">Days</span>
                </div>
                <div>
                  <span>{timeLeft.hours}</span>{" "}
                  <span className="text-gray-400 text-2xl">Hours</span>
                </div>
              </div>
              <div className="flex justify-center gap-10">
                <div>
                  <span>{timeLeft.minutes}</span>{" "}
                  <span className="text-gray-400 text-2xl">Minutes</span>
                </div>
                <div>
                  <span>{timeLeft.seconds}</span>{" "}
                  <span className="text-gray-400 text-2xl">Seconds</span>
                </div>
              </div>
            </div>

            <h1 className="py-10 text-4xl md:text-5xl font-bold tracking-wide">
              <span className="block sm:inline">BOOK YOUR TICKETS</span>{" "}
              <span className="block sm:inline text-red-800">NOW</span>
            </h1>

            <a
              href="https://konfhub.com/widget/f062fb1c-b20e-42a0-9a9e-e7801882b363"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 bg-red-700 cursor-pointer text-white text-lg md:text-xl font-semibold rounded-xl hover:bg-red-800 transition duration-300">
                Book Ticket
              </button>
            </a>

            <p className="font-bold mt-10 text-3xl md:text-4xl text-gray-400">STAY TUNED!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ToBeAnnounced;
