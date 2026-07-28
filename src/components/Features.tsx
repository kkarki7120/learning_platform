import {
  BarChart3,
  Bot,
  FileDown,
  Globe,
  GraduationCap,
  Languages,
  Layers,
  ShieldCheck,
  Smartphone,
  Trophy,
  Users2,
  Video,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live 1:1 & group classes",
    desc: "Real-time classes with certified tutors, scheduled around your family's routine.",
  },
  {
    icon: Layers,
    title: "On-demand video library",
    desc: "Thousands of bite-sized lessons kids can rewatch anytime, at their own pace.",
  },
  {
    icon: Bot,
    title: "AI doubt-solving buddy",
    desc: "A friendly 24/7 AI tutor that explains concepts and answers homework questions instantly.",
  },
  {
    icon: Trophy,
    title: "Gamified practice",
    desc: "XP points, streaks, badges & leaderboards turn practice into something kids want to do.",
  },
  {
    icon: BarChart3,
    title: "Smart progress tracking",
    desc: "Adaptive quizzes surface strengths and gaps, with clear reports after every session.",
  },
  {
    icon: Users2,
    title: "Parent dashboard",
    desc: "See attendance, screen time, progress and message teachers — all from one dashboard.",
  },
  {
    icon: GraduationCap,
    title: "Verified, caring teachers",
    desc: "Every tutor is background-checked, trained in child pedagogy, and rated by parents.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & ad-free",
    desc: "No ads, no strangers, no distractions — a moderated environment built for kids.",
  },
  {
    icon: FileDown,
    title: "Printable worksheets",
    desc: "Downloadable practice sheets and activity kits for offline, screen-free learning.",
  },
  {
    icon: Smartphone,
    title: "Mobile app + offline mode",
    desc: "Learn on any device, and download lessons to continue without an internet connection.",
  },
  {
    icon: Languages,
    title: "Multi-language support",
    desc: "Lessons and support available in multiple languages for a truly global classroom.",
  },
  {
    icon: Globe,
    title: "Curriculum aligned worldwide",
    desc: "Mapped to major school boards so learning at home stays in sync with the classroom.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-bold text-amber-700">
            The all-in-one platform
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Every facility a modern learner needs
          </h2>
          <p className="mt-4 text-slate-600">
            No more juggling five different apps. BrightPath brings classes, practice,
            tracking, rewards, and parent visibility into a single, cohesive experience.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/10 text-violet-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
