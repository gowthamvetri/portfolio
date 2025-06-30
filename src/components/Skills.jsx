import React, { useState } from 'react'
import { FaGithub, FaCode, FaJs, FaReact, FaCss3Alt, FaDatabase, FaCertificate, FaChevronLeft, FaChevronRight, FaJava, FaNodeJs, FaGitAlt, FaPython, FaHtml5 } from "react-icons/fa6"
import { SiExpress, SiMongodb, SiTailwindcss, SiMysql } from "react-icons/si"
import LeetCode from './Leetcode';

function Skills() {
  // Updated skills data with more technologies
  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 90 },
    { name: "React", icon: <FaReact className="text-cyan-400" />, level: 85 },
    { name: "Java", icon: <FaJava className="text-red-500" />, level: 80 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 75 },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" />, level: 75 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 70 },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 78 },
    { name: "Python", icon: <FaPython className="text-blue-400" />, level: 50 },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
    { name: "CSS/Tailwind", icon: <SiTailwindcss className="text-cyan-400" />, level: 88 },
    { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-600" />, level: 85 },
    { name: "Problem Solving", icon: <FaCode className="text-purple-400" />, level: 88 },
  ];

  // Example certifications data with images
  const certifications = [
    {
      title: "Python Essential Training",
      issuer: "LinkedIn Learning",
      date: "Apr 2024",
      description: "Comprehensive Python course covering fundamentals, data structures, object-oriented programming, and advanced concepts for real-world applications.",
      link: "https://www.linkedin.com/learning/certificates/28600b5ea0f1ad1ebaa5711abb3306def10875321ed5f3da1ccc0370235bd308?trk=share_certificate",
      image: "https://media.licdn.com/dms/image/C4E0BAQF7gKDpKMlEQw/company-logo_200_200/0/1630640869849/linkedin_learning_logo?e=2147483647&v=beta&t=example",
      badgeColor: "from-blue-600 to-blue-800"
    },
    {
      title: "SQL Fundamentals",
      issuer: "SoloLearn",
      date: "Jan 2024",
      description: "Master SQL database language for accessing and manipulating data, essential for data-driven decision making in modern applications.",
      link: "https://www.sololearn.com/certificates/CC-WILIH5CT",
      image: "https://blob.sololearn.com/avatars/sololearn.png",
      badgeColor: "from-green-600 to-green-800"
    }
  ];

  return (
    <div className='min-h-screen w-full pt-24 flex flex-col items-center px-2' id='skills'>
      {/* GitHub & LeetCode Details */}
      <div className="w-full max-w-3xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 border-b-4 border-purple-500 pb-2">My Profiles</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <a
            href="https://github.com/gowthamvetri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 border-2 border-purple-500 rounded-lg shadow-lg bg-gray-900/60 hover:bg-purple-800/40 transition"
          >
            <FaGithub className="text-4xl text-white" />
            <div>
              <div className="font-semibold text-purple-300">GitHub</div>
              <div className="text-sm text-purple-100">gowthamvetri</div>
            </div>
          </a>
          <a
            href="https://leetcode.com/u/Gowtham_Vetri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 border-2 border-yellow-400 rounded-lg shadow-lg bg-gray-900/60 hover:bg-yellow-900/40 transition"
          >
            <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode" className="w-10 h-10" />
            <div>
              <div className="font-semibold text-yellow-300">LeetCode</div>
              <div className="text-sm text-yellow-100">Gowtham_Vetri</div>
            </div>
          </a>
        </div>
      </div>
      <LeetCode />

      {/* Skills Grid */}
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 border-b-4 border-purple-500 pb-2">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group bg-gray-900/70 border-2 border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <span className="transition-transform duration-300 group-hover:scale-125 text-4xl mb-3">{skill.icon}</span>
                <span className="font-semibold text-purple-200 text-lg mb-2">{skill.name}</span>
                <span className="text-purple-400 font-bold text-xl">{skill.level}%</span>
              </div>
              <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden mb-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-purple-300 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-center">
                <span className="text-xs text-purple-300 font-medium">
                  {skill.level >= 90 && "Expert"}
                  {skill.level >= 80 && skill.level < 90 && "Advanced"}
                  {skill.level >= 70 && skill.level < 80 && "Intermediate"}
                  {skill.level < 70 && "Beginner"}
                </span>
              </div>
              <div className="mt-3 text-sm text-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                {skill.name === "JavaScript" && "Building dynamic, interactive web apps"}
                {skill.name === "React" && "Creating fast, scalable UIs"}
                {skill.name === "Java" && "Object-oriented programming & algorithms"}
                {skill.name === "Node.js" && "Server-side JavaScript development"}
                {skill.name === "Express.js" && "Fast web application framework"}
                {skill.name === "MongoDB" && "NoSQL database management"}
                {skill.name === "MySQL" && "Relational database design"}
                {skill.name === "Python" && "Data analysis & automation"}
                {skill.name === "HTML5" && "Semantic web structure"}
                {skill.name === "CSS/Tailwind" && "Responsive design & styling"}
                {skill.name === "Git/GitHub" && "Version control & collaboration"}
                {skill.name === "Problem Solving" && "Algorithmic thinking & debugging"}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Grid View with Images */}
      <div className="w-full max-w-6xl mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 border-b-4 border-purple-500 pb-2">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-900/70 border-2 border-purple-700 rounded-xl overflow-hidden hover:border-purple-400 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Certificate Image/Header */}
              <div className={`relative bg-gradient-to-br ${cert.badgeColor} p-6 text-center h-32 flex items-center justify-center overflow-hidden`}>
                <img 
                  src={cert.image} 
                  alt={`${cert.issuer} logo`}
                  className="w-16 h-16 object-contain bg-white rounded-lg p-2 shadow-lg"
                  onError={(e) => {
                    // Fallback to certificate icon if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <FaCertificate className="text-4xl text-white mx-auto hidden" />
                <div className="absolute bottom-2 right-2 text-xs text-white/80 font-medium bg-black/30 px-2 py-1 rounded">
                  {cert.date}
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2 line-clamp-2">{cert.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-purple-400 font-medium">{cert.issuer}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{cert.description}</p>
                
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                  >
                    <FaCertificate className="text-sm" />
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills