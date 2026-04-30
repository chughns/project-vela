import Link from "next/link";

export const metadata = {
  title: "Example plan — Project Vela",
};

export default function ExamplePlanPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:py-32">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
        Example plan
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
        Two weeks in Japan, funded with points
      </h1>
      <p className="mt-5 text-lg text-slate-600 leading-relaxed">
        Here&apos;s what a Vela plan looks like. This is a sample — the real
        thing will be tailored to your goal and your credit profile.
      </p>

      <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
        <p className="text-slate-500">
          🛠 Real example coming soon. Real plan content will live here.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/intake"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800 transition"
        >
          Start my own plan →
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-6 py-3 font-medium text-slate-900 hover:bg-slate-50 transition"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
