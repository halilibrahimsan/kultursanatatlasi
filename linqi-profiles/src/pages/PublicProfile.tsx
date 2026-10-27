import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileView } from "@/components/ProfileView";
import { getPublicProfile, recordClick, recordView } from "@/lib/api";
import type { Link, Profile } from "@/lib/types";
import NotFound from "./NotFound";

type State = { status: "loading" } | { status: "missing" } | { status: "error"; message: string } | { status: "ready"; profile: Profile; links: Link[] };

export default function PublicProfile() {
  const { handle = "" } = useParams();
  const username = handle.replace(/^@/, "").toLowerCase();
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });
    getPublicProfile(username)
      .then((result) => {
        if (cancelled) return;
        if (!result) return setState({ status: "missing" });
        setState({ status: "ready", ...result });
        recordView(username);
      })
      .catch((err: Error) => !cancelled && setState({ status: "error", message: err.message }));
    return () => {
      cancelled = true;
    };
  }, [username]);

  useEffect(() => {
    if (state.status === "ready") {
      const p = state.profile;
      document.title = `${p.display_name || "@" + p.username} | Linqi`;
    }
  }, [state]);

  if (state.status === "loading") {
    return <div className="flex min-h-screen items-center justify-center bg-navy text-sm text-gray-400">Loading…</div>;
  }
  if (state.status === "missing") return <NotFound message={`There's no Linqi page at @${username} yet.`} />;
  if (state.status === "error") return <NotFound message="This page couldn't be loaded. Try again in a moment." />;

  return <ProfileView profile={state.profile} links={state.links} onLinkClick={(link) => recordClick(link.id)} />;
}
