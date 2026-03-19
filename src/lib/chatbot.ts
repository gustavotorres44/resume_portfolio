// ============================================================
// Chatbot response engine.
// Currently rule-based — swap getBotResponse() for a Claude
// API call when ready and nothing else needs to change.
// ============================================================

export interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  suggestions?: string[];
  link?: { label: string; href: string };
}

export interface BotResponse {
  text: string;
  suggestions?: string[];
  link?: { label: string; href: string };
}

// ── Intent matching ──────────────────────────────────────────

const intents: {
  patterns: RegExp[];
  response: BotResponse;
}[] = [
  {
    patterns: [/\bhello\b/i, /\bhi\b/i, /\bhey\b/i, /\bsup\b/i, /\bwho are you\b/i],
    response: {
      text: "Hey! I'm Gus's portfolio assistant. I can help you navigate his work, experience, and projects. What are you curious about?",
      suggestions: ["Experience", "Projects", "About Gus", "Resume"],
    },
  },
  {
    patterns: [/\bexperience\b/i, /\bwork\b/i, /\bjob\b/i, /\binternship\b/i, /\bcareer\b/i, /\bprofessional\b/i],
    response: {
      text: "Gus has interned at Toyota (twice), Accenture, and is heading to Goldman Sachs this summer. He also leads several campus organizations at Georgia Tech.",
      suggestions: ["See full experience", "Campus involvement", "Upcoming role"],
      link: { label: "View Experience →", href: "/experience" },
    },
  },
  {
    patterns: [/\bgoldman\b/i, /\bgs\b/i, /\bupcoming\b/i, /\bnext role\b/i],
    response: {
      text: "Gus is joining Goldman Sachs as an Operations Intern on the Global Banking & Markets team in Salt Lake City this summer (Jun–Aug 2026).",
      suggestions: ["Other experience", "Projects", "Resume"],
      link: { label: "View Experience →", href: "/experience" },
    },
  },
  {
    patterns: [/\btoyota\b/i, /\bmanufacturing\b/i, /\blean\b/i, /\bproduction\b/i],
    response: {
      text: "Gus did two Toyota co-ops: one in Georgetown, KY (Final Assembly Logistics — saved $50K+) and one in San Antonio, TX (Laser Welding — cut shift prep by 160 min and freed 96 sq ft of space).",
      link: { label: "View Experience →", href: "/experience" },
      suggestions: ["Accenture", "Goldman Sachs", "Projects"],
    },
  },
  {
    patterns: [/\baccenture\b/i, /\bami\b/i, /\butility\b/i, /\bmetering\b/i],
    response: {
      text: "At Accenture in Boston (Summer 2025), Gus supported AMI deployment for a major New England utilities provider — improving service for 1.5M+ customers.",
      link: { label: "View Experience →", href: "/experience" },
      suggestions: ["Toyota", "Goldman Sachs", "Projects"],
    },
  },
  {
    patterns: [/\bproject\b/i, /\bbuilt\b/i, /\binternest\b/i, /\bsideraceros\b/i, /\bresearch\b/i, /\bai\b/i, /\bml\b/i],
    response: {
      text: "Gus's notable projects include Sideraceros (logistics optimization for a steel distributor), Medical AI research at Georgia Tech (CNN on 50K+ patient records), and InternNest — a platform helping interns find housing and community.",
      link: { label: "View Projects →", href: "/projects" },
      suggestions: ["InternNest", "Logistics project", "AI research"],
    },
  },
  {
    patterns: [/\binternest\b/i],
    response: {
      text: "InternNest is a platform Gus co-founded that matches interns with neighborhoods, transit tips, and community. It's live at intern-nest-psi.vercel.app.",
      link: { label: "View Projects →", href: "/projects" },
      suggestions: ["Other projects", "Experience"],
    },
  },
  {
    patterns: [/\bskill\b/i, /\btech\b/i, /\blanguage\b/i, /\btool\b/i, /\bcertif\b/i, /\bpython\b/i, /\bsap\b/i],
    response: {
      text: "Gus's skills span programming (Python, SQL, R), engineering tools (AutoCAD, SAP, Arena), analytics, and Lean/TPS concepts. He also holds certifications including OSHA 30 and Salesforce AI.",
      link: { label: "View Skills →", href: "/skills" },
      suggestions: ["Experience", "Projects", "Resume"],
    },
  },
  {
    patterns: [/\beducation\b/i, /\bgeorgia tech\b/i, /\bgt\b/i, /\bdegree\b/i, /\bwhu\b/i, /\bschool\b/i, /\bstud\b/i],
    response: {
      text: "Gus is pursuing a B.S. in Industrial Engineering with a Minor in Computing & Intelligence at Georgia Tech (graduating 2026). He also completed an exchange semester at WHU – Otto Beisheim School of Management in Germany.",
      link: { label: "About Gus →", href: "/about" },
      suggestions: ["Experience", "Journey map", "Skills"],
    },
  },
  {
    patterns: [/\bjourney\b/i, /\bmap\b/i, /\btravel\b/i, /\bwhere.*lived\b/i, /\blocations?\b/i],
    response: {
      text: "Gus has lived and worked across Puerto Rico, Atlanta, Kentucky, Texas, Germany, and Boston. Check out the interactive journey map to explore each stop!",
      link: { label: "View Journey →", href: "/journey" },
      suggestions: ["Experience", "About Gus"],
    },
  },
  {
    patterns: [/\bpuerto rico\b/i, /\bisland\b/i, /\bboricua\b/i, /\bbori\b/i],
    response: {
      text: "Gus is from Puerto Rico and is proud of it! He co-founded BORI (Boricuas Organized For Impact) at Georgia Tech to celebrate Puerto Rican culture and build community on campus.",
      link: { label: "About Gus →", href: "/about" },
      suggestions: ["Journey map", "Campus involvement"],
    },
  },
  {
    patterns: [/\bcampus\b/i, /\bclub\b/i, /\bbrasa\b/i, /\bshpe\b/i, /\borganization\b/i, /\bvolunteer\b/i, /\bmentors?\b/i],
    response: {
      text: "On campus, Gus is President of BORI, Head of Events for BRASA (150+ Brazilian students), and previously chaired SHPE's Academic & Professional Development. He also mentored students through SHPE's Professional Experience Program.",
      link: { label: "View Experience →", href: "/experience" },
      suggestions: ["BORI", "BRASA", "SHPE"],
    },
  },
  {
    patterns: [/\bresume\b/i, /\bcv\b/i, /\bdownload\b/i, /\bpdf\b/i],
    response: {
      text: "You can view or download Gus's resume on the Resume page.",
      link: { label: "View Resume →", href: "/resume" },
      suggestions: ["Experience", "Skills"],
    },
  },
  {
    patterns: [/\bcontact\b/i, /\bemail\b/i, /\breach\b/i, /\bhire\b/i, /\blinkedin\b/i],
    response: {
      text: "You can reach Gus at gustavoandrestorres@gmail.com or connect on LinkedIn at linkedin.com/in/gustavotorreskd.",
      link: { label: "About Gus →", href: "/about" },
      suggestions: ["Resume", "Experience"],
    },
  },
  {
    patterns: [/\babout\b/i, /\bwho is\b/i, /\btell me\b/i, /\bbackground\b/i],
    response: {
      text: "Gus is an Industrial Engineering student at Georgia Tech, passionate about operations, technology, and community building. He's interned at Toyota, Accenture, and is headed to Goldman Sachs — and founded two student organizations.",
      link: { label: "Full Story →", href: "/about" },
      suggestions: ["Experience", "Projects", "Journey map"],
    },
  },
];

