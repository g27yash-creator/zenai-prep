import Link from "next/link";
import { celpipReadingLibrary } from "@/lib/practice/celpip-reading-library";

export default function ReadingPracticeLibrary() {
  return (
    <main className="min-h-screen bg-[#f4f7f5] px-6 py-12 text-[#173d3d]">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/practice/celpip"
          className="font-semibold text-emerald-800"
        >
          ← CELPIP Practice Dashboard
        </Link>

        <p className="mt-12 text-xs font-extrabold uppercase tracking-widest text-emerald-700">
          ZenAI Prep / Reading Practice
        </p>

        <h1 className="mt-3 text-4xl font-extrabold">
          Choose your Reading practice
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Practise each CELPIP Reading task separately.
          Each introductory set includes three original questions
          and a 10-minute timer.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {celpipReadingLibrary.map((part) => (
            <article
              key={part.id}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Practice module
              </p>

              <h2 className="mt-4 text-xl font-extrabold">
                {part.title}
              </h2>

              <p className="mt-3 min-h-14 text-sm leading-7 text-slate-600">
                {part.description}
              </p>

              <div className="mt-5 flex gap-3 text-xs font-semibold text-slate-500">
                <span>3 questions</span>
                <span>•</span>
                <span>10 minutes</span>
              </div>

              <Link
                href={`/practice/celpip/reading/${part.id}`}
                className="mt-7 inline-flex rounded-full bg-[#173d3d] px-6 py-3 text-sm font-bold text-white"
              >
                Start practice →
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          These are introductory practice exercises, not official or
          full-length CELPIP examinations.
        </p>
      </div>
    </main>
  );
}
