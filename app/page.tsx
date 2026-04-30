import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-100 via-sky-50 to-white"
        />
        <div
          aria-hidden
          className="absolute -top-24 -right-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-amber-300/50 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -top-16 -left-16 -z-10 h-[28rem] w-[28rem] rounded-full bg-indigo-300/50 blur-3xl"
        />

        <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-600" />
            </span>
            Now accepting new trip plans
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.02] text-slate-900">
            Fund your dream trip with credit card points.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Tell us where you want to go. We&apos;ll build a personalized 6–12
            month plan to earn the points you need — using strategic credit
            card applications and everyday spending.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/intake"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-7 py-3.5 text-base font-medium shadow-sm hover:bg-slate-700 transition"
            >
              Start your trip plan
              <span aria-hidden className="ml-2">
                →
              </span>
            </Link>
            <Link
              href="/example-plan"
              className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-7 py-3.5 text-base font-medium text-slate-900 hover:bg-slate-50 transition"
            >
              See an example plan
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            One-time fee · No subscriptions · Cancel anytime before your plan
            ships
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
              How it works
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Three steps from dream to boarding pass.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              No churning forums. No spreadsheets. No guesswork. Just a clear
              plan that fits your life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            <Step
              n="01"
              title="Tell us your dream trip"
              body="A short intake form: where you want to go, when, who's coming, and how flexible you are. Takes about 5 minutes."
            />
            <Step
              n="02"
              title="We build your points plan"
              body="A personalized 6–12 month roadmap of credit card applications and spending categories — sized to your goal and your credit profile."
            />
            <Step
              n="03"
              title="Earn, then book"
              body="Follow the plan, hit your sign-up bonuses, and redeem the points for flights and hotels when you're ready to fly."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition">
      <div className="font-mono text-sm text-indigo-600">{n}</div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-2.5 text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}
