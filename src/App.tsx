import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import AmbientBackground from './components/common/AmbientBackground';
import CommandPalette from './components/common/CommandPalette';
import SpecInspectorModal from './components/common/SpecInspectorModal';
import Hero from './components/sections/Hero';
import StatsBar from './components/sections/StatsBar';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import type { SkillItem } from './data/skills';
import { Terminal, ShieldCheck } from 'lucide-react';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [devMode, setDevMode] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080C14] text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* 2050 Ambient Motion Background */}
      <AmbientBackground />

      {/* Navigation Header */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        devMode={devMode}
        onToggleDevMode={() => setDevMode(!devMode)}
      />

      {/* Developer Terminal Mode Bar (If Active) */}
      {devMode && (
        <div className="fixed top-16 left-0 right-0 z-30 bg-emerald-950/90 border-b border-emerald-500/40 px-4 py-2 text-xs font-mono text-emerald-300 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-emerald-400 animate-pulse" />
            <span>[2050 DEV MODE ACTIVE] Org Limits: SOQL 1/100 | DML 0/150 | Heap 1.2MB / 6MB</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-emerald-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> 9x Certified
            </span>
            <span>CLI Shortcut: ⌘K</span>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        <StatsBar />
        <Experience />
        <Skills onSelectSkill={(skill) => setSelectedSkill(skill)} />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Command Palette Modal (Cmd + K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Architecture Spec Inspector Modal */}
      <SpecInspectorModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </div>
  );
}