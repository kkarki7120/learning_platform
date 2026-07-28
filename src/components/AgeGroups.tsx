"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const groups = [
  {
    label: "Little Learners",
    range: "Ages 4–6",
    emoji: "🧸",
    focus: "Phonics, numbers, colors, shapes & motor skills through play",
    highlights: [
      "15-minute bite-sized sessions",
      "Story-based phonics & counting",
      "Parent-guided activity kits",
    ],
  },
  {
    label: "Primary Explorers",
    range: "Ages 7–10",
    emoji: "🔎",
    focus: "Core Math, English & Science aligned to school curriculum",
    highlights: [
      "Live small-group classes",
      "Weekly gamified quizzes",
      "Reading & writing labs",
    ],
  },
  {
    label: "Middle Achievers",
    range: "Ages 11–14",
    emoji: "🚀",
    focus: "Advanced concepts, coding, and exam-style practice",
    highlights: [
      "Coding & AI foundations",
      "Exam prep & mock tests",
      "Project-based learning",
    ],
  },
  {
    label: "Teen Scholars",
    range: "Ages 15–17",
    emoji: "🎓",
    focus: "Board exam mastery, career skills & competitive prep",
    highlights: [
      "1:1 mentorship",
      "Career & study guidance",
      "Competitive exam tracks",
    ],
  },
];

export default function AgeGroups() {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <section id="age-groups" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-700">
            Age-appropriate learning
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            A path for every stage of childhood
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {groups.map((g, i) => (
            <button
              key={g.label}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                active === i
                  ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                  : "bg-white text-slate-600 hover:bg-violet-50 hover:text-violet-700"
              }`}
            >
              {g.emoji} {g.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-3xl">
              {group.emoji}
            </span>
            <div>
              <p className="text-sm font-bold text-violet-600">{group.range}</p>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                {group.label}
              </h3>
              <p className="mt-1 text-slate-600">{group.focus}</p>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {group.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-sm font-medium text-slate-700"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
