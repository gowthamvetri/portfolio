import React, { useState } from 'react'
import { FaGithub, FaCode, FaJs, FaReact, FaCss3Alt, FaDatabase, FaCertificate, FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import LeetCode from './Leetcode';


function Skills() {
  // Example skill data
  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 90 },
    { name: "React", icon: <FaReact className="text-cyan-400" />, level: 85 },
    { name: "CSS/Tailwind", icon: <FaCss3Alt className="text-blue-400" />, level: 80 },
    { name: "Data Structures", icon: <FaDatabase className="text-green-400" />, level: 75 },
    { name: "Problem Solving", icon: <FaCode className="text-purple-400" />, level: 88 },
  ];

  // Example certifications data
  const certifications = [
    {
      title: "Python Essential Training",
      issuer: "LinkedIn Learning",
      date: "Apr 2024",
      description: "Python is one of the most commonly used dynamic languages for many large organizations, including Google, Yahoo, and IBM. Supported on all major operating systems, it comes pre-installed on Macs, as well as most Linux and Unix-based systems. In this course, senior software engineer Ryan Mitchell guides you through all the essentials of learning and using Python. Learn how computers think, as well as how to install Python, pip, and Jupyter Notebook and the basics of writing a program. Explore variables and types, operators, functions, classes, objects, and more. Go over basic data types like ints and floats, Booleans, and strings. Deep dive into basic data structures, control flow, functions, classes, and objects. Find out how to handle errors and exceptions, as well as threads and processes. Plus, discover how to work with different types of files in Python, pass command-line arguments to your Python script, and create modules and packages.",
      link: "https://www.linkedin.com/learning/certificates/28600b5ea0f1ad1ebaa5711abb3306def10875321ed5f3da1ccc0370235bd308?trk=share_certificate"
    },
    {
      title: "SQL Fundamentals",
      issuer: "freeCodeCamp",
      date: "Jan 2024",
      description: "Data is powerful, but only if you know how to use it. That’s where SQL comes in! In this course, you’ll learn how to use the SQL standardized database language to access and manipulate data stored in databases. Once you know how to use SQL, you’ll be able to join top companies (and even governments!) who use data to make predictions and decisions about everything from what products to develop to how democracy should function. You don’t need any previous coding experience for this course, so dive right in!",
      link: "https://www.sololearn.com/certificates/CC-WILIH5CT"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Sep 2023",
      description: "Built responsive layouts and user interfaces using HTML, CSS, and Flexbox/Grid.",
      link: "https://freecodecamp.org/certification/EXAMPLE3"
    },
  ];

  const [currentCert, setCurrentCert] = useState(0);

  const handlePrev = () => {
    setCurrentCert((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCert((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='min-h-screen w-full pt-24 flex flex-col items-center px-2' id='skills'>
      {/* GitHub & LeetCode Details */}
      <div className="w-full max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 border-b-4 border-purple-500 pb-2">My Profiles</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 border-2 border-purple-500 rounded-lg shadow-lg bg-gray-900/60 hover:bg-purple-800/40 transition"
          >
            <FaGithub className="text-4xl text-white" />
            <div>
              <div className="font-semibold text-purple-300">GitHub</div>
              <div className="text-sm text-purple-100">your-github-username</div>
            </div>
          </a>
          <a
            href="https://leetcode.com/your-leetcode-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 border-2 border-yellow-400 rounded-lg shadow-lg bg-gray-900/60 hover:bg-yellow-900/40 transition"
          >
            <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode" className="w-10 h-10" />
            <div>
              <div className="font-semibold text-yellow-300">LeetCode</div>
              <div className="text-sm text-yellow-100">your-leetcode-username</div>
            </div>
          </a>
        </div>
      </div>
      <LeetCode />

      {/* Skills Progress Bars */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 border-b-4 border-purple-500 pb-2">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group bg-gray-900/70 border-2 border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="transition-transform duration-300 group-hover:scale-125">{skill.icon}</span>
                <span className="font-semibold text-purple-200 text-lg">{skill.name}</span>
                <span className="ml-auto text-purple-400 font-bold">{skill.level}%</span>
              </div>
              <div className="relative w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-purple-300 h-4 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
                <span
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {skill.level >= 90 && "Expert"}
                  {skill.level >= 80 && skill.level < 90 && "Advanced"}
                  {skill.level >= 70 && skill.level < 80 && "Intermediate"}
                  {skill.level < 70 && "Beginner"}
                </span>
              </div>
              <div className="mt-3 text-sm text-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name === "JavaScript" && "Building dynamic, interactive web apps with modern JS."}
                {skill.name === "React" && "Creating fast, scalable UIs with React and hooks."}
                {skill.name === "CSS/Tailwind" && "Designing responsive layouts with utility-first CSS."}
                {skill.name === "Data Structures" && "Optimizing code with efficient data handling."}
                {skill.name === "Problem Solving" && "Tackling coding challenges and algorithms."}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Slide View */}
      <div className="w-full mt-16 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 border-b-4 border-purple-500 pb-2 w-fit">Certifications</h2>
        <div className="relative flex flex-col items-center">
          <div className="flex items-center justify-center w-full">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-purple-700 hover:bg-purple-500 text-white shadow-lg transition disabled:opacity-50"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <div
              className="flex flex-col items-center mx-4 w-full max-w-xl"
              style={{
                scrollBehavior: 'smooth',
                transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                willChange: 'transform',
              }}
              key={currentCert} // Forces re-mount for animation
            >
              <span className="w-10 h-10 rounded-full bg-purple-600 border-4 border-purple-300 flex items-center justify-center shadow-lg z-10 mb-4">
                <FaCertificate className="text-white text-2xl" />
              </span>
              <div className="bg-gray-900/80 w-full border-2 border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-500 text-center">
                <div className="font-semibold text-purple-200 text-lg mb-1">{certifications[currentCert].title}</div>
                <div className="text-xs text-purple-400 mb-2">{certifications[currentCert].date}</div>
                <div className="text-sm text-purple-100 mb-2">{certifications[currentCert].issuer}</div>
                <div className="text-sm text-gray-300 mb-2">{certifications[currentCert].description}</div>
                {certifications[currentCert].link && (
                  <a
                    href={certifications[currentCert].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-purple-300 underline hover:text-purple-400 transition"
                  >
                    View Certificate
                  </a>
                )}
              </div>
              <div className="flex gap-2 mt-4">
                {certifications.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full ${idx === currentCert ? "bg-purple-500" : "bg-purple-300 opacity-50"} transition`}
                  ></span>
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-purple-700 hover:bg-purple-500 text-white shadow-lg transition disabled:opacity-50"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills