"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Destination = {
  id: string;
  name: string;
  region: string;
  image: string;
};

const SERVICE_TYPES = [
  {
    value: "earn_new",
    label: "Earn points for a trip",
    body: "I want a 6–12 month plan to earn the points I'll need — strategic credit card sign-up bonuses + everyday spending.",
  },
  {
    value: "use_existing",
    label: "Use points I already have",
    body: "I have miles and points already. Help me find the best trip to use them on and book it well.",
  },
  {
    value: "both",
    label: "A bit of both",
    body: "I have a base of points but want to earn more on top before I book.",
  },
];

const DESTINATIONS: Destination[] = [
  {
    id: "tokyo",
    name: "Tokyo",
    region: "Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "paris",
    name: "Paris",
    region: "France",
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bali",
    name: "Bali",
    region: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "maldives",
    name: "The Maldives",
    region: "Indian Ocean",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "iceland",
    name: "Iceland",
    region: "North Atlantic",
    image:
      "https://images.unsplash.com/photo-1612686635542-2244ed9f8ddc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kenya",
    name: "Safari",
    region: "Kenya",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "patagonia",
    name: "Patagonia",
    region: "Argentina · Chile",
    image:
      "https://images.unsplash.com/photo-1531168556467-80aace0d0144?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "amalfi",
    name: "Amalfi Coast",
    region: "Italy",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=80",
  },
];

const TIMEFRAMES = [
  { value: "flexible", label: "I'm flexible" },
  { value: "0-6", label: "Next 6 months" },
  { value: "6-12", label: "6–12 months out" },
  { value: "12-18", label: "12–18 months out" },
  { value: "18+", label: "More than 18 months out" },
];

const TRAVEL_PARTY_PICKS = [
  { label: "Just me", template: "Just me, traveling solo." },
  { label: "Me + partner", template: "Me + my partner. We're funding both of us." },
  {
    label: "With kids",
    template:
      "Me + my partner and our kids. Funding the whole family.",
  },
  {
    label: "Friends trip",
    template:
      "Me + a group of friends, around the same age. Everyone's paying their own way — I'm looking for booking advice for my portion.",
  },
  {
    label: "Multi-gen family",
    template:
      "Multi-generational trip — me, my partner, our kids, and grandparents.",
  },
];

const CARD_APPLICANTS = [
  {
    value: "solo",
    label: "Just me",
    body: "Single-player strategy — I'll apply for all the cards on my own.",
  },
  {
    value: "duo",
    label: "Me + a partner",
    body: "Two-player strategy — both of us apply for cards, doubling sign-up bonuses.",
  },
  {
    value: "complicated",
    label: "It's complicated",
    body: "Tell us how — multiple applicants, business cards, AU strategy, etc.",
  },
];

const STYLES = [
  { value: "luxury", label: "Luxury", body: "Five-star, business class, top-tier hotels" },
  { value: "midrange", label: "Mid-range", body: "Premium economy, nice four-star, the occasional splurge" },
  { value: "budget", label: "Budget-conscious", body: "Economy class, smart hotels, stretch every point" },
];

const INCOME_BANDS = [
  { value: "<50", label: "Under $50,000" },
  { value: "50-100", label: "$50,000 – $100,000" },
  { value: "100-200", label: "$100,000 – $200,000" },
  { value: "200-500", label: "$200,000 – $500,000" },
  { value: "500+", label: "$500,000+" },
  { value: "skip", label: "Prefer not to say" },
];

const RECENT_CARDS = [
  { value: "0", label: "None" },
  { value: "1-2", label: "1–2" },
  { value: "3-4", label: "3–4" },
  { value: "5+", label: "5 or more" },
  { value: "skip", label: "Prefer not to say" },
];

const CREDIT_SCORE = [
  { value: "<650", label: "Under 650" },
  { value: "650-720", label: "650–720" },
  { value: "720-780", label: "720–780" },
  { value: "780+", label: "780+" },
  { value: "unknown", label: "I don't know" },
  { value: "skip", label: "Prefer not to say" },
];

