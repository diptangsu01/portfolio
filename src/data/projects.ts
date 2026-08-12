export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  architectureHighlights: string[];
  technologies: string[];
  metrics: string;
  featured: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "omni-order-mgmt",
    title: "Telecom Enterprise Order Management",
    category: "OmniStudio & CPQ",
    tagline: "High-volume order processing platform with custom OmniStudio guided flows.",
    description: "Architected and delivered an end-to-end Order Capture and Management platform for a major Telecom service provider using OmniStudio, Apex, and REST APIs.",
    architectureHighlights: [
      "Built multi-level OmniScript wizards for dynamic order configuration.",
      "Designed high-performance Integration Procedures caching repeated pricing lookups.",
      "Engineered Apex REST web services to synchronize order fulfillment state with SAP."
    ],
    technologies: ["OmniStudio", "Apex", "LWC", "Industries CPQ", "REST API", "Salesforce Telecom Cloud"],
    metrics: "40% faster order capture time & 100k+ daily transactions",
    featured: true
  },
  {
    id: "experience-portal",
    title: "Customer Self-Service Portal",
    category: "Experience Cloud & LWC",
    tagline: "Secure digital portal serving 50k+ active monthly customers.",
    description: "Designed a responsive, branded Experience Cloud customer portal enabling self-service billing, case creation, and live order tracking.",
    architectureHighlights: [
      "Created custom LWC component library optimized for mobile and desktop viewports.",
      "Enforced strict sharing sets and sharing rules to secure guest and customer record access.",
      "Integrated live chat & Omni-Channel routing for tier-1 support escalation."
    ],
    technologies: ["Experience Cloud", "LWC", "Apex", "Service Cloud", "CSS3", "JavaScript"],
    metrics: "Reduced support desk volume by 35%",
    featured: true
  },
  {
    id: "enterprise-integrations",
    title: "Real-Time SAP & Payment Gateway Integration",
    category: "Integrations & Middleware",
    tagline: "Bi-directional REST API middleware with automated retry & monitoring.",
    description: "Implemented asynchronous Apex integration framework connecting Salesforce with enterprise ERP systems and payment gateways.",
    architectureHighlights: [
      "Utilized Named Credentials and OAuth 2.0 for secure token authentication.",
      "Designed Queueable Apex chains with exponential backoff for failed payload retries.",
      "Built custom Platform Event subscribers pushing real-time notifications to LWCs."
    ],
    technologies: ["Apex REST", "Named Credentials", "Platform Events", "Queueable Apex", "JSON"],
    metrics: "99.9% payload delivery uptime across 2M+ records",
    featured: true
  },
  {
    id: "agentforce-ai",
    title: "Agentforce & Data Cloud AI Pilot",
    category: "AI & Data Cloud",
    tagline: "Autonomous customer service assistant powered by Data Cloud insights.",
    description: "Pioneered an internal pilot solution showcasing autonomous customer inquiry resolution using Salesforce Agentforce Specialist patterns and Data Cloud identity resolution.",
    architectureHighlights: [
      "Configured prompt templates and Atlas Reasoning Engine action triggers.",
      "Mapped real-time customer behavioral streams into Data Cloud calculated insights."
    ],
    technologies: ["Agentforce", "Data Cloud", "Prompt Builder", "Apex", "Flow Builder"],
    metrics: "85% automated resolution rate in pilot testing",
    featured: false
  }
];