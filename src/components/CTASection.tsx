import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="trial" className="mx-auto max-w-7xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-500 px-8 py-16 text-center shadow-2xl sm:px-16">
        <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

        <h2 className="font-display relative text-3xl font-bold text-white sm:text-4xl">
          Give your child their all-in-one learning home
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-violet-50">
          Start a 7-day free trial today — live classes, AI support, games and progress
          tracking, no credit card required.
        </p>
        <a
          href="#top"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-violet-700 shadow-lg transition hover:bg-violet-50"
        >
          Start Free Trial
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
