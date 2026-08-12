import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, CheckCircle2, X } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { projectsData, type ProjectItem } from '../../data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-3.5 py-1 font-mono text-xs text-sky-400">
            <Layers className="h-3.5 w-3.5" />
            <span>Enterprise Solutions</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Salesforce Architecture Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Mission-critical CRM systems, OmniStudio order engines, and high-throughput REST API integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard
                interactive
                onClick={() => setSelectedProject(project)}
                className="p-6 flex flex-col justify-between h-full group border-slate-800/80 hover:border-sky-500/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-sky-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.featured && (
                      <Badge variant="emerald">Featured</Badge>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="neutral">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-semibold">{project.metrics}</span>
                    <span className="text-sky-400 group-hover:underline">View Spec →</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-sky-500/30 bg-slate-900/95 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="font-mono text-xs text-sky-400 uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                <div>
                  <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Solution Overview</h4>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase text-sky-400 tracking-wider">Architecture & Technical Deliverables</h4>
                  <div className="mt-2 space-y-2">
                    {selectedProject.architectureHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <span className="text-xs font-mono text-slate-400">Impact Metric:</span>
                  <div className="mt-1 font-mono text-sm font-bold text-emerald-400">{selectedProject.metrics}</div>
                </div>
              </div>

              <div className="mt-6 flex justify-end border-t border-slate-800 pt-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700"
                >
                  Close Spec
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}