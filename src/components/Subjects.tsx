import {
  Atom,
  Baby,
  Brush,
  Calculator,
  Code2,
  Globe2,
  Mic2,
  Music2,
  PenTool,
} from "lucide-react";

const subjects = [
  {
    icon: Calculator,
    name: "Math",
    desc: "From counting to calculus, step by step",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: PenTool,
    name: "English & Reading",
    desc: "Phonics, grammar, storytelling & writing",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Atom,
    name: "Science",
    desc: "Curiosity-driven experiments & concepts",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Code2,
    name: "Coding & AI",
    desc: "Block coding to Python & AI basics",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Brush,
    name: "Art & Craft",
    desc: "Drawing, painting & creative expression",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Music2,
    name: "Music",
    desc: "Rhythm, instruments & music theory",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Mic2,
    name: "Public Speaking",
    desc: "Confidence, communication & debate",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Globe2,
    name: "Life Skills",
    desc: "Money, emotions, safety & habits",
    color: "bg-teal-100 text-teal-600",
  },
];

export default function Subjects() {
  return (
    <section id="subjects" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm font-bold text-violet-700">
          <Baby className="h-4 w-4" />
          Subjects for every learner
        </span>
        <h2 className="font-display mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Everything they need to grow, in one place
        </h2>
        <p className="mt-4 text-slate-600">
          Structured curriculum mapped to school syllabi, plus enrichment courses kids
          actually look forward to.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${subject.color}`}
            >
              <subject.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{subject.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{subject.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
