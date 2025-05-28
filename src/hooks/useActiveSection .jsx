// src/hooks/useActiveSection.js
import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        console.log("Visible Section:", visible );
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.8,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
