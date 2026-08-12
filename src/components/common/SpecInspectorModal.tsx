import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import type { SkillItem } from '../../data/skills';

interface SpecInspectorModalProps {
  skill: SkillItem | null;
  onClose: () => void;
}

export default function SpecInspectorModal({ skill, onClose }: SpecInspectorModalProps) {
  if (!skill) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-sky-500/30 bg-slate-900/95 p-6 shadow-2xl shadow-sky-500/10 backdrop-blur-2xl"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-sky-400" />
                <span className="font-mono text-xs text-sky-400 uppercase tracking-wider">Architecture Spec Inspector</span>
              </div>
              <h3 className="mt-1 text-xl font-bold text-white">{skill.name}</h3>
              <span className="mt-1 inline-block text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                Level: {skill.level} | Category: {skill.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="mt-4 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Overview</h4>
              <p className="mt-1 text-sm text-slate-300 leading-relaxed">{skill.spec.overview}</p>
            </div>

            {/* Key Design Patterns */}
            <div>
              <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Key Design Patterns</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skill.spec.keyPatterns.map((pattern, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 rounded-lg border border-sky-800/40 bg-sky-950/40 px-2.5 py-1 font-mono text-xs text-sky-300"
                  >
                    <CheckCircle2 className="h-3 w-3 text-sky-400" />
                    {pattern}
                  </span>
                ))}
              </div>
            </div>

            {/* Enterprise Use Case */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <h4 className="text-xs font-semibold uppercase text-emerald-400 tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4" /> Enterprise Use Case
              </h4>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed font-mono">
                {skill.spec.enterpriseUseCase}
              </p>
            </div>

            {/* Best Practices & Limits Optimization */}
            <div>
              <h4 className="text-xs font-semibold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4" /> Best Practices & Limits Controls
              </h4>
              <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                {skill.spec.bestPractices.map((bp, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                    {bp}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Close */}
          <div className="mt-6 flex justify-end border-t border-slate-800 pt-4">
            <button
              onClick={onClose}
              className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
            >
              Close Inspector
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
