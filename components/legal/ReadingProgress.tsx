"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-slate-100/50">
      <div 
        className="h-full bg-gradient-to-r from-[#bf2629] via-[#e31e24] to-[#bf2629] transition-all duration-150 ease-out shadow-[0_0_10px_#bf2629]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}