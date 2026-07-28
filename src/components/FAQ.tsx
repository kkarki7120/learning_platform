"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What ages does BrightPath Academy support?",
    a: "We support learners from age 4 through 17, with content, pacing and teaching styles tailored to each age group — from playful early learning to exam-focused teen tracks.",
  },
  {
    q: "Is the platform safe for kids to use unsupervised?",
    a: "Yes. The platform is fully ad-free, moderated, and every teacher is background-verified. Parents also get full visibility and control through the parent dashboard.",
  },
  {
    q: "How does the AI doubt-solving buddy work?",
    a: "Whenever a child gets stuck on a concept or homework question, they can ask the AI tutor for a kid-friendly explanation, available 24/7 alongside their scheduled live classes.",
  },
  {
    q: "Can I switch or cancel my plan anytime?",
    a: "Absolutely. You can upgrade, downgrade or cancel your subscription at any time from your account settings, with no long-term contracts.",
  },
  {
    q: "Do you offer classes for multiple children in one family?",
    a: "Yes, our Family plan supports up to 4 child profiles, each with their own personalized learning path, progress tracking and rewards.",
  },
  {
    q: "What if we don't have reliable internet access?",
    a: "Our mobile app supports offline mode — lessons and worksheets can be downloaded in advance and completed without an internet connection.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-sm font-bold text-sky-700">
          Questions & answers
        </span>
        <h2 className="font-display mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Frequently asked questions
        </h2>
      </div>

      <div className="mt-10 space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={faq.q}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
