import { ClipboardList, LineChart, Rocket, Target } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Take a free assessment",
    desc: "A quick, friendly quiz maps your child's current level in each subject.",
  },
  {
    icon: Target,
    title: "Get a personalized path",
    desc: "Our engine builds a learning plan matched to their pace, goals & interests.",
  },
  {
    icon: Rocket,
    title: "Learn, play & practice",
    desc: "Live classes, videos, games and worksheets — mixed to keep it engaging.",
  },
  {
    icon: LineChart,
    title: "Track & celebrate progress",
    desc: "Weekly reports and rewards keep kids and parents motivated together.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-sm font-bold text-sky-700">
          Simple to start
        </span>
        <h2 className="font-display mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          How BrightPath works
        </h2>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-md shadow-violet-200">
              <step.icon className="h-6 w-6" />
            </div>
            <span className="font-display absolute top-0 right-0 text-4xl font-bold text-slate-100">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
