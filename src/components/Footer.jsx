import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/gowthamvetri" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/gowtham-v-cse" },
    { icon: <FaEnvelope />, url: "mailto:gowthamvetriii@gmail.com" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="w-full bg-gray-900/80 mt-20 border-t border-purple-500/30">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Gowtham</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer passionate about creating interactive applications and experiences on the web.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <FaPhone className="text-purple-400" />
                <span>+91 123 456 7890</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <FaEnvelope className="text-purple-400" />
                <span>your.email@example.com</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-purple-400" />
                <span>Chennai, Tamil Nadu, India</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-purple-400 mb-4">Follow Me</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-purple-500/10 text-center text-gray-400">
          <p>© {currentYear} Gowtham. All rights reserved.</p>
          <p className="text-sm mt-2">
            Made with ❤️ by Gowtham
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer