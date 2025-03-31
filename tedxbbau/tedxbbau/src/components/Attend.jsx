import React, { useState, useEffect, useRef } from 'react';

const cards = [
  {
    title: "Exposure to new perspectives",
    details: "Listen to powerful speakers who can change the way you think about various topics.",
  },
  {
    title: "Personal growth",
    details: "Enhance your skills, develop new perspectives, and boost confidence.",
  },
  {
    title: "Inspiration",
    details: "TEDx talks provide inspiration and spark creativity through innovative ideas.",
  },
  {
    title: "Networking opportunities",
    details: "Build connections with like-minded and passionate individuals.",
  }
];

const WhyAttend = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!container || !cardsContainer) return;

    const handleScroll = () => {
      const cardsContainerRect = cardsContainer.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const startOffset = window.innerHeight * 0.2; 
      const endOffset = window.innerHeight * 0.8; 
      const progress = Math.max(0, Math.min(100, 
        (startOffset - cardsContainerRect.top) / 
        (endOffset - startOffset) * 100
      ));

      const bufferedProgress = Math.max(0.5, Math.min(98.8, progress));
      setScrollProgress(bufferedProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-center p-6 md:p-12 relative overflow-hidden">
      <div className="relative flex justify-center items-center mb-16 h-40">
        <h1 className="absolute text-[4rem] md:text-[8rem] font-bold text-gray-700 tracking-wide">
          Why to Attend?
        </h1>
        <h2 className="relative text-2xl md:text-4xl font-bold text-white tracking-widest">
          Why to Attend?
        </h2>
      </div>
      <div 
        className="hidden md:block absolute left-1/2 top-[250px] bottom-0 w-1 bg-gray-700 transform -translate-x-1/2 z-20"
      >
        <div 
          className="absolute left-1/2 w-4 h-4 bg-red-700 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
          style={{ top: `${scrollProgress}%` }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex items-center mt-16 md:mt-32">
        <div 
          ref={cardsContainerRef}
          data-cards-container 
          className="grid grid-cols-1 gap-4 w-full relative z-10"
        >
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`
                w-full flex 
                ${index % 2 === 0 ? 'justify-start' : 'justify-end'}
                md:space-x-8 // Add space between line and cards
              `}
            >
              <div 
                className={`
                  w-full md:w-1/2 
                  bg-gradient-to-b from-red-900 to-black 
                  rounded-lg shadow-lg p-5 
                  border border-gray-700 
                  text-white
                  ${index % 2 === 0 
                    ? 'md:mr-auto md:ml-[calc(50%+1rem)]' 
                    : 'md:ml-auto md:mr-[calc(50%+1rem)]'}
                `}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm md:text-base">{card.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;