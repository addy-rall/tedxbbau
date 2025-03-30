import React, { useState, useEffect, useRef } from 'react';
import speaker1BW from "../assets/speaker1_bw.png";
import speaker2BW from "../assets/speaker2_bw.png";
import speaker3BW from "../assets/speaker3_bw.png";
import speaker4BW from "../assets/speaker4_bw.png";
import speaker5BW from "../assets/speaker5_bw.png";
import speaker6BW from "../assets/speaker6_bw.png";
import speaker7BW from "../assets/speaker7_bw.png";
import speaker8BW from "../assets/speaker8_bw.png";
import speaker1 from "../assets/speaker1.png";
import speaker2 from "../assets/speaker2.png";
import speaker3 from "../assets/speaker3.png";
import speaker4 from "../assets/speaker4.png";
import speaker5 from "../assets/speaker5.png";
import speaker6 from "../assets/speaker6.png";
import speaker7 from "../assets/speaker7.png";
import speaker8 from "../assets/speaker8.png";

const SpeakersGrid = () => {
  const [activeSpeaker, setActiveSpeaker] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0 });
  const containerRef = useRef(null);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const targetFlipAngles = useRef(Array(8).fill(0));
  const currentFlipAngles = useRef(Array(8).fill(0));
  
  const speakers = [
    { 
      id: 1, 
      name: "Amresh Bharti", 
      title: "Digital creator and Founder of WemakeCreators", 
      topic: "", 
      img: speaker1BW, 
      image: speaker1,
      about: "Amresh Bharti is a visionary digital creator who has pioneered innovative content strategies. As the founder of WemakeCreators, he has built a community of over 50,000 digital creators and helped them monetize their passion."
    },
    { 
      id: 2, 
      name: "Himanshi Singh", 
      title: "Educator, Creator and Founder of Let's Learn", 
      topic: "", 
      img: speaker2BW, 
      image: speaker2,
      about: "Himanshi Singh is transforming education through digital content. Her platform 'Let's Learn' has reached millions of students across India, making quality education accessible to all through innovative teaching methods."
    },
    { 
      id: 3, 
      name: "Abhishek Kar", 
      title: "Business Mentor and Financial Expert", 
      topic: "", 
      img: speaker3BW, 
      image: speaker3,
      about: "With over 15 years of experience in financial markets, Abhishek Kar has mentored hundreds of entrepreneurs. His practical approach to business strategy and finance has helped startups raise over $10M in funding."
    },
    { 
      id: 4, 
      name: "Dr. Parth Goyal", 
      title: "Author, Founder of Medulla", 
      topic: "", 
      img: speaker4BW, 
      image: speaker4,
      about: "Dr. Parth Goyal combines medicine and technology through his platform Medulla. His bestselling book on preventive healthcare has revolutionized how people approach wellness in the digital age."
    },
    { 
      id: 5, 
      name: "Rohit Vaidwan", 
      title: "Educator and Founder of Adhyayan Mantra", 
      topic: "", 
      img: speaker6BW, 
      image: speaker6,
      about: "Rohit Vaidwan's Adhyayan Mantra has become a beacon for students preparing for competitive exams. His unique teaching methodology has resulted in a 95% success rate for his students across various examinations."
    },
    { 
      id: 6, 
      name: "Saumya Singh", 
      title: "Tech Creator", 
      topic: "", 
      img: speaker5BW, 
      image: speaker5,
      about: "Saumya Singh is at the forefront of technology content creation, simplifying complex tech concepts for the masses. Her tutorials and insights have helped thousands break into the tech industry and start their coding journey."
    },
    { 
      id: 7, 
      name: "Kunal Naik", 
      title: "Founder of Data Science Masterminds", 
      topic: "", 
      img: speaker7BW, 
      image: speaker7,
      about: "Kunal Naik has revolutionized data science education in India. Through Data Science Masterminds, he has trained over 10,000 professionals who now work with leading tech companies around the globe."
    },
    { 
      id: 8, 
      name: "Priyank Bharadwaj", 
      title: "Business Coach", 
      topic: "", 
      img: speaker8BW, 
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const normalizedX = (e.clientX - containerRect.left) / containerRect.width;
        
        setMousePosition({ x: normalizedX });
        
        speakers.forEach((_, index) => {
          const rowLength = 4;
          const isFirstRow = index < rowLength;

          if (isFirstRow) {
            targetFlipAngles.current[index] = (normalizedX * 180 - 90) * 0.25;
          } 
          else {
            targetFlipAngles.current[index] = ((1 - normalizedX) * 180 - 90) * 0.25;
          }
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [speakers.length]);


  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      const easing = 0.05;

      currentFlipAngles.current = currentFlipAngles.current.map((angle, index) => {
        return angle + (targetFlipAngles.current[index] - angle) * easing;
      });
      
      setMousePosition(prev => ({ ...prev }));
    }
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  // Setup animation loop
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden py-16">

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-red-900 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-red-700 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h1 className="text-6xl font-bold text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <span className="text-red-600">Voices that</span> Inspire
        </h1>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
      </div>
      
      {/* Featured Speaker Spotlight */}
      {activeSpeaker && (
        <div className="container mx-auto px-4 mb-16">
          <div className={`transition-all duration-500 ease-in-out ${isAnimating ? 'scale-105' : 'scale-100'}`}>
            <div className="relative bg-gradient-to-r from-gray-900 to-black p-8 rounded-xl border border-gray-800">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-red-600 rounded-full"></div>
              <div className="absolute -bottom-5 -right-5 w-10 h-10 bg-red-600 rounded-full"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-56 h-56 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center">
                  <div className="w-52 h-52 rounded-full bg-gray-800 border-4 border-black overflow-hidden">
                    <img 
                      src={speakers.find(s => s.id === activeSpeaker)?.image} 
                      alt={speakers.find(s => s.id === activeSpeaker)?.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">
                    {speakers.find(s => s.id === activeSpeaker)?.name}
                  </h2>
                  <h3 className="text-xl text-red-500 mb-4">
                    {speakers.find(s => s.id === activeSpeaker)?.title}
                  </h3>
                  <div className="mb-4 inline-block bg-red-900 bg-opacity-40 px-4 py-1 rounded-full">
                    {speakers.find(s => s.id === activeSpeaker)?.topic}
                  </div>
                  
                  {/* Added about section */}
                  <div className="bg-gray-900 bg-opacity-50 p-4 rounded-lg border border-gray-800 mt-4">
                    <h4 className="text-red-500 text-lg font-medium mb-2">About</h4>
                    <p className="text-gray-300">
                      {speakers.find(s => s.id === activeSpeaker)?.about}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id}
              className={`aspect-square relative cursor-pointer will-change-transform group
                ${activeSpeaker === speaker.id ? 'scale-105 z-30' : 'scale-100 z-10 hover:scale-110 hover:z-20'}`}
              onClick={() => {
                setActiveSpeaker(speaker.id);
                setIsAnimating(true);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              style={{
                transform: `perspective(1000px) rotateY(${currentFlipAngles.current[index]}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.05s ease, scale 0.3s ease, z-index 0s'
              }}
            >
              {/* Diamond card with red glow effect on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-red-800 to-red-950 rounded-lg transform rotate-45 -z-10 shadow-lg scale-90 
                group-hover:scale-95 group-hover:shadow-red-500/50 group-hover:shadow-xl transition-all duration-300"
              ></div>
              <div 
                className="absolute inset-2 bg-black rounded-lg transform rotate-45 -z-10 scale-90 
                group-hover:scale-95 transition-transform duration-300"
              ></div>
              
              {/* Red diamond glow effect (enhanced for hover) */}
              <div 
                className="absolute inset-0 bg-red-600 rounded-lg transform rotate-45 -z-20 scale-100 opacity-0 
                group-hover:opacity-30 group-hover:blur-md transition-all duration-300"
              ></div>
              
              {/* 3D pop effect on hover */}
              <div 
                className="h-full w-full flex flex-col items-center justify-center text-center p-3 md:p-4 
                backface-visibility-hidden transition-all duration-300 group-hover:translate-y-1"
              >
                {/* Increased photo size */}
                <div className="relative w-20 h-20 md:w-28 md:h-28 mb-3 md:mb-4
                  group-hover:scale-105 transition-transform duration-300">
                  <div className={`absolute inset-0 rounded-full border-2 ${
                    activeSpeaker === speaker.id ? 'border-red-500' : 'border-gray-700 group-hover:border-red-500'
                    } overflow-hidden shadow-lg transition-colors duration-300 bg-gray-600 group-hover:shadow-red-500/30`}>
                    <img 
                      src={speaker.img} 
                      alt={speaker.name} 
                      className="rounded-full w-full h-full object-cover" 
                    />
                  </div>
                </div>
                
                {/* Improved title container to ensure text fits properly */}
                <div className="w-full transform -rotate-45 group-hover:scale-105 transition-transform duration-300 absolute inset-x-0 bottom-4">
                  <div className="transform rotate-45">
                    <h3 className="text-sm md:text-base font-bold line-clamp-1 px-2">{speaker.name}</h3>
                    <p className="text-xs text-red-500 mt-1 line-clamp-2 px-2">{speaker.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersGrid;