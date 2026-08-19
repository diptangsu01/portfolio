import { motion } from 'framer-motion';
import { Disc } from 'lucide-react';

export default function MusicVinylBadge() {
  return (
    <motion.a
      href="https://music.diptangsu.in"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="group fixed bottom-6 left-6 z-40 flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-slate-950/80 p-2 pr-4 shadow-xl backdrop-blur-md transition-all hover:border-amber-400 hover:bg-slate-900 hover:shadow-amber-500/20 active:scale-95"
      title="Open Diptangsu's Curated Music Portal"
    >
      {/* Spinning Vinyl Disc */}
      <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 overflow-hidden shadow-inner">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
          className="flex items-center justify-center"
        >
          <Disc className="h-5 w-5" />
        </motion.div>
        <span className="absolute h-1.5 w-1.5 rounded-full bg-amber-400 shadow-sm" />
      </div>

      {/* Text Label */}
      <div className="flex flex-col">
        <span className="flex items-center gap-1 font-mono text-xs font-semibold text-slate-200 group-hover:text-amber-300"> 🎵
          {/*  <Sparkles className="h-3 w-3 text-amber-400" /> */} {/*  commented for design purpose */}
        </span>
        {/* <span className="font-mono text-[10px] text-slate-400">music.diptangsu.in ↗</span> */} {/*  commented for design purpose */}
      </div>
    </motion.a>
  );
}
