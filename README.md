# ⚡ 2050 Minimalist Salesforce Developer & Consultant Portfolio

An ultra-modern, futuristic, high-performance personal portfolio designed for **Salesforce Developers**, **Technical Consultants**, and **CRM Architects**.

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Vite**.

Live Demo: [https://diptangsu.in](https://diptangsu.in) | GitHub Repository: [https://github.com/diptangsu01/portfolio](https://github.com/diptangsu01/portfolio)

---

## ✨ Features & Highlights

- **🏢 LinkedIn-Style Company Experience Timeline**: Hierarchical career progression grouped by enterprise companies (Infosys, Wipro) featuring progressive role timelines, bold scannable lead-in bullets, key wins tags (`UK Onsite Lead`, `GCP REST Modernization`, `CloudSense OM`), and expandable role detail drawers.
- **⚡ `Cmd + K` Salesforce Developer Command Center**: Interactive browser CLI terminal allowing recruiters and interviewers to query certifications, experience, skills, and copy email instantly.
- **🔍 Interactive Architecture Spec Inspector**: Modal dialog for deep-diving into Apex design patterns, OmniStudio workflows, and platform limits optimizations for every skill badge.
- **🖥️ 2050 Developer Mode Toggle**: Top-bar switch for toggling between an Executive Portfolio layout and a Live Developer Terminal telemetry overlay.
- **🎵 Music Portal Integration**: Fixed spinning vinyl audio gateway badge linking directly to [music.diptangsu.in](https://music.diptangsu.in).
- **🌌 60fps Ambient Background Motion**: Hardware-accelerated floating glow mesh with real-time pointer and touch coordinate light tracking.
- **📱 Mobile-First Touch & Responsive Controls**: Full-width touch-friendly action buttons (`[+ EXPAND DETAILS]`), adaptive timeline offsets for small screens (`< 640px`), and tactile press feedback (`whileTap`).
- **🛡️ Enterprise Security Best Practices**: All external links use `rel="noopener noreferrer"` to eliminate reverse tabnabbing; zero unsafe `dangerouslySetInnerHTML` injections.
- **📦 Modular & High Reusability**: Single-source data schemas (`src/data/*`) making it effortless for any developer to fork and personalize in under 5 minutes.

---

## 🛠️ Tech Stack & Reused Open-Source Libraries

| Package | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Core UI library |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type safety and autocomplete |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Modern utility-first styling engine |
| **[Framer Motion](https://www.framer.com/motion/)** | Smooth layout animations, accordion drawers, and ambient glowing mesh |
| **[Lucide React](https://lucide.dev/)** & **[Heroicons](https://heroicons.com/)** | Clean SVG icon suites |
| **[canvas-confetti](https://www.npmjs.com/package/canvas-confetti)** | Celebration trigger on email copy / contact submission |
| **[react-type-animation](https://react-type-animation.netlify.app/)** | Hero role typewriter text |
| **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)** | Utility (`cn`) for merging Tailwind classes safely |

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/diptangsu01/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Production Build & Verification**:
   ```bash
   npm run build
   ```

---

## 📁 Repository Structure & Data Schemas

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AmbientBackground.tsx    # 2050 floating ambient light mesh
│   │   │   ├── Badge.tsx                # Reusable tech pill badge
│   │   │   ├── CommandPalette.tsx       # Cmd + K Salesforce CLI terminal
│   │   │   ├── GlassCard.tsx            # Glassmorphism container
│   │   │   ├── MusicVinylBadge.tsx      # Curated music portal gateway
│   │   │   └── SpecInspectorModal.tsx   # Skill architecture modal
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               # Header with section tracking & dev mode
│   │   │   └── Footer.tsx               # Minimalist footer
│   │   └── sections/
│   │       ├── Hero.tsx                 # Hero with typewriter subtitle
│   │       ├── StatsBar.tsx             # Executive metric counters
│   │       ├── Experience.tsx           # Hierarchical company timeline & role drawers
│   │       ├── Skills.tsx               # Filterable skill matrix
│   │       ├── Projects.tsx             # Enterprise solution cards
│   │       ├── Certifications.tsx       # 9x Salesforce certs grid
│   │       └── Contact.tsx              # Email copy & message form
│   ├── data/
│   │   ├── profile.ts                   # Bio, role, social links, stats
│   │   ├── experience.ts                # Hierarchical & flat experience schemas
│   │   ├── certifications.ts            # 9x Salesforce certifications
│   │   ├── skills.ts                    # Skill list with architectural specs
│   │   ├── projects.ts                  # Enterprise project highlights
│   │   └── socials.ts                   # Social channels
│   ├── utils/
│   │   └── cn.ts                        # Tailwind class merge helper
│   ├── App.tsx                          # Root application wireup
│   ├── index.css                        # Design tokens & scrollbars
│   └── main.tsx                         # Entry point
├── index.html                           # SEO meta headers & Google Fonts
├── package.json                         # Scripts & dependency definitions
└── README.md                            # Documentation
```

---

## 🎨 Customizing Data for Your Own Portfolio

To customize this portfolio for your own credentials and experience, update the files inside `src/data/`:

- **`src/data/profile.ts`**: Update your name, role, bio, and social links.
- **`src/data/experience.ts`**: Edit your company hierarchy, progressive roles, bullets, and key wins tags.
- **`src/data/certifications.ts`**: Update your certifications list and categories.
- **`src/data/skills.ts`**: Update your technologies, design patterns, and architectural specs.
- **`src/data/projects.ts`**: Replace project titles, descriptions, and metrics.

---

## 🌐 One-Click Deployment Options

### Deploying to Cloudflare Pages
This repository is connected directly to **Cloudflare Pages** on the `main` branch. Merging commits into `main` automatically triggers a production deployment with zero downtime.

---

## 📄 License

Distributed under the MIT License. Feel free to fork, customize, and use for your own developer portfolio!
