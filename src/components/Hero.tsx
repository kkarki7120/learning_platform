import { PlayCircle, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet-200/50 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl animate-blob-delay" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl animate-blob" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-bold text-violet-700">
            <Sparkles className="h-4 w-4" />
            One platform. Every subject. Every age.
          </div>

          <h1 className="font-display mt-6 text-4xl leading-tight font-bold text-slate-900 sm:text-5xl lg:text-6xl">
            Learning made{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
              fun, safe & smart
            </span>{" "}
            for your child
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600">
            BrightPath Academy brings live tutors, on-demand lessons, AI doubt-solving,
            games, and a parent dashboard together — so kids learn everything they need,
            all in one modern, kid-safe platform.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#trial"
              className="inline-flex items-center justify-center rounded-full bg-violet-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700"
            >
              Start 7-Day Free Trial
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-7 py-3.5 text-base font-bold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
            >
              <PlayCircle className="h-5 w-5" />
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              4.9/5 from 12,000+ parents
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Child-safe & ad-free
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[2rem] border border-slate-100 bg-white p-4 shadow-2xl shadow-violet-100">
            <div className="flex items-center justify-between rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 p-5 text-white">
              <div>
                <p className="text-xs font-bold tracking-wide text-violet-100 uppercase">
                  Today&apos;s Class
                </p>
                <p className="font-display mt-1 text-lg font-semibold">
                  Fractions with Ms. Amara
                </p>
              </div>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
                LIVE
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-2xl font-extrabold text-amber-600">320</p>
                <p className="text-xs font-bold text-amber-700/80">XP this week</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-2xl font-extrabold text-emerald-600">12</p>
                <p className="text-xs font-bold text-emerald-700/80">Day streak 🔥</p>
              </div>
              <div className="rounded-2xl bg-sky-50 p-4">
                <p className="text-2xl font-extrabold text-sky-600">8</p>
                <p className="text-xs font-bold text-sky-700/80">Badges earned</p>
              </div>
              <div className="rounded-2xl bg-rose-50 p-4">
                <p className="text-2xl font-extrabold text-rose-600">94%</p>
                <p className="text-xs font-bold text-rose-700/80">Quiz accuracy</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-lg">
              🏆
            </span>
            <div>
              <p className="text-sm font-bold text-slate-800">Math Wizard badge</p>
              <p className="text-xs text-slate-500">Just unlocked!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
