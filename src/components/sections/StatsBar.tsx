import { motion } from 'framer-motion';
import { Briefcase, ShieldCheck, Cpu, Building } from 'lucide-react';
import GlassCard from '../common/GlassCard';

export default function StatsBar() {
  const stats = [
    {
      label: "Years Experience",
      value: "7+",
      subtitle: "Enterprise CRM & Custom Dev",
      icon: Briefcase,
      color: "text-sky-400"
    },
    {
      label: "Salesforce Certs",
      value: "9x",
      subtitle: "PDII, Data Cloud, OmniStudio",
      icon: ShieldCheck,
      color: "text-emerald-400"
    },
    {
      label: "Enterprise Projects",
      value: "20+",
      subtitle: "Infosys & Wipro Portfolios",
      icon: Cpu,
      color: "text-purple-400"
    },
    {
      label: "Global Consulting",
      value: "Infosys / Wipro",
      subtitle: "Telecom & Financial CRM",
      icon: Building,
      color: "text-indigo-400"
    }
  ];

  return (
    <section className="relative z-10 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <GlassCard className="p-5 flex items-center gap-4 hover:border-sky-500/40">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 ${st.color} shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className={`font-mono text-xl sm:text-2xl font-extrabold ${st.color}`}>
                      {st.value}
                    </div>
                    <div className="text-xs font-semibold text-white">{st.label}</div>
                    <div className="text-[11px] font-mono text-slate-400">{st.subtitle}</div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
