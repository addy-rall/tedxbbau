"use client";


export default function Home() {
  return (
    <div className="relative h-screen w-full bg-[url('/bc.webp')] bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden pt-32 ">
      <div className="text-center relative">
        <h1 className="text-5xl font-bold text-red-500 relative">
          TED<span className="text-white">x</span>BBAU
        </h1>
        <p className="text-sm text-gray-400">x = independently organized TED event</p>
        <h2 className="text-4xl font-bold text-white mt-4">BUILDING IDEAS</h2>
        <p className="text-lg italic text-gray-300 mt-10">
          "Transforming thoughts into action, shaping the future."
        </p>
      </div>
    </div>
  );
}
