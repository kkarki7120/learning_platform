const stats = [
  { value: "50,000+", label: "Kids learning daily" },
  { value: "1,200+", label: "Certified teachers" },
  { value: "18", label: "Subjects & skills" },
  { value: "4.9★", label: "Average parent rating" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
