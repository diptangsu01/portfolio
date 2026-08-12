import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  interactive?: boolean;
}

export default function GlassCard({
  children,
  className,
  glowOnHover = true,
  interactive = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={interactive ? { y: -4, transition: { duration: 0.2 } } : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-slate-900/60 p-6 backdrop-blur-xl",
        "border border-slate-800/80 shadow-lg shadow-black/40",
        glowOnHover && "hover:border-sky-500/40 hover:shadow-sky-500/10 transition-colors duration-300",
        interactive && "cursor-pointer select-none",
        className
      )}
      {...props}
    >
      {/* Hairline subtle top light reflection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      {children}
    </motion.div>
  );
}
