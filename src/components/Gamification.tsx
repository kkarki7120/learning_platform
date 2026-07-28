import { Award, Crown, Flame, Star, Trophy } from "lucide-react";

const badges = [
  { emoji: "🧮", name: "Math Wizard", color: "bg-violet-100" },
  { emoji: "📚", name: "Bookworm", color: "bg-sky-100" },
  { emoji: "🔬", name: "Junior Scientist", color: "bg-emerald-100" },
  { emoji: "🎨", name: "Creative Star", color: "bg-pink-100" },
  { emoji: "💻", name: "Code Ninja", color: "bg-indigo-100" },
  { emoji: "🗣️", name: "Great Speaker", color: "bg-amber-100" },
];

const leaderboard = [
  { name: "Aarav K.", xp: 4820, place: 1 },
  { name: "Zoe M.", xp: 4510, place: 2 },
  { name: "Ishaan P.", xp: 4290, place: 3 },
];

export default function Gamification() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-bold text-amber-700">
            <Trophy className="h-4 w-4" />
            Learning that feels like play
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Badges, streaks & leaderboards keep kids coming back
          </h2>
          <p className="mt-4 text-slate-600">
            Every quiz, class and worksheet earns XP. Kids unlock badges, build daily
            streaks, and climb friendly leaderboards — turning consistency into a habit
            they&apos;re proud of.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className="flex flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${badge.color}`}
                >
                  {badge.emoji}
                </span>
                <p className="text-xs font-semibold text-slate-600">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-violet-100 sm:p-8">
          <div className="flex items-center justify-between">
            <h3 className="font-display flex items-center gap-2 text-lg font-bold text-slate-900">
              <Crown className="h-5 w-5 text-amber-500" />
              Weekly Leaderboard
            </h3>
            <span className="flex items-center gap-1 text-sm font-bold text-orange-500">
              <Flame className="h-4 w-4" />
              12-day streak
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {leaderboard.map((entry) => (
              <div
                key={entry.name}
                className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                      entry.place === 1
                        ? "bg-amber-400 text-white"
                        : entry.place === 2
                          ? "bg-slate-300 text-white"
                          : "bg-orange-300 text-white"
                    }`}
                  >
                    {entry.place}
                  </span>
                  <p className="font-semibold text-slate-800">{entry.name}</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-violet-600">
                  <Star className="h-4 w-4 fill-current" />
                  {entry.xp.toLocaleString()} XP
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-violet-50 p-4">
            <Award className="h-8 w-8 text-violet-600" />
            <div>
              <p className="text-sm font-bold text-violet-800">
                Your child is #7 this week
              </p>
              <p className="text-xs text-violet-600">
                180 XP to reach the top 5 — keep going!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
