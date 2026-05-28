import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { Scale } from "lucide-react";
import { signInAction } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { getAdminUser } from "@/lib/admin/auth";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const [params, user] = await Promise.all([searchParams, getAdminUser()]);

  if (user) {
    redirect("/admin/dashboard");
  }

  return (
    <main className="min-h-screen bg-[var(--canvas)] px-4 py-12 text-[var(--ink)]">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-md items-center">
        <section className="w-full rounded-2xl border border-[var(--hairline)] bg-[var(--surface-card)] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-strong)]">
              <Scale size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="label-eyebrow">Admin</p>
              <h1 className="font-serif text-3xl">Sign in</h1>
            </div>
          </div>

          {params.error && (
            <div className="mb-5 rounded-lg border border-[var(--semantic-error)]/30 bg-[var(--semantic-error)]/10 p-3 text-sm font-medium text-[var(--semantic-error)]">
              {params.error === "config"
                ? "Supabase auth is not configured yet."
                : "Invalid email or password."}
            </div>
          )}

          <form action={signInAction} className="space-y-5">
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="h-11 w-full rounded-lg border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-4 text-base text-[var(--ink)] outline-none focus:border-[var(--ink)]"
                placeholder="admin@example.com"
              />
            </Field>
            <Field label="Password" htmlFor="password">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="h-11 w-full rounded-lg border border-[var(--hairline-strong)] bg-[var(--surface-card)] px-4 text-base text-[var(--ink)] outline-none focus:border-[var(--ink)]"
                placeholder="••••••••"
              />
            </Field>
            <Button type="submit" className="ink-button h-11 w-full text-[15px] font-medium">
              Sign in
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}

function Field({
  children,
  htmlFor,
  label,
}: {
  children: ReactNode;
  htmlFor: string;
  label: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="label-eyebrow block">
        {label}
      </label>
      {children}
    </div>
  );
}
