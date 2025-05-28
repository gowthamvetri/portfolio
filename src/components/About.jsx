import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaUser, FaGraduationCap, FaCode, FaReact, FaJs, FaCss3Alt, FaAccessibleIcon, FaLaptopCode, FaGithub, FaDownload } from "react-icons/fa6";
import resume from '../assets/714023104029.pdf'; // Adjust the path to your resume file

function About() {
  const [tab, setTab] = useState("personal");

  const handleDownloadResume = () => {
    // Create a link element to download the resume
    const link = document.createElement('a');
    link.href = resume; // Replace with your actual resume path
    link.download = 'Gowtham_Resume.pdf'; // Replace with your name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='min-h-screen w-full pt-24 flex items-center justify-center' id='about'>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-6 md:gap-10 px-2"
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.5 }}
      >
        {/* Left Side Animation/Avatar */}
        <motion.div
          className="w-full md:w-auto md:flex hidden flex-[0.7] items-center justify-center mb-8 md:mb-0 flex-col gap-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
        >
          {/* Example SVG Animation */}
          <motion.svg
            width="160"
            height="160"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl max-w-[60vw] md:max-w-none"
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

          {/* Download Resume Button */}
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

        {/* Right Side Tabs */}
        <div className="flex-[2.5] w-full max-w-3xl">
          {/* Mobile Resume Button - visible only on mobile */}
          <div className="md:hidden flex justify-center mb-6">
            <motion.button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-lg" />
              Download Resume
            </motion.button>
          </div>

          <div className='flex items-center justify-center mb-8'>
            <h1 className='text-3xl sm:text-4xl font-bold border-b-4 border-purple-500 pb-2 text-center w-full'>About Me</h1>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2 sm:gap-4">
            <button
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition 
                ${tab === "personal" ? "bg-purple-600 text-white" : "bg-gray-800 text-purple-300 hover:bg-purple-700"}`}
              onClick={() => setTab("personal")}
            >
              <FaUser /> Personal Info
            </button>
            <button
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition 
                ${tab === "specialty" ? "bg-purple-600 text-white" : "bg-gray-800 text-purple-300 hover:bg-purple-700"}`}
              onClick={() => setTab("specialty")}
            >
              <FaCode /> Specialty
            </button>
            <button
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition 
                ${tab === "education" ? "bg-purple-600 text-white" : "bg-gray-800 text-purple-300 hover:bg-purple-700"}`}
              onClick={() => setTab("education")}
            >
              <FaGraduationCap /> Education
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
              <div className='w-full border-2 border-purple-500 p-4 sm:p-8 rounded-lg shadow-lg bg-gray-900/60 animate-fade-in'>
                <div className='flex justify-center mb-4'>
                  <FaUser className="text-4xl text-purple-400" />
                </div>
                <p className='text-center text-base sm:text-lg'>
                  Hi! I'm a <span className="text-purple-300 font-semibold">developer</span> who thrives on building interactive, modern, and accessible web applications. I love turning ideas into reality with clean code and creative UI.
                </p>
                <ul className="mt-6 text-center text-base sm:text-lg space-y-2">
                  <li>
                    <span className="font-semibold text-purple-300">Driven by:</span> Curiosity, Collaboration, and Innovation
                  </li>
                  <li>
                    <span className="font-semibold text-purple-300">Favorite Tools:</span> VS Code, GitHub, Figma
                  </li>
                  <li>
                    <span className="font-semibold text-purple-300">Hobbies:</span> Coding Challenges, Tech Blogging, Music
                  </li>
                </ul>
                <p className='text-center text-base sm:text-lg mt-6'>
                  Always learning, always building. Let's create something awesome together!
                </p>
              </div>
            )}

            {tab === "specialty" && (
              <div className='w-full border-2 border-purple-500 p-4 sm:p-8 rounded-lg shadow-lg bg-gray-900/60 animate-fade-in'>
                <div className='flex justify-center mb-4'>
                  <FaCode className="text-4xl text-purple-400" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center text-base sm:text-lg">
                  <div className="flex flex-col items-center border-2 border-purple-700 rounded-lg p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaReact className="text-3xl text-cyan-400 mb-2" />
                    <span className="font-semibold text-purple-300">Frontend</span>
                    <span>React</span>
                  </div>
                  <div className="flex flex-col items-center border-2 border-purple-700 rounded-lg p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaJs className="text-3xl text-yellow-400 mb-2" />
                    <span className="font-semibold text-purple-300">JavaScript</span>
                    <span>ES6+</span>
                  </div>
                  <div className="flex flex-col items-center border-2 border-purple-700 rounded-lg p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaCss3Alt className="text-3xl text-blue-400 mb-2" />
                    <span className="font-semibold text-purple-300">Styling</span>
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex flex-col items-center border-2 border-purple-700 rounded-lg p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaAccessibleIcon className="text-3xl text-green-400 mb-2" />
                    <span className="font-semibold text-purple-300">Accessibility</span>
                    <span>Framer Motion, A11y</span>
                  </div>
                  <div className="flex flex-col items-center border-2 border-purple-700 rounded-lg p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaGithub className="text-3xl text-white mb-2" />
                    <span className="font-semibold text-purple-300">Collaboration</span>
                    <span>Git, GitHub, Open Source</span>
                  </div>
                  <div className="flex flex-col items-center border-2 border-purple-700 rounded-lg p-4 transition hover:bg-purple-800/40 hover:scale-105 hover:border-purple-400 cursor-pointer">
                    <FaLaptopCode className="text-3xl text-purple-400 mb-2" />
                    <span className="font-semibold text-purple-300">UI/UX Design</span>
                    <span>Responsive, Modern</span>
                  </div>
                </div>
                <p className='text-center text-base sm:text-lg mt-8'>
                  My specialty is crafting seamless, performant, and beautiful user experiences.
                </p>
              </div>
            )}

            {tab === "education" && (
              <div className='w-full border-2 border-purple-500 p-4 sm:p-8 rounded-lg shadow-lg bg-gray-900/60 animate-fade-in'>
                <div className='flex justify-center mb-4'>
                  <FaGraduationCap className="text-4xl text-purple-400" />
                </div>
                <ul className="text-base sm:text-lg space-y-4">
                  <li>
                    <span className="font-semibold text-purple-300">B.Sc. in Computer Science</span><br />
                    XYZ University, 2021 - 2024
                  </li>
                  <li>
                    <span className="font-semibold text-purple-300">High School Diploma</span><br />
                    ABC High School, 2019 - 2021
                  </li>
                </ul>
                <p className='text-center text-base sm:text-lg mt-6'>
                  My education has given me a strong foundation in programming, algorithms, and web technologies.
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