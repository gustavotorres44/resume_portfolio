// ============================================================
// Experience data — divided into professional and campus roles.
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
    role: "Operations Intern, Global Banking & Markets",
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
    role: "Technology Architecture Analyst, Testing Team",
    location: "Boston, MA",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    type: "internship",
    category: "professional",
    logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=64",
    url: "https://www.accenture.com",
    summary:
      "Supported the deployment of Advanced Metering Infrastructure (AMI) for a major New England utilities provider on Accenture's Testing Team.",
    description: [
      "Supported deployment of Advanced Metering Infrastructure for a major New England utilities provider, improving power usage tracking, outage reporting, and remote billing for 1.5M+ customers, while reducing 97% of weekly field visits on individual meters.",
      "Participated in System Integration Testing to ensure functionality across 50 unique business processes.",
      "Built centralized Excel trackers and stakeholder presentations to manage timelines, test case assignments, and cross-team responsibilities by Functional Increment (FI), while validating SAP system functionality.",
    ],
    skills: ["SAP", "SIEMENS Energy IP", "Qtest", "System Integration Testing", "Excel", "Stakeholder Communication", "AMI", "Utilities"],
    highlights: [
      "Reduced 97% of weekly field visits on individual meters",
      "Validated 50 unique business processes during SIT cycle",
      "Built centralized trackers that streamlined cross-team test coordination",
    ],
  },
  {
    id: "exp-sideraceros",
    company: "Sideraceros",
    role: "Logistics & Operations Analyst",
    location: "Vallendar, Germany (WHU Exchange)",
    startDate: "Jan 2025",
    endDate: "Apr 2025",
    type: "internship",
    category: "professional",
    logo: "https://www.google.com/s2/favicons?domain=whu.edu&sz=64",
    summary:
      "Led a logistics modernization project for a steel distributor with a 3-truck fleet and 50+ employees, applying VRP modeling and Dijkstra's Algorithm to reduce delivery delays and improve route efficiency.",
    description: [
      "Analyzed 90+ daily delivery logs to assess truck utilization, routing inefficiencies, and emergency handling patterns.",
      "Modeled delivery flows using Vehicle Routing Problem (VRP) frameworks, demonstrating that 15 delivery nodes produce 6×10¹¹ possible route combinations.",
      "Designed a Pareto-based customer prioritization system to improve Tier 1 client service reliability.",
      "Developed a route optimization strategy integrating Dijkstra's Algorithm with real-time traffic and delay data.",
      "Presented findings and recommendations to company leadership, enabling data-driven infrastructure decisions.",
    ],
    skills: ["VRP Modeling", "Dijkstra's Algorithm", "Data Analysis", "Logistics Optimization", "Excel", "Operations Research", "Pareto Analysis"],
    highlights: [
      "Improved Tier 1 client service reliability by 30%",
      "Projected delivery delays reduced by 25%",
      "Weekly emergency re-routes reduced by 40%",
    ],
  },
  {
    id: "exp-toyota-2",
    company: "Toyota North America",
    role: "Production Engineer Co-op, Dejima Laser Welding Equipment Group",
    location: "San Antonio, TX (TMMTX)",
    startDate: "Jan 2024",
    endDate: "Apr 2024",
    type: "internship",
    category: "professional",
    logo: "https://www.google.com/s2/favicons?domain=toyota.com&sz=64",
    url: "https://www.toyota.com",
    summary:
      "Managed 3 concurrent projects for the Dejima Laser Welding Equipment Group at TMMTX, driving improvements in ergonomics, quality, and production efficiency across 4 production lines.",
    description: [
      "Managed 3 projects simultaneously as project manager and attained a 75% joint completion rate for all project KPIs.",
      "Participated in production trials focused on Quality Control and minimizing scrap rate to below 5% on all 4 production lines.",
      "Applied TPS/Lean Manufacturing principles to identify bottlenecks and collaborated with Soutec (Andritz) and Keyence Vision Systems to test new technologies and develop innovative solutions.",
      "Improved Toyota's ergonomic rating by 25%, freed up 96 sq. ft. of space, and reduced post- and pre-shift preparation by 160 minutes on all 4 production lines.",
    ],
    skills: ["Lean Manufacturing", "TPS", "AutoCAD", "Project Management", "Process Improvement", "Ergonomics", "SolidWorks"],
    highlights: [
      "Reduced shift preparation by 160 minutes across 4 production lines",
      "Freed 96 sq. ft. of production space",
      "Improved Toyota's ergonomic rating by 25%",
    ],
  },
  {
    id: "exp-toyota-1",
    company: "Toyota North America",
    role: "Production Engineer Co-op, Final Assembly Engineering Logistics",
    location: "Georgetown, KY (TMMK)",
    startDate: "May 2023",
    endDate: "Aug 2023",
    type: "internship",
    category: "professional",
    logo: "https://www.google.com/s2/favicons?domain=toyota.com&sz=64",
    url: "https://www.toyota.com",
    summary:
      "Led cost reduction and AMR implementation projects in Final Assembly Engineering Logistics at TMMK.",
    description: [
      "Managed cost reduction projects that saved more than $50,000, accounting for an 89% reduction of the original cost.",
      "Created a safety protocol for Autonomous Mobile Robots (AMR) safety certification and AMR implementation, reducing safety commissioning by 92% of the original time and cutting overtime work by 2 weeks.",
      "Supported construction and commissioning of a vehicle production line responsible for a new car model and the production of an additional 300 cars daily.",
    ],
    skills: ["Lean Manufacturing", "TPS", "AMR", "Cost Reduction", "Safety Protocols", "Logistics", "AutoCAD"],
    highlights: [
      "Saved $50,000+ with 89% cost reduction",
      "AMR safety protocol cut commissioning time by 92%",
      "Supported launch of production line adding 300 cars/day",
    ],
  },
  {
    id: "exp-gt-research",
    company: "Georgia Institute of Technology",
    role: "Undergraduate Researcher, Medical AI",
    location: "Atlanta, GA",
    startDate: "Aug 2024",
    endDate: "Dec 2024",
    type: "parttime",
    category: "campus",
    logo: "/images/gt.jpg",
    summary:
      "Contributed to an AI-based patient outcome prediction model as part of Georgia Tech's AI-Based Discovery and Innovation research group.",
    description: [
      "Utilized Emory medical database of more than 50,000 patients and AI Convolutional Neural Networks to predict patient outcomes.",
      "Cleaned and normalized datasets using Python and the Pandas library to achieve low processing times.",
      "Collaborated with a team of 15+ members to refine the Machine Learning algorithm by feeding it different types of information such as images, doctors' notes, and normalized data, as well as testing different stages of data Fusion.",
    ],
    skills: ["Python", "Pandas", "CNN", "Machine Learning", "Data Cleaning", "Medical AI", "Data Fusion"],
    highlights: [
      "Trained CNN on 50,000+ patient records from Emory medical database",
      "Implemented multimodal data fusion across images, notes, and structured data",
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
      "Coordinate board activities and internal communications to align with BORI's mission.",
      "Manage GT partnerships and lead cultural and social events promoting Puerto Rican culture.",
    ],
    skills: ["Leadership", "Event Planning", "Community Building", "Partnership Management"],
  },
  {
    id: "exp-bori-founder",
    company: "Boricuas Organized For Impact (BORI)",
    role: "Internal Vice President & Co-Founder",
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
    company: "SHPE at Georgia Tech",
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
      "Managed a 650+ file academic resource database serving 500+ students across all majors, organizing past homework, tests, and projects.",
      "Worked with students and faculty to build the resource repository and coordinate study groups, workshops, and review sessions.",
    ],
    skills: ["Academic Support", "Resource Management", "Workshop Facilitation", "Leadership"],
  },
  {
    id: "exp-shpe-mentor",
    company: "SHPE at Georgia Tech",
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
      "Guided mentees in their academic and career paths, assisting with interview preparation for roles at Johnson & Johnson, P&G, Caterpillar, and Disney.",
      "Provided guidance on navigating corporate events with Goldman Sachs and Google, helping mentees build professional networks.",
      "Facilitated career development workshops fostering engagement, team bonding, and active participation.",
    ],
    skills: ["Mentorship", "Career Development", "Workshop Facilitation"],
  },
  {
    id: "exp-shpe-design",
    company: "SHPE at Georgia Tech",
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
