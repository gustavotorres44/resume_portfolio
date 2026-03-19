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

// Maps quick-reply chip labels to fuller natural-language strings
// so the AI gets proper context instead of a bare one-word chip.
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

const FALLBACK: BotResponse = {
  text: "I'm not sure about that one — try asking about Gus's experience, projects, skills, or how to get in touch!",
  suggestions: ["Experience", "Projects", "Skills", "Contact"],
};

export async function getBotResponse(
  userMessage: string,
  history: Message[]
): Promise<BotResponse> {
  const resolved = SUGGESTION_INTENTS[userMessage] ?? userMessage;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: resolved, history }),
    });
    const data = await res.json();
    if (data.text) return { text: data.text };
  } catch {
    // fall through to fallback
  }

  return FALLBACK;
}

export function newId(): string {
  return Math.random().toString(36).slice(2);
}
