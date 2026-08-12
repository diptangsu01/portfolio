export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Infosys",
    role: "Consultant - Salesforce Development",
    duration: "2022 - Present",
    location: "Kolkata / Client Sites",
    type: "Full-time",
    description: "Leading technical architecture and end-to-end custom development for global enterprise clients across Telecom, Financial Services, and Retail domains.",
    highlights: [
      "Architected complex Order Management and CPQ workflows using OmniStudio (OmniScripts, FlexCards, Integration Procedures, DataRaptors).",
      "Engineered high-throughput Apex REST APIs and Queueable frameworks processing 100k+ daily transactions with third-party ERP systems.",
      "Designed and deployed reusable Lightning Web Component (LWC) suites for enterprise user interfaces with optimized DOM rendering.",
      "Led technical code reviews, CI/CD pipeline deployments via Copado/SFDX, and enforced platform security standards."
    ],
    techStack: ["Apex", "LWC", "OmniStudio", "Industries CPQ", "REST APIs", "Sales Cloud", "Service Cloud", "Copado"]
  },
  {
    company: "Wipro",
    role: "Project Engineer - Salesforce Developer",
    duration: "2019 - 2022",
    location: "Kolkata, India",
    type: "Full-time",
    description: "Developed and maintained enterprise Salesforce applications, customer portals, and integration middleware.",
    highlights: [
      "Developed secure customer self-service portals on Experience Cloud utilizing custom LWCs, Apex controllers, and Sharing Sets.",
      "Built automated business logic using Apex Triggers, Asynchronous Apex (Batch, Future, Queueable), and Flow Builder.",
      "Migrated legacy Visualforce pages to modern Lightning Web Components, reducing page load latency by 45%.",
      "Integrated Salesforce with external payment gateways and REST web services using Named Credentials and JSON parsing."
    ],
    techStack: ["Apex", "LWC", "Experience Cloud", "Visualforce", "REST/SOAP", "Process Automation", "Git", "VS Code"]
  }
];