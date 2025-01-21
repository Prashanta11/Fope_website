import React from "react";
import { ReactTyped } from "react-typed";

const HeroSection: React.FC = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center text-center text-customTeal">
      {
        <ReactTyped
          className="font-semibold *:!font-instrumentSans text-nowrap text-xl italic tracking-wider"
          showCursor={false}
          strings={[
            "'Welcome to our Store!'",
            "'Selamat menjamu selera!'",
            "'Sahha wa hana!'",
            "'Enjoy your meal!'",
          ]}
          typeSpeed={40}
        />
      }
      <h1 className="mt-2 mb-4 font-bold text-4xl">
        "Where Every Bite Tells a Story"{" "}
      </h1>
      <p className="font-semibold text-2xl">
        Romanticizes the dining experience and connects emotionally.
      </p>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-slate-50 hover:bg-slate-100 shadow-black shadow-sm mt-8 px-6 sm:px-8 py-3 rounded-xl font-bold text-customTeal text-lg text-nowrap text-xl"
      >
        Dine With Us!
      </a>
    </div>
  );
};

export default HeroSection;
