// src/hooks/useActiveSection.js
import { useEffect, useState, useCallback } from "react";

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100; // Offset for navbar

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const { offsetTop } = section;
        if (scrollPosition >= offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    }
  }, [sectionIds]);

  useEffect(() => {
    // Initial check
    handleScroll();

    // Throttled scroll listener
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  return activeSection;
};

export default useActiveSection;
