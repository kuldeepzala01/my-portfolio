// Kuldeepsinh Zala
// 301367765
// 28-Jan-2024

import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
      <Projects />
      <Services />
      <AboutMe />
      <Contact />
    </main>
  );
}