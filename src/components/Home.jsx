import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextComponent from './typeAnimation/TextComponent'
import { SiLeetcode } from "react-icons/si";
import image from '../assets/pasport_photo-removebg-preview.png'


function Home({setmenu}) {
  return (
    
      <div id='home' className="md:h-auto h-auto w-full mt-0 md:pb-30 md:pt-55 pt-20">
        <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.5 }}
          className="md:flex flx-col items-center justify-center h-full md:px-20 px-5 py-3 text-center gap-15"
        >
          <div className=' md:hidden block my-2 h-35 w-35 mx-auto relative bg-purple-200 rounded-full border-8 border-purple-300'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full opacity-50'></div>
            <img 
              src={image} 
              alt="Profile" 
              className="absolute rounded-full mx-auto mt-8 top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="flex flex-col md:items-start md:justify-start md:text-left gap-3">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow-gray-100">Hello, I'm <span className="text-purple-400">Gowtham</span></h1>
            <TextComponent />
            <p className="text-lg md:text-xl text-gray-300 mb-6">A passionate developer with a knack for creating amazing web experiences.</p>
            <div className='flex flex-row gap-4 items-center justify-center md:justify-start'>
              <a href="#about" onClick={() => setmenu("about")} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-300 md:text-xl">Know More</a>
              <a href="#projects" onClick={() => setmenu("projects")} className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-300 md:text-xl">View Projects</a>
            </div>
            <div className='flex flex-row gap-5 mt-6 text-gray-300 justify-center'>
              <a href="https://www.linkedin.com/in/gowtham-v-cse/" target='_blank' className='p-4 bg-purple-300 rounded-full'><FaLinkedin className="md:text-3xl text-blue-500" /></a>
              <a href="https://github.com/gowthamvetri" target='_blank' className='p-4 bg-purple-300 rounded-full'><FaGithub className="md:text-3xl text-black" /></a>
              <a href="https://leetcode.com/u/Gowtham_Vetri/" target='_blank' className='p-4 bg-purple-300 rounded-full'><SiLeetcode className="md:text-3xl text-yellow-500" /></a>
            </div>
          </div>
          <div className='hidden md:block bg-purple-200 rounded-full h-80 w-80 relative border-8 border-purple-300'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full opacity-50'></div>
            <img 
              src={image} 
              alt="Profile" 
              className="absolute rounded-full mx-auto mt-8 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
        </motion.div>
      </div>
    
  )
}

export default Home