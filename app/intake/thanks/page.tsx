import Link from "next/link";

export const metadata = {
  title: "Thanks — Project Vela",
};

export default function ThanksPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-24 sm:py-32 text-center">
      <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-indigo-100 text-indigo-600 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
          aria-hidden
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
        Thanks — we&apos;ve got your trip.
      </h1>
      <p className="mt-5 text-lg text-slate-600 leading-relaxed">
        We&apos;re crafting your custom points strategy now. You&apos;ll get an
        email within <span className="font-medium text-slate-900">3 business days</span>{" "}
        with your full plan — destinations to consider, the redemptions to
        target, and (if needed) a card-and-spending roadmap to earn what you
        need.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        Have something to add? Just reply to that email — it goes straight to
        the team.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/example-plan"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-700 transition"
        >
          See an example plan
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-6 py-3 font-medium text-slate-900 hover:bg-slate-50 transition"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
