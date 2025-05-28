import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaEnvelope, FaUser, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });

    emailjs.send(
      'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_PUBLIC_KEY'   // Replace with your EmailJS public key
    )
    .then(() => {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    })
    .catch((error) => {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    });
  };

  return (
    <div className='min-h-screen w-full pt-24 px-4' id='contact'>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 border-b-4 border-purple-500 pb-2 inline-block">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Have a question or want to work together? Leave me a message!</p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-gray-900/70 border-2 border-purple-700 rounded-xl p-6 md:p-8 max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-purple-300 mb-2">
                  <FaUser />
                  <span>Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border-2 border-purple-700 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-purple-300 mb-2">
                  <FaEnvelope />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border-2 border-purple-700 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-purple-300 mb-2">
                  <FaPhone />
                  <span>Phone (Optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border-2 border-purple-700 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-purple-300 mb-2">
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border-2 border-purple-700 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-purple-300 mb-2">
                <span>Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-gray-800/50 border-2 border-purple-700 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {status.message && (
              <div className={`text-center p-2 rounded-lg ${
                status.type === 'success' ? 'bg-green-500/20 text-green-300' :
                status.type === 'error' ? 'bg-red-500/20 text-red-300' :
                'bg-purple-500/20 text-purple-300'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;