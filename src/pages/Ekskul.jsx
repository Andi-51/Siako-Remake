import React from 'react'

const Ekskul = () => {
  return (
    <div className="bg-white">
          <div className="mx-auto h-screen py-5">
            <h1 className="text-l md:text-xl text-center font-semibold">
              Kami menyediakan 2 jurusan yaitu PPLG (Pemrograman Perangkat Lunak dan
              Gim) dan DKV (Desain Komunikasi Visual)
            </h1>
            <div className="max-w-6xl mx-auto px-4 mt-[50px]">
              <div className="w-full md:w-[100%] flex flex-col items-center text-center bg-gray-200 p-6 rounded-2xl shadow-lg mb-[50px]">
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
              <div className="w-full md:w-[100%] flex flex-col items-center text-center bg-gray-200 p-6 rounded-2xl shadow-lg">
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
  )
}

export default Ekskul