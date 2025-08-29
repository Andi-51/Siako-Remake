import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1000px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold p-2 uppercase text-black mb-4 sm:mb-2">
  Selamat datang di website resmi
</p>

<div className="flex justify-center items-baseline">
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


        <p className="md:text-xl text-l font-bold text-[#3a3838] md:pt-4 sm:pt-3 pt-2 px-3">
          sekolah unggulan dengan jurusan
          <span className="text-black"> Rekayasa Perangkat Lunak</span> dan
          <span className="text-black"> Multimedia</span> untuk mencetak
          generasi kreatif, inovatif, dan berdaya saing.
        </p>
      </div>
    </div>
  );
};

export default Hero;
