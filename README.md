# Personal Portfolio — Extended LinkedIn

A personal portfolio website that serves as a deeper, richer extension of my LinkedIn profile. Visitors (recruiters, hiring managers, collaborators) land here to get the full story — detailed work experience, in-depth project case studies, a downloadable resume, and a real sense of who I am beyond bullet points.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (connect this repo → auto-deploys on push to `main`)
- **Fonts**: Loaded via `next/font/google` — no external CSS imports

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout — global fonts, metadata, nav
│   ├── page.tsx            # Landing / hero page
│   ├── about/
│   │   └── page.tsx        # About Me — extended bio, personal story
│   ├── experience/
│   │   └── page.tsx        # Work Experience — detailed role breakdowns
│   ├── projects/
│   │   └── page.tsx        # Projects & Case Studies — deep dives
│   ├── resume/
│   │   └── page.tsx        # Resume viewer + PDF download
│   └── api/                # API routes (contact form, etc.)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Site navigation
│   │   └── Footer.tsx      # Site footer
│   ├── sections/           # Page-level section components
│   │   ├── Hero.tsx        # Landing page hero
│   │   ├── ExperienceCard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ResumeViewer.tsx
│   └── ui/                 # Small reusable UI primitives
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── SectionHeading.tsx
│
├── data/
│   ├── experience.ts       # All work experience entries
│   ├── projects.ts         # All project entries
│   └── personal.ts         # Bio, links, contact info
│
├── lib/
│   └── utils.ts            # Shared utility functions
│
public/
├── images/                 # Headshot, project screenshots, logos
│   └── (add your images here)
└── resume.pdf              # Your downloadable resume PDF
```

## Key Design Decisions

- **Data lives in `src/data/`**: All personal content (experience, projects, bio) is stored as typed TypeScript objects. To update content, just edit the data files — no CMS needed.
- **Components are split by purpose**: `layout/` = structural, `sections/` = page-specific, `ui/` = reusable primitives.
- **Each page is its own route**: `/about`, `/experience`, `/projects`, `/resume` — clean URLs, easy to share specific pages with recruiters.
- **Design should NOT look like a generic portfolio template**: This should feel personal and intentional. Avoid clichéd developer portfolio aesthetics (dark mode with neon green accents, terminal themes, etc.). Aim for something that reflects who I am.

## Data Schemas

### Experience Entry (`src/data/experience.ts`)
```ts
export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;         // "Jun 2025"
  endDate: string;           // "Aug 2025" or "Present"
  type: "fulltime" | "internship" | "parttime" | "freelance";
  summary: string;           // 1-2 sentence overview
  description: string[];     // Detailed bullet points — the LinkedIn+ detail
  skills: string[];          // Technologies, tools, frameworks
  highlights?: string[];     // Notable achievements, metrics
  logo?: string;             // Path to company logo in /public/images/
  url?: string;              // Company website
}
```

### Project Entry (`src/data/projects.ts`)
```ts
export interface ProjectEntry {
  id: string;
  title: string;
  tagline: string;           // One-liner
  description: string;       // Full case study write-up (supports markdown)
  role: string;              // "Lead Developer", "Co-founder", etc.
  timeline: string;          // "Jan 2025 – Mar 2025"
  skills: string[];
  links?: {
    live?: string;           // Deployed URL
    github?: string;         // Repo URL
    demo?: string;           // Video/demo link
  };
  images?: string[];         // Screenshot paths in /public/images/
  featured?: boolean;        // Show on landing page
}
```

### Personal Info (`src/data/personal.ts`)
```ts
export interface PersonalInfo {
  name: string;
  headline: string;          // "CS Student at ___ | Aspiring ___"
  bio: string;               // Extended bio — the real story
  location: string;
  email: string;
  links: {
    linkedin: string;
    github: string;
    twitter?: string;
    other?: { label: string; url: string }[];
  };
  interests?: string[];      // Personal interests, hobbies
  education?: {
    school: string;
    degree: string;
    graduationYear: string;
    gpa?: string;
    relevantCourses?: string[];
  }[];
}
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## How to Update Content

1. Edit files in `src/data/` with your real information
2. Drop images into `public/images/`
3. Place your resume PDF at `public/resume.pdf`
4. Push to `main` — Vercel auto-deploys

## Notes for Claude Code

- All content is in `src/data/` — edit those files to change what appears on the site
- Component styles use Tailwind CSS utility classes
- The site uses Next.js App Router (`src/app/`) — each folder is a route
- Images go in `public/images/` and are referenced as `/images/filename.ext`
- The resume PDF goes at `public/resume.pdf` and is linked from the resume page
- When adding new sections or pages, follow the existing pattern: create a folder in `src/app/` with a `page.tsx`
- Keep the design cohesive — reference existing components before creating new ones
