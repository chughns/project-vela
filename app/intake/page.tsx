import Link from "next/link";

export const metadata = {
  title: "Intake — Project Vela",
};

export default function IntakePage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-24 sm:py-32">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
        Intake
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
        Tell us about your dream trip
      </h1>
      <p className="mt-5 text-lg text-slate-600 leading-relaxed">
        The intake form will live here — destination, dates, travelers, and
        flexibility — so we can size your points plan correctly.
      </p>

      <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
        <p className="text-slate-500">
          🛠 Form coming soon. Wiring this up in a future weekend.
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
