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
    title: "Sideraceros at a Crossroads",
    tagline: "Route optimization and customer prioritization strategy for a Madrid-based steel distributor — developed as a formal case study at WHU Otto Beisheim School of Management.",
    description: `Sideraceros is a steel products distributor based in Madrid, Spain, specializing in metal structure, machinery, and automotive industries. A family business turned mid-size operation with 50 employees and 3 trucks, they supply specialized alloys and high-strength steel to clients across the greater Madrid area.

In March 2025, Sideraceros landed a major construction client with strict delivery windows — exposing a critical flaw in their operations. Every morning, Ana, the operations lead, would write the day's delivery routes on a piece of paper based on experience alone. No digitized records, no optimization model, and emergencies handled by scribbling changes on the same paper mid-route. The system worked at small scale, but was now a liability.

The first step was digitizing 90+ handwritten delivery logs — referred to internally as the "pink pages" — the only record of three months of truck operations. This revealed the mathematical reality of the problem: with just 15 delivery nodes, there are 6 × 10¹¹ possible route combinations, calculated by the formula (n−1)!/2. Manual planning wasn't just inefficient — it was mathematically impossible to do optimally at scale.

Using the Pareto principle, we segmented Sideraceros' 93 clients into three priority tiers based on delivery frequency. Analysis of the first 60 delivery sheets identified the top 10 customers — Tubos Paris, Dayroa, Hipur, Greymet, Eurotramex, and others — accounting for 36% of all deliveries. Tier 1 customers (Tubos Paris and Dayroa) alone represented 30% of top-10 delivery volume and received first-priority routing in all scenarios.

With tiers established, we designed a route optimization strategy integrating Dijkstra's Algorithm. Each delivery node is assigned a weight based on customer priority, distance, historical delay data, and time-of-day traffic patterns across Madrid. The algorithm calculates the optimal path while allowing real-time adjustments — ensuring Tier 1 clients always receive priority service without significantly increasing total kilometers driven.

The resulting framework gave Sideraceros a scalable, data-driven alternative to gut-feel routing — one designed to grow with the company as order volumes and client complexity increased.

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
        description: "Analyzed and digitized 90+ handwritten daily delivery logs — the only operational record Sideraceros had. Structured the data to uncover routing patterns, truck utilization rates, and the frequency of mid-day emergency re-routes.",
      },
      {
        title: "Customer Prioritization via Pareto",
        description: "Segmented 93 clients into 3 tiers using the Pareto principle. The top 10 customers accounted for 36% of all deliveries. Tier 1 (Tubos Paris and Dayroa) represented 30% of top-10 volume — these clients received guaranteed first-priority routing in all scenarios.",
      },
      {
        title: "Route Optimization via Dijkstra's Algorithm",
        description: "Designed a weighted routing system where each delivery node is scored by customer tier, distance, historical delay patterns, and Madrid traffic data by time of day. Dijkstra's Algorithm finds the optimal path, replacing Ana's manual process with a systematic, real-time-adjustable framework.",
      },
      {
        title: "Teaching Note & Faculty Framework",
        description: "Developed a formal teaching note for WHU faculty outlining how to guide students through the case — covering discussion questions, key decision points, and the pedagogical structure behind the Pareto segmentation and Dijkstra routing methodology.",
      },
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
