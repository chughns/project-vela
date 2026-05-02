import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Project Vela",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-20 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
        Privacy
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: May 2, 2026</p>

      <div className="mt-10 space-y-8 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            1. What we collect
          </h2>
          <ul className="mt-2 space-y-1.5 list-disc list-inside">
            <li>
              <strong>Trip details:</strong> destination, timing, group size,
              style, and any notes you share.
            </li>
            <li>
              <strong>Points information:</strong> programs you have, rough
              balances if you provide them, your existing card situation if
              relevant.
            </li>
            <li>
              <strong>Optional sensitive information:</strong> household income
              band, recent card application count, credit-score band — only if
              you choose to provide them. You can skip any or all.
            </li>
            <li>
              <strong>Contact information:</strong> your name and email
              address, so we can deliver your plan.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            2. How we use it
          </h2>
          <ul className="mt-2 space-y-1.5 list-disc list-inside">
            <li>To build your custom plan.</li>
            <li>To communicate with you about your plan and follow up.</li>
            <li>
              To improve Vela in aggregate (looking at patterns across
              submissions, never tied back to individuals publicly).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            3. How we share it
          </h2>
          <p className="mt-2">
            We do not sell your data. Ever. We share it only with service
            providers that help us run Vela:
          </p>
          <ul className="mt-2 space-y-1.5 list-disc list-inside">
            <li>
              <strong>Supabase</strong> — our database provider, where
              submissions are stored.
            </li>
            <li>
              <strong>Vercel</strong> — our hosting provider for the website.
            </li>
            <li>
              <strong>Stripe</strong> (when payments are enabled) — for
              processing payment information. We never see or store your full
              card details.
            </li>
            <li>
              <strong>Resend</strong> (when email is enabled) — for sending
              transactional email like your plan delivery.
            </li>
          </ul>
          <p className="mt-3">
            Each of these vendors has their own privacy policies, and we use
            them only for their stated purpose.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            4. Sensitive financial information
          </h2>
          <p className="mt-2">
            The optional questions about household income, recent card
            applications, and credit-score band are private. We use them only
            to tailor your plan to credit cards you&apos;re likely to be
            approved for. Skipping any of them is fine — we&apos;ll work with
            what we have.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            5. Data retention
          </h2>
          <p className="mt-2">
            We retain intake submissions and plan history for as long as
            you&apos;re a customer, plus a reasonable period afterward for
            support and recordkeeping. You can request deletion at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">
            6. Your rights
          </h2>
          <ul className="mt-2 space-y-1.5 list-disc list-inside">
            <li>
              <strong>Access:</strong> request a copy of the data we have about
              you.
            </li>
            <li>
              <strong>Correction:</strong> ask us to fix anything that&apos;s
              wrong.
            </li>
            <li>
              <strong>Deletion:</strong> ask us to delete your data.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these, email{" "}
            <a
              href="mailto:team@projectvela.com"
              className="text-indigo-600 hover:underline"
            >
              team@projectvela.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">7. Security</h2>
          <p className="mt-2">
            All connections use HTTPS. Our database is encrypted at rest. We
            collect only what we need, and we lock down access with
            row-level-security rules so submissions can&apos;t be read by other
            users of the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">8. Changes</h2>
          <p className="mt-2">
            We may update this Privacy Policy. Material changes will be
            communicated by email if we have your address on file.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">9. Contact</h2>
          <p className="mt-2">
            Questions about your privacy? Email{" "}
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
