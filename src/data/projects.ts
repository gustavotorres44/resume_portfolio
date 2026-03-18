// ============================================================
// TODO: Replace with your real projects.
// Set featured: true on 1-2 projects you want on the landing page.
// The "description" field is your case study — tell the story
// of the problem, your approach, and the result.
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
}

export const projects: ProjectEntry[] = [
  {
    id: "proj-1",
    title: "InternNest",
    tagline:
      "A platform helping interns find subleases, navigate transit, and build community in new cities.",
    description: `The problem: Every summer, thousands of interns relocate to cities they've never lived in. They're scrambling to find short-term housing, figure out transit, and meet people — all while starting a new job.

We built InternNest to solve this. The platform matches interns with neighborhoods based on their commute, budget, and priorities, surfaces transit tips from past interns, and connects them with a community of other interns in their city.

My role was [your specific contribution]. I built [specific things] using [specific tech]. The hardest part was [honest challenge]. We tested it with [X] real interns and learned [key insight].

This project taught me [what you took away] and I'm continuing to develop it into [next steps].`,
    role: "Co-founder & Developer",
    timeline: "Jan 2026 – Present",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    links: {
      live: "https://internnest.vercel.app",
      github: "https://github.com/yourusername/internnest",
    },
    featured: true,
  },
  {
    id: "proj-2",
    title: "Project Two",
    tagline: "A one-liner describing what this project does.",
    description: `What problem did this solve? Who was it for?

What was your approach? What technologies did you use and why?

What was the result? What did you learn?

Be specific. Recruiters and hiring managers want to understand how you think, not just what you built.`,
    role: "Lead Developer",
    timeline: "Sep 2025 – Dec 2025",
    skills: ["Python", "Flask", "React", "MongoDB"],
    links: {
      github: "https://github.com/yourusername/project-two",
    },
    featured: true,
  },
  {
    id: "proj-3",
    title: "Project Three",
    tagline: "Another project tagline.",
    description: `Describe this project the same way — problem, approach, result, learning.`,
    role: "Developer",
    timeline: "Mar 2025 – May 2025",
    skills: ["Java", "Spring Boot", "MySQL"],
    featured: false,
  },
];
