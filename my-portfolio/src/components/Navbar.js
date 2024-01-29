// Kuldeepsinh Zala
// 301367765
// 28-Jan-2024

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col md:flex-row items-center">
  <a href="#home" className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl flex items-center">
    <img src="/KuldeepLogo.jpg" alt="Logo" className="mr-3 h-10" />
    Home
  </a>
</div>


        <nav className="md:ml-auto md:py-1 md:pr-4 md:border-r md:border-gray-700	flex flex-wrap items-center text-base justify-end">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#services" className="mr-5 hover:text-white">
            Services
          </a>
          <a href="#aboutMe" className="mr-5 hover:text-white">
            About
          </a>
        </nav>

      
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
