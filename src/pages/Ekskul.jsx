import React from "react";

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
      <div className="flex-1 mx-auto w-full max-w-6xl px-4 py-10">
        <h1 className="text-lg md:text-xl text-center font-semibold">
          Ekstrakurikuler SMK Informatika CBI
        </h1>
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
