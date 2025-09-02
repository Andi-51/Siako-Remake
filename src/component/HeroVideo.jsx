import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Thumbnail from "../assets/Thumbnail.jpg";
import Video from "../assets/video.mp4";

const HeroVideo = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Thumbnail})`,
      }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>

      <div className="relative z-10 text-center text-[#00df9a] px-4">
        <button
          className="mx-auto mb-6 w-20 h-20 flex items-center justify-center border-4 border-white rounded-full hover:bg-white hover:text-black transition"
          onClick={() => setOpen(true)}
        >
          <FaPlay size={28} />
        </button>

        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          VIDEO PROFIL SMK INFORMATIKA CBI
        </h1>
        <p className="text-lg md:text-xl">
          Kenali SMK INFORMATIKA CBI lebih lanjut dengan menonton video profil
          sekolah
        </p>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
            <video
              src={Video}
              controls
              autoPlay
              className="w-full rounded-xl"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroVideo;
