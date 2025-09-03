import React from "react";
import { ReactTyped } from "react-typed";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const Hero = () => {
  return (
    <div
      className="Hero relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: `url(${img2})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-3xl px-4">
        <p className="font-bold p-2 uppercase text-white mb-4 sm:mb-2">
          Selamat datang di website resmi
        </p>

        <div className="flex justify-center items-baseline text-white">
          <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
            SMK
          </h1>
          <ReactTyped
            className="md:text-6xl sm:text-5xl text-3xl font-bold md:pl-3 sm:pl-2 pl-1"
            strings={["INFORMATIKA", "CBI"]}
            typeSpeed={200}
            backSpeed={250}
            loop
          />
        </div>
        <p className="md:text-xl text-lg font-bold text-white md:pt-4 sm:pt-3 pt-2 px-3">
          sekolah unggulan dengan jurusan
          <span className="text-blue-300"> Rekayasa Perangkat Lunak</span> dan
          <span className="text-blue-300"> Multimedia</span> untuk mencetak
          generasi kreatif, inovatif, dan berdaya saing.
        </p>
      </div>
    </div>
  );
};

export default Hero;