const FALLBACK: BotResponse = {
  text: "I'm not sure about that one — try asking about Gus's experience, projects, skills, or how to get in touch!",
  suggestions: ["Experience", "Projects", "Skills", "Contact"],
};

const SUGGESTION_INTENTS: Record<string, string> = {
  "Experience": "tell me about his work experience",
  "Projects": "what projects has he worked on",
  "About Gus": "tell me about gus",
  "Skills": "what are his skills",
  "Resume": "where can I see his resume",
  "Campus involvement": "tell me about campus involvement",
  "Journey map": "show me the journey map",
  "Upcoming role": "tell me about the goldman sachs role",
  "Contact": "how do I contact him",
  "Accenture": "tell me about accenture",
  "Toyota": "tell me about toyota",
  "Goldman Sachs": "tell me about goldman sachs",
  "InternNest": "what is internnest",
  "BORI": "tell me about bori",
  "BRASA": "tell me about brasa",
  "SHPE": "tell me about shpe",
  "AI research": "tell me about the ai research project",
  "Logistics project": "tell me about the sideraceros project",
  "Other projects": "what other projects has he worked on",
  "Other experience": "what other experience does he have",
};

// ── Public API ────────────────────────────────────────────────
// Replace the body of this function with a Claude API call
// when ready. Signature stays the same.

export async function getBotResponse(
  userMessage: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _history: Message[]
): Promise<BotResponse> {
  // Resolve suggestion chips to full text
  const resolved = SUGGESTION_INTENTS[userMessage] ?? userMessage;

  for (const intent of intents) {
    if (intent.patterns.some((p) => p.test(resolved))) {
      return intent.response;
    }
  }
  return FALLBACK;
}

export function makeSuggestionMessage(suggestion: string): string {
  return suggestion;
}

export function newId(): string {
  return Math.random().toString(36).slice(2);
}
