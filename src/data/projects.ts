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
    title: "Telecom Order Capture",
    category: "OmniStudio",
    tagline: "Order processing platform with custom OmniStudio guided flows.",
    description: "Delivered an Order Management platform for a major Telecom service provider in the UK using OmniStudio.",
    architectureHighlights: [
      "Built OmniScript for dynamic order configuration.",
      "Designed high-performance Integration Procedures caching repeated pricing lookups."
    ],
    technologies: ["Salesforce", "OmniStudio", "Apex", "LWC", "Industries CPQ", "REST API", "Salesforce Telecom Cloud"],
    metrics: "40% faster order capture time & 100k+ daily transactions",
    featured: true
  },
  {
    id: "cloudsense-order-mgmt",
    title: "Enterprise Order Orchestration & Partner Management",
    category: "CloudSense",
    tagline: "End-to-end high volume order orchestration powering scalable customer and partner order journeys.",
    description: "Designed and delivered scalable Salesforce Order Management journeys covering order capture, approvals, orchestration, case management, partner ordering, and cancellation, with a strong focus on reusable architecture and business-process alignment.",
    architectureHighlights: [
      "Designed end-to-end CloudSense Order Management journeys from order capture through orchestration using Apex, Flows, Visualforce, and custom actions.",
      "Aligned new order journeys with existing approval processes through reusable business logic and components.",
      "Implemented scalable Case management using a single Record Type with configurable Case Types and Visualforce components.",
      "Reused a common orchestration template across partner single and bulk order journeys.",
      "Built custom partner ordering and cancellation journeys, including orchestration through the Point of No Return stage."
    ],
    technologies: ["Salesforce", "CloudSense", "Visualforce", "Apex", "Flows", "JavaScript"],
    metrics: "Unified multiple customer and partner order journeys on a reusable Order Management architecture.",
    featured: true
  },
  {
    id: "experience-portal",
    title: "Partner Order Portal",
    category: "Experience Cloud & LWC",
    tagline: "Secure partner portal enabling single and bulk order journeys with real-time serviceability validation.",
    description: "Collaborated closely with architects to deliver a scalable Experience Cloud partner portal supporting end-to-end single and bulk order placement. Implemented Apex REST callouts for address search and serviceability validation, with responsive LWC components for real-time results and guided partner interactions.",
    architectureHighlights: [
      "Built single-order journeys with Apex REST address search and real-time serviceability validation.",
      "Developed LWC components to present dynamic address and serviceability responses within the portal.",
      "Enabled bulk ordering through CSV validation and streamlined order submission workflows.",
      "Enforced strict sharing sets and sharing rules to secure guest and partner record access."
    ],
    technologies: ["Salesforce", "Experience Cloud", "LWC", "Apex", "REST APIs", "JavaScript", "Sharing Sets", "Sharing Rules"],
    metrics: "Enabled secure single and bulk ordering through a reusable partner portal architecture.",
    featured: true
  },
  {
    id: "debt-check",
    title: "Sales Journey Debt Check",
    category: "Sales Cloud & Integrations",
    tagline: "Reusable debt-check orchestration embedded into the UK telecom sales journey.",
    description: "Implemented a Salesforce Screen Flow to initiate debt checks directly from Opportunities as part of a UK telecom sales journey. Built reusable components to extend the same debt-check logic across multiple journeys and implemented structured error handling based on middleware-defined API error codes and YAML specifications.",
    architectureHighlights: [
      "Built a reusable Screen Flow to initiate debt checks directly from Opportunities.",
      "Designed reusable components to extend debt-check logic across multiple sales journeys.",
      "Implemented API error handling using middleware-defined error codes and YAML specifications.",
      "Integrated debt-check responses into the sales journey with clear success and failure handling."
    ],
    technologies: ["Salesforce", "Screen Flow", "Apex", "REST APIs", "Middleware Integration", "YAML"],
    metrics: "Standardized debt-check processing across reusable telecom sales journeys.",
    featured: true
  },
  {
    id: "credit-check",
    title: "Telecom Sales Credit Check",
    category: "Sales Cloud & Integrations",
    tagline: "Apex-driven credit validation with traceable response handling for the sales journey.",
    description: "Implemented custom Apex integration to initiate credit checks within the UK telecom sales journey, process API responses, handle integration exceptions, and persist credit-check outcomes in custom Salesforce objects for reporting and business analysis.",
    architectureHighlights: [
      "Built reusable Apex callout logic to integrate credit-check services into the sales journey.",
      "Implemented structured request, response, validation, and exception handling for API outcomes.",
      "Persisted credit-check responses in custom objects to support reporting, auditability, and analysis.",
      "Designed reusable integration components to support future sales journeys and business requirements."
    ],
    technologies: ["Salesforce", "Apex", "REST APIs", "HTTP Callouts", "JSON", "Custom Objects"],
    metrics: "Enabled traceable credit-check outcomes across the telecom sales journey for reporting and decision support.",
    featured: true
  },
  {
    id: "oag-gcp-migration",
    title: "OAG to GCP API Modernization",
    category: "API Integration & Modernization",
    tagline: "Modernized platform integrations from legacy SOAP services to scalable GCP REST APIs.",
    description: "Contributed to the enterprise-wide migration of Oracle API Gateway (OAG) integrations to GCP APIs across platform endpoints, working closely with architects and dependent teams to assess integration impacts, validate API contracts, redesign response handling, and support the transition from legacy SOAP to REST-based services.",
    architectureHighlights: [
      "Led endpoint-level impact analysis and migration planning in collaboration with solution architects and integration stakeholders.",
      "Validated GCP API contracts in Postman before Salesforce implementation, identifying and reporting API defects early.",
      "Leveraged middleware YAML specifications to implement complete success and error response handling across integrations.",
      "Re-engineered Salesforce response consumption using reusable Apex wrapper classes for the new REST-based payloads.",
      "Collaborated with downstream API subscribers to assess dependencies, compatibility impacts, and migration requirements.",
      "Maintained detailed technical documentation and knowledge records, and conducted technical and functional knowledge-transfer sessions.",
      "Supported architectural decision-making by identifying integration gaps, migration risks, and implementation considerations during the transition."
    ],
    technologies: ["Salesforce", "Apex", "GCP APIs", "REST APIs", "SOAP APIs", "Postman", "JSON", "YAML"],
    metrics: "Supported migration of platform-wide OAG endpoints from legacy SOAP integrations to GCP REST APIs with pre-implementation API validation and controlled response handling.",
    featured: true
  },
  {
    id: "data-cloud-consent",
    title: "Data Cloud Consent Automation",
    category: "Data Cloud & Integration",
    tagline: "Reusable Apex service for secure Data Cloud consent actions with resilient error logging.",
    description: "Built a reusable Apex service invoked from Screen Flow to execute the Data Cloud Consent API's ShouldForget action using a user's email address. Designed the service for extension to additional consent actions while incorporating secure endpoint configuration, configurable messages, comprehensive logging, and platform-limit safeguards.",
    architectureHighlights: [
      "Built a reusable Apex service invoked from Screen Flow to execute the Data Cloud Consent API ShouldForget action.",
      "Designed extensible service logic to support additional Data Cloud consent actions with minimal changes.",
      "Used Named Credentials for secure API configuration and Custom Labels for configurable, reusable messages.",
      "Implemented success and error logging for auditability, troubleshooting, and operational documentation.",
      "Added governor-limit checks using the Limits class to prevent callout threshold breaches and surface controlled errors."
    ],
    technologies: ["Salesforce", "Apex", "Screen Flow", "Data Cloud Consent API", "Named Credentials", "Custom Labels", "REST API"],
    metrics: "Built a reusable consent-integration framework with controlled error handling, audit logging, and governor-limit protection.",
    featured: false
  }
];