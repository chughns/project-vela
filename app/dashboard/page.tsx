import Link from "next/link";

export const metadata = {
  title: "Dashboard — Project Vela",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-24 sm:py-32">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
        Dashboard
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
        Your trip plan, at a glance
      </h1>
      <p className="mt-5 text-lg text-slate-600 leading-relaxed">
        Once you have a plan, this is where you&apos;ll track progress: which
        cards you&apos;ve applied for, points earned so far, and what&apos;s
        next on your roadmap.
      </p>

      <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
        <p className="text-slate-500">
          🛠 Dashboard coming soon. Real data needs a database first.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="text-sm text-slate-600 hover:text-slate-900 transition"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
