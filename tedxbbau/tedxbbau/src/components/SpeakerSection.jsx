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
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [speakerPositions, setSpeakerPositions] = useState([
    "top", "bottom", "top", "bottom", "top", "bottom", "top", "bottom"
  ]);
  const timelineRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndY = useRef(null);
  const swipeInProgress = useRef(false);
  
  // Increase minimum swipe distance for better detection
  const MIN_SWIPE_DISTANCE = 40;
  // Add maximum vertical movement to prevent triggering swipes during scroll
  const MAX_VERTICAL_MOVEMENT = 50;
  
  const speakers = [
    { 
      id: 1, 
      name: "Amresh Bharti", 
      title: "Founder of WemakeCreators", 
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
      about: "Abhishek Kar is a prominent Indian stock trader, investor, educator, and social media influencer.He pursued a Bachelor of Technology (B.Tech) and an MBA from KIIT University in Bhubaneswar. Currently residing in Mumbai, Abhishek has gained recognition for his educational content on financial markets, particularly through his YouTube channel, which has amassed a significant following. He has trained over 15,000 students through his courses and webinars, aiming to simplify complex financial concepts for a broader audience. Abhishek is also a four-time TEDx and JoshTalk speaker and the author of Stocks and Life, an Amazon bestseller. His net worth is estimated between ₹7.5 to ₹8 crores (approximately $900,000 to $960,000). "
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
      about: "Rohit Vaidwan is the founder of Adhyayan Mantra, leading institute for TET and teaching exam preparation of India, established in 2013. Under his leadership, over 200,000 students have qualified, including 84,000+ in CTET and 12,000+ in UGC-NET/JRF. His YouTube channel, with 1.71 million subscribers and 9,600+ videos, offers accessible, high-quality content to aspiring educators. Rohit is also the author of Child Development with Pedagogy & Methodology, empowering thousands of teachers with his expertise."
    },
    { 
      id: 6, 
      name: "Saumya Singh", 
      title: "Tech Creator", 
      topic: "", 
      image: speaker5,
      about: "Saumya Singh is a Software Engineer at Red Hat and a tech influencer with over 400,000 followers on Instagram. Recognized as a LinkedIn Top Voice, she has earned accolades like the International Open Source Award, Google Connect Winner (2019), and GHCI Scholar (2020). Passionate about mentoring, she uses her platform to demystify coding, share career insights, and empower aspiring technologists with practical skills and industry knowledge."
    },
    { 
      id: 7, 
      name: "Kunal Naik", 
      title: "Founder of Data Science Masterminds", 
      topic: "", 
      image: speaker7,
      about: "Kunal Naik is the founder of Data Science Masterminds, an organization dedicated to bridging the gap between theoretical knowledge and practical application in data science. With extensive experience in the field, he has taught over 10,000 students and collaborated with more than 50 corporations and institutes, including CITI Bank, Genpact, Fidelity, and the Madras School of Economics.  Currently, Kunaal serves as a Senior Data Scientist at Dell Technologies in Bengaluru, India.  He is also a YouTuber and podcast host, focusing on data science education and discussions. "
    },
    { 
      id: 8, 
      name: "Priyank Bharadwaj", 
      title: "Business Coach", 
      topic: "", 
      image: speaker8,
      about: "Priyank Bhardwaj is a dedicated business coach, committed to helping coaches and service providers expand their businesses. As the founder of The Super Scale, he has guided numerous entrepreneurs toward financial growth and stability. Through his signature program, The ATTRACTION System, Priyank offers step-by-step strategies for client acquisition, business expansion, and LinkedIn optimization. His coaching has helped individuals establish a steady lead flow and achieve consistent revenue growth. With a growing online presence, Priyank continues to inspire and mentor ambitious professionals, showing that with the right approach, scaling a business is both achievable and fulfilling. "
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

  const nextSpeaker = useCallback(() => {
    if (swipeInProgress.current) return;
    swipeInProgress.current = true;
    
    setSwipeDirection('left');
    setIsAnimating(true);
    
    const currentIndex = speakers.findIndex(s => s.id === activeSpeaker);
    const nextIndex = (currentIndex + 1) % speakers.length;
    
    // Delay the actual state change to allow animation to start
    setTimeout(() => {
      setActiveSpeaker(speakers[nextIndex].id);
    }, 50);
    
    // Reset animation states after transition completes
    setTimeout(() => {
      setIsAnimating(false);
      setSwipeDirection(null);
      swipeInProgress.current = false;
    }, 500);
  }, [activeSpeaker, speakers]);

  const prevSpeaker = useCallback(() => {
    if (swipeInProgress.current) return;
    swipeInProgress.current = true;
    
    setSwipeDirection('right');
    setIsAnimating(true);
    
    const currentIndex = speakers.findIndex(s => s.id === activeSpeaker);
    const prevIndex = (currentIndex - 1 + speakers.length) % speakers.length;
    
    // Delay the actual state change to allow animation to start
    setTimeout(() => {
      setActiveSpeaker(speakers[prevIndex].id);
    }, 50);
    
    // Reset animation states after transition completes
    setTimeout(() => {
      setIsAnimating(false);
      setSwipeDirection(null);
      swipeInProgress.current = false;
    }, 500);
  }, [activeSpeaker, speakers]);
  
  // Enhanced touch handlers for better swipe experience
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  
  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    
    // Calculate distances
    const distanceX = touchEndX.current - touchStartX.current;
    const distanceY = Math.abs(touchEndY.current - touchStartY.current);
    
    // Only apply real-time movement if horizontal swipe seems intentional
    if (Math.abs(distanceX) > 10 && distanceY < MAX_VERTICAL_MOVEMENT) {
      // Apply direct transform based on finger position (with a damping factor)
      const dampingFactor = 0.5; // Reduce movement to make it feel more natural
      const transform = `translateX(${distanceX * dampingFactor}px)`;
      
      // Get the active card element and apply direct style
      const activeCard = document.querySelector('.active-speaker-card');
      if (activeCard) {
        activeCard.style.transform = transform;
        activeCard.style.transition = 'none'; // Remove transition for direct manipulation
      }
    }
  };
  
  const handleTouchEnd = useCallback((e) => {
    // Get the active card element and restore transition
    const activeCard = document.querySelector('.active-speaker-card');
    if (activeCard) {
      activeCard.style.transition = 'transform 300ms ease-out';
      activeCard.style.transform = 'translateX(0)';
    }
    
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distanceX = touchEndX.current - touchStartX.current;
    const distanceY = Math.abs(touchEndY.current - touchStartY.current);
    
    // Only trigger swipe if horizontal movement is significant and vertical movement is minimal
    if (Math.abs(distanceX) > MIN_SWIPE_DISTANCE && distanceY < MAX_VERTICAL_MOVEMENT) {
      if (distanceX > 0) {
        // Swipe right -> previous speaker
        prevSpeaker();
      } else {
        // Swipe left -> next speaker
        nextSpeaker();
      }
    }
    
    // Clean up touch references
    touchStartX.current = null;
    touchEndX.current = null;
    touchStartY.current = null;
    touchEndY.current = null;
  }, [nextSpeaker, prevSpeaker]);

  // Add gesture instructions component
  const SwipeInstructions = () => (
    <div className="text-center mx-auto mb-6 animate-pulse">
      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>Swipe</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );

  const renderSpeakerCard = (speaker, isAnimating) => {
    // Determine animation classes based on swipe direction
    let animationClass = '';
    
    if (isAnimating) {
      if (swipeDirection === 'left') {
        animationClass = '-translate-x-full opacity-0';
      } else if (swipeDirection === 'right') {
        animationClass = 'translate-x-full opacity-0';
      }
    }
    
    return (
      <div 
        className={`active-speaker-card transition-all duration-300 ease-out mb-16 sm:mb-24 ${isAnimating ? animationClass : ''} overflow-hidden`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative bg-gradient-to-r from-gray-900 to-black p-4 sm:p-6 md:p-8 rounded-xl border border-gray-800">
          <div className="absolute -top-5 -left-5 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full"></div>
          <div className="absolute -bottom-5 -right-5 w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8">
           <div className="w-36 h-36 xs:w-44 xs:h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center shrink-0">
              <div className="w-32 h-32 xs:w-40 xs:h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-black border-4 border-black overflow-hidden">
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
                <p className="text-gray-300 text-xs sm:text-sm md:text-base max-h-32 sm:max-h-58 md:max-h-none overflow-y-auto">
                  {speaker.about}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Dynamic entrance animation for incoming cards
  const getEntranceAnimation = () => {
    if (swipeDirection === 'left') {
      return 'animate-slide-in-right';
    } else if (swipeDirection === 'right') {
      return 'animate-slide-in-left';
    }
    return '';
  };

  return (
    <div id="speakers" className="bg-black min-h-screen text-white relative overflow-hidden py-12 sm:py-16">
      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.3s forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.3s forwards;
        }
      `}</style>
    
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-red-900 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-red-700 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 mb-8 sm:mb-12 relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <span className="text-red-600">Voices that</span> Inspire
        </h1>
        <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mt-4 sm:mt-6"></div>
      </div>

      <div className="hidden md:block  container mx-auto px-4 mb-16 relative z-10">
        {activeSpeaker && renderSpeakerCard(speakers.find(s => s.id === activeSpeaker), isAnimating)}

        <div ref={timelineRef} className="relative mt-80 lg:ml-[70px] lg:mr-[60px] ">
          <div className="h-1 bg-red-600 w-full my-80 rounded-full relative">
            <div className="absolute -left-1 top-0 w-2 h-2 bg-red-600 rounded-full"></div>
            <div className="absolute -right-1 top-0 w-2 h-2 bg-red-600 rounded-full"></div>
          </div>

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
      
      {/* Mobile View - Enhanced with direct swipe feedback */}
      <div className="md:hidden container mx-auto px-2 sm:px-4 relative z-10">
        {/* Speaker counter and swipe instruction */}
        <div className="text-center mx-auto mb-4">
          <span className="text-gray-400 text-sm">
            • Speaker {speakers.findIndex(s => s.id === activeSpeaker) + 1} of {speakers.length} •
          </span>
        </div>
        
        {/* Swipe instructions for first-time users */}
        <SwipeInstructions />
        
        {/* Speaker cards container with improved swipe behavior */}
        <div className="relative  max-w-lg mx-auto overflow-hidden">
          {/* Active speaker card with improved swipe functionality */}
          <div className="mb-8 sm:mb-12 relative touch-pan-y touch-pan-x overflow-hidden">
            <div className={`w-full ${getEntranceAnimation()}`}>
              {activeSpeaker && renderSpeakerCard(speakers.find(s => s.id === activeSpeaker), isAnimating)}
            </div>
          </div>
        </div>
        
        {/* Indicator dots for mobile navigation */}
        <div className="flex justify-center gap-2  sm:mt-1  sm:mb-2">
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
