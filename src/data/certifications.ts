export interface CertificationItem {
  id: string;
  title: string;
  category: "Developer" | "Cloud & AI" | "Industry Solutions" | "Core";
  badgeColor: string;
  accentHex: string;
  verifyUrl?: string;
  description: string;
  issuer: string;
}

export const certifications: CertificationItem[] = [
  {
    id: "pd2",
    title: "Platform Developer II",
    category: "Developer",
    badgeColor: "cyan",
    accentHex: "#0ea5e9",
    issuer: "Salesforce",
    description: "Advanced custom Apex development, design patterns, asynchronous processing, limits optimization, and enterprise integration patterns."
  },
  {
    id: "pd1",
    title: "Platform Developer I",
    category: "Developer",
    badgeColor: "sky",
    accentHex: "#0284c7",
    issuer: "Salesforce",
    description: "Core programmatic capabilities on the Salesforce platform using Apex, LWC, Visualforce, SOQL/SOSL, and security controls."
  },
  {
    id: "data-cloud",
    title: "Data Cloud Consultant",
    category: "Cloud & AI",
    badgeColor: "indigo",
    accentHex: "#6366f1",
    issuer: "Salesforce",
    description: "Real-time data ingestion, data modeling, identity resolution, segmentation, and calculated insights within Salesforce Data Cloud."
  },
  {
    id: "agentforce",
    title: "Agentforce Specialist",
    category: "Cloud & AI",
    badgeColor: "emerald",
    accentHex: "#10b981",
    issuer: "Salesforce",
    description: "Autonomous AI agents, prompt engineering, Atlas Reasoning Engine, action triggers, and enterprise AI orchestration."
  },
  {
    id: "omnistudio",
    title: "OmniStudio Developer",
    category: "Industry Solutions",
    badgeColor: "purple",
    accentHex: "#a855f7",
    issuer: "Salesforce",
    description: "Declarative guided visual experiences, OmniScripts, FlexCards, DataRaptors, and Integration Procedures for Salesforce Industries."
  },
  {
    id: "cpq",
    title: "Industries CPQ Developer",
    category: "Industry Solutions",
    badgeColor: "amber",
    accentHex: "#f59e0b",
    issuer: "Salesforce",
    description: "Vlocity / Industries CPQ cart APIs, product catalog modeling, pricing rules, promotions, and order capture workflows."
  },
  {
    id: "js-dev",
    title: "JavaScript Developer I",
    category: "Developer",
    badgeColor: "orange",
    accentHex: "#f97316",
    issuer: "Salesforce",
    description: "Native modern JavaScript (ES6+), DOM manipulation, asynchronous programming, event loops, and web component architecture."
  },
  {
    id: "ai-assoc",
    title: "AI Associate",
    category: "Cloud & AI",
    badgeColor: "teal",
    accentHex: "#14b8a6",
    issuer: "Salesforce",
    description: "Ethical AI fundamentals, machine learning basics, predictive analytics, and trusted AI implementations in enterprise CRM."
  },
  {
    id: "assoc",
    title: "Salesforce Certified Associate",
    category: "Core",
    badgeColor: "blue",
    accentHex: "#3b82f6",
    issuer: "Salesforce",
    description: "Foundational knowledge of Salesforce architecture, standard CRM modules, security models, and user ecosystem management."
  }
];