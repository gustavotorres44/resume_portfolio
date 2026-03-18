// ============================================================
// TODO: Replace with your real work experience.
// List in reverse chronological order (most recent first).
// The "description" array is the LinkedIn+ detail — go deeper
// than your resume bullets. Explain context, impact, what you learned.
// ============================================================

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  type: "fulltime" | "internship" | "parttime" | "freelance";
  summary: string;
  description: string[];
  skills: string[];
  highlights?: string[];
  logo?: string;
  url?: string;
}

export const experiences: ExperienceEntry[] = [
  {
    id: "exp-1",
    company: "Company Name",
    role: "Software Engineering Intern",
    location: "San Francisco, CA",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    type: "internship",
    summary:
      "One or two sentences summarizing the role — what team, what you owned, the big picture.",
    description: [
      "Go deeper than your resume here. What was the problem the team was solving? What was the state of things when you arrived?",
      "What did YOU specifically build or contribute? Be concrete — name the technologies, the scale, the users affected.",
      "What was the outcome? Metrics, launches, improvements. If you don't have hard numbers, describe qualitative impact.",
      "What did you learn that you couldn't have learned in a classroom? What would you tell the next intern stepping into this role?",
    ],
    skills: ["React", "TypeScript", "Python", "AWS", "PostgreSQL"],
    highlights: [
      "Shipped [feature] to [X users] — resulted in [Y% improvement]",
      "Presented work to [audience] at end-of-internship showcase",
    ],
    url: "https://company.com",
  },
  {
    id: "exp-2",
    company: "Another Company",
    role: "Research Assistant",
    location: "Atlanta, GA",
    startDate: "Jan 2025",
    endDate: "May 2025",
    type: "parttime",
    summary:
      "Brief summary of what this role involved and why it mattered to you.",
    description: [
      "Describe the research area and your specific contribution.",
      "What methods, tools, or frameworks did you use?",
      "What did you produce — papers, code, presentations?",
    ],
    skills: ["Python", "PyTorch", "Data Analysis", "LaTeX"],
  },
];
