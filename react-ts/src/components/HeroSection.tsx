import React from "react";
import { ReactTyped } from "react-typed";

const HeroSection: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center border-2 border-slate-200 bg-slate-200 p-4 rounded-md text-center text-customTeal">
      <ReactTyped
        className="font-semibold *:!font-instrumentSans text-3xl text-nowrap sm:text-2xl md:text-3xl lg:text-3xl tracking-wider"
        showCursor={false}
        strings={[
          "'Welcome to our Store!'",
          "'Selamat menjamu selera!'",
          "'Sahha wa hana!'",
          "'Enjoy your meal!'",
        ]}
        typeSpeed={40}
      />
      <h1 className="mt-2 mb-4 font-bold text-4xl sm:text-3xl md:text-4xl lg:text-3xl">
        Where Every Bite Tells a Story
      </h1>
      <p className="font-semibold text-2xl sm:text-xl md:text-2xl lg:text-2xl">
        Romanticizes the dining experience and connects emotionally.
      </p>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-slate-100 hover:bg-slate-50 shadow-black shadow-sm mt-8 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded font-bold text-customTeal text-nowrap text-xl sm:text-base md:text-lg lg:text-xl"
      >
        Dine With Us!
      </a>
    </div>
  );
};

export default HeroSection;
