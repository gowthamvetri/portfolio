import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

function Projects() {
  const projects = [
    {
      title: "Project Name 1",
      description: "Brief description of your project. What it does, technologies used, and key features.",
      image: "/path-to-project-image.jpg", // Add your project screenshot
      techStack: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/project1",
      liveLink: "https://project1-demo.com",
    },
    // Add more projects following the same structure
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