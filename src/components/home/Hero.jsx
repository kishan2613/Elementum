import React from "react";
import team from "../../assets/image.png";
import vector from "../../assets/Vector5.png";
import vector2510 from "../../assets/Vector 2510.png";
import vector2511 from "../../assets/Vector 2511.png";
import ellipse from "../../assets/Ellipse 736.png";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">

      {/* LEFT SHAPES */}
      <img
        src={vector2510}
        alt="left-shape"
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 h-32 md:h-48 lg:h-56 w-auto pointer-events-none z-0"
      />
      <img
        src={vector2511}
        alt="left-shape"
        className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/3 h-28 md:h-44 lg:h-52 w-auto pointer-events-none z-0"
      />

      {/* RIGHT SHAPE */}
      <img
        src={ellipse}
        alt="purple-shape"
        className="hidden md:block absolute right-10 md:right-20 top-24 md:top-32 h-12 md:h-20 lg:h-24 w-auto pointer-events-none z-0"
      />

      {/* CONTENT */}
       <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <h1 className="gebril text-3xl md:text-6xl leading-tight tracking-tight">
          The{" "}
          <span className="relative inline-block">
            thinkers
            <img
              src={vector}
              alt="underline"
              className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[110%] rotate-[-2deg]"
            />
          </span>{" "}
          and <br />

          doers were ch
          <span className="bg-[#FFC2EA] px-2 rounded-full">
            anging
          </span>
          <br />

          the{" "}
          <span className="bg-green-200 px-2 rounded-full">
            status
          </span>{" "}
          Quo with
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>
      </div>

      {/* IMAGE */}
      <div className="mt-8 md:mt-12 w-full">
        <img
          src={team}
          alt="team"
          className="w-full h-auto object-cover px-2 sm:px-4 md:px-6"
        />
      </div>

    </section>
  );
};

export default Hero;