import React from "react";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaBalanceScale } from "react-icons/fa";
import img2 from "../assets/img2.jpg";

const Organisasi = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div
        className="relative w-full h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold">
          Organisasi
        </h1>
      </div>

      <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-10">
        <h1 className="text-lg md:text-xl text-center font-semibold">
          Terdapat 2 organisasi yang dapat dipilih oleh siswa-siswi SMK Informatika CBI yaitu :
        </h1>

        <div className="mt-10 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="flex-1 flex flex-col items-center text-center bg-gray-200 p-6 rounded-2xl shadow-lg">
            <PiUsersThreeFill className="text-black w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">OSIS</h3>
            <p>
              OSIS adalah wadah resmi bagi siswa untuk mengembangkan diri dalam
              kepemimpinan, kreativitas, kedisiplinan, serta rasa tanggung jawab.
              OSIS menjadi perantara antara siswa, guru, dan sekolah untuk
              menyelenggarakan kegiatan yang positif dan bermanfaat bagi seluruh
              warga sekolah.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center text-center bg-gray-200 p-6 rounded-2xl shadow-lg">
            <FaBalanceScale className="text-black w-14 h-14 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">
              Majelis Perwakilan Kelas (MPK)
            </h3>
            <p>
              MPK adalah organisasi yang berperan sebagai lembaga legislatif
              siswa. Tugas utama MPK adalah menyalurkan aspirasi siswa, mengawasi
              kinerja OSIS, serta membantu menyusun program kerja agar kegiatan
              sekolah berjalan lebih demokratis, terarah, dan sesuai kebutuhan siswa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organisasi;
