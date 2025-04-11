import React, { useState } from "react";
import FacultyImg from "../assets/imgwho.jpg";
import OrganiserImg from "../assets/Lakhan.png";
import CoorganiserImg from "../assets/Aditya.png";
import PinImage from "../assets/pin.png";

const teamMembers = [
  {
    name: "Prof. Rajshree Pandey",
    role: "Faculty Coordinator",
    image: FacultyImg,
    description: "Prof. Raj Shree currently leads the Department of Information Technology at Babasaheb Bhimrao Ambedkar University (BBAU), located in Lucknow. \n\nShe earned her doctorate in Information Technology from the same university. With over 15 years of teaching experience and more than 14 years dedicated to research, she has significantly advanced the field through both academic and scholarly contributions.\n\n Her work has been featured in over 80 research publications across esteemed national and international journals. Additionally, she has successfully led and collaborated on four research projects—two funded by CST-UP, one supported by CERT, and another by BBAU, Lucknow. \nAlongside her academic endeavors, Prof. Raj Shree also holds several key administrative positions within the university, including her role as the Nodal Officer for the UGC Grievance Redressal Portal.",
  },
  {
    name: "Lakhan Varshney",
    role: "Organiser",
    image: OrganiserImg,
    description: "Have more than 3 years experience working with the Top Ed-tech Youtubers (Managing their social media account, Video Production, Content Writing, Content Planning).\n\nDone 50+ Podcast with India's greatest educators.\n\nHave Experience of managing 100+ events(Tedx, Ecell, College fest, Rendezvous , University events) all over the India.\n\nHe enjoy traveling and meeting new people, as well as learning about their contributions to the nation.",
    linkedin: "https://www.linkedin.com/in/lakhanvarshney/"
  },
  {
    name: "Aditya Kumar Bharti",
    role: "Co-Organiser",
    image: CoorganiserImg,
    description: "He is a TEDx coordinator and community organizer, currently pursuing an M.C.A. at Babasaheb Bhimrao Ambedkar University, Lucknow. \n\nHe loves traveling and connecting with people, always learning from new experiences. \n\nBy participating in events at Lucknow University, he has gained skills that have helped him grow personally and professionally, and contribute to his community.",
    linkedin: "https://www.linkedin.com/in/aditya-kumar-bharti-4589b32b9/"
  }
];

const TeamPage = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center mb-20 pt-24 px-6">
      <h1 className="text-5xl font-bold mb-6 relative z-10">Meet Our Organisers</h1>
      <p className="text-lg max-w-2xl text-center mb-8 relative z-10">
        The dedicated team behind TEDx working to bring innovative ideas and inspiring speakers to our community.
      </p>
      
      <div className="mt-3 flex flex-col md:flex-row justify-center gap-10 px-5 w-full max-w-6xl relative z-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/2 lg:w-1/3 p-8 rounded-full shadow-lg bg-gray-900 text-white border-4 border-red-500 flex flex-col items-center transition-all hover:shadow-xl"
            style={{
              boxShadow: "5px 5px 15px rgba(255, 0, 0, 0.2)",
              borderRadius: "12px",
              position: "relative",
              padding: "20px",
              backgroundColor: "#1a1a1a"
            }}
          >
            <img
              src={PinImage}
              alt="Pin"
              className="absolute top-[-30px] left-[-15px] w-16 h-16 rotate-[-20deg]"
            />
            <div className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full border-4 border-red-500 object-cover transition-transform transform hover:scale-110 shadow-lg hover:shadow-red-500"
                style={{
                  filter: "drop-shadow(0px 0px 10px rgba(255, 0, 0, 0.2))",
                  padding: "5px",
                  backgroundColor: "white"
                }}
              />
              <h3 className="mt-4 text-2xl font-semibold">{member.name}</h3>
              <p className="text-md font-medium text-red-500">{member.role}</p>
              
              <div className="mt-3 text-center whitespace-pre-line">
                {expandedCards[index] ? (
                  // Full description when expanded
                  member.description
                ) : (
                  // Show only first few lines when not expanded
                  <div className="line-clamp-3">
                    {member.description}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-auto pt-4 flex items-center gap-4">
              <button
                onClick={() => toggleExpand(index)}
                className="inline-block bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition font-medium"
              >
                {expandedCards[index] ? "Show Less" : "Read More"}
              </button>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-medium"
                >
                  Visit Profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;