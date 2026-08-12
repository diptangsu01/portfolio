import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Terminal, Award, Briefcase, Mail, ShieldCheck } from 'lucide-react';
import { profile } from '../../data/profile';

interface HeroProps {
  onOpenCommandPalette: () => void;
}

export default function Hero({ onOpenCommandPalette }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Content (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs text-sky-300">
                {profile.status}
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {profile.greeting} <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">{profile.name}</span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="mt-3 flex items-center gap-2 font-mono text-lg sm:text-xl text-sky-400 font-medium">
              <Terminal className="h-5 w-5 text-emerald-400 shrink-0" />
              <TypeAnimation
                sequence={[
                  'Salesforce Technical Consultant',
                  2000,
                  'Apex & LWC Architecture Specialist',
                  2000,
                  'OmniStudio & CPQ Developer',
                  2000,
                  'Data Cloud & Agentforce Specialist',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Bio Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              {profile.description}
            </p>

            {/* Key Metric Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 font-mono">
                <Briefcase className="h-4 w-4 text-sky-400" />
                <span>{profile.experienceYears} Years Consulting</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 font-mono">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>9x Salesforce Certified</span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 font-mono">
                <Award className="h-4 w-4 text-purple-400" />
                <span>Infosys & Wipro Alumni</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/25 transition-all hover:shadow-sky-500/40 hover:scale-105 active:scale-95"
              >
                <span>Explore Enterprise Solutions</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 px-5 py-3 text-sm font-mono font-medium text-slate-300 transition-all hover:border-sky-500/50 hover:text-white hover:shadow-lg active:scale-95"
              >
                <Terminal className="h-4 w-4 text-sky-400" />
                <span>Run CLI (⌘K)</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="font-mono text-xs text-slate-500">Connect:</span>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-900 p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-900 p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                className="rounded-lg bg-slate-900 p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Architecture Card (Right 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl border border-sky-500/20 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-sky-500/10">
              {/* Top Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-400">diptangsu.in/profile.apex</span>
              </div>

              {/* Code Snippet Card */}
              <div className="mt-4 font-mono text-xs leading-relaxed text-slate-300 space-y-2">
                <div className="text-slate-500">// Salesforce Technical Consultant Profile</div>
                <div>
                  <span className="text-purple-400">public class</span> <span className="text-yellow-300">DiptangsuSasmal</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">public static String</span> experience = <span className="text-emerald-300">"7+ Years"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">public static Integer</span> certs = <span className="text-sky-300">9</span>;
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">public static String[]</span> coreSkills = <span className="text-purple-300">new String[]</span> {'{'}
                </div>
                <div className="pl-8 text-sky-300">
                  'Apex', 'LWC', 'OmniStudio', 'REST API', 'Data Cloud'
                </div>
                <div className="pl-4">{'}'};</div>
                <div className="pl-4 mt-2">
                  <span className="text-purple-400">public void</span> <span className="text-blue-300">deliverEnterpriseValue</span>() {'{'}
                </div>
                <div className="pl-8 text-emerald-300">
                  buildScalableCRM();
                </div>
                <div className="pl-8 text-emerald-300">
                  optimizeGovernorLimits();
                </div>
                <div className="pl-4">{'}'}</div>
                <div>{'}'}</div>
              </div>

              {/* Quick Spec Callout */}
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Platform Coverage</span>
                  <span className="text-emerald-400 font-bold">95%+ Governor Safety</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}