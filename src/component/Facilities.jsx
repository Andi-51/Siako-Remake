import React from "react";
import { ImBooks } from "react-icons/im";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";

const Facilities = () => {
  return (
    <section className="bg-[#1e1e1e] text-[#a8a8a8] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Fasilitas yang Tersedia
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12">
          
          {/* Card 1 */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center bg-[#2a2a2a] p-6 rounded-2xl shadow-lg">
            <ImBooks className="text-[#00df9a] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Perpustakaan</h3>
            <p>
              Perpustakaan dengan berbagai buku pelajaran dan umum yang dapat
              digunakan oleh siswa-siswi.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center bg-[#2a2a2a] p-6 rounded-2xl shadow-lg">
            <IoSchoolSharp className="text-[#00df9a] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Ruang Belajar Modern</h3>
            <p>
              Fasilitas sekolah modern dengan ruang kelas nyaman dan berbasis
              teknologi.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center bg-[#2a2a2a] p-6 rounded-2xl shadow-lg">
            <FaSchool className="text-[#00df9a] w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Lingkungan Nyaman</h3>
            <p>
              Lingkungan sekolah yang mendukung proses belajar dan kegiatan
              ekstrakurikuler.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Facilities;
