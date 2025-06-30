import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaEnvelope, FaUser, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { EmailJSResponseStatus } from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const parms = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      }

      const response = await emailjs.send('service_kllk2di','template_dneqzms', parms,'_iDHpf4pvsflKL44N')
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Full error:', error);
      setStatus({ 
        type: 'error', 
        message: `Network error: ${error.message}. Please check your connection and try again.` 
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-purple-400" />,
      title: "Email",
      value: "gowthamvetriii@gmail.com",
      link: "mailto:gowthamvetriii@gmail.com"
    },
    {
      icon: <FaPhone className="text-green-400" />,
      title: "Phone",
      value: "+91 8148206252",
      link: "tel:+918148206252"
    },
    {
      icon: <FaMapMarkerAlt className="text-red-400" />,
      title: "Location",
      value: "Tiruppur, Tamil Nadu, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-blue-400" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/gowtham-v-cse"
    },
    {
      icon: <FaGithub className="text-gray-400" />,
      name: "GitHub",
      url: "https://github.com/gowthamvetri"
    },
    {
      icon: <FaEnvelope className="text-purple-400" />,
      name: "Email",
      url: "mailto:gowthamvetriii@gmail.com"
    }
  ];

  return (
    <div className='min-h-screen w-full pt-24 px-4' id='contact'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 border-b-4 border-purple-500 pb-2 inline-block">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer 
                wanting to collaborate, feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/70 border border-purple-700 rounded-lg hover:border-purple-400 transition-colors"
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-purple-200">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-gray-300 hover:text-purple-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-300">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-purple-300 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-900/70 border border-purple-700 flex items-center justify-center hover:border-purple-400 hover:scale-110 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-gray-900/70 border-2 border-purple-700 rounded-xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-purple-300 mb-2 font-medium">
                    <FaUser />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-gray-800/50 border-2 border-purple-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-purple-300 mb-2 font-medium">
                    <FaEnvelope />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-gray-800/50 border-2 border-purple-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-purple-300 mb-2 font-medium">
                    <FaPhone />
                    <span>Phone (Optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full bg-gray-800/50 border-2 border-purple-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-purple-300 mb-2 font-medium">
                    <span>Subject *</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Discussion"
                    className="w-full bg-gray-800/50 border-2 border-purple-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-purple-300 mb-2 font-medium">
                  <span>Message *</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or just say hello!"
                  className="w-full bg-gray-800/50 border-2 border-purple-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-4 rounded-lg border ${
                    status.type === 'success' 
                      ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                    status.type === 'error' 
                      ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                      'bg-purple-500/20 text-purple-300 border-purple-500/30'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;