// ============================================================
// Experience data — divided into professional and campus roles.
// Logos use Clearbit's logo API for companies with public domains.
// ============================================================

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  type: "fulltime" | "internship" | "parttime" | "freelance";
  category: "professional" | "campus" | "upcoming";
  summary: string;
  description: string[];
  skills: string[];
  highlights?: string[];
  logo?: string;
  url?: string;
}

export const experiences: ExperienceEntry[] = [
  {
    id: "exp-goldman",
    company: "Goldman Sachs",
    role: "Operations Intern – Global Banking & Markets",
    location: "Salt Lake City, UT",
    startDate: "Jun 2026",
    endDate: "Aug 2026",
    type: "internship",
    category: "upcoming",
    logo: "https://www.google.com/s2/favicons?domain=goldmansachs.com&sz=64",
    url: "https://www.goldmansachs.com",
    summary: "Incoming Operations Intern on the Global Banking & Markets team.",
    description: ["Coming soon."],
    skills: [],
  },
  {
    id: "exp-accenture",
    company: "Accenture",
    role: "Technology Architecture Analyst",
    location: "Boston, MA",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    type: "internship",
    category: "professional",
    logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=64",
    url: "https://www.accenture.com",
    summary:
      "Supported the deployment of Advanced Metering Infrastructure (AMI) for a large New England utilities provider on Accenture's Testing Team.",
    description: [
      "Supported AMI deployment enhancing power usage tracking, outage reporting, and remote billing for over 1.5 million customers.",
      "Contributed to System Integration Testing (SIT) to ensure successful implementation and functionality across business processes.",
      "Developed centralized Excel trackers and stakeholder presentations to organize timelines, test case assignments, and cross-team responsibilities by Functional Increment (FI).",
      "Validated system functionality using SAP, coordinating across multiple teams in a hybrid environment.",
    ],
    skills: ["SAP", "System Integration Testing", "Excel", "Stakeholder Communication", "AMI", "Utilities"],
    highlights: [
      "Supported AMI rollout impacting 1.5M+ utility customers across New England",
      "Built centralized trackers that streamlined cross-team test coordination",
    ],
  },
  {
    id: "exp-toyota-2",
    company: "Toyota North America",
    role: "Production Engineer Co-op",
    location: "San Antonio, TX",
    startDate: "Jan 2024",
    endDate: "Apr 2024",
    type: "internship",
    category: "professional",
    logo: "https://www.google.com/s2/favicons?domain=toyota.com&sz=64",
    url: "https://www.toyota.com",
    summary:
      "Managed three concurrent engineering projects with the Dejima Laser Welding Equipment Group, driving measurable improvements in ergonomics, quality, and efficiency.",
    description: [
      "Managed three unrelated projects concurrently, ensuring timely and successful delivery for the Dejima Laser Welding Equipment Group.",
      "Participated in online and offline trials aimed at enhancing production conditions, collaborating with SOUTEC (Andritz) and Keyence Vision Systems.",
      "Utilized TPS/Lean Manufacturing principles to identify and address critical bottlenecks and areas for improvement.",
      "Delivered improved ergonomic ratings, improved quality control, liberation of 96 sq ft of production space, and a 160-minute reduction in shift preparation times.",
    ],
    skills: ["Lean Manufacturing", "TPS", "Project Management", "Process Improvement", "Ergonomics"],
    highlights: [
      "Reduced shift preparation times by 160 minutes on main project",
      "Freed 96 square feet of production space through process optimization",
      "Improved ergonomic ratings for team members on the production floor",
    ],
  },
  {
    id: "exp-toyota-1",
    company: "Toyota North America",
    role: "Production Engineer Co-op",
    location: "Kentucky, USA",
    startDate: "May 2023",
    endDate: "Aug 2023",
    type: "internship",
    category: "professional",
    logo: "https://www.google.com/s2/favicons?domain=toyota.com&sz=64",
    url: "https://www.toyota.com",
    summary:
      "Managed cost reduction projects and supported AMR implementation in Final Assembly Engineering Logistics.",
    description: [
      "Managed cost reduction projects that saved over $50,000.",
      "Created a safety protocol essential for AMR safety certification and supported AMR implementation.",
      "Supported the commissioning of vehicle production lines and construction.",
    ],
    skills: ["Lean Manufacturing", "AMR", "Cost Reduction", "Safety Protocols", "Logistics"],
    highlights: [
      "Led cost reduction projects saving over $50,000",
      "Authored safety protocol critical for AMR safety certification",
    ],
  },
  {
    id: "exp-bori-president",
    company: "Boricuas Organized For Impact (BORI)",
    role: "President",
    location: "Atlanta, GA",
    startDate: "Aug 2025",
    endDate: "Present",
    type: "parttime",
    category: "campus",
    logo: "/images/bori.jpg",
    summary:
      "Lead board activities and internal communications for BORI, a Georgia Tech organization fostering Puerto Rican culture and community.",
    description: [
      "Oversee board activities and internal communications to keep the organization aligned with its mission of fostering Puerto Rican culture and community on campus.",
      "Build and manage partnerships with Georgia Tech while leading cultural and social events that celebrate Puerto Rican heritage.",
      "Create spaces for connection, representation, and cross-cultural exchange among students.",
    ],
    skills: ["Leadership", "Event Planning", "Community Building", "Partnership Management"],
  },
  {
    id: "exp-bori-founder",
    company: "Boricuas Organized For Impact (BORI)",
    role: "Internal Vice President & Founder",
    location: "Atlanta, GA",
    startDate: "Sep 2024",
    endDate: "Aug 2025",
    type: "parttime",
    category: "campus",
    logo: "/images/bori.jpg",
    summary:
      "Co-founded BORI at Georgia Tech to celebrate Puerto Rican heritage and build community for the Puerto Rican diaspora on campus.",
    description: [
      "Oversaw relations with Georgia Tech-affiliated organizations and assisted the President with the Board of Directors.",
      "Organized social projects and cultural events that celebrate Puerto Rican heritage and promote awareness across campus.",
      "Built connections with organizations in Puerto Rico and led fundraising and volunteer initiatives.",
      "Inspired students in Puerto Rico to pursue academic opportunities at Georgia Tech through outreach efforts.",
    ],
    skills: ["Leadership", "Event Planning", "Outreach", "Fundraising", "Community Building"],
  },
  {
    id: "exp-brasa-head",
    company: "BRASA at Georgia Tech",
    role: "Head of Events",
    location: "Atlanta, GA",
    startDate: "Aug 2025",
    endDate: "Present",
    type: "parttime",
    category: "campus",
    logo: "/images/brasa.jpg",
    summary:
      "Oversee all event planning and execution for BRASA, a community of 150+ Brazilian students at Georgia Tech.",
    description: [
      "Oversee the planning, coordination, and execution of social and professional events for a community of over 150 students.",
      "Foster a welcoming and engaging environment where members can connect, grow, and celebrate Brazilian culture.",
    ],
    skills: ["Event Planning", "Team Leadership", "Community Building"],
  },
  {
    id: "exp-brasa-analyst",
    company: "BRASA at Georgia Tech",
    role: "Events Analyst",
    location: "Atlanta, GA",
    startDate: "Apr 2024",
    endDate: "Aug 2025",
    type: "parttime",
    category: "campus",
    logo: "/images/brasa.jpg",
    summary:
      "Planned and coordinated events to further Brazilian culture at Georgia Tech.",
    description: [
      "Worked with team members to plan and coordinate events furthering Brazilian culture at Georgia Tech.",
    ],
    skills: ["Event Planning", "Coordination", "Community Engagement"],
  },
  {
    id: "exp-shpe-chair",
    company: "SHPE",
    role: "Academic and Professional Development Chair",
    location: "Atlanta, GA",
    startDate: "Sep 2024",
    endDate: "May 2025",
    type: "parttime",
    category: "campus",
    logo: "https://www.google.com/s2/favicons?domain=shpe.org&sz=64",
    summary:
      "Built and managed a centralized academic resource repository supporting 500+ SHPE members across all majors at Georgia Tech.",
    description: [
      "Gathered and organized academic resources including past homework, tests, and projects to support more than 500 students across all majors.",
      "Worked with students and faculty to build a resource repository and coordinate study groups, workshops, and review sessions.",
    ],
    skills: ["Academic Support", "Resource Management", "Workshop Facilitation", "Leadership"],
  },
  {
    id: "exp-shpe-mentor",
    company: "SHPE",
    role: "Professional Experience Program Mentor",
    location: "Atlanta, GA",
    startDate: "Sep 2024",
    endDate: "May 2025",
    type: "parttime",
    category: "campus",
    logo: "https://www.google.com/s2/favicons?domain=shpe.org&sz=64",
    summary:
      "Mentored two students through critical academic and career decisions as part of SHPE's Professional Experience Program.",
    description: [
      "Led and mentored two mentees, guiding them through critical academic and career decisions.",
      "Facilitated career development workshops, fostering engagement, team bonding, and active participation.",
      "Applied problem-solving and critical thinking to support mentees in navigating important academic and professional choices.",
    ],
    skills: ["Mentorship", "Career Development", "Workshop Facilitation"],
  },
  {
    id: "exp-shpe-design",
    company: "SHPE",
    role: "Graphic Designer",
    location: "Atlanta, GA",
    startDate: "Aug 2023",
    endDate: "Apr 2024",
    type: "parttime",
    category: "campus",
    logo: "https://www.google.com/s2/favicons?domain=shpe.org&sz=64",
    summary:
      "Designed marketing materials and merchandise for SHPE's events and annual campaigns.",
    description: [
      "Designed flyers, Instagram posts and stories, and coordinated timing and scheduling of social media posts.",
      "Collaborated with the team to design SHPE merch including hats, t-shirts, and hoodies.",
      "Created stickers for the annual Taste of Latin America event.",
    ],
    skills: ["Graphic Design", "Social Media", "Branding"],
  },
];
