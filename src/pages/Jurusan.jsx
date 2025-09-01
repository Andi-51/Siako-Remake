import React from "react";
import { FaPalette, FaLaptopCode } from "react-icons/fa";

const Jurusan = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Konten utama */}
      <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-10">
        <h1 className="text-lg md:text-xl text-center font-semibold">
          Kami menyediakan 2 jurusan yaitu PPLG (Pemrograman Perangkat Lunak dan
          Gim) dan DKV (Desain Komunikasi Visual)
        </h1>

        <div className="mt-10 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Card PPLG */}
          <div className="flex-1 flex flex-col items-center text-center bg-gray-200 p-6 rounded-2xl shadow-lg">
            <FaLaptopCode className="text-black w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              Pemrograman Perangkat Lunak dan Gim (PPLG)
            </h3>
            <p>
              Jurusan PPLG fokus pada pengembangan perangkat lunak, aplikasi,
              dan game. Siswa belajar tentang pemrograman, algoritma, basis
              data, pengembangan web, serta pembuatan game. Jurusan ini
              mengembangkan kemampuan logika, problem solving, dan kreatifitas
              teknis sehingga lulusan mampu menciptakan solusi digital inovatif
              dan aplikasi yang bermanfaat bagi masyarakat.
            </p>
          </div>

          {/* Card DKV */}
          <div className="flex-1 flex flex-col items-center text-center bg-gray-200 p-6 rounded-2xl shadow-lg">
            <FaPalette className="text-black w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              Desain Komunikasi Visual (DKV)
            </h3>
            <p>
              Jurusan DKV mempelajari cara menyampaikan ide dan pesan melalui
              elemen visual, seperti grafis, ilustrasi, fotografi, animasi, dan
              multimedia. Siswa belajar desain grafis, tipografi, branding,
              serta strategi komunikasi visual. Jurusan ini menekankan
              kreativitas, estetika, dan kemampuan berkomunikasi secara visual,
              sehingga lulusan dapat bekerja sebagai desainer profesional di
              berbagai industri kreatif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jurusan;
