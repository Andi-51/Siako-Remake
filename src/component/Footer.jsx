import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#42a5f5] text-black py-8">
      <div className="container mx-auto px-6 flex flex-col items-center">
      
        {/* Bagian atas: logo + sosial media */}
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full mb-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src={Logo} alt="Logo SMK" className="w-12 h-12" />
            <span className="font-semibold text-lg text-white">SMK INFORMATIKA CBI</span>
          </div>

          {/* Social Media */}
          <div className="flex space-x-5">
            <a
              href="https://www.instagram.com/smkinformatikacbi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <AiFillInstagram size={28} className="text-white"/>
            </a>
            <a
              href="https://www.facebook.com/groups/295485377297340/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaFacebook size={28} className="text-white"/>
            </a>
          </div>
        </div>

        {/* Bagian bawah: navigasi + copyright */}
        <div className="w-full border-t border-white/30 pt-4 flex flex-col items-center text-sm">
          {/* Navigasi */}
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-3 font-medium">
            <Link to="/" className="hover:underline">Beranda</Link>
            <Link to="/jurusan" className="hover:underline">Jurusan</Link>
            <Link to="/ekskul" className="hover:underline">Ekskul</Link>
            <Link to="/organisasi" className="hover:underline">Organisasi</Link>
            <Link to="/profile" className="hover:underline">Profil</Link>
            <Link to="/kontak" className="hover:underline">Kontak</Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-white">
            © {new Date().getFullYear()} SMK Informatika CBI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
