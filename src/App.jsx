import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [menu, setmenu] = useState("home");

  useEffect(() => {
    const location = window.location.hash.split("#")[1];
    setmenu(location || "home");
  }, []);

  return (
    <>
      <div className="flex flex-col bg-gradient-to-br from-purple-900 via-gray-800 via-55% to-purple-700 text-white min-h-screen">
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar menu={menu} setmenu={setmenu} />
        </div>
        <div className="scroll-smooth scrollbar-hide">
          <Home id="home" setmenu={setmenu} />
          <About id="about" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Contact id="contact" />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
