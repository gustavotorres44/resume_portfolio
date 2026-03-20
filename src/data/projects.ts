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
}

export const projects: ProjectEntry[] = [
  {
    id: "proj-internnest",
    title: "InternNest",
    tagline: "A platform helping interns find subleases, navigate transit, and build community in new cities.",
    description: `The problem: Every summer, thousands of interns relocate to cities they've never lived in. They're scrambling to find short-term housing, figure out transit, and meet people — all while starting a new job.

We built InternNest to solve this. The platform matches interns with neighborhoods based on their commute, budget, and priorities, surfaces transit tips from past interns, and connects them with a community of other interns in their city.

Currently at MVP stage — more updates coming soon.`,
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
      { value: "5", label: "Core tech layers" },
    ],
  },
  {
    id: "proj-sideraceros",
    title: "Sideraceros Logistics Modernization",
    tagline: "Route optimization and customer prioritization strategy for a Madrid-based steel distributor with a 3-truck fleet.",
    description: `The problem: Sideraceros, a steel distributor based in Madrid, Spain with 50+ employees and a 3-truck fleet, was losing time and money to manual route planning. Emergency re-routing occurred daily, causing delivery delays and inflated fuel costs.

As part of my exchange semester at WHU – Otto Beisheim School of Management in Vallendar, Germany, I took on the role of Lead Analyst and spent three months analyzing 90+ daily delivery logs to assess truck utilization, routing inefficiencies, and emergency handling patterns.

My approach involved modeling delivery flows using Vehicle Routing Problem (VRP) frameworks. I demonstrated that just 15 delivery nodes yield 6×10¹¹ possible route combinations, making it mathematically clear why manual planning was failing. From there I proposed two solutions: a Pareto-based customer prioritization system to protect Tier 1 client relationships, and a route optimization strategy integrating Dijkstra's Algorithm with real-time traffic and delay data.

The results: Tier 1 client service reliability improved by 30%, projected delivery delays cut by 25%, weekly emergency route changes reduced by 40%, and potential fuel and driver hour savings identified, all while allowing the company to defer additional truck purchases.`,
    role: "Lead Analyst",
    timeline: "Jan 2025 – Apr 2025",
    skills: ["VRP Modeling", "Dijkstra's Algorithm", "Data Analysis", "Logistics Optimization", "Excel", "Operations Research", "Pareto Analysis"],
    featured: true,
    highlights: [
      { value: "30%", label: "Better Tier 1 reliability" },
      { value: "25%", label: "Fewer delivery delays" },
      { value: "40%", label: "Fewer emergency re-routes" },
    ],
  },
  {
    id: "proj-medical-ai",
    title: "AI-Based Medical Outcome Prediction",
    tagline: "CNN-based model trained on 50,000+ patient records to predict clinical outcomes using multimodal data fusion.",
    description: `As part of the AI-Based Discovery and Innovation (Medical AI Thrust) research group at Georgia Institute of Technology, I worked on building a machine learning model to predict patient outcomes using the Emory medical database of over 50,000 patients.

My contributions included cleaning and normalizing datasets using Python and the Pandas library to optimize processing times, and collaborating with a team of 15+ members to refine the Convolutional Neural Network (CNN) algorithm.

The key technical challenge was implementing and testing different stages of data fusion — combining medical images, doctors' notes, and normalized structured datasets to improve predictive accuracy. Each fusion stage required careful evaluation of how different data modalities interacted and affected model performance.

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
