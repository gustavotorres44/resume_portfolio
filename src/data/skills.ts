export interface Skill {
  name: string;
  proof?: string; // where you used it
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  issued: string;
  logo?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming & Data",
    skills: [
      { name: "Python", proof: "AI Medical Outcome Prediction — CNN training & Pandas data pipelines" },
      { name: "SQL", proof: "Data manipulation coursework & backend querying" },
      { name: "Java", proof: "OOP & Data Structures coursework" },
      { name: "HTML / XML", proof: "Web development & data interchange" },
      { name: "LaTeX", proof: "Technical documentation & academic reports" },
    ],
  },
  {
    category: "Engineering Tools",
    skills: [
      { name: "AutoCAD 2D/3D", proof: "Production line layout & space optimization at Toyota" },
      { name: "SolidWorks", proof: "3D modeling for manufacturing projects" },
      { name: "SAP (Utilities)", proof: "AMI system validation at Accenture" },
      { name: "SIEMENS Energy IP", proof: "Utilities infrastructure work at Accenture" },
      { name: "Qtest", proof: "Test case management during SIT at Accenture" },
    ],
  },
  {
    category: "Analytics & Productivity",
    skills: [
      { name: "Excel", proof: "Built centralized trackers for Accenture's cross-team FI coordination" },
      { name: "Power BI", proof: "Data visualization & reporting" },
    ],
  },
  {
    category: "Concepts & Frameworks",
    skills: [
      { name: "TPS / Lean Manufacturing", proof: "Applied at Toyota TMMK & TMMTX to cut bottlenecks and free 96 sq. ft." },
      { name: "Vehicle Routing Problem (VRP)", proof: "Modeled 6×10¹¹ route combos at Sideraceros to cut delays by 25%" },
      { name: "Dijkstra's Algorithm", proof: "Route optimization engine for Sideraceros logistics project" },
      { name: "Pareto Principle", proof: "Customer prioritization at Sideraceros — improved Tier 1 reliability by 30%" },
      { name: "System Integration Testing", proof: "Validated 50 business processes during AMI deployment at Accenture" },
      { name: "Machine Learning / CNN", proof: "Emory database — predicted patient outcomes across 50K+ records" },
      { name: "Operations Research", proof: "Core of Industrial Engineering curriculum & Sideraceros project" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Spanish", proof: "Native" },
      { name: "English", proof: "Native" },
      { name: "Portuguese", proof: "Fluent" },
      { name: "German", proof: "Conversational" },
      { name: "French", proof: "Basic" },
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Salesforce AI Associate",
    issuer: "Salesforce",
    issued: "Jul 2025",
    logo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=64",
  },
  {
    name: "Google Cloud Digital Leader",
    issuer: "Google",
    issued: "2025",
    logo: "https://www.google.com/s2/favicons?domain=google.com&sz=64",
  },
  {
    name: "OSHA 10-Hour",
    issuer: "OSHA Safety Training Institute",
    issued: "Apr 2024",
    logo: "https://www.google.com/s2/favicons?domain=osha.gov&sz=64",
  },
];
