import React from "react";
import Logo from "../assets/logo.png";

const Visi = () => {
  return (
    <div className="bg-white flex items-center justify-center py-10 px-6">
      <div className="flex items-center gap-8 max-w-5xl">
        <img src={Logo} alt="logo" className="w-[200px] md:w-[300px] mr-12" />
        <h1 className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-800">
          Menjadi SMK unggulan di bidang Teknologi Informasi yang mencetak
          generasi <span className="font-bold">kreatif</span>,{" "}
          <span className="font-bold">mandiri</span>,{" "}
          <span className="font-bold">berkarakter</span>, dan{" "}
          <span className="font-bold">kompetitif</span> di tingkat nasional.
        </h1>
      </div>
    </div>
  );
};

export default Visi;
