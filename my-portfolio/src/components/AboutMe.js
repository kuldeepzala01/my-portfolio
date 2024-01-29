// Kuldeepsinh Zala
// 301367765
// 28-Jan-2024

import React from "react";

export default function AboutMe() {
  const shortDescription = "";

  return (
    <section id="aboutMe" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap items-center">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-start relative">
          <img src="./Kuldeep-Portfolioimage.png" alt="Profile" className="w-32 h-32 rounded-full object-cover object-center mr-6" />
          <div className="lg:w-2/3">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
              15 Whiteleas Ave. <br />
              Scarborough, Ontario,
              Canada
            </p>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              EMAIL
            </h2>
            <a className="text-indigo-400 leading-relaxed">
              kkzala7566@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">999-888-1111</p>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-6 mt-4 lg:mt-0">
          <a
            href="/Kuldeep_Security_Resume.pdf" // Replace with your resume's path
            download="./Kuldeep_Security_Resume.pdf" // Replace with the preferred name for the downloaded file
            className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg block">
            Download Resume
          </a>
        </div>
        <div className="w-full mt-4">
          <p className="text-white text-base mt-4">
            {shortDescription}
            Who i am:
            Full Stack Software Developer with 1 years of experience with a demonstrated history of working in developing
software for the Banking, Health Care and Telecom industry. Skilled in full-stack development with good
knowledge of all the phases of Software Development Life Cycle(SDLC). 
          </p>
        </div>
      </div>
    </section>
  );
}
