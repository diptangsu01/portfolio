import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, Command, Sparkles } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { profile } from '../../data/profile';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  devMode: boolean;
  onToggleDevMode: () => void;
}

export default function Navbar({ onOpenCommandPalette, devMode, onToggleDevMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll tracking
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Signature */}
        <a href="#hero" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 font-mono text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition-transform group-hover:scale-105">
            DS
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-sm font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              7+ Yrs Salesforce Dev & Consultant
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-800/80 bg-slate-900/60 p-1.5 backdrop-blur-xl">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium transition-colors rounded-full ${
                  isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-sky-500/20 border border-sky-500/40"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Cmd+K + Dev Mode Toggle + Contact CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Cmd + K Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-slate-400 transition-all hover:border-sky-500/50 hover:text-slate-200 hover:shadow-lg hover:shadow-sky-500/10 active:scale-95"
          >
            <Command className="h-3.5 w-3.5 text-sky-400" />
            <span>CLI</span>
            <kbd className="rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Dev Mode View Toggle */}
          <button
            onClick={onToggleDevMode}
            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs transition-all active:scale-95 ${
              devMode
                ? 'border-emerald-500/50 bg-emerald-950/40 text-emerald-300'
                : 'border-slate-800 bg-slate-900/80 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            <span>{devMode ? 'Dev View: ON' : 'Dev View'}</span>
          </button>

          {/* Quick CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-sky-500/20 transition-all hover:shadow-sky-500/30 hover:scale-105 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Hire / Connect</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-sky-400"
          >
            <Command className="h-4 w-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 active:scale-95"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <div className="mt-2 flex items-center justify-between border-t border-slate-800 pt-3">
                <button
                  onClick={() => {
                    onToggleDevMode();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-xs font-mono text-emerald-400"
                >
                  <Terminal className="h-4 w-4" />
                  <span>Toggle Terminal View</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-bold text-white"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}