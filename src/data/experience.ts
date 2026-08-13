export interface BulletItem {
  label: string;
  detail: string;
}

export interface RoleItem {
  id: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  badge?: string;
  summary: string;
  bullets: BulletItem[];
  keyWins?: string[];
  techStack: string[];
}

export interface CompanyExperience {
  id: string;
  company: string;
  logoText: string;
  totalDuration: string;
  locationSummary: string;
  roles: RoleItem[];
}

export const companyExperiences: CompanyExperience[] = [
  {
    id: "infosys",
    company: "Infosys",
    logoText: "INF",
    totalDuration: "4 yrs 7 mos",
    locationSummary: "Bengaluru, India & UK Onsite",
    roles: [
      {
        id: "inf-consultant",
        role: "Consultant",
        duration: "July 2026 - Present",
        location: "Bengaluru, India",
        type: "Full-time",
        badge: "Current Role",
        summary: "Leading technical architecture, solution design, and client consulting for enterprise Salesforce implementations.",
        bullets: [
          {
            label: "Solution Architecture",
            detail: "Architecting clean, scalable Apex, LWC, and OmniStudio solutions aligned with enterprise business goals."
          },
          {
            label: "AI & Data Cloud",
            detail: "Designing reusable Data Cloud consent services (ShouldForget API) and pilot Agentforce AI workflows."
          },
          {
            label: "Technical Leadership",
            detail: "Leading development teams, establishing coding standards, and facilitating architectural review sessions."
          }
        ],
        keyWins: ["Solution Architecture", "Data Cloud Consent", "Technical Leadership"],
        techStack: ["Apex", "LWC", "OmniStudio", "Data Cloud", "Agentforce", "Solution Design"]
      },
      {
        id: "inf-sr-assoc-consultant-2",
        role: "Senior Associate Consultant",
        duration: "January 2026 - June 2026",
        location: "Bengaluru, India",
        type: "Full-time",
        summary: "Managed technical delivery, peer code reviews, and high-performance component design for enterprise telecom clients.",
        bullets: [
          {
            label: "LWC & Apex Architecture",
            detail: "Built reusable LWC component suites and dynamic Apex services to optimize execution and governor limits."
          },
          {
            label: "Code Optimization & Quality",
            detail: "Conducted rigorous peer code reviews and codebase refactoring to optimize organization Apex character limits."
          }
        ],
        keyWins: ["Peer Code Reviews", "Apex Refactoring", "Governor Limit Optimization"],
        techStack: ["Apex", "LWC", "Salesforce CRM", "Git", "Code Reviews"]
      },
      {
        id: "inf-sr-assoc-consultant-uk",
        role: "Senior Associate Consultant",
        duration: "April 2023 - December 2025",
        location: "England, United Kingdom",
        type: "Full-time",
        badge: "UK Onsite Lead",
        summary: "Served as Onsite Technical Lead for a major UK Telecommunications provider, delivering order orchestration, GCP API modernization, and partner portals.",
        bullets: [
          {
            label: "Order Management & Orchestration",
            detail: "Implemented end-to-end CloudSense & custom Apex order journeys including capture, decomposition, case management, and Point-of-No-Return cancellations."
          },
          {
            label: "OAG to GCP API Modernization",
            detail: "Led endpoint impact analysis and Postman contract validation, migrating legacy SOAP web services to GCP REST APIs using Apex wrapper classes."
          },
          {
            label: "Sales Integration Journeys",
            detail: "Built reusable Screen Flows and Apex callouts for UK Telecom Debt-Check and Credit-Check validations with structured error logging."
          },
          {
            label: "Partner Order Portal",
            detail: "Delivered an Experience Cloud partner portal with REST callouts for address search and real-time serviceability validation."
          }
        ],
        keyWins: ["UK Onsite Lead", "GCP REST Modernization", "CloudSense OM", "Partner Portal"],
        techStack: ["CloudSense", "OmniStudio", "Apex", "LWC", "GCP REST APIs", "Experience Cloud", "Screen Flow"]
      },
      {
        id: "inf-assoc-consultant",
        role: "Associate Consultant",
        duration: "February 2022 - March 2023",
        location: "Bengaluru, Karnataka, India",
        type: "Full-time",
        summary: "Implemented Vlocity Order Management solutions and core Apex/LWC automations for multinational telecom clients.",
        bullets: [
          {
            label: "Vlocity Order Management",
            detail: "Contributed to inbound/outbound Vlocity orchestration, order decomposition, and pre/post Point-of-No-Return order cancel flows."
          },
          {
            label: "Agile & Best Practices",
            detail: "Followed Salesforce Apex best practices and achieved 90%+ code coverage for all test classes during active sprint cycles."
          }
        ],
        keyWins: ["Vlocity Orchestration", "Order Decomposition", "90%+ Test Coverage"],
        techStack: ["Vlocity", "OmniStudio", "Apex Triggers", "LWC", "Agile/Scrum"]
      }
    ]
  },
  {
    id: "wipro",
    company: "Wipro Limited",
    logoText: "WIP",
    totalDuration: "2 yrs 8 mos",
    locationSummary: "Bengaluru, Karnataka, India",
    roles: [
      {
        id: "wipro-project-engineer",
        role: "Project Engineer",
        duration: "June 2019 - January 2022",
        location: "Bengaluru, Karnataka, India",
        type: "Full-time",
        summary: "Developed custom Salesforce CRM applications, customer portals, and integration components for Financial Services & Telecom clients.",
        bullets: [
          {
            label: "Sales & Service Cloud CRM",
            detail: "Developed custom Apex triggers and LWCs across Account, Contact, Lead, Opportunity, and Case management modules."
          },
          {
            label: "Experience Cloud & LWC",
            detail: "Built responsive self-service customer portals with custom LWCs, Apex controllers, and strict Sharing Rules."
          },
          {
            label: "Production Support & Quality",
            detail: "Provided developer support for telecom networking systems, maintained 90%+ test coverage, and authored cross-team knowledge bases."
          }
        ],
        keyWins: ["Sales & Service Cloud", "Experience Cloud", "90%+ Code Coverage"],
        techStack: ["Apex", "LWC", "Sales Cloud", "Service Cloud", "Experience Cloud", "Visualforce"]
      }
    ]
  }
];

// Flat export for backwards compatibility (e.g. Command Palette, quick summaries)
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

export const experiences: ExperienceItem[] = companyExperiences.flatMap(company => 
  company.roles.map(role => ({
    company: company.company,
    role: role.role + (role.badge ? ` (${role.badge})` : ''),
    duration: role.duration,
    location: role.location,
    type: role.type,
    description: role.summary,
    highlights: role.bullets.map(b => `${b.label}: ${b.detail}`),
    techStack: role.techStack
  }))
);