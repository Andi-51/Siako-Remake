import React from "react";
import img1 from "../assets/img1.jpg";

const Ekskul = () => {
  const ekskulList = [
    {
      title: "Lab Komputer",
      description:
        "Ekskul untuk belajar coding, hardware, dan pemrograman komputer.",
    },
    {
      title: "Web Desain",
      description:
        "Ekskul fokus pada pembuatan website, UI/UX, dan animasi web.",
    },
    {
      title: "Desain Grafis",
      description:
        "Ekskul belajar ilustrasi, grafis digital, dan branding kreatif.",
    },
    {
      title: "Futsal",
      description:
        "Ekskul olahraga futsal untuk kebugaran, teamwork, dan strategi permainan.",
    },
    {
      title: "Bahasa Inggris",
      description:
        "Ekskul yang melatih kemampuan bahasa Inggris, termasuk Listening, Reading, dan Speaking.",
    },
    {
      title: "Silat",
      description:
        "Ekskul bela diri tradisional untuk melatih disiplin, kekuatan, dan pertahanan diri.",
    },
    {
      title: "Pramuka",
      description:
        "Ekskul yang mengajarkan kepemimpinan, survival, dan kegiatan sosial di alam terbuka.",
    },
    {
      title: "Paskibra",
      description:
        "Ekskul yang melatih ketangkasan, disiplin, dan kemampuan baris-berbaris untuk upacara.",
    },
    {
      title: "Lainnya",
      description:
        "Tersedia ekskul lainnya seperti Robotic, PMR, Tari, Band, Karate, dan masih banyak lagi.",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div
        className="relative w-full h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Ekstrakurikuler
          </h1>
        </div>
      </div>
      <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-10">
        <h2 className="text-lg md:text-xl text-center font-semibold">
          Pilihan Ekstrakurikuler Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {ekskulList.map((ekskul, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-semibold mb-2 text-black">
                {ekskul.title}
              </h3>
              <p className="text-sm">{ekskul.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ekskul;
