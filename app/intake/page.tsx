import IntakeForm from "./IntakeForm";

export const metadata = {
  title: "Intake — Project Vela",
};

export default function IntakePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
          Intake
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
          Tell us about your dream trip
        </h1>
        <p className="mt-5 text-lg text-slate-600 leading-relaxed">
          A few minutes here, a personalized 6–12 month points plan back. Skip
          anything that doesn&apos;t apply — we&apos;ll work with what we have.
        </p>
      </div>

      <IntakeForm />
    </div>
  );
}
