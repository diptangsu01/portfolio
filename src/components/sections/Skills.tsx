import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, CheckCircle2, ChevronRight } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { skillsData, type SkillItem } from '../../data/skills';

interface SkillsProps {
  onSelectSkill: (skill: SkillItem) => void;
}

export default function Skills({ onSelectSkill }: SkillsProps) {
  const categories = [
    'All',
    'Core Platform',
    'Industry Tools',
    'Clouds & Solutions',
    'Integrations',
    'Web & DevTools'
  ] as const;

  const [activeTab, setActiveTab] = useState<typeof categories[number]>('All');

  const filteredSkills = activeTab === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 font-mono text-xs text-purple-400">
            <Cpu className="h-3.5 w-3.5" />
            <span>Technical Ecosystem</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Salesforce & Modern Web Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Click any technology badge to launch the interactive <span className="text-sky-400 font-mono">Architecture Spec Inspector</span>.
          </p>
        </div>

        {/* Swipeable / Scrollable Filter Tabs */}
        <div className="mt-10 flex items-center justify-start sm:justify-center overflow-x-auto pb-4 pt-2 no-scrollbar gap-2 px-2">
          {categories.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-all active:scale-95 ${
                  isActive
                    ? 'text-white shadow-lg shadow-sky-500/20'
                    : 'text-slate-400 hover:text-slate-200 border border-slate-800/80 bg-slate-900/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 border border-sky-400"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Skills Grid */}
        <motion.div layout className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard
                  interactive
                  onClick={() => onSelectSkill(skill)}
                  className="p-5 flex flex-col justify-between h-full group border-slate-800/80 hover:border-sky-500/50"
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <Badge variant={skill.level === 'Expert' ? 'sky' : 'indigo'}>
                        {skill.level}
                      </Badge>
                      <span className="font-mono text-[10px] text-slate-500 uppercase">{skill.category}</span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="mt-3 text-base font-bold text-white group-hover:text-sky-300 transition-colors flex items-center justify-between">
                      <span>{skill.name}</span>
                      <ChevronRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-sky-400" />
                    </h3>

                    {/* Overview snippet */}
                    <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {skill.spec.overview}
                    </p>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="h-3 w-3" /> {skill.spec.keyPatterns.length} Design Patterns
                    </span>
                    <span className="text-sky-400 group-hover:underline">Inspect Spec →</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}