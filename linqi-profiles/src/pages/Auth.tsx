import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "@/integrations/supabase/client";
import { Logo } from "@/components/Logo";
import { Button, Field, Input } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";

export default function Auth({ mode }: { mode: "login" | "signup" }) {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const username = params.get("username") ?? "";
  const next = username ? `/dashboard?username=${encodeURIComponent(username)}` : "/dashboard";

  useEffect(() => {
    if (user) navigate(next, { replace: true });
  }, [user, next, navigate]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!isSupabaseConfigured) return setError("Supabase isn't connected yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
    if (password.length < 8) return setError("Passwords need at least 8 characters.");
    setBusy(true);
    try {
      if (mode === "signup") {
        const { data, error: err } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}${next}` },
        });
        if (err) throw err;
        // With email confirmation on, there's no session until the link is clicked.
        if (!data.session) setSent(true);
      } else {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(message === "Invalid login credentials" ? "That email and password don't match." : message);
    } finally {
      setBusy(false);
    }
  }

  const other = mode === "login" ? "/signup" : "/login";
  const otherQuery = username ? `?username=${encodeURIComponent(username)}` : "";

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#fafafa] px-4 py-10">
      <Logo className="mb-8 text-2xl" />
      <div className="w-full max-w-sm rounded-card bg-navy p-7 text-white shadow-[0_20px_50px_-20px_rgba(17,24,39,0.45)]">
        {sent ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold">Check your inbox</h1>
            <p className="mt-3 text-gray-300">
              We sent a confirmation link to <strong className="text-white">{email}</strong>. Open it to finish creating your page.
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold">{mode === "login" ? "Welcome back" : "Create your Linqi"}</h1>
            {username && mode === "signup" && (
              <p className="mt-2 text-sm text-gray-300">
                You're claiming <span className="font-semibold text-brand-light">@{username}</span>
              </p>
            )}
            <form onSubmit={submit} className="mt-6 flex flex-col gap-4 [&_label]:text-gray-300">
              <Field label="Email" htmlFor="email">
                <Input id="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </Field>
              <Field label="Password" htmlFor="password" hint={mode === "signup" ? <span className="text-gray-400">At least 8 characters.</span> : undefined}>
                <Input
                  id="password"
                  type="password"
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <Button type="submit" disabled={busy} className="mt-2 py-3">
                {busy ? "Please wait…" : mode === "login" ? "Log in" : "Create account"}
              </Button>
            </form>
          </>
        )}
      </div>
      <p className="mt-6 text-sm text-gray-600">
        {mode === "login" ? "New to Linqi? " : "Already have an account? "}
        <Link to={`${other}${otherQuery}`} className="font-semibold text-brand hover:underline">
          {mode === "login" ? "Create an account" : "Log in"}
        </Link>
      </p>
    </div>
  );
}
