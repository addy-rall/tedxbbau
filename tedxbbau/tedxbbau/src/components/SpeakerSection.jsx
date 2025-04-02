import React, { useState, useEffect, useRef, useCallback } from 'react';
import speaker1 from "../assets/speaker1.png";
import speaker2 from "../assets/speaker2.png";
import speaker3 from "../assets/speaker3.png";
import speaker4 from "../assets/speaker4.png";
import speaker5 from "../assets/speaker5.png";
import speaker6 from "../assets/speaker6.png";
import speaker7 from "../assets/speaker7.png";
import speaker8 from "../assets/speaker8.png";

const SpeakersTimeline = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [speakerPositions, setSpeakerPositions] = useState([
    "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom"
  ]);
  const timelineRef = useRef(null);
  
  // For touch swipe functionality
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const MIN_SWIPE_DISTANCE = 50;
  
  const speakers = [
    { 
      id: 1, 
      name: "Amresh Bharti", 
      title: "Digital creator and Founder of WemakeCreators", 
      topic: "", 
      image: speaker1,
      about: "Amresh Bharti is the visionary behind Mahatmaji Technical, a YouTube channel with over 6.9 million subscribers and 446 million views, empowering millions with insights on online earning, personal growth, and education. With a Bachelor of Science in Agriculture (B.Sc Ag) from PGC Ghazipur, His journey from a home tutor to a digital mentor is truly inspiring. His dedication has earned him multiple YouTube Creator Awards, including the Silver and Gold Play Buttons, and recognition in top media outlets. Through his practical, step-by-step guidance, Amresh continues to inspire individuals to pursue their goals with confidence and clarity."
    },
    { 
      id: 2, 
      name: "Himanshi Singh", 
      title: "Educator, Creator and Founder of Let's Learn", 
      topic: "", 
      image: speaker2,
      about: "Himanshi Singh is a dedicated educator and mentor, empowering aspiring teachers through her YouTube channel, Let us Learn, with over 2 million subscribers. With a B.Ed. degree, she simplifies complex concepts for CTET and TET aspirants, making quality education accessible. Her journey, marked by perseverance, inspires thousands. Beyond academics, she instills confidence and motivation, shaping future educators. Her work proves that with the right guidance, dedication, and learning approach, anyone can achieve their dreams in the teaching profession."
  },
    { 
      id: 3, 
      name: "Abhishek Kar", 
      title: "Business Mentor and Financial Expert", 
      topic: "", 
      image: speaker3,
      about: "With over 15 years of experience in financial markets, Abhishek Kar has mentored hundreds of entrepreneurs. His practical approach to business strategy and finance has helped startups raise over $10M in funding."
    },
    { 
      id: 4, 
      name: "Dr. Parth Goyal", 
      title: "Author, Founder of Medulla", 
      topic: "", 
      image: speaker4,
      about: "Dr. Parth Goyal, is a multifaceted professional excelling as a doctor, educator, author, and entrepreneur. He secured an impressive All India Rank (AIR) of 223 in the National Eligibility cum Entrance Test (NEET) and AIR 5364 in the Joint Entrance Examination (JEE) Advanced. He authored the Biohack and Chemhack books, designed for rapid revision of biology and chemistry concepts, enabling students to review entire chapters in just 15-20 minutes. Dr. Goyal's entrepreneurial spirit is further exemplified by his co-founding of Medulla, a venture focused on healthcare innovation.  His dedication to improving health and education has made him a respected figure among students and professionals alike."
    },
    { 
      id: 5, 
      name: "Rohit Vaidwan", 
      title: "Educator and Founder of Adhyayan Mantra", 
      topic: "", 
      image: speaker6,
      about: "Rohit Vaidwan's Adhyayan Mantra has become a beacon for students preparing for competitive exams. His unique teaching methodology has resulted in a 95% success rate for his students across various examinations."
    },
    { 
      id: 6, 
      name: "Saumya Singh", 
      title: "Tech Creator", 
      topic: "", 
      image: speaker5,
      about: "Saumya Singh is at the forefront of technology content creation, simplifying complex tech concepts for the masses. Her tutorials and insights have helped thousands break into the tech industry and start their coding journey."
    },
    { 
      id: 7, 
      name: "Kunal Naik", 
      title: "Founder of Data Science Masterminds", 
      topic: "", 
      image: speaker7,
      about: "Kunal Naik has revolutionized data science education in India. Through Data Science Masterminds, he has trained over 10,000 professionals who now work with leading tech companies around the globe."
    },
    { 
      id: 8, 
      name: "Priyank Bharadwaj", 
      title: "Business Coach", 
      topic: "", 
      image: speaker8,
      about: "Priyank Bharadwaj's practical business coaching has transformed struggling entrepreneurs into successful business owners. His frameworks for growth and scalability have been adopted by businesses of all sizes."
    },
  ];

  useEffect(() => {
    if (activeSpeaker === null) {
      const interval = setInterval(() => {
        const randomId = Math.floor(Math.random() * speakers.length) + 1;
        setActiveSpeaker(randomId);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeSpeaker, speakers.length]);

  const togglePosition = (index) => {
    const newPositions = [...speakerPositions];
    newPositions[index] = newPositions[index] === 'top' ? 'bottom' : 'top';
    setSpeakerPositions(newPositions);
  };

  // Function to navigate to next speaker (cyclic)
  const nextSpeaker = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    const currentIndex = speakers.findIndex(s => s.id === activeSpeaker);
    const nextIndex = (currentIndex + 1) % speakers.length;
    setActiveSpeaker(speakers[nextIndex].id);
  };

  // Function to navigate to previous speaker (cyclic)
  const prevSpeaker = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    const currentIndex = speakers.findIndex(s => s.id === activeSpeaker);
    const prevIndex = (currentIndex - 1 + speakers.length) % speakers.length;
    setActiveSpeaker(speakers[prevIndex].id);
  };
  
  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distanceX = touchEndX.current - touchStartX.current;
    
    if (Math.abs(distanceX) > MIN_SWIPE_DISTANCE) {
      if (distanceX > 0) {
        // Swipe right (previous)
        prevSpeaker();
      } else {
        // Swipe left (next)
        nextSpeaker();
      }
    }
    
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  }, []);

  // Function to render a speaker card
  const renderSpeakerCard = (speaker, isAnimating) => (
    <div 
      className={`transition-all duration-500 ease-in-out mb-16 sm:mb-24 ${isAnimating && activeSpeaker === speaker.id ? 'scale-105' : 'scale-100'} overflow-hidden`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative bg-gradient-to-r from-gray-900 to-black p-4 sm:p-6 md:p-8 rounded-xl border border-gray-800">
        <div className="absolute -top-5 -left-5 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full"></div>
        <div className="absolute -bottom-5 -right-5 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8">
          <div className="w-28 h-28 xs:w-36 xs:h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center shrink-0">
            <div className="w-24 h-24 xs:w-32 xs:h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full bg-red-500 border-4 border-black overflow-hidden">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-1 sm:mb-2 text-center md:text-left">
              {speaker.name}
            </h2>
            <h3 className="text-base sm:text-lg text-red-500 mb-2 md:mb-4 text-center md:text-left">
              {speaker.title}
            </h3>
            {speaker.topic && (
              <div className="mb-4 inline-block bg-red-900 bg-opacity-40 px-3 py-1 rounded-full text-sm">
                {speaker.topic}
              </div>
            )}
            
            <div className="bg-gray-900 bg-opacity-50 p-2 sm:p-3 md:p-4 rounded-lg border border-gray-800 mt-3 md:mt-4">
              <h4 className="text-red-600 text-sm sm:text-base md:text-lg font-medium mb-1 sm:mb-2">About</h4>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base max-h-32 sm:max-h-48 md:max-h-none overflow-y-auto">
                {speaker.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id="speakers" className="bg-black min-h-screen text-white relative overflow-hidden py-12 sm:py-16">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-red-900 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-red-700 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 mb-8 sm:mb-12 relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <span className="text-red-600">Voices that</span> Inspire
        </h1>
        <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mt-4 sm:mt-6"></div>
      </div>
      
      {/* Desktop View with Timeline - Navigation removed */}
      <div className="hidden md:block container mx-auto px-4 mb-16 relative z-10">
        {activeSpeaker && renderSpeakerCard(speakers.find(s => s.id === activeSpeaker), isAnimating)}

        {/* Keeping the same margin-top to maintain timeline position */}
        <div ref={timelineRef} className="relative mt-80">
          {/* Timeline bar - thinner height */}
          <div className="h-1 bg-red-600 w-full my-80 rounded-full relative">
            <div className="absolute -left-1 top-0 w-2 h-2 bg-red-600 rounded-full"></div>
            <div className="absolute -right-1 top-0 w-2 h-2 bg-red-600 rounded-full"></div>
          </div>
          
          {/* Speakers on timeline - adjusted top values and shortened connector lines */}
          {speakers.map((speaker, index) => {
            const position = speakerPositions[index];
            const leftPosition = `${(index / (speakers.length - 1)) * 100}%`;
            
            return (
              <div 
                key={speaker.id}
                className={`absolute transform -translate-x-1/2 transition-all duration-300 w-36 
                  ${position === 'top' ? '-top-60' : 'top-16'}`}
                style={{ left: leftPosition }}
              >
                <div 
                  className={`relative cursor-pointer group transition-transform duration-300 
                    ${activeSpeaker === speaker.id ? 'scale-110 z-30' : 'scale-100 hover:scale-105'}`}
                  onClick={() => {
                    setActiveSpeaker(speaker.id);
                    setIsAnimating(true);
                    setTimeout(() => setIsAnimating(false), 500);
                    togglePosition(index);
                  }}
                >
                  {/* Photo wrapper */}
                  <div className="relative mb-3 w-full aspect-square">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-red-800 to-red-950 rounded-full transform -z-10 shadow-lg scale-90 
                      group-hover:scale-95 group-hover:shadow-red-500/50 group-hover:shadow-xl transition-all duration-300"
                    ></div>
                    
                    <div className={`absolute inset-1 rounded-full border-2 ${
                      activeSpeaker === speaker.id ? 'border-red-500' : 'border-gray-700 group-hover:border-red-500'
                      } overflow-hidden shadow-lg transition-colors duration-300 bg-black group-hover:shadow-red-500/30`}
                    >
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="rounded-full w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div 
                      className="absolute inset-0 bg-red-600 rounded-full -z-20 scale-100 opacity-0 
                      group-hover:opacity-30 group-hover:blur-md transition-all duration-300"
                    ></div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-sm font-bold line-clamp-1">{speaker.name}</h3>
                    <p className="text-xs text-red-500 mt-1 line-clamp-2">{speaker.title}</p>
                  </div>
                  
                  {/* Thinner connector lines */}
                  <div 
                    className={`absolute left-1/2 w-px bg-red-600 ${
                      position === 'top' ? 'h-16 -bottom-16' : 'h-16 -top-16'
                    }`}
                  ></div>
                  
                  <div 
                    className={`absolute left-1/2 w-1 h-1 bg-red-600 rounded-full -translate-x-1/2 ${
                      position === 'top' ? '-bottom-16' : '-top-16'
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Mobile View - Improved layout and spacing */}
      <div className="md:hidden container mx-auto px-2 sm:px-4 relative z-10">
        {/* Swipe instruction */}
        <div className="text-center mx-auto mb-4">
          <span className="text-gray-400 text-sm">
            • Speaker {speakers.findIndex(s => s.id === activeSpeaker) + 1} of {speakers.length}
          </span>
        </div>
        
        {/* Active speaker card with swipe functionality */}
        <div className="mb-8 sm:mb-12 max-w-lg mx-auto">
          {activeSpeaker && renderSpeakerCard(speakers.find(s => s.id === activeSpeaker), isAnimating)}
        </div>
        
        {/* Indicator dots for mobile navigation */}
        <div className="flex justify-center gap-2 mt-4 sm:mt-8 mb-8 sm:mb-16">
          {speakers.map((speaker) => (
            <button
              key={`nav-${speaker.id}`}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                activeSpeaker === speaker.id ? 'bg-red-600 scale-125' : 'bg-gray-700 hover:bg-red-500'
              }`}
              onClick={() => {
                setActiveSpeaker(speaker.id);
                setIsAnimating(true);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              aria-label={`View ${speaker.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersTimeline;