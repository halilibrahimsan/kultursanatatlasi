import type { Link, Profile } from "@/lib/types";
import { Card } from "@/components/ui";

export function StatsPanel({ profile, links }: { profile: Profile; links: Link[] }) {
  const totalClicks = links.reduce((sum, l) => sum + l.clicks, 0);
  const rate = profile.views ? Math.round((totalClicks / profile.views) * 100) : 0;
  const sorted = [...links].sort((a, b) => b.clicks - a.clicks);
  const max = Math.max(1, ...links.map((l) => l.clicks));

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-3">
        {[
          ["Page views", profile.views.toLocaleString("en")],
          ["Link clicks", totalClicks.toLocaleString("en")],
          ["Click rate", `${rate}%`],
        ].map(([label, value]) => (
          <Card key={label} className="p-4 sm:p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{label}</p>
            <p className="mt-2 text-2xl font-bold tabular-nums text-navy sm:text-3xl">{value}</p>
          </Card>
        ))}
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-navy">Clicks by link</h2>
        {sorted.length === 0 ? (
          <p className="mt-4 text-sm text-gray-500">Add links to see which ones people tap.</p>
        ) : (
          <ul className="mt-5 flex flex-col gap-4">
            {sorted.map((link) => (
              <li key={link.id}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="truncate font-medium text-navy">{link.title}</span>
                  <span className="shrink-0 tabular-nums text-gray-600">{link.clicks}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${(link.clicks / max) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-5 text-xs text-gray-500">Views count every time someone opens your page. Totals are since your page was created.</p>
      </Card>
    </div>
  );
}
