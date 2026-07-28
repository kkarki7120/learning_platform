import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "My daughter used to dread math homework. Now she asks to log in for her 'math game time'. The badges and streaks genuinely changed her attitude.",
    name: "Priya N.",
    role: "Parent of a 9-year-old",
    color: "bg-violet-100 text-violet-600",
  },
  {
    quote:
      "The parent dashboard is a lifesaver. I can see exactly what my son is struggling with without having to ask him — or nag him.",
    name: "Marcus T.",
    role: "Parent of an 11-year-old",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    quote:
      "Having live classes AND recorded lessons means we never miss learning, even when our schedule is chaotic. The AI tutor helps with last-minute doubts too.",
    name: "Fatima A.",
    role: "Parent of two, ages 6 & 10",
    color: "bg-amber-100 text-amber-600",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm font-bold text-violet-700">
            Loved by families
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            What parents are saying
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <Quote className="h-6 w-6 text-violet-300" />
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${t.color}`}
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
                <div className="ml-auto flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
