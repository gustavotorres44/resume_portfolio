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

export interface Conference {
  name: string;
  location: string;
  year: string;
  images?: string[];
  interviews: { company: string; logo: string }[];
}

export const conferences: Conference[] = [
  {
    name: "SHPE National Convention",
    location: "Salt Lake City, UT",
    year: "2023",
    images: [
      "/images/slc/IMG_1084.jpeg",
      "/images/slc/IMG_1086.jpeg",
      "/images/slc/IMG_1182.jpeg",
      "/images/slc/IMG_1196.jpeg",
      "/images/slc/IMG_1201.jpeg",
      "/images/slc/IMG_1206.jpeg",
      "/images/slc/IMG_1279.jpeg",
      "/images/slc/IMG_1309.jpeg",
      "/images/slc/IMG_1400.jpeg",
      "/images/slc/IMG_1442.jpeg",
      "/images/slc/IMG_1453.jpeg",
      "/images/slc/72071667497__26ED96BD-C854-4F36-8F3F-F752ED6921BB.jpeg",
    ],
    interviews: [
      { company: "Apple", logo: "https://www.google.com/s2/favicons?domain=apple.com&sz=64" },
    ],
  },
  {
    name: "SHPE National Convention",
    location: "Anaheim, CA",
    year: "2024",
    images: [
      "/images/anaheim/IMG_3508.jpeg",
      "/images/anaheim/IMG_3516.jpeg",
      "/images/anaheim/IMG_3567.jpeg",
      "/images/anaheim/IMG_3603.jpeg",
      "/images/anaheim/IMG_3636.jpeg",
      "/images/anaheim/IMG_3696.jpeg",
      "/images/anaheim/IMG_8608.jpeg",
      "/images/anaheim/IMG_9EC7280764DE-1 2.jpeg",
      "/images/anaheim/3e7bfafe-036c-4d97-a83b-bd0e87d2c5de.jpeg",
      "/images/anaheim/ee4be432-d7d2-44b1-a1cb-2dbe92e1b87b.jpeg",
    ],
    interviews: [
      { company: "Amazon", logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=64" },
      { company: "Goldman Sachs", logo: "https://www.google.com/s2/favicons?domain=goldmansachs.com&sz=64" },
    ],
  },
  {
    name: "SHPE National Convention",
    location: "Philadelphia, PA",
    year: "2025",
    images: [
      "/images/philly/IMG_6569.jpeg",
      "/images/philly/IMG_6589.jpeg",
      "/images/philly/IMG_6608.jpeg",
      "/images/philly/IMG_6627.jpeg",
      "/images/philly/IMG_6628.jpeg",
      "/images/philly/IMG_6637.jpeg",
      "/images/philly/IMG_6646.jpeg",
      "/images/philly/IMG_6647.jpeg",
      "/images/philly/IMG_6715.jpeg",
      "/images/philly/68a3720d-8a93-45d7-bf6a-d0bd9a024556.jpeg",
      "/images/philly/ac087f65-f9bd-4954-9bbe-a5acc1e80fd1.jpeg",
    ],
    interviews: [
      { company: "GE HealthCare", logo: "https://www.google.com/s2/favicons?domain=gehealthcare.com&sz=64" },
      { company: "Eli Lilly", logo: "https://www.google.com/s2/favicons?domain=lilly.com&sz=64" },
      { company: "Goldman Sachs", logo: "https://www.google.com/s2/favicons?domain=goldmansachs.com&sz=64" },
      { company: "Apple", logo: "https://www.google.com/s2/favicons?domain=apple.com&sz=64" },
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
