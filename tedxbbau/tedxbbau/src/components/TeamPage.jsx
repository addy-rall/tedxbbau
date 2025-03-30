import React from "react";
import OrganiserImg from "../assets/Lakhan Varshney.png";
import CoorganiserImg from "../assets/Aditya Kumar.png";

const teamMembers = [
  {
    name: "Lakhan Varshney",
    role: "Organiser",
    image: OrganiserImg,
    description: "He Had done 50+ podcasts with India's greatest educators.",
    linkedin: "https://www.linkedin.com/in/lakhanvarshney/"
  },
  {
    name: "Aditya Kumar Bharti",
    role: "Co-Organiser",
    image: CoorganiserImg,
    description: "TEDx event coordinator and community organizer.", // Added a description
    linkedin: "https://www.linkedin.com/in/aditya-kumar-bharti-4589b32b9/"
  }
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-24 px-6">
      <h1 className="text-4xl font-bold mb-6">Meet Our Organisers</h1>
      <p className="text-lg max-w-2xl text-center mb-8">
        The dedicated team behind TEDx working to bring innovative ideas and inspiring speakers to our community.
      </p>
      
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-10 px-5 w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 p-8 rounded-lg shadow-lg bg-white text-black border-4 border-red-500 flex flex-col items-center"
          >
            <div className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full border-4 border-red-500 object-cover"
              />
              <h3 className="mt-4 text-2xl font-semibold">{member.name}</h3>
              <p className="text-md font-medium text-red-500">{member.role}</p>
              <p className="mt-3 text-center">{member.description}</p>
            </div>
            <div className="mt-auto pt-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-medium"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;