export interface SkillItem {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
  category: "Core Platform" | "Clouds & Solutions" | "Integrations" | "Industry Tools" | "Web & DevTools";
  spec: {
    overview: string;
    keyPatterns: string[];
    enterpriseUseCase: string;
    bestPractices: string[];
  };
}

export const skillsData: SkillItem[] = [
  // Core Platform
  {
    name: "Apex",
    level: "Expert",
    category: "Core Platform",
    spec: {
      overview: "Object-oriented programing language tailored for Salesforce application execution.",
      keyPatterns: ["Trigger Handler Framework", "Queueable / Batchable Apex", "Selector & Domain Layers", "Custom Exception Handling"],
      enterpriseUseCase: "Built scalable asynchronous batch frameworks processing 500k+ billing records nightly within governor limits.",
      bestPractices: ["Bulkification on all triggers", "SOQL queries outside loops", "Strict separation of concerns", "Unit testing >90% coverage"]
    }
  },
  {
    name: "Lightning Web Components (LWC)",
    level: "Expert",
    category: "Core Platform",
    spec: {
      overview: "Modern, lightweight custom HTML/JS UI framework leveraging modern browser web standards.",
      keyPatterns: ["Lightning Data Service (LDS)", "PubSub / Lightning Message Service (LMS)", "Reactive Properties", "Custom Event Dispatching"],
      enterpriseUseCase: "Developed dynamic multi-step modal wizards and custom data tables for enterprise agent desktops.",
      bestPractices: ["Shadow DOM encapsulation", "Minimal wire adapter rerenders", "Accessible ARIA attributes"]
    }
  },
  {
    name: "Flow Builder & Automation",
    level: "Advanced",
    category: "Core Platform",
    spec: {
      overview: "Declarative process automation suite for record-triggered and screen-guided flows.",
      keyPatterns: ["Record-Triggered Flow Orchestration", "Subflow Reuse", "Invocable Apex Calls"],
      enterpriseUseCase: "Automated end-to-end case assignment and SLA escalations using Record-Triggered Flows and Apex action triggers.",
      bestPractices: ["Before-save flows for field updates", "Fault handling paths on all data nodes"]
    }
  },
  {
    name: "SOQL / SOSL Optimization",
    level: "Expert",
    category: "Core Platform",
    spec: {
      overview: "Query languages optimized for retrieving database records efficiently.",
      keyPatterns: ["Selective SOQL Indexing", "Aggregate Queries", "Relationship Queries", "Skinny Tables"],
      enterpriseUseCase: "Optimized complex query performance over 2M+ record custom objects reducing query latency from 8s to 120ms.",
      bestPractices: ["Use indexed fields in WHERE clauses", "Avoid negative filters (!=, NOT LIKE)"]
    }
  },

  // Industry Tools
  {
    name: "OmniStudio",
    level: "Expert",
    category: "Industry Tools",
    spec: {
      overview: "Salesforce Industries suite for building guided UI interactions and serverless integration backend logic.",
      keyPatterns: ["OmniScripts", "FlexCards", "Integration Procedures (IP)", "DataRaptors (Extract/Transform/Load)"],
      enterpriseUseCase: "Engineered guided Telecom order capture flows reducing customer onboarding time by 40%.",
      bestPractices: ["Cache Integration Procedure responses", "Use DataRaptor Turbo Extract for single-object queries"]
    }
  },
  {
    name: "Industries CPQ",
    level: "Advanced",
    category: "Industry Tools",
    spec: {
      overview: "Configure, Price, Quote engine for complex product modeling and order management.",
      keyPatterns: ["Product Catalog Design", "Attribute-Based Pricing", "Cart APIs", "Rule Engines"],
      enterpriseUseCase: "Configured multi-attribute product rules and pricing matrices for multi-site enterprise contracts.",
      bestPractices: ["Modularize pricing rules", "Optimize Cart API payload sizes"]
    }
  },

  // Clouds & Solutions
  {
    name: "Sales Cloud",
    level: "Expert",
    category: "Clouds & Solutions",
    spec: {
      overview: "Core CRM cloud for lead, opportunity, account, and pipeline management.",
      keyPatterns: ["Opportunity Stage Automation", "Territory Management", "Lead Conversion Triggers"],
      enterpriseUseCase: "Streamlined global sales process for 1,200+ sales reps with custom forecasting & pipeline dashboards.",
      bestPractices: ["Strict record-level access control", "Standard object extension best practices"]
    }
  },
  {
    name: "Service Cloud",
    level: "Expert",
    category: "Clouds & Solutions",
    spec: {
      overview: "Customer service management platform including Omni-Channel, Cases, and Knowledge.",
      keyPatterns: ["Omni-Channel Routing", "Milestones & Entitlements", "Case Escalation Rules"],
      enterpriseUseCase: "Implemented Omni-Channel routing & automated SLA tracking for tier-1 support desks.",
      bestPractices: ["Case auto-response optimization", "Knowledge base indexing"]
    }
  },
  {
    name: "Experience Cloud",
    level: "Expert",
    category: "Clouds & Solutions",
    spec: {
      overview: "Custom digital portals and communities for customers, partners, and employees.",
      keyPatterns: ["LWC Community Templates", "Guest User Security", "Custom Theme Layouts"],
      enterpriseUseCase: "Created self-service customer portal serving 50k+ active monthly users with secure document downloads.",
      bestPractices: ["Guest user sharing rule hardening", "CDN caching for static assets"]
    }
  },

  // Integrations
  {
    name: "REST / SOAP APIs",
    level: "Expert",
    category: "Integrations",
    spec: {
      overview: "Web service integration patterns for real-time and batch data exchange.",
      keyPatterns: ["Custom Apex @RestResource", "Named Credentials / OAuth 2.0", "JSON Serialization", "Platform Events"],
      enterpriseUseCase: "Architected bidirectional REST synchronization between Salesforce and SAP ERP middleware.",
      bestPractices: ["Use Named Credentials for auth", "Implement retry mechanism with custom logs"]
    }
  },
  {
    name: "Platform Events & CDC",
    level: "Advanced",
    category: "Integrations",
    spec: {
      overview: "Event-driven architecture for publish-subscribe messaging and Change Data Capture.",
      keyPatterns: ["EmpApi LWC Component", "High-Volume Platform Events", "ReplayId Event Recovery"],
      enterpriseUseCase: "Built real-time order status stream pushing live updates to client LWC desktops.",
      bestPractices: ["Process events in batch triggers", "Handle missing event replay sequences"]
    }
  },

  // Web & DevTools
  {
    name: "TypeScript / Modern JS",
    level: "Advanced",
    category: "Web & DevTools",
    spec: {
      overview: "Modern ES6+ JavaScript and strongly typed frontend application engineering.",
      keyPatterns: ["Async/Await", "Promises", "TypeScript Interfaces", "Array Functional Pipelines"],
      enterpriseUseCase: "Maintained type-safe client-side application logic and custom Node.js build scripts.",
      bestPractices: ["Strict type safety", "ESLint and Prettier code formatting"]
    }
  },
  {
    name: "Git & CI/CD Pipelines",
    level: "Advanced",
    category: "Web & DevTools",
    spec: {
      overview: "Version control and automated deployment pipelines for Salesforce metadata.",
      keyPatterns: ["Git Feature Branching", "SFDX CLI Scripting", "Copado / GitHub Actions CI/CD"],
      enterpriseUseCase: "Automated scratch org validation and deployment pipelines reducing deployment window by 60%.",
      bestPractices: ["Enforce code review gates", "Automate delta deployments"]
    }
  }
];