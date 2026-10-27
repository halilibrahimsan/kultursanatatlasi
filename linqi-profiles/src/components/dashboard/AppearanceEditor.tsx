import { useState } from "react";
import { Check } from "lucide-react";
import { updateProfile } from "@/lib/api";
import { THEMES } from "@/lib/themes";
import type { ButtonStyle, Profile } from "@/lib/types";
import { Card } from "@/components/ui";
import { cn } from "@/lib/cn";

const BUTTON_STYLES: { id: ButtonStyle; label: string; radius: string }[] = [
  { id: "rounded", label: "Rounded", radius: "10px" },
  { id: "pill", label: "Pill", radius: "999px" },
  { id: "square", label: "Square", radius: "3px" },
];

export function AppearanceEditor({ profile, onSaved }: { profile: Profile; onSaved: (p: Profile) => void }) {
  const [error, setError] = useState<string | null>(null);

  async function save(patch: Partial<Pick<Profile, "theme" | "button_style">>) {
    setError(null);
    const before = profile;
    onSaved({ ...profile, ...patch });
    try {
      onSaved(await updateProfile(profile.id, patch));
    } catch (err) {
      onSaved(before);
      setError((err as Error).message);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Card>
        <h2 className="text-lg font-semibold text-navy">Theme</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {THEMES.map((theme) => {
            const active = theme.id === profile.theme;
            return (
              <button
                key={theme.id}
                type="button"
                aria-pressed={active}
                onClick={() => save({ theme: theme.id })}
                className={cn("overflow-hidden rounded-2xl border-2 text-left transition", active ? "border-brand" : "border-transparent hover:border-gray-300")}
              >
                <div style={{ background: theme.background }} className="flex h-28 flex-col items-center justify-center gap-2 px-4">
                  <span className="h-6 w-6 rounded-full" style={{ background: theme.accent }} />
                  <span className="h-3 w-full rounded" style={{ background: theme.buttonBg, border: `1px solid ${theme.buttonBorder}` }} />
                  <span className="h-3 w-full rounded" style={{ background: theme.buttonBg, border: `1px solid ${theme.buttonBorder}` }} />
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-2 text-sm font-medium text-navy">
                  {theme.name}
                  {active && <Check size={16} className="text-brand" />}
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-navy">Buttons</h2>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {BUTTON_STYLES.map((style) => {
            const active = style.id === profile.button_style;
            return (
              <button
                key={style.id}
                type="button"
                aria-pressed={active}
                onClick={() => save({ button_style: style.id })}
                className={cn("flex flex-col items-center gap-3 rounded-2xl border-2 p-4 text-sm font-medium text-navy transition", active ? "border-brand" : "border-gray-200 hover:border-gray-300")}
              >
                <span className="h-8 w-full bg-navy" style={{ borderRadius: style.radius }} />
                {style.label}
              </button>
            );
          })}
        </div>
      </Card>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
