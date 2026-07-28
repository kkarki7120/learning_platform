import { Sparkles } from "lucide-react";
import type { SVGProps } from "react";

function FacebookGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6.5h3V14.5h2.4l.6-3h-3v-2c0-.55.45-1 1-1z" />
    </svg>
  );
}

function InstagramGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 4l7.5 8.4L4.5 20h2.3l6.1-6.8 4.6 6.8H20l-7.9-8.9L19 4h-2.3l-5.6 6.3L6.5 4H4z" />
    </svg>
  );
}

function YoutubeGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path d="M11 10l4 2-4 2v-4z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const columns = [
  {
    title: "Platform",
    links: ["Subjects", "Live Classes", "AI Tutor", "Gamification", "Mobile App"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Teachers", "Careers", "Blog"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Parent Guide", "Safety Center"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Child Safety Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold text-white">
                BrightPath Academy
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              The all-in-one learning platform bringing live classes, video lessons, AI
              tutoring and gamified practice together for modern kids.
            </p>
            <div className="mt-6 flex gap-3">
              {[FacebookGlyph, InstagramGlyph, XGlyph, YoutubeGlyph].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-violet-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} BrightPath Academy. All rights reserved.</p>
          <p>Made with care for curious young minds.</p>
        </div>
      </div>
    </footer>
  );
}
