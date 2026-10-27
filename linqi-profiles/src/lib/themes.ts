export interface Theme {
  id: string;
  name: string;
  background: string;
  text: string;
  muted: string;
  buttonBg: string;
  buttonText: string;
  buttonBorder: string;
  accent: string;
}

// Inline-style themes: Tailwind can't see class names built at runtime.
export const THEMES: Theme[] = [
  { id: "midnight", name: "Midnight", background: "#111827", text: "#ffffff", muted: "#9ca3af", buttonBg: "#1f2937", buttonText: "#ffffff", buttonBorder: "#374151", accent: "#60a5fa" },
  { id: "daylight", name: "Daylight", background: "#fafafa", text: "#111827", muted: "#6b7280", buttonBg: "#ffffff", buttonText: "#111827", buttonBorder: "#e5e7eb", accent: "#3b82f6" },
  { id: "ocean", name: "Ocean", background: "linear-gradient(160deg, #1e3a8a 0%, #2563eb 55%, #60a5fa 100%)", text: "#ffffff", muted: "#dbeafe", buttonBg: "rgba(255,255,255,0.14)", buttonText: "#ffffff", buttonBorder: "rgba(255,255,255,0.28)", accent: "#ffffff" },
  { id: "stage", name: "Stage", background: "#1c1917", text: "#fafaf9", muted: "#a8a29e", buttonBg: "#f59e0b", buttonText: "#1c1917", buttonBorder: "#f59e0b", accent: "#fbbf24" },
  { id: "spring", name: "Spring", background: "#ecfdf5", text: "#064e3b", muted: "#047857", buttonBg: "#10b981", buttonText: "#ffffff", buttonBorder: "#10b981", accent: "#059669" },
  { id: "rose", name: "Rose", background: "#fff1f2", text: "#881337", muted: "#be123c", buttonBg: "#ffffff", buttonText: "#881337", buttonBorder: "#fecdd3", accent: "#e11d48" },
];

export const getTheme = (id: string | null | undefined): Theme => THEMES.find((t) => t.id === id) ?? THEMES[0];
