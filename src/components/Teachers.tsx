import { BadgeCheck, Star } from "lucide-react";

const teachers = [
  {
    initials: "AM",
    name: "Amara Menon",
    subject: "Mathematics",
    rating: "4.9",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    initials: "DC",
    name: "David Chen",
    subject: "Science",
    rating: "5.0",
    color: "from-sky-500 to-cyan-400",
  },
  {
    initials: "RS",
    name: "Riya Sharma",
    subject: "English & Reading",
    rating: "4.8",
    color: "from-rose-500 to-pink-400",
  },
  {
    initials: "JO",
    name: "Jide Okafor",
    subject: "Coding & AI",
    rating: "4.9",
    color: "from-emerald-500 to-teal-400",
  },
];

export default function Teachers() {
  return (
    <section id="teachers" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-1.5 text-sm font-bold text-rose-700">
          Meet the mentors
        </span>
        <h2 className="font-display mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Teachers kids actually love learning from
        </h2>
        <p className="mt-4 text-slate-600">
          Every educator is certified, background-verified, and trained specifically in
          teaching children — patient, encouraging, and genuinely fun.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((teacher) => (
          <div
            key={teacher.name}
            className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white ${teacher.color}`}
            >
              {teacher.initials}
            </div>
            <h3 className="mt-4 flex items-center justify-center gap-1 font-semibold text-slate-900">
              {teacher.name}
              <BadgeCheck className="h-4 w-4 text-sky-500" />
            </h3>
            <p className="text-sm text-slate-500">{teacher.subject}</p>
            <div className="mt-2 flex items-center justify-center gap-1 text-sm font-bold text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              {teacher.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
