import React, { useEffect, useState } from "react";

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
    <div className="relative h-[50%] flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center opacity-30"></div>

      <div className="text-center relative z-10">
        <h1 className="font-bold text-center text-5xl md:text-6xl text-red-800 p-3">
          {isCountdownOver ? (
            <>We're <span className="text-white">LIVE</span> Now!</>
          ) : (
            <>Event Will Be <span className="text-white">LIVE</span> in:</>
          )}
        </h1>

        {/* Event Date */}
        <p className="text-xl text-4xl md:text-5xl text-gray-300 font-medium mt-2">
          📅 Date: <span className="text-white text-4xl md:text-5xl font-semibold">April 29, 2025</span>
        </p>

        {!isCountdownOver && (
          <>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mt-8 text-3xl">
              <div className="flex justify-center gap-8">
                <div>
                  <span className="font-bold">{timeLeft.days}</span>{" "}
                  <span className="text-gray-400">Days</span>
                </div>
                <div>
                  <span className="font-bold">{timeLeft.hours}</span>{" "}
                  <span className="text-gray-400">Hours</span>
                </div>
              </div>
              <div className="flex justify-center gap-8">
                <div>
                  <span className="font-bold">{timeLeft.minutes}</span>{" "}
                  <span className="text-gray-400">Minutes</span>
                </div>
                <div>
                  <span className="font-bold">{timeLeft.seconds}</span>{" "}
                  <span className="text-gray-400">Seconds</span>
                </div>
              </div>
            </div>

            <h1 className="py-6 text-4xl md:text-3xl font-bold tracking-wider">
              <span className="block sm:inline">BOOK YOUR TICKETS</span>{" "}
              <span className="block sm:inline text-red-800">NOW</span>
            </h1>
            <a
              href="https://konfhub.com/widget/f062fb1c-b20e-42a0-9a9e-e7801882b363"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-red-700 cursor-pointer text-white text-sm md:text-base lg-text-lg font-semibold rounded-lg hover:bg-red-800 transition duration-300">
                Book Ticket
              </button>
            </a>

            <p className="font-bold mt-5 text-[30px] text-gray-400">STAY TUNED!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ToBeAnnounced;
