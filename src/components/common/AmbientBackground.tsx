import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AmbientBackground Component
 * Renders a subtle, futuristic 2050 floating glow mesh.
 * Tracks pointer / touch movement with 60fps hardware acceleration.
 */
export default function AmbientBackground() {
  const [pointerPos, setPointerPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      setPointerPos({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <div className="aria-hidden:true pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Dark Obsidian Base Overlay */}
      <div className="absolute inset-0 bg-[#080C14] bg-opacity-[0.98]" />

      {/* Subtle Grid Mesh */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Ambient Pulsing Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-sky-600/15 via-blue-600/10 to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-600/10 via-indigo-600/10 to-transparent blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 50, -20, 0],
          y: [0, 30, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-emerald-600/10 via-teal-600/10 to-transparent blur-[130px]"
      />

      {/* Interactive Cursor Light Glow (Desktop & Touch) */}
      <div
        className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-[80px] transition-transform duration-300 ease-out"
        style={{
          left: `${pointerPos.x}px`,
          top: `${pointerPos.y}px`,
        }}
      />
    </div>
  );
}
