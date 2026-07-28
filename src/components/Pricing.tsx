import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "7-day trial",
    desc: "Try the full platform, no card required.",
    features: [
      "1 subject of your choice",
      "Access to video lesson library",
      "Basic progress tracking",
      "2 live classes included",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$29",
    period: "per month",
    desc: "Our most popular plan for a single child.",
    features: [
      "All subjects unlocked",
      "Unlimited live classes",
      "AI doubt-solving buddy",
      "Gamified practice & rewards",
      "Full parent dashboard",
    ],
    cta: "Choose Growth",
    highlight: true,
  },
  {
    name: "Family",
    price: "$49",
    period: "per month",
    desc: "Everything in Growth, for up to 4 children.",
    features: [
      "Up to 4 child profiles",
      "Shared family dashboard",
      "Priority teacher support",
      "Downloadable worksheets",
      "Offline mobile access",
    ],
    cta: "Choose Family",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-700">
          Simple pricing
        </span>
        <h2 className="font-display mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Plans for every family
        </h2>
        <p className="mt-4 text-slate-600">
          Cancel anytime. Every plan starts with a 7-day free trial — no risk.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border p-8 ${
              plan.highlight
                ? "border-violet-600 bg-white shadow-2xl shadow-violet-200"
                : "border-slate-100 bg-white shadow-sm"
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-4 py-1 text-xs font-bold text-white">
                Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-bold text-slate-900">
              {plan.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{plan.desc}</p>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-slate-900">
                {plan.price}
              </span>
              <span className="text-sm font-semibold text-slate-500">
                / {plan.period}
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#trial"
              className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-bold transition ${
                plan.highlight
                  ? "bg-violet-600 text-white hover:bg-violet-700"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-200"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
