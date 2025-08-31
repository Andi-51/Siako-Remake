import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

const WhyUs = () => {
  return (
    <section className="bg-[#1e1e1e] text-[#a8a8a8] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Kenapa memilih kami?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12">
          <div className="w-full md:w-1/3 flex flex-col items-center text-center bg-[#2a2a2a] p-6 rounded-2xl shadow-lg">
            <FaUserGraduate className="text-[#00df9a] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Lulusan Berkualitas</h3>
            <p>
              Kami meluluskan siswa-siswi yang siap kerja dengan keterampilan
              sesuai kebutuhan industri.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center text-center bg-[#2a2a2a] p-6 rounded-2xl shadow-lg">
            <FaChalkboardTeacher className="text-[#00df9a] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Guru yang Berpengalaman</h3>
            <p>
              Tenaga pengajar berpengalaman yang membimbing siswa dengan
              pendekatan modern.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center text-center bg-[#2a2a2a] p-6 rounded-2xl shadow-lg">
            <FaLaptopCode className="text-[#00df9a] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Fasilitas Modern</h3>
            <p>
              Fasilitas lengkap dengan teknologi terbaru untuk mendukung
              pembelajaran efektif.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
