"use client";

import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

const links = [
  { href: "#subjects", label: "Subjects" },
  { href: "#features", label: "Platform" },
  { href: "#age-groups", label: "Age Groups" },
  { href: "#teachers", label: "Teachers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-md shadow-violet-200">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold text-slate-900">
            BrightPath <span className="text-violet-600">Academy</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-violet-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#login"
            className="text-sm font-semibold text-slate-600 transition hover:text-violet-600"
          >
            Log in
          </a>
          <a
            href="#trial"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-violet-600"
          >
            Start Free Trial
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-600"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <a href="#login" className="text-sm font-semibold text-slate-600">
                Log in
              </a>
              <a
                href="#trial"
                className="rounded-full bg-slate-900 px-5 py-2.5 text-center text-sm font-bold text-white"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
