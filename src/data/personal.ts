// ============================================================
// TODO: Replace ALL placeholder content below with your real info.
// This is the single source of truth for your personal details.
// ============================================================

export interface PersonalInfo {
  name: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    twitter?: string;
    other?: { label: string; url: string }[];
  };
  interests?: string[];
  education?: {
    school: string;
    degree: string;
    graduationYear: string;
    gpa?: string;
    relevantCourses?: string[];
    logo?: string;
    ranking?: string;
  }[];
}

export const personal: PersonalInfo = {
  name: "Gustavo A. Torres Murphy",
  headline: "Industrial Engineering, Minor in Computing & Intelligence at Georgia Tech. Operations, Technology & Community Builder.",
  bio: `I'm an Industrial Engineering student at Georgia Tech with a passion for solving complex operational problems and building communities that matter.

My engineering journey has taken me from the production floor at Toyota, where I led cost reduction projects saving over $50,000 and cut shift preparation times by 160 minutes, to Accenture's Boston office, where I supported the deployment of Advanced Metering Infrastructure for over 1.5 million utility customers.

During my exchange semester at WHU Otto Beisheim School of Management in Germany, I developed a formal case study for Sideraceros, a Madrid-based steel distributor. The project involved digitizing 90+ handwritten delivery logs and designing a route optimization framework using Dijkstra's Algorithm and Pareto-based customer segmentation. The case study was formally adopted by WHU faculty, complete with a teaching note prepared for classroom use.

I also contributed to a medical AI research group at Georgia Tech, working with the Emory medical database of over 50,000 patients to build a CNN-based model for predicting patient outcomes. My work focused on data cleaning, normalization, and testing different stages of multimodal data fusion across images, clinical notes, and structured records.

Beyond engineering, I'm a community builder at heart. I co-founded BORI (Boricuas Organized For Impact) at Georgia Tech to celebrate Puerto Rican culture and create spaces for representation and connection on campus. I also serve as Head of Events for BRASA, leading a community of 150+ Brazilian students.

Most recently, I competed in and won the inaugural SHPE VIBRA ATL Hackathon, where my team built Mani, a WhatsApp AI copilot for small business owners across Latin America. I led UI/UX design, frontend engineering, and brand identity. We are continuing to develop Mani with the goal of putting it in the hands of real businesses.

I thrive at the intersection of technology, operations, and people. Whether that's optimizing a logistics system, mentoring students through SHPE, or designing cultural events that bring communities together.

I speak Spanish, English, and Portuguese fluently, and conversational German, which has come in handy everywhere from exchange programs to international projects.`,
  location: "Atlanta, GA",
  email: "gustavoandrestorres@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/gustavotorreskd/",
    github: "https://github.com/gustavotorres44",
  },
  interests: [
    "Basketball",
    "Volleyball",
    "Soccer",
    "Music",
    "Photography",
    "Fishing",
    "Languages",
    "History",
    "Community Building",
    "Logistics & Operations",
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "B.S. Industrial Engineering, Minor in Computing & Intelligence",
      graduationYear: "2026",
      logo: "/images/gt.jpg",
      ranking: "#1 Industrial Engineering in the U.S.",
      relevantCourses: ["Data Manipulation", "Probability with Applications", "Basic Stat Methods", "Discrete Math", "OOP", "Data Structures", "Regression & Forecasting", "Simulation Analysis & Design", "Intro to Artificial Intelligence", "Intro to Perception & Robotics", "Supply Chain Economics", "Engineering Optimization", "Stochastic Manufacturing & Service Systems", "Time Series Analysis & Machine Learning", "Supply Chain Management", "Money, Banking & Financial Markets"],
    },
    {
      school: "WHU – Otto Beisheim School of Management",
      degree: "Exchange Program",
      graduationYear: "2025",
      logo: "/images/WHU.jpg",
      ranking: "#1 Business School in Germany · Top 30 in Europe",
    },
    {
      school: "Southwestern Educational Society",
      degree: "High School Diploma",
      graduationYear: "2022",
      logo: "/images/seso.jpg",
    },
  ],
};
