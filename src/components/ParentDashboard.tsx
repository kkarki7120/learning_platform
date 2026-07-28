import { Clock, MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";

const controls = [
  {
    icon: Clock,
    title: "Screen-time controls",
    desc: "Set daily limits and healthy break reminders.",
  },
  {
    icon: TrendingUp,
    title: "Real-time progress",
    desc: "See attendance, scores & skill growth at a glance.",
  },
  {
    icon: MessageCircle,
    title: "Direct teacher messaging",
    desc: "Chat with tutors about how your child is doing.",
  },
  {
    icon: ShieldCheck,
    title: "Full content control",
    desc: "Approve subjects and monitor every session.",
  },
];

export default function ParentDashboard() {
  return (
    <section className="bg-gradient-to-b from-white to-violet-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-violet-100 lg:order-1">
            <div className="flex items-center justify-between">
              <p className="font-display font-bold text-slate-900">
                Parent Dashboard
              </p>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                This week
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-500">Classes attended</p>
                <p className="mt-1 text-xl font-bold text-slate-900">6 / 6</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-500">Avg. screen time</p>
                <p className="mt-1 text-xl font-bold text-slate-900">48 min/day</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-500">Strongest subject</p>
                <p className="mt-1 text-xl font-bold text-slate-900">Science</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-500">Needs practice</p>
                <p className="mt-1 text-xl font-bold text-slate-900">Fractions</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-violet-600 p-4 text-white">
              <p className="text-sm font-bold">Ms. Amara left a note</p>
              <p className="mt-1 text-sm text-violet-100">
                &ldquo;Great focus in today&apos;s class — ready to move to 2-digit
                multiplication next week!&rdquo;
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-sm font-bold text-violet-700">
              Built for parents too
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Stay involved, without hovering
            </h2>
            <p className="mt-4 text-slate-600">
              A dedicated dashboard gives you full visibility and control — so you always
              know how your child is doing, without needing to sit through every class.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {controls.map((control) => (
                <div
                  key={control.title}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <control.icon className="h-6 w-6 text-violet-600" />
                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {control.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{control.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
