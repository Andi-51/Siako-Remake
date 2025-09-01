import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsDiagram3 } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { MdContactMail } from "react-icons/md";

const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="Header flex justify-between items-center h-24 w-full bg-[#42A5F5] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 text-white">
      <h1 className="w-full text-3xl font-semibold text-white">
        <img
          src={Logo}
          alt="logo"
          className="w-12 h-12 object-contain inline-block mr-2"
        />
        SMK CBI
      </h1>

      <ul className="hidden md:flex font-semibold text-black">
        <li className="p-4">
          <Link to="/">Beranda</Link>
        </li>
        <li className="p-4">
          <Link to="/jurusan">Jurusan</Link>
        </li>
        <li className="p-4">
          <Link to="/ekskul">Ekskul</Link>
        </li>
        <li className="p-4">
          <Link to="/organisasi">Organisasi</Link>
        </li>
        <li className="p-4">
          <Link to="/profil">Profil</Link>
        </li>
        <li className="p-4">
          <Link to="/kontak">Kontak</Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[80%] h-full z-50 border-r border-r-gray-900 bg-[#42A5F5] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[80%] border-r border-r-gray-900 bg-[#42A5F5] ease-in-out duration-500"
        }
      >
        <h1 className="w-fit text-xl font-semibold text-white mt-5 ml-3">
          <img
            src={Logo}
            alt="logo"
            className="w-12 h-12 object-contain inline-block mr-2"
          />
          SMK Informatika CBI
        </h1>

        <ul className="p-4 font-semibold text-black">
          <li className="p-4 border-b border-gray-600">
            <Link to="/" className="flex justify-between items-center">
              <span className="flex items-center">
                <IoHome size={20} className="mr-3" /> Beranda
              </span>
              <FaArrowRight size={20} />
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/jurusan" className="flex justify-between items-center">
              <span className="flex items-center">
                <FaLaptopCode size={20} className="mr-3" /> Jurusan
              </span>
              <FaArrowRight size={20} />
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/ekskul" className="flex justify-between items-center">
              <span className="flex items-center">
                <FaUsers size={20} className="mr-3" /> Ekskul
              </span>
              <FaArrowRight size={20} />
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/organisasi" className="flex justify-between items-center">
              <span className="flex items-center">
                <BsDiagram3 size={20} className="mr-3" /> Organisasi
              </span>
              <FaArrowRight size={20} />
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/profil" className="flex justify-between items-center">
              <span className="flex items-center">
                <ImProfile size={20} className="mr-3" /> Profil
              </span>
              <FaArrowRight size={20} />
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/kontak" className="flex justify-between items-center">
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
