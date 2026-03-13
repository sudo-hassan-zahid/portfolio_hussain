"use client";

import { memo, useEffect, useState } from "react";

const ScrollProgress = memo(function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 origin-left z-50 transition-transform duration-100 ease-out shadow-lg shadow-purple-500/50"
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  );
});

export default ScrollProgress;
