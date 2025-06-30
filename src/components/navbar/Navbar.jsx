import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../variants";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { LuBrainCog } from "react-icons/lu";
import { MdDeveloperMode } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import useActiveSection from "../../hooks/useActiveSection ";

function Navbar({ menu, setmenu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  // Only update menu when currentPath or activeSection changes
  React.useEffect(() => {
    if (currentPath !== "/") {
      setmenu("home");
    } else {
      setmenu(activeSection);
    }
  }, [currentPath, activeSection, setmenu]);

  // Close mobile menu when a link is clicked
  const handleMobileMenuClick = (section) => {
    setmenu(section);
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "home", label: "Home", icon: IoMdHome },
    { id: "about", label: "About", icon: IoPersonSharp },
    { id: "skills", label: "Skills", icon: LuBrainCog },
    { id: "projects", label: "Projects", icon: MdDeveloperMode },
    { id: "contact", label: "Contact", icon: MdOutlineConnectWithoutContact },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 md:h-auto bg-white/20 backdrop-blur-2xl h-16 flex p-3 justify-between items-center shadow-md z-50">
        {/* Logo */}
        <div>
          <img className="md:w-28 md:h-18 h-10 w-20" src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:block pr-10"
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <ul className="flex gap-15 text-gray-800 font-semibold text-xl items-center justify-center">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li 
                  key={item.id}
                  className={`${
                    menu === item.id 
                      ? "p-2 rounded-xl bg-gradient-to-bl from-purple-800 to-gray-600 text-white" 
                      : "hover:text-purple-500 cursor-pointer flex flex-col"
                  }`}
                >
                  <a 
                    href={`#${item.id}`} 
                    onClick={() => setmenu(item.id)} 
                    className="flex items-center gap-1.5"
                  >
                    <IconComponent className="text-2xl" /> {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Mobile Menu Button */}
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="mobile-menu fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-2xl shadow-2xl z-50 md:hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-6">
                <ul className="space-y-1">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <a
                          href={`#${item.id}`}
                          onClick={() => handleMobileMenuClick(item.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                            menu === item.id
                              ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg"
                              : "text-gray-800 hover:bg-purple-100 hover:text-purple-600"
                          }`}
                        >
                          <IconComponent className="text-2xl" />
                          <span>{item.label}</span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation (Alternative/Additional) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-2xl shadow-2xl md:hidden z-40 border-t border-gray-200">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setmenu(item.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                  menu === item.id
                    ? "text-purple-600 bg-purple-100"
                    : "text-gray-600 hover:text-purple-500"
                }`}
              >
                <IconComponent className="text-xl" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Add padding to body to account for bottom navigation */}
      <div className="pb-16 md:pb-0"></div>
    </>
  );
}

export default Navbar;
