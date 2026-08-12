import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { experiences } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-3.5 py-1 font-mono text-xs text-sky-400">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Consulting History</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            7+ Years Enterprise Career Trajectory
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Delivering custom Salesforce architecture, OmniStudio automation, and REST integrations across global IT consulting giants.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-sky-400 bg-slate-950 shadow-lg shadow-sky-500/30 z-10">
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                  </div>

                  {/* Card Container */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                    <GlassCard className="p-6">
                      {/* Top Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                        <div>
                          <span className="font-mono text-xs font-semibold text-sky-400 uppercase tracking-wider">
                            {exp.company}
                          </span>
                          <h3 className="text-lg font-bold text-white mt-0.5">{exp.role}</h3>
                        </div>

                        <div className="flex flex-col items-end font-mono text-[11px] text-slate-400">
                          <span className="flex items-center gap-1 text-slate-300">
                            <Calendar className="h-3 w-3 text-sky-400" /> {exp.duration}
                          </span>
                          <span className="flex items-center gap-1 mt-0.5">
                            <MapPin className="h-3 w-3 text-slate-500" /> {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {exp.description}
                      </p>

                      {/* Key Bullet Highlights */}
                      <div className="mt-4 space-y-2">
                        {exp.highlights.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {exp.techStack.map((tech) => (
                          <Badge key={tech} variant="neutral">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}