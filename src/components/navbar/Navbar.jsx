import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { LuBrainCog } from "react-icons/lu";
import { MdDeveloperMode } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { useLocation } from "react-router-dom";
import useActiveSection from "../../hooks/useActiveSection ";

function Navbar({ menu, setmenu }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  // Only update menu when currentPath or activeSection changes
  React.useEffect(() => {
    if (currentPath !== "/") {
      setmenu("home");
    } else {
      setmenu(activeSection);
    }
  }, [currentPath, activeSection, setmenu]);

  return (
    <div className="md:h-auto bg-white/20 backdrop-blur-2xl h-16 flex p-3 justify-between items-center shadow-md z-50">
      <div>
        <img className="md:w-28 md:h-18 h-10 w-20" src={logo} alt="" />
      </div>
      <motion.div
        className="hidden md:block pr-10"
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <ul className="flex gap-15 text-gray-800 font-semibold text-xl items-center justify-center">
          <li className={`${menu === "home" ? "p-2 rounded-xl bg-gradient-to-bl from-purple-800 to-gray-600 text-white" : "hover:text-purple-500 cursor-pointer flex flex-col"}`}>
            <a href="#home" onClick={() => setmenu("home")} className="flex items-center gap-1.5"><IoMdHome className="text-2xl" /> Home</a>
            
          </li>
          <li className={`${menu === "about" ? "p-2 rounded-xl bg-gradient-to-bl from-purple-800 to-gray-600 text-white" : "hover:text-purple-500 cursor-pointer flex flex-col"}`}>
            <a href="#about" onClick={() => setmenu("about")} className="flex items-center gap-1.5"><IoPersonSharp className="text-2xl" /> About</a>

          </li>
          <li className={`${menu === "skills" ? "p-2 rounded-xl bg-gradient-to-bl from-purple-800 to-gray-600 text-white" : "hover:text-purple-500 cursor-pointer flex flex-col"}`}>
            <a href="#skills" onClick={() => setmenu("skills")} className="flex items-center gap-1.5"><LuBrainCog className="text-2xl" /> Skills</a>

          </li>
          <li className={`${menu === "projects" ? "p-2 rounded-xl bg-gradient-to-bl from-purple-800 to-gray-600 text-white" : "hover:text-purple-500 cursor-pointer flex flex-col"}`}>
            <a href="#projects" onClick={() => setmenu("projects")} className="flex items-center gap-1.5"><MdDeveloperMode className="text-2xl" /> Projects</a>

          </li>
          <li className={`${menu === "contact" ? "p-2 rounded-xl bg-gradient-to-bl from-purple-800 to-gray-600 text-white" : "hover:text-purple-500 cursor-pointer flex flex-col"}`}>
            <a href="#contact" onClick={() => setmenu("contact")} className="flex items-center gap-1.5"><MdOutlineConnectWithoutContact className="text-2xl" /> Contact</a>
            
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar;
