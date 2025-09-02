import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { FaArrowRight, FaLaptopCode, FaUsers } from "react-icons/fa";
import { BsDiagram3 } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";

const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => setNav(!nav);

  return (
    <div className="Header flex justify-between items-center h-24 w-full bg-[#42A5F5] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 text-white">
      <h1 className="flex items-center text-3xl font-semibold text-white">
        <img src={Logo} alt="logo" className="w-12 h-12 object-contain mr-2" />
        SMK CBI
      </h1>
      <ul className="hidden md:flex font-semibold text-black">
  <li className="px-4">
    <Link to="/">Beranda</Link>
  </li>
  <li className="px-4">
    <Link to="/jurusan">Jurusan</Link>
  </li>
  <li className="px-4">
    <Link to="/ekskul">Ekskul</Link>
  </li>
  <li className="px-4">
    <Link to="/organisasi">Organisasi</Link>
  </li>
  <li className="px-4">
    <Link to="/kontak">Kontak</Link>
  </li>
</ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={`fixed top-0 left-0 w-[80%] h-full z-50 border-r border-gray-900 bg-[#42A5F5] transition-transform duration-500 ${
          nav ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <h1 className="flex items-center text-xl font-semibold text-white mt-5 ml-3">
          <img src={Logo} alt="logo" className="w-12 h-12 mr-2" />
          SMK Informatika CBI
        </h1>

        <ul className="mt-6 font-semibold text-black px-4">
          <li className="border-b border-gray-600">
            <Link to="/" className="flex justify-between items-center p-4">
              <span className="flex items-center">
                <IoHome size={20} className="mr-3" /> Beranda
              </span>
              <FaArrowRight size={20} />
            </Link>
          </li>
          <li className="border-b border-gray-600">
            <Link to="/jurusan" className="flex justify-between items-center p-4">
              <span className="flex items-center">
                <FaLaptopCode size={20} className="mr-3" /> Jurusan
              </span>
              <FaArrowRight size={20} />
            </Link>
          </li>
          <li className="border-b border-gray-600">
            <Link to="/ekskul" className="flex justify-between items-center p-4">
              <span className="flex items-center">
                <FaUsers size={20} className="mr-3" /> Ekskul
              </span>
              <FaArrowRight size={20} />
            </Link>
          </li>
          <li className="border-b border-gray-600">
            <Link to="/organisasi" className="flex justify-between items-center p-4">
              <span className="flex items-center">
                <BsDiagram3 size={20} className="mr-3" /> Organisasi
              </span>
              <FaArrowRight size={20} />
            </Link>
          </li>
          <li className="border-b border-gray-600">
            <Link to="/kontak" className="flex justify-between items-center p-4">
              <span className="flex items-center">
                <MdContactMail size={20} className="mr-3" /> Kontak
              </span>
              <FaArrowRight size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