export default function IntakeForm() {
  const [service, setService] = useState<string>("");
  const [existingPoints, setExistingPoints] = useState("");
  const [destination, setDestination] = useState<string>("");
  const [destinationOther, setDestinationOther] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [days, setDays] = useState("");
  const [travelParty, setTravelParty] = useState("");
  const [cardApplicants, setCardApplicants] = useState("");
  const [cardApplicantsOther, setCardApplicantsOther] = useState("");
  const [style, setStyle] = useState("");
  const [notes, setNotes] = useState("");
  const [income, setIncome] = useState("");
  const [recentCards, setRecentCards] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const row = {
      service: service || null,
      existing_points:
        service !== "earn_new" ? existingPoints || null : null,
      destination: destination || null,
      destination_other:
        destination === "else" ? destinationOther || null : null,
      timeframe: timeframe || null,
      days: Number(days) || null,
      travel_party: travelParty || null,
      card_applicants: cardApplicants || null,
      card_applicants_other:
        cardApplicants === "complicated" ? cardApplicantsOther || null : null,
      style: style || null,
      notes: notes || null,
      income: income || null,
      recent_cards: recentCards || null,
      credit_score: creditScore || null,
      name,
      email,
    };

    const { error: dbError } = await supabase
      .from("intake_submissions")
      .insert(row);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      setError(
        "Something went wrong saving your submission. Please try again — or email us directly if it keeps failing.",
      );
      setSubmitting(false);
      return;
    }

    router.push("/intake/thanks");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-14 space-y-16">
      <Section
        eyebrow="Get started"
        title="What can we help with?"
        description="This shapes the plan we build for you. The rest of the questions adapt to your answer."
      >
        <div className="grid sm:grid-cols-3 gap-3">
          {SERVICE_TYPES.map((s) => {
            const selected = service === s.value;
            return (
              <button
                type="button"
                key={s.value}
                onClick={() => setService(s.value)}
                className={`text-left rounded-2xl border-2 p-5 transition ${
                  selected
                    ? "border-indigo-600 bg-indigo-50/50 ring-4 ring-indigo-100"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="font-semibold text-slate-900">{s.label}</div>
                <div className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  {s.body}
                </div>
              </button>
            );
          })}
        </div>

        {(service === "use_existing" || service === "both") && (
          <Field
            label="Tell us about the points you already have"
            hint="Rough numbers are fine. List any program you've got — Chase UR, Amex MR, airline miles, hotel points, etc. The mix matters more than you'd think."
          >
            <textarea
              value={existingPoints}
              onChange={(e) => setExistingPoints(e.target.value)}
              rows={4}
              placeholder="e.g., Chase Ultimate Rewards: 200k · Amex MR: 150k · Delta SkyMiles: 80k · Hilton Honors: 250k..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            />
          </Field>
        )}
      </Section>

      <Section
        eyebrow="Your trip"
        title="Where, when, and how"
        description="The starting point. We'll size the trip from these answers."
      >
        {/* Destination */}
        <Field
          label="Where do you want to go?"
          hint="Pick one — or choose 'Somewhere else' to write your own."
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {DESTINATIONS.map((d) => {
              const selected = destination === d.id;
              return (
                <button
                  type="button"
                  key={d.id}
                  onClick={() => setDestination(d.id)}
                  className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 transition-all ${
                    selected
                      ? "border-indigo-600 ring-4 ring-indigo-100 shadow-md"
                      : "border-transparent hover:border-slate-300"
                  }`}
                >
                  <Image
                    src={d.image}
                    alt={`${d.name}, ${d.region}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-left text-white">
                    <div className="font-semibold leading-tight">{d.name}</div>
                    <div className="text-xs text-white/80">{d.region}</div>
                  </div>
                  {selected && (
                    <div className="absolute top-3 right-3 h-7 w-7 rounded-full bg-indigo-600 text-white text-sm flex items-center justify-center shadow">
                      ✓
                    </div>
                  )}
                </button>
              );
            })}
            {/* "Somewhere else" tile */}
            <button
              type="button"
              onClick={() => setDestination("else")}
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center text-center px-4 ${
                destination === "else"
                  ? "border-indigo-600 bg-indigo-50 ring-4 ring-indigo-100"
                  : "border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100"
              }`}
            >
              <div className="text-2xl">✏️</div>
              <div className="mt-2 font-medium text-slate-900">Somewhere else</div>
              <div className="text-xs text-slate-500 mt-1">Tell us where</div>
            </button>
          </div>

          {destination === "else" && (
            <div className="mt-4">
              <input
                type="text"
                value={destinationOther}
                onChange={(e) => setDestinationOther(e.target.value)}
                placeholder="e.g., Vietnam, Croatia, New Zealand..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
        </Field>

        {/* When */}
        <Field label="When?" hint="Rough timing helps us plan card application windows.">
          <RadioCards
            name="timeframe"
            options={TIMEFRAMES}
            value={timeframe}
            onChange={setTimeframe}
          />
        </Field>

        {/* How long */}
        <Field label="How long is the trip?">
          <div className="flex items-center gap-3">
            <input
              type="number"
              min={1}
              max={365}
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="14"
              className="w-28 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="text-slate-600">days</span>
          </div>
        </Field>

        {/* Travel party */}
        <Field
          label="Who's coming?"
          hint="Pick a quick start, then add ages, names, who you're funding, anything that makes the plan personal."
        >
          <div className="mb-3 flex flex-wrap gap-2">
            {TRAVEL_PARTY_PICKS.map((pick) => {
              const selected = travelParty === pick.template;
              return (
                <button
                  type="button"
                  key={pick.label}
                  onClick={() => setTravelParty(pick.template)}
                  className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                    selected
                      ? "border-indigo-600 bg-indigo-50 text-indigo-900"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {pick.label}
                </button>
              );
            })}
          </div>
          <textarea
            value={travelParty}
            onChange={(e) => setTravelParty(e.target.value)}
            rows={4}
            placeholder="Pick one above to start — or describe your group in your own words."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
          />
        </Field>

        {/* Who's applying for the cards */}
        <Field
          label="Who's applying for the cards in this plan?"
          hint="This is the most important question for sizing your strategy. A two-player approach roughly doubles the points you can earn in the same window."
        >
          <div className="grid sm:grid-cols-3 gap-3">
            {CARD_APPLICANTS.map((c) => {
              const selected = cardApplicants === c.value;
              return (
                <button
                  type="button"
                  key={c.value}
                  onClick={() => setCardApplicants(c.value)}
                  className={`text-left rounded-2xl border-2 p-5 transition ${
                    selected
                      ? "border-indigo-600 bg-indigo-50/50 ring-4 ring-indigo-100"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="font-semibold text-slate-900">{c.label}</div>
                  <div className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {c.body}
                  </div>
                </button>
              );
            })}
          </div>
          {cardApplicants === "complicated" && (
            <div className="mt-4">
              <textarea
                value={cardApplicantsOther}
                onChange={(e) => setCardApplicantsOther(e.target.value)}
                rows={3}
                placeholder="Tell us how — e.g., a parent is also applying, I want to mix in business cards, I'm using authorized user spots, etc."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
              />
            </div>
          )}
        </Field>

        {/* Style */}
        <Field
          label="What style of trip?"
          hint="This sets your points target — luxury costs more points but earns you a different experience."
        >
          <div className="grid sm:grid-cols-3 gap-3">
            {STYLES.map((s) => {
              const selected = style === s.value;
              return (
                <button
                  type="button"
                  key={s.value}
                  onClick={() => setStyle(s.value)}
                  className={`text-left rounded-2xl border-2 p-5 transition ${
                    selected
                      ? "border-indigo-600 bg-indigo-50/50 ring-4 ring-indigo-100"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="font-semibold text-slate-900">{s.label}</div>
                  <div className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {s.body}
                  </div>
                </button>
              );
            })}
          </div>
        </Field>

        {/* Notes */}
        <Field
          label="Anything else we should know?"
          hint="Optional. Special occasion, must-do experiences, accessibility needs, dietary preferences, anything that makes this trip yours."
        >
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="e.g., Anniversary trip, milestone birthday, must include a unique hotel, accessibility requirements, dietary restrictions..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
          />
        </Field>
      </Section>

      {/* Optional / invasive section — only relevant for card-earning paths */}
      {service !== "use_existing" && (
        <Section
        eyebrow="Tune your plan"
        title="A few questions that sharpen the plan"
        description="These are personal — and they're entirely optional. Skip anything you'd rather not share. The more we know, the better we can tailor your card recommendations to actually get approved."
      >
        <Field
          label="Approximate household income"
          hint="Income affects credit card approval limits and which premium cards are realistic. We never share this with anyone."
          optional
        >
          <RadioCards
            name="income"
            options={INCOME_BANDS}
            value={income}
            onChange={setIncome}
            columns={2}
          />
        </Field>

        <Field
          label="Credit cards opened in the last 24 months"
          hint="Some issuers (notably Chase) limit new approvals if you've opened 5+ cards in 24 months. This shapes which cards we'd recommend first."
          optional
        >
          <RadioCards
            name="recentCards"
            options={RECENT_CARDS}
            value={recentCards}
            onChange={setRecentCards}
            columns={3}
          />
        </Field>

        <Field
          label="Approximate credit score"
          hint="Premium travel cards typically need 720+. Knowing roughly where you are tells us which strategies will work."
          optional
        >
          <RadioCards
            name="creditScore"
            options={CREDIT_SCORE}
            value={creditScore}
            onChange={setCreditScore}
            columns={2}
          />
        </Field>
        </Section>
      )}

      {/* Contact */}
      <Section
        eyebrow="How to reach you"
        title="So we can deliver your plan"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Your name">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </Field>
        </div>
      </Section>

      {/* Submit */}
      <div className="border-t border-slate-200 pt-8">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-8 py-4 text-base font-medium shadow-sm hover:bg-slate-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Submit my trip plan request"}
          {!submitting && (
            <span aria-hidden className="ml-2">
              →
            </span>
          )}
        </button>
        {error && (
          <p className="mt-4 text-sm text-red-600 leading-relaxed">{error}</p>
        )}
        <p className="mt-3 text-sm text-slate-500">
          You&apos;ll get an email within 3 business days with your custom
          plan.
        </p>
      </div>
    </form>
  );
}

/* ---------- Reusable subcomponents ---------- */

function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-indigo-600">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function Field({
  label,
  hint,
  optional,
  children,
}: {
  label: string;
  hint?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <label className="text-base font-medium text-slate-900">{label}</label>
        {optional && (
          <span className="text-xs text-slate-500 font-normal">(optional)</span>
        )}
      </div>
      {hint && (
        <p className="mt-1 text-sm text-slate-500 leading-relaxed">{hint}</p>
      )}
      <div className="mt-3">{children}</div>
    </div>
  );
}

function RadioCards({
  name,
  options,
  value,
  onChange,
  columns = 1,
}: {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  columns?: 1 | 2 | 3;
}) {
  const colsClass =
    columns === 3
      ? "sm:grid-cols-3"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-1";
  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-2`}>
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            type="button"
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`text-left rounded-xl border-2 px-4 py-3 transition ${
              selected
                ? "border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-100"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <span className="font-medium text-slate-900">{opt.label}</span>
          </button>
        );
      })}
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
