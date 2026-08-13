import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { certifications } from '../../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 font-mono text-xs text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            9x Certified Salesforce Specialist
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Achieved certifications across Apex Development, Service Cloud, Omnistudio, Data Cloud and Agentforce AI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <GlassCard className="p-6 flex flex-col justify-between h-full border-slate-800/80 hover:border-emerald-500/40">
                <div>
                  <div className="flex items-center justify-between">
                    <Badge variant={cert.badgeColor as any}>
                      {cert.category}
                    </Badge>
                    <Award className="h-5 w-5 text-emerald-400" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white">
                    {cert.title}
                  </h3>

                  {/* <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                    {cert.description}
                  </p> */}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">Issuer: {cert.issuer}</span>
                  <span className="text-emerald-400 font-semibold">Verified Credential ✓</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}