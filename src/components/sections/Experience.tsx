import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Globe, Sparkles, Award, ChevronDown, ChevronUp, Layers, Terminal } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { companyExperiences } from '../../data/experience';

export default function Experience() {
  // Company collapse state: by default empty {} means ALL companies are visible/expanded!
  const [collapsedCompanies, setCollapsedCompanies] = useState<Record<string, boolean>>({});

  // Role details collapse/expand state: track individual role detail views
  // const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
  //   'inf-sr-assoc-consultant-uk': true // UK Onsite Lead role open by default as highlight
  // });
  // Role details collapse/expand state: track individual role detail views (empty {} means details collapsed by default)
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({});

  const toggleCompany = (companyId: string) => {
    setCollapsedCompanies((prev) => ({
      ...prev,
      [companyId]: !prev[companyId],
    }));
  };

  const toggleRoleDetails = (roleId: string) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [roleId]: !prev[roleId],
    }));
  };

  // Check if all roles details are currently expanded
  const allRolesList = companyExperiences.flatMap((c) => c.roles);
  const allRolesExpanded = allRolesList.every((r) => expandedRoles[r.id]);

  const toggleAllRoleDetails = () => {
    if (allRolesExpanded) {
      setExpandedRoles({});
    } else {
      const nextState: Record<string, boolean> = {};
      allRolesList.forEach((r) => {
        nextState[r.id] = true;
      });
      setExpandedRoles(nextState);
      // Ensure all companies are expanded too
      setCollapsedCompanies({});
    }
  };

  return (
    <section id="experience" className="relative py-16 sm:py-24 scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-3 py-1 font-mono text-xs text-sky-400 shadow-sm shadow-sky-500/10">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Career Trajectory & Architecture</span>
          </div>
          <h2 className="mt-3.5 sm:mt-4 text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Consulting History
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-400 leading-relaxed font-sans px-1">
            7+ years delivering scalable Salesforce solutions, OmniStudio order orchestration, and GCP REST API migrations across UK onsite and global projects.
          </p>

          {/* Minimalist Global Controls for Mobile & Desktop */}
          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-3 font-mono text-xs">
            <button
              onClick={toggleAllRoleDetails}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-500/30 bg-slate-900/90 px-4 py-2 text-sky-400 hover:border-sky-400 hover:bg-slate-800 transition-all active:scale-95 shadow-md shadow-sky-500/5 font-mono text-xs w-full sm:w-auto"
            >
              <Layers className="h-3.5 w-3.5 text-sky-400" />
              <span>[- COLLAPSE ALL DETAILS]</span>
              {/* <span>{allRolesExpanded ? '[- COLLAPSE ALL DETAILS]' : '[+ EXPAND ALL DETAILS]'}</span> */}
            </button>
          </div>
        </div>

        {/* Companies & Roles Stack */}
        <div className="mt-8 sm:mt-16 space-y-6 sm:space-y-10 max-w-5xl mx-auto">
          {companyExperiences.map((company, companyIndex) => {
            const isCompanyCollapsed = !collapsedCompanies[company.id]; // original = !!collapsedCompanies[company.id];

            return (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: companyIndex * 0.1 }}
              >
                <GlassCard className="relative overflow-hidden border border-slate-800/80 hover:border-sky-500/30 transition-all duration-300 rounded-2xl sm:rounded-3xl">
                  {/* Ambient Background Glow */}
                  <div className="absolute -right-20 -top-20 h-48 sm:h-56 w-48 sm:w-56 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

                  {/* Company Header (Visible by Default) */}
                  <div className="p-4 sm:p-7 border-b border-slate-800/80 bg-slate-950/50">
                    <div className="flex items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                        {/* Logo Icon Badge */}
                        <div className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-gradient-to-br from-sky-900/40 to-slate-900 font-mono text-xs sm:text-base font-extrabold text-sky-400 shadow-md shadow-sky-500/10">
                          {company.logoText}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <h3 className="text-base sm:text-2xl font-bold text-white tracking-tight truncate">
                              {company.company}
                            </h3>
                            <span className="inline-flex items-center rounded-md bg-slate-800/80 px-1.5 sm:px-2 py-0.5 font-mono text-[10px] sm:text-[11px] text-slate-300 border border-slate-700/50 shrink-0">
                              {company.totalDuration}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1 font-mono text-[11px] sm:text-xs text-slate-400">
                            <span className="flex items-center gap-1 shrink-0">
                              <Globe className="h-3 w-3 text-sky-400 shrink-0" />
                              <span className="truncate">{company.locationSummary}</span>
                            </span>
                            <span className="hidden sm:inline text-slate-600">•</span>
                            <span className="flex items-center gap-1 text-slate-400 shrink-0">
                              <Building2 className="h-3 w-3 text-slate-500" />
                              <span>{company.roles.length} {company.roles.length === 1 ? 'Role' : 'Roles'}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Minimalist Company Collapse Toggle */}
                      <button
                        onClick={() => toggleCompany(company.id)}
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs text-slate-400 hover:text-sky-300 rounded-lg px-2.5 py-1.5 border border-slate-800 hover:border-sky-500/30 bg-slate-900/80 transition-all active:scale-95 shrink-0"
                        title={isCompanyCollapsed ? 'Expand Company Roles' : 'Collapse Entire Company'}
                      >
                        <span className="hidden sm:inline">{isCompanyCollapsed ? 'SHOW ROLES' : 'HIDE ROLES'}</span>
                        <span className="sm:hidden">{isCompanyCollapsed ? 'EXPAND' : 'HIDE'}</span>
                        <motion.div
                          animate={{ rotate: isCompanyCollapsed ? -90 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown className="h-3.5 w-3.5 text-sky-400" />
                        </motion.div>
                      </button>
                    </div>
                  </div>

                  {/* Company Roles List (Visible by Default unless Company is explicitly collapsed) */}
                  <AnimatePresence initial={false}>
                    {!isCompanyCollapsed && (
                      <motion.div
                        key="company-roles"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-8 space-y-7 sm:space-y-8 pl-5 sm:pl-8 relative">
                          {/* Vertical Futuristic Timeline Accent */}
                          <div className="absolute left-[11px] sm:left-[27px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-sky-500/60 via-indigo-500/40 to-slate-800/20" />

                          {company.roles.map((role) => {
                            const isRoleExpanded = !!expandedRoles[role.id];

                            return (
                              <div key={role.id} className="relative pl-5 sm:pl-8 group">
                                {/* Futuristic Timeline Dot Node */}
                                <div className="absolute left-[-9px] sm:left-2 top-2 -translate-x-1/2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-sky-400 bg-slate-950 group-hover:scale-125 group-hover:bg-sky-400 transition-all duration-200 shadow-sm shadow-sky-500/50">
                                  <span className="h-1 w-1 rounded-full bg-sky-300" />
                                </div>

                                {/* Role Header (Always Visible) */}
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                                  <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                      <h4 className="text-sm sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                                        {role.role}
                                      </h4>
                                      {role.badge && (
                                        <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/40 bg-sky-950/60 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] font-semibold text-sky-300">
                                          <Sparkles className="h-2.5 w-2.5 text-amber-400" />
                                          {role.badge}
                                        </span>
                                      )}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 font-mono text-[11px] sm:text-xs text-slate-400">
                                      <span className="flex items-center gap-1 text-slate-300">
                                        <Calendar className="h-3 w-3 text-sky-400 shrink-0" /> {role.duration}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <MapPin className="h-3 w-3 text-slate-500 shrink-0" /> {role.location}
                                      </span>
                                    </div>

                                    {/* Brief Role Summary (Always Visible) */}
                                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                                      {role.summary}
                                    </p>
                                  </div>

                                  {/* Key Wins Badges & Role Detail Toggle Button */}
                                  <div className="flex flex-col items-start sm:items-end gap-2 shrink-0 mt-1 sm:mt-0">
                                    {role.keyWins && role.keyWins.length > 0 && (
                                      <div className="flex flex-wrap gap-1">
                                        {role.keyWins.map((win) => (
                                          <span
                                            key={win}
                                            className="inline-flex items-center gap-1 rounded border border-emerald-500/30 bg-emerald-950/30 px-1.5 sm:px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-emerald-300"
                                          >
                                            <Award className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                                            {win}
                                          </span>
                                        ))}
                                      </div>
                                    )}

                                    {/* Mobile-Friendly Role Spec Toggle Button */}
                                    <button
                                      onClick={() => toggleRoleDetails(role.id)}
                                      className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-1.5 font-mono text-[11px] text-sky-400 hover:text-sky-300 rounded-lg px-3 py-1.5 sm:py-1 border border-sky-500/25 hover:border-sky-500/50 bg-sky-950/40 hover:bg-sky-900/50 transition-all active:scale-95"
                                    >
                                      <span className="flex items-center gap-1">
                                        <Terminal className="h-3 w-3 text-sky-400" />
                                        <span>{isRoleExpanded ? '[- HIDE DETAILS]' : '[+ EXPAND DETAILS]'}</span>
                                      </span>
                                      {isRoleExpanded ? (
                                        <ChevronUp className="h-3.5 w-3.5 text-sky-400" />
                                      ) : (
                                        <ChevronDown className="h-3.5 w-3.5 text-sky-400" />
                                      )}
                                    </button>
                                  </div>
                                </div>

                                {/* Expandable Role Details (Bullets & Tech Stack) */}
                                <AnimatePresence initial={false}>
                                  {isRoleExpanded && (
                                    <motion.div
                                      key={`role-details-${role.id}`}
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                                      className="overflow-hidden mt-3"
                                    >
                                      {/* High-Impact Scannable Bullets */}
                                      <div className="space-y-2 rounded-xl border border-slate-800/80 bg-slate-950/70 p-3 sm:p-4 shadow-inner">
                                        {role.bullets.map((bullet, i) => (
                                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                            <div>
                                              <strong className="font-semibold text-slate-100">{bullet.label}: </strong>
                                              <span className="text-slate-300">{bullet.detail}</span>
                                            </div>
                                          </div>
                                        ))}
                                      </div>

                                      {/* Tech Stack Pills */}
                                      <div className="mt-3 flex flex-wrap gap-1 sm:gap-1.5">
                                        {role.techStack.map((tech) => (
                                          <Badge key={tech} variant="neutral">
                                            {tech}
                                          </Badge>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}