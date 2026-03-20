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
  }[];
}

export const personal: PersonalInfo = {
  name: "Gustavo Torres",
  headline: "Industrial Engineering, Minor in Computing & Intelligence at Georgia Tech. Operations, Technology & Community Builder.",
  bio: `I'm an Industrial Engineering student at Georgia Tech with a passion for solving complex operational problems and building communities that matter.

My engineering journey has taken me from the production floor at Toyota, where I led cost reduction projects saving over $50,000 and cut shift preparation times by 160 minutes, to Accenture's Boston office, where I supported the deployment of Advanced Metering Infrastructure for over 1.5 million utility customers.

Beyond engineering, I'm a community builder at heart. I co-founded BORI (Boricuas Organized For Impact) at Georgia Tech to celebrate Puerto Rican culture and create spaces for representation and connection on campus. I also serve as Head of Events for BRASA, leading a community of 150+ Brazilian students.

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
    "Track and Field",
    "Community Building",
    "Logistics & Operations",
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "B.S. Industrial Engineering, Minor in Computing & Intelligence",
      graduationYear: "2026",
      logo: "/images/gt.jpg",
    },
    {
      school: "WHU – Otto Beisheim School of Management",
      degree: "Exchange Program",
      graduationYear: "2025",
      logo: "/images/WHU.jpg",
    },
    {
      school: "Southwestern Educational Society",
      degree: "High School Diploma",
      graduationYear: "2022",
      logo: "/images/seso.jpg",
    },
  ],
};
