import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-900 p-8 text-left rounded-xl border border-gray-700 hover:border-transparent hover:bg-gradient-to-br from-red-500/40 to-black transition-all duration-300 ease-in-out shadow-lg max-w-sm relative">
   
    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
  </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-black text-center p-12">
      {/* Heading Section */}
     
      <div className="relative flex justify-center items-center mb-12 h-40 bg-black">
      {/* Large Background Text */}
      <h1 className="absolute text-[6rem] md:text-[8rem] font-bold text-gray-900 tracking-wide">
      Why to Attends?
      </h1>

      {/* Foreground Smaller Text */}
      <h2 className="relative text-3xl md:text-4xl font-bold text-white tracking-widest">
      Why to Attends?
      </h2>
    </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-8">
        <Card
          title="Engage in Conversations"
          description="Ask questions, discuss insights, and exchange ideas with speakers and attendees."
        />
        <Card
          title="Gain Insights"
          description="Learn from thought leaders and discover perspectives that challenge conventional thinking."
        />
        <Card
          title="Stay Connected"
          description="Network with people from various fields and build meaningful connections."
        />
        <Card
          title="Be Inspired"
          description="Experience powerful stories and innovative ideas that will spark your creativity."
        />
      </div>
    </div>
  );
};

export default App;
