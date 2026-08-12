import { ArrowUp, Terminal } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/90 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Status */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs font-bold text-sky-400">
              DS
            </div>
            <div>
              <div className="font-sans text-xs font-bold text-white">
                {profile.name} — Salesforce Developer & Consultant
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 mt-0.5">
                <span className="flex items-center gap-1">
                  <Terminal className="h-3 w-3 text-emerald-400" /> diptangsu.in v2050
                </span>
                <span>•</span>
                <span>Kolkata / Global</span>
              </div>
            </div>
          </div>

          {/* Copyright & Scroll To Top */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-slate-500">
              © {new Date().getFullYear()} Diptangsu Sasmal. All rights reserved.
            </span>

            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}