// ============================================================
// TODO: Replace with your real projects.
// Set featured: true on 1-2 projects you want on the landing page.
// ============================================================

export interface ProjectEntry {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  timeline: string;
  skills: string[];
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
  images?: string[];
  featured?: boolean;
  highlights?: { value: string; label: string }[];
  approach?: { title: string; description: string }[];
  caseStudyPdf?: string;
  attachments?: { title: string; url: string; language?: string; description?: string }[];
}

export const projects: ProjectEntry[] = [
  {
    id: "proj-mani",
    title: "Mani",
    tagline: "1st Place at the Inaugural SHPE VIBRA ATL Hackathon. An intelligent multi-agent system helping small businesses in Latin America manage their finances and schedules, built to fit how they already work.",
    description: `At the Inaugural SHPE VIBRA ATL Hackathon, my team took first place. Alongside Lucas Arano, Jeronimo Roldan, and Santiago de Grandchant, we had 24 hours to build something that mattered. We built Mani.

Micro and small businesses across Latin America run on WhatsApp. Owners send voice notes, snap photos of receipts, and manage operations through quick texts in Spanish. The tools built for them rarely start from that reality.

Mani does. It lives where business owners already live and turns their daily messages into structured business intelligence. Log a sale with a voice note. Snap a receipt. Text an update. Mani makes sense of it and gives owners the visibility they need to grow, without asking them to change how they work or download anything new.

My role covered a dynamic, agent-driven frontend that adapts to user behavior and system inputs in real time, brand templates, and a lightweight design system to ensure consistency across the application. I also worked with Jeronimo Roldan on branding and visual identity, helping shape the design direction and ensuring a cohesive look and feel across the product.

I also gained exposure to backend architecture and live database integration through discussions and implementation work with Lucas Arano and Santiago de Grandchant, who built the core system architecture and multi-agent workflows powering Mani. This helped me better understand how the frontend connects to backend systems end to end under tight time constraints.

Every component of Mani reflects a different layer of ownership, from system architecture to interaction design and product flow. The team worked nonstop for 24 hours to bring it to life, and I am incredibly proud of what we shipped together.

Be on the lookout for more updates on Mani. We are ready to make a difference in Latin America.`,
    role: "UI/UX Designer, Frontend Engineer and Brand Identity",
    timeline: "Apr 2026",
    images: ["/images/mani.jpg"],
    skills: ["UI/UX Design", "Design Systems", "HTML", "CSS", "CSS Variables", "React", "Brand Identity", "Typography", "Frontend Engineering", "User-Centered Design"],
    featured: true,
    highlights: [
      { value: "1st Place", label: "SHPE VIBRA ATL Hackathon" },
      { value: "24hrs", label: "Built end to end" },
      { value: "LATAM", label: "Target market" },
    ],
    approach: [
      {
        title: "Start Where They Already Are",
        description: "Mani's core constraint was zero behavior change. Business owners should not need a new app or new habits. The product had to fit inside WhatsApp, the tool they already use to run their business every day.",
      },
      {
        title: "Agent-Driven Frontend",
        description: "I built a dynamic frontend that adapts to user behavior and system inputs in real time, connecting seamlessly to the multi-agent backend architecture built by Lucas and Santiago.",
      },
      {
        title: "Design for Belonging",
        description: "The visual language was intentional: warm palette, rounded components, a mascot that shows up in empty states. Every decision was filtered through one question: would someone opening this for the first time feel like it was made for them?",
      },
      {
        title: "Design System and Brand Identity",
        description: "I built a lightweight design system with consistent brand templates so the team could move fast without going off brand. Working with Jeronimo on visual identity, we made sure every screen felt like it belonged to the same product.",
      },
    ],
  },
  {
    id: "proj-internnest",
    title: "InternNest",
    tagline: "A platform helping interns find subleases, navigate transit, and build community in new cities.",
    description: `Every summer, thousands of interns relocate to cities they have never lived in. They are scrambling to find short-term housing, figure out transit, and meet people, all while starting a new job.

We built InternNest to solve this. The platform matches interns with neighborhoods based on their commute, budget, and priorities, surfaces transit tips from past interns, and connects them with a community of other interns in their city.

Currently at MVP stage with more updates coming soon.`,
    role: "Co-founder & Developer",
    timeline: "Jan 2026 – Present",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    links: {
      github: "https://github.com/gustavotorres44/InternNest",
      live: "https://intern-nest-psi.vercel.app",
    },
    images: ["/images/landingpage.jpeg"],
    featured: true,
    highlights: [
      { value: "Live", label: "Deployed on Vercel" },
      { value: "MVP", label: "Current stage" },
      { value: "10+", label: "Cities supported" },
    ],
  },
  {
    id: "proj-sideraceros",
    title: "Sideraceros at a Crossroads",
    tagline: "Route optimization and customer prioritization strategy for a Madrid-based steel distributor, developed as a formal case study at WHU Otto Beisheim School of Management.",
    description: `Sideraceros is a steel products distributor based in Madrid, Spain, specializing in metal structure, machinery, and automotive industries. A family business turned mid-size operation with 50 employees and 3 trucks, they supply specialized alloys and high-strength steel to clients across the greater Madrid area.

In March 2025, Sideraceros landed a major construction client with strict delivery windows, exposing a critical flaw in their operations. Every morning, Ana, the operations lead, would write the day's delivery routes on a piece of paper based on experience alone. No digitized records, no optimization model, and emergencies handled by scribbling changes on the same paper mid-route. The system worked at small scale, but was now a liability.

The first step was digitizing 90+ handwritten delivery logs, referred to internally as the "pink pages," the only record of three months of truck operations. This revealed the mathematical reality of the problem: with just 15 delivery nodes, there are 6 × 10¹¹ possible route combinations, calculated by the formula (n−1)!/2. Manual planning wasn't just inefficient; it was mathematically impossible to do optimally at scale.

Using the Pareto principle, we segmented Sideraceros' 93 clients into three priority tiers based on delivery frequency. Analysis of the first 60 delivery sheets identified the top 10 customers, Tubos Paris, Dayroa, Hipur, Greymet, Eurotramex, and others, accounting for 36% of all deliveries. Tier 1 customers (Tubos Paris and Dayroa) alone represented 30% of top-10 delivery volume and received first-priority routing in all scenarios.

With tiers established, we designed a route optimization strategy integrating Dijkstra's Algorithm. Each delivery node is assigned a weight based on customer priority, distance, historical delay data, and time-of-day traffic patterns across Madrid. The algorithm calculates the optimal path while allowing real-time adjustments, ensuring Tier 1 clients always receive priority service without significantly increasing total kilometers driven.

The resulting framework gave Sideraceros a scalable, data-driven alternative to gut-feel routing, designed to grow with the company as order volumes and client complexity increased.

The project was developed as a formal case study at WHU Otto Beisheim School of Management, including a full teaching note prepared for faculty use and a supplementary process analysis document (conducted in Spanish) documenting the analytical methodology behind the customer segmentation.`,
    role: "Lead Analyst",
    timeline: "Jan 2025 – Apr 2025",
    skills: ["VRP Modeling", "Dijkstra's Algorithm", "Data Analysis", "Logistics Optimization", "Excel", "Operations Research", "Pareto Analysis"],
    featured: true,
    caseStudyPdf: "/Final%20Case%20Study%20.pdf",
    attachments: [
      {
        title: "Customer Priority Analysis",
        url: "/Customer%20Priority%20Doc.pdf",
        description: "Detailed breakdown of the 93-client segmentation into Tier 1, 2, and 3 priority groups using the Pareto principle.",
      },
      {
        title: "Final Teaching Note",
        url: "/Final%20Teaching%20Note%20.pdf",
        description: "Instructor guide developed for WHU faculty, outlining discussion questions, key decision points, and pedagogical structure for the case.",
      },
      {
        title: "Proceso de Análisis de Sideraceros",
        url: "/PROCESO%20DE%20AN%C3%81LISIS%20DE%20SIDERACEROS%20%28PREGUNTAS%20JAIME%29.pdf",
        language: "Spanish",
        description: "Supplementary analytical process document covering the methodology behind the customer segmentation and routing framework. Conducted in Spanish.",
      },
    ],
    highlights: [
      { value: "30%", label: "Better Tier 1 reliability" },
      { value: "25%", label: "Fewer delivery delays" },
      { value: "40%", label: "Fewer emergency re-routes" },
    ],
    approach: [
      {
        title: "Digitize the Data",
        description: "Analyzed and digitized 90+ handwritten daily delivery logs, the only operational record Sideraceros had. Structured the data to uncover routing patterns, truck utilization rates, and the frequency of mid-day emergency re-routes.",
      },
      {
        title: "Customer Prioritization via Pareto",
        description: "Segmented 93 clients into 3 tiers using the Pareto principle. The top 10 customers accounted for 36% of all deliveries. Tier 1 (Tubos Paris and Dayroa) represented 30% of top-10 volume; these clients received guaranteed first-priority routing in all scenarios.",
      },
      {
        title: "Route Optimization via Dijkstra's Algorithm",
        description: "Designed a weighted routing system where each delivery node is scored by customer tier, distance, historical delay patterns, and Madrid traffic data by time of day. Dijkstra's Algorithm finds the optimal path, replacing Ana's manual process with a systematic, real-time-adjustable framework.",
      },
      {
        title: "Teaching Note & Faculty Framework",
        description: "Developed a formal teaching note for WHU faculty outlining how to guide students through the case, covering discussion questions, key decision points, and the pedagogical structure behind the Pareto segmentation and Dijkstra routing methodology.",
      },
    ],
  },
  {
    id: "proj-medical-ai",
    title: "AI-Based Medical Outcome Prediction",
    tagline: "CNN-based model trained on 50,000+ patient records to predict clinical outcomes using multimodal data fusion.",
    description: `As part of the AI-Based Discovery and Innovation (Medical AI Thrust) research group at Georgia Institute of Technology, I worked on building a machine learning model to predict patient outcomes using the Emory medical database of over 50,000 patients.

My contributions included cleaning and normalizing datasets using Python and the Pandas library to optimize processing times, and collaborating with a team of 15+ members to refine the Convolutional Neural Network (CNN) algorithm.

The key technical challenge was implementing and testing different stages of data fusion: combining medical images, doctors' notes, and normalized structured datasets to improve predictive accuracy. Each fusion stage required careful evaluation of how different data modalities interacted and affected model performance.

This project deepened my understanding of real-world ML pipelines, the messiness of medical data, and how interdisciplinary collaboration across a large team shapes technical decisions.`,
    role: "Research Team Member",
    timeline: "Aug 2024 – Dec 2024",
    skills: ["Python", "Pandas", "Convolutional Neural Networks", "Data Cleaning", "Machine Learning", "Medical AI", "Data Fusion"],
    featured: false,
    highlights: [
      { value: "50K+", label: "Patient records analyzed" },
      { value: "15+", label: "Researchers collaborated with" },
      { value: "3", label: "Data modalities fused" },
    ],
  },
];
