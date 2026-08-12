import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Search, X, ShieldCheck, Briefcase, Code, Mail, FileText, Sparkles } from 'lucide-react';
import { certifications } from '../../data/certifications';
import { experiences } from '../../data/experience';
import { profile } from '../../data/profile';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSkill?: (skillName: string) => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setTerminalOutput(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open palette
          const event = new CustomEvent('open-command-palette');
          window.dispatchEvent(event);
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const executeCommand = (cmd: string) => {
    const normalized = cmd.toLowerCase().trim();
    if (normalized === 'sf certs' || normalized === 'certs') {
      setTerminalOutput(
        `Loaded 9 Certified Salesforce Credentials:\n` +
        certifications.map((c, i) => ` [${i + 1}] ${c.title} (${c.category})`).join('\n')
      );
    } else if (normalized === 'sf exp' || normalized === 'exp') {
      setTerminalOutput(
        `Career Trajectory (7+ Years):\n` +
        experiences.map(e => ` • ${e.role} @ ${e.company} (${e.duration})`).join('\n')
      );
    } else if (normalized === 'sf contact' || normalized === 'contact') {
      navigator.clipboard.writeText(profile.socials?.email || 'diptangsu.sasmal@email.com');
      setTerminalOutput(`✔ Email copied to clipboard: ${profile.socials?.email || 'diptangsu.sasmal@email.com'}`);
    } else if (normalized === 'sf profile' || normalized === 'profile') {
      setTerminalOutput(`Executive Summary:\n${profile.description}`);
    } else if (normalized === 'clear') {
      setTerminalOutput(null);
    } else {
      setTerminalOutput(`Command '${cmd}' recognized. Scroll to corresponding section on page.`);
    }
  };

  const commandItems = [
    {
      id: 'certs',
      title: 'sf certs --list',
      subtitle: 'View 9x Salesforce Certifications (PDII, Data Cloud, Agentforce)',
      icon: ShieldCheck,
      action: () => {
        executeCommand('sf certs');
        const el = document.getElementById('certifications');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'exp',
      title: 'sf experience --timeline',
      subtitle: 'Jump to Infosys & Wipro Consulting History',
      icon: Briefcase,
      action: () => {
        executeCommand('sf exp');
        const el = document.getElementById('experience');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'skills',
      title: 'sf skills --architecture',
      subtitle: 'Inspect Apex, LWC & OmniStudio Code Specs',
      icon: Code,
      action: () => {
        executeCommand('sf skills');
        const el = document.getElementById('skills');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'contact',
      title: 'sf contact --email',
      subtitle: 'Copy email (diptangsu.sasmal@email.com) to clipboard',
      icon: Mail,
      action: () => {
        executeCommand('sf contact');
      }
    },
    {
      id: 'resume',
      title: 'sf resume --download',
      subtitle: 'Open Salesforce Technical Consultant Profile & Contact',
      icon: FileText,
      action: () => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }
  ];

  const filteredCommands = commandItems.filter(
    item => item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-sky-500/30 bg-slate-900/95 shadow-2xl shadow-sky-500/10 backdrop-blur-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 bg-slate-950/60">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-sky-400" />
                <span className="font-mono text-xs text-slate-300">Salesforce Developer CLI Terminal v2050</span>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Input Row */}
            <div className="flex items-center border-b border-slate-800 px-4 py-3">
              <Search className="h-5 w-5 text-slate-500 mr-3 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && query.trim()) {
                    executeCommand(query);
                  }
                }}
                placeholder="Type 'sf certs', 'sf exp', or search commands..."
                className="w-full bg-transparent font-mono text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
              />
              <span className="ml-2 hidden rounded border border-slate-700 bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-slate-400 sm:inline-block">
                ESC to exit
              </span>
            </div>

            {/* Terminal Live Output Window */}
            {terminalOutput && (
              <div className="border-b border-slate-800 bg-slate-950 p-4 font-mono text-xs text-sky-300 whitespace-pre-wrap leading-relaxed">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <Sparkles className="h-3.5 w-3.5" /> Output:
                </div>
                {terminalOutput}
              </div>
            )}

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2">
              <div className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                Interactive Commands
              </div>
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onClick={() => {
                        cmd.action();
                      }}
                      className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all hover:bg-sky-500/10 hover:border hover:border-sky-500/30"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/80 text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-sm font-semibold text-slate-200 group-hover:text-sky-300">
                          {cmd.title}
                        </div>
                        <div className="text-xs text-slate-400 truncate">{cmd.subtitle}</div>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="p-4 text-center font-mono text-xs text-slate-500">
                  No matching CLI commands found for "{query}".
                </div>
              )}
            </div>

            {/* Footer Quick Hint */}
            <div className="flex items-center justify-between border-t border-slate-800 bg-slate-950/40 px-4 py-2 text-[11px] text-slate-500 font-mono">
              <span>Press Cmd+K anytime</span>
              <span className="text-sky-400">diptangsu.in CLI v2.5</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
