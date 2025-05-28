import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import movieRec from '../assets/movie_recommendation.png'
import notesApp from '../assets/notesApp.png'
import studyRoom from '../assets/study_Room.png'
import youtube from '../assets/youtubeclone.png'
import ecommerce from '../assets/ecommerce.png'

function Projects() {
  const projects = [
    {
      title: "Recommendation System",
      description: "A web application that provides personalized movie recommendations based on user preferences and viewing history.",
      image: movieRec,
      techStack: ["Python"],
      githubLink: "https://github.com/gowthamvetri/recommendation_system",
      liveLink: "https://recommendation-system-xi.vercel.app",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js.",
      image: ecommerce,
      techStack: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      liveLink: "https://yourusername.github.io/ecommerce-platform/",
    },
    {
      title: "Youtube Clone",
      description: "A clone of YouTube that allows users to watch and upload videos.",
      image: youtube,
      techStack: ["HTML", "CSS"],
      githubLink: "https://github.com/gowthamvetri/gowtham-youtube",
      liveLink: "https://gowtham-youtube.vercel.app",
    },
    {
      title: "Virtual Study Room",
      description: "A virtual study room application that allows users to create and join study sessions.",
      image: studyRoom,
      techStack: ["React", "Node.js", "Socket.io"],
      githubLink: "https://github.com/gowthamvetri/virtualStudyRoom",
      liveLink: "https://virtual-study-room-blond.vercel.app",
    },
    {
      title: "Notes App",
      description: "A simple notes application that allows users to create, edit, and delete notes.",
      image: notesApp,
      techStack: ["React", "Node.js"],
      githubLink: "https://github.com/gowthamvetri/notes_App",
      liveLink: "https://notes-app-s8so.vercel.app/",
    }

  ];

  return (
    <div className='min-h-screen w-full pt-24 px-4' id='projects'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 border-b-4 border-purple-500 pb-2">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="group bg-gray-900/70 border-2 border-purple-700 rounded-xl overflow-hidden hover:border-purple-400 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/30 transition"
                  >
                    <FaGithub className="text-2xl text-white" />
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/30 transition"
                  >
                    <FaExternalLinkAlt className="text-2xl text-white" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;