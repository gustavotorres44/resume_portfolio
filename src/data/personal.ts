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
  }[];
}

export const personal: PersonalInfo = {
  name: "Your Name",
  headline:
    "CS Student at [University] · Building things at the intersection of [X] and [Y]",
  bio: `Write your extended bio here. This is the "About Me" that LinkedIn doesn't give you room for.

Talk about your journey — what got you into tech/your field, what drives you, what you care about beyond work. This is the place to be personal, specific, and real.

A few paragraphs is perfect. Think of it as the answer to "tell me about yourself" in an interview, but with more room to breathe.`,
  location: "Atlanta, GA",
  email: "you@example.com",
  links: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    // twitter: "https://twitter.com/yourhandle",
  },
  interests: [
    "Rock Climbing",
    "Indie Music",
    "Chess",
    "Cooking",
    "Hiking",
  ],
  education: [
    {
      school: "Your University",
      degree: "B.S. Computer Science",
      graduationYear: "2027",
      gpa: "3.8",
      relevantCourses: [
        "Data Structures",
        "Algorithms",
        "Systems Programming",
        "Machine Learning",
        "Databases",
      ],
    },
  ],
};
