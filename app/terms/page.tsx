import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Project Vela",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-20 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
        Terms of Service
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: May 2, 2026</p>

      <div className="mt-10 space-y-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            1. Welcome to Vela
          </h2>
          <p className="mt-2">
            Project Vela (&ldquo;Vela,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) is a
            custom planning service for credit-card miles and points. By
            submitting the intake form or using any service we provide, you
            agree to these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            2. What we do
          </h2>
          <p className="mt-2">
            You give us your dream-trip details and information about the
            points you have or your willingness to earn new ones. We build a
            custom strategy that tells you (a) the best way to use the points
            you have, and/or (b) the credit cards and spending plan that will
            help you earn the points you need.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            3. Not financial advice
          </h2>
          <p className="mt-2">
            <strong>
              Vela does not provide financial, legal, tax, or credit advice.
            </strong>{" "}
            Our recommendations are based on publicly available information
            about credit-card programs, transfer partners, and award charts.
            They are educational suggestions, not personalized financial
            counsel. You are solely responsible for your own financial
            decisions, including whether to apply for any credit card we
            recommend.
          </p>
          <p className="mt-3">
            Credit card approvals are at the discretion of the issuer, and we
            cannot guarantee approval. Loyalty programs change without notice,
            point valuations fluctuate, and award availability is not
            guaranteed. Past performance of a redemption does not guarantee
            future availability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            4. Your responsibilities
          </h2>
          <ul className="mt-2 space-y-1.5 list-disc list-inside">
            <li>Provide accurate information in the intake form.</li>
            <li>
              Make your own credit and financial decisions, including reading
              card terms before applying.
            </li>
            <li>
              Respect the privacy of any third parties (partners, family,
              friends) you mention in your intake.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            5. Fees and refunds
          </h2>
          <p className="mt-2">
            Pricing and refund details will be added when payment processing is
            enabled. Until then, the intake form is free to submit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            6. Limitation of liability
          </h2>
          <p className="mt-2">
            To the maximum extent permitted by law, Vela is not liable for any
            indirect, incidental, or consequential losses related to your use
            of credit cards we recommend, points lost due to program changes,
            or trips not taken. Our maximum aggregate liability is limited to
            the amount you have paid us in the twelve months preceding the
            claim.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Changes</h2>
          <p className="mt-2">
            We may update these Terms. Material changes will be communicated by
            email if we have your address on file.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">8. Contact</h2>
          <p className="mt-2">
            Questions about these Terms? Email{" "}
            <a
              href="mailto:team@projectvela.com"
              className="text-indigo-600 hover:underline"
            >
              team@projectvela.com
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-12">
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
