import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import GlassCard from '../common/GlassCard';
import { profile } from '../../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const emailAddress = profile.socials.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-3.5 py-1 font-mono text-xs text-sky-400">
            <Mail className="h-3.5 w-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Enterprise Salesforce Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Open for technical consulting, architecture discussions, and senior engineering opportunities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">

          {/* Quick Copy Email & Social Card (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-400" /> Direct Contact
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Click below to instantly copy my email address or connect on LinkedIn / GitHub.
              </p>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="mt-6 flex w-full items-center justify-between rounded-xl border border-sky-500/30 bg-sky-950/30 p-3.5 text-left transition-all hover:bg-sky-900/40 active:scale-98"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Primary Email</div>
                    <div className="font-mono text-xs font-semibold text-sky-300">{emailAddress}</div>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-800 p-2 text-slate-300">
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </div>
              </button>

              {/* Social Channels */}
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-xs text-slate-300 hover:border-sky-500/40 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 fill-current text-sky-400" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500">linkedin.com/in/diptangsu-sasmal</span>
                </a>

                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-xs text-slate-300 hover:border-sky-500/40 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 fill-current text-slate-400" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub Repositories</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500">github.com/diptangsu01</span>
                </a>
              </div>
            </GlassCard>
          </div>

          {/* Interactive Form Card (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. I will respond to your message promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-mono text-sky-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="s.connor@enterprise.com"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Project Details / Message</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Discussing Salesforce LWC / OmniStudio architecture opportunities..."
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-xs font-bold text-white shadow-xl shadow-sky-500/20 transition-all hover:shadow-sky-500/30"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}