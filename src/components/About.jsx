import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaUser, FaGraduationCap, FaCode, FaReact, FaJs, FaCss3Alt, FaAccessibleIcon, FaLaptopCode, FaGithub, FaDownload } from "react-icons/fa6";
import resume from '../assets/714023104029.pdf';

function About() {
  const [tab, setTab] = useState("personal");

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Gowtham_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='min-h-screen w-full pt-16 sm:pt-24 flex items-center justify-center px-4' id='about'>
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-4 lg:gap-10"
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        {/* Left Side Animation - Hidden on small screens */}
        <motion.div
          className="hidden lg:flex flex-[0.7] items-center justify-center flex-col gap-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          <motion.svg
            width="140"
            height="140"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <circle cx="110" cy="110" r="100" stroke="#a78bfa" strokeWidth="8" fill="#6d28d9" />
            <motion.circle
              cx="110"
              cy="110"
              r="70"
              stroke="#fff"
              strokeWidth="4"
              fill="none"
              animate={{ strokeDashoffset: [0, 440, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              strokeDasharray="440"
            />
            <motion.circle
              cx="110"
              cy="110"
              r="40"
              stroke="#c4b5fd"
              strokeWidth="4"
              fill="none"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.svg>

          <motion.button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="text-lg" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Right Side Content */}
        <div className="flex-[2.5] w-full max-w-3xl">
          {/* Mobile Resume Button */}
          <div className="lg:hidden flex justify-center mb-6">
            <motion.button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-sm" />
              Resume
            </motion.button>
          </div>

          {/* Title */}
          <div className='flex items-center justify-center mb-6'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold border-b-4 border-purple-500 pb-2 text-center'>About Me</h1>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-6 gap-1 sm:gap-2">
            <button
              className={`px-2 sm:px-4 lg:px-6 py-2 rounded-full font-medium text-xs sm:text-sm lg:text-base flex items-center gap-1 sm:gap-2 transition 
                ${tab === "personal" ? "bg-purple-600 text-white" : "bg-gray-800 text-purple-300 hover:bg-purple-700"}`}
              onClick={() => setTab("personal")}
            >
              <FaUser className="text-xs sm:text-sm" />
              <span className="hidden sm:inline">Personal</span>
              <span className="sm:hidden">Info</span>
            </button>
            <button
              className={`px-2 sm:px-4 lg:px-6 py-2 rounded-full font-medium text-xs sm:text-sm lg:text-base flex items-center gap-1 sm:gap-2 transition 
                ${tab === "specialty" ? "bg-purple-600 text-white" : "bg-gray-800 text-purple-300 hover:bg-purple-700"}`}
              onClick={() => setTab("specialty")}
            >
              <FaCode className="text-xs sm:text-sm" />
              <span className="hidden sm:inline">Specialty</span>
              <span className="sm:hidden">Skills</span>
            </button>
            <button
              className={`px-2 sm:px-4 lg:px-6 py-2 rounded-full font-medium text-xs sm:text-sm lg:text-base flex items-center gap-1 sm:gap-2 transition 
                ${tab === "education" ? "bg-purple-600 text-white" : "bg-gray-800 text-purple-300 hover:bg-purple-700"}`}
              onClick={() => setTab("education")}
            >
              <FaGraduationCap className="text-xs sm:text-sm" />
              <span className="hidden sm:inline">Education</span>
              <span className="sm:hidden">Study</span>
            </button>
          </div>

          {/* Tab Content */}
          <motion.div
            key={tab}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='flex justify-center'
          >
            {tab === "personal" && (
              <div className='w-full border-2 border-purple-500 p-3 sm:p-6 lg:p-8 rounded-lg shadow-lg bg-gray-900/60'>
                <div className='flex justify-center mb-3 sm:mb-4'>
                  <FaUser className="text-2xl sm:text-3xl lg:text-4xl text-purple-400" />
                </div>
                <p className='text-center text-sm sm:text-base lg:text-lg leading-relaxed'>
                  Hi! I'm a <span className="text-purple-300 font-semibold">developer</span> who builds 
                  <span className="hidden sm:inline"> interactive, modern, and accessible</span> web applications.
                  <span className="hidden lg:inline"> I love turning ideas into reality with clean code and creative UI.</span>
                </p>
                
                {/* Mobile simplified list */}
                <div className="sm:hidden mt-4 text-center text-sm space-y-2">
                  <div><span className="text-purple-300 font-medium">Focus:</span> React & JavaScript</div>
                  <div><span className="text-purple-300 font-medium">Tools:</span> VS Code, GitHub</div>
                </div>

                {/* Desktop detailed list */}
                <ul className="hidden sm:block mt-4 lg:mt-6 text-center text-sm sm:text-base lg:text-lg space-y-2">
                  <li>
                    <span className="font-semibold text-purple-300">Driven by:</span> Curiosity & Innovation
                  </li>
                  <li>
                    <span className="font-semibold text-purple-300">Favorite Tools:</span> VS Code, GitHub, Figma
                  </li>
                  <li className="hidden lg:block">
                    <span className="font-semibold text-purple-300">Hobbies:</span> Coding Challenges, Tech Blogging
                  </li>
                </ul>
                
                <p className='hidden sm:block text-center text-sm sm:text-base lg:text-lg mt-4 lg:mt-6'>
                  Always learning, always building.
                  <span className="hidden lg:inline"> Let's create something awesome together!</span>
                </p>
              </div>
            )}

            {tab === "specialty" && (
              <div className='w-full border-2 border-purple-500 p-3 sm:p-6 lg:p-8 rounded-lg shadow-lg bg-gray-900/60'>
                <div className='flex justify-center mb-3 sm:mb-4'>
                  <FaCode className="text-2xl sm:text-3xl lg:text-4xl text-purple-400" />
                </div>
                
                {/* Mobile: 2 columns, reduced items */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 text-center text-xs sm:text-sm lg:text-base">
                  <div className="flex flex-col items-center border-2 border-purple-700 rounded-lg p-2 sm:p-3 lg:p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaReact className="text-lg sm:text-2xl lg:text-3xl text-cyan-400 mb-1 sm:mb-2" />
                    <span className="font-medium sm:font-semibold text-purple-300">React</span>
                    <span className="hidden sm:inline text-xs sm:text-sm">Frontend</span>
                  </div>
                  <div className="flex flex-col items-center border-2 border-purple-700 rounded-lg p-2 sm:p-3 lg:p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaJs className="text-lg sm:text-2xl lg:text-3xl text-yellow-400 mb-1 sm:mb-2" />
                    <span className="font-medium sm:font-semibold text-purple-300">JavaScript</span>
                    <span className="hidden sm:inline text-xs sm:text-sm">ES6+</span>
                  </div>
                  <div className="flex flex-col items-center border-2 border-purple-700 rounded-lg p-2 sm:p-3 lg:p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaCss3Alt className="text-lg sm:text-2xl lg:text-3xl text-blue-400 mb-1 sm:mb-2" />
                    <span className="font-medium sm:font-semibold text-purple-300">CSS</span>
                    <span className="hidden sm:inline text-xs sm:text-sm">Tailwind</span>
                  </div>
                  <div className="flex flex-col items-center border-2 border-purple-700 rounded-lg p-2 sm:p-3 lg:p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaGithub className="text-lg sm:text-2xl lg:text-3xl text-white mb-1 sm:mb-2" />
                    <span className="font-medium sm:font-semibold text-purple-300">Git</span>
                    <span className="hidden sm:inline text-xs sm:text-sm">GitHub</span>
                  </div>
                  <div className="hidden sm:flex flex-col items-center border-2 border-purple-700 rounded-lg p-2 sm:p-3 lg:p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaAccessibleIcon className="text-lg sm:text-2xl lg:text-3xl text-green-400 mb-1 sm:mb-2" />
                    <span className="font-medium sm:font-semibold text-purple-300">A11y</span>
                    <span className="hidden lg:inline text-xs sm:text-sm">Accessibility</span>
                  </div>
                  <div className="hidden sm:flex flex-col items-center border-2 border-purple-700 rounded-lg p-2 sm:p-3 lg:p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaLaptopCode className="text-lg sm:text-2xl lg:text-3xl text-purple-400 mb-1 sm:mb-2" />
                    <span className="font-medium sm:font-semibold text-purple-300">UI/UX</span>
                    <span className="hidden lg:inline text-xs sm:text-sm">Design</span>
                  </div>
                </div>
                
                <p className='text-center text-xs sm:text-sm lg:text-base mt-4 sm:mt-6 lg:mt-8'>
                  <span className="sm:hidden">Building beautiful web experiences.</span>
                  <span className="hidden sm:inline">Crafting seamless, performant, and beautiful user experiences.</span>
                </p>
              </div>
            )}

            {tab === "education" && (
              <div className='w-full border-2 border-purple-500 p-3 sm:p-6 lg:p-8 rounded-lg shadow-lg bg-gray-900/60'>
                <div className='flex justify-center mb-3 sm:mb-4'>
                  <FaGraduationCap className="text-2xl sm:text-3xl lg:text-4xl text-purple-400" />
                </div>
                
                <div className="text-center">
                  <div className="text-sm sm:text-base lg:text-lg">
                    <span className="font-medium sm:font-semibold text-purple-300 block sm:inline">
                      B.E Computer Science
                    </span>
                    <span className="hidden sm:inline"><br /></span>
                    <span className="block sm:inline text-xs sm:text-sm lg:text-base mt-1 sm:mt-0">
                      Sri Shakthi Institute of Engineering
                    </span>
                    <span className="block text-xs sm:text-sm text-gray-300 mt-1">
                      2023 - 2027
                    </span>
                  </div>
                </div>
                
                <p className='text-center text-xs sm:text-sm lg:text-base mt-4 sm:mt-6'>
                  <span className="sm:hidden">Strong foundation in programming & algorithms.</span>
                  <span className="hidden sm:inline">My education has given me a strong foundation in programming, algorithms, and web technologies.</span>
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default About