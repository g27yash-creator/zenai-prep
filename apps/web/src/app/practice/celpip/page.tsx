import Link from "next/link";

export const metadata = {
  title: "CELPIP Practice Center | ZenAI Prep",
};

const sections = [
  {
    title: "Listening",
    icon: "🎧",
    description: "Audio comprehension and listening exercises.",
    status: "Coming soon",
    available: false,
  },
  {
    title: "Reading",
    icon: "📖",
    description: "Timed reading passages and comprehension questions.",
    status: "Practice available",
    available: true,
  },
  {
    title: "Writing",
    icon: "✍️",
    description: "Email writing and survey responses.",
    status: "Coming soon",
    available: false,
  },
  {
    title: "Speaking",
    icon: "🎙️",
    description: "Timed speaking tasks and recorded responses.",
    status: "Coming soon",
    available: false,
  },
];

export default function CelpipPracticeDashboard() {
  return (
    <main className="min-h-screen bg-[#f4f7f5] text-[#173d3d]">
      <header className="border-b border-[#dce7df] bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="text-xl font-extrabold">
            ZenAI <span className="text-emerald-700">Prep</span>
          </Link>
          <Link href="/practice" className="text-sm font-semibold text-emerald-800">
            ← All practice tests
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-700">
          Practice Center / CELPIP General
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          Your exam preparation dashboard
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Choose a section, review the test instructions, and practise in
          an exam-style environment.
        </p>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {[
            ["Completed tests", "0", "Saved history coming soon"],
            ["Average practice score", "—", "Available after result tracking"],
            ["Full mock exams", "Planned", "Not yet available"],
          ].map(([label, value, note]) => (
            <div key={label} className="rounded-2xl border border-[#e0e8e2] bg-white p-6">
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-3 text-3xl font-extrabold">{value}</p>
              <p className="mt-2 text-xs text-slate-400">{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold">Section practice</h2>
            <p className="mt-2 text-slate-600">
              Build your skills one section at a time.
            </p>
          </div>
          <Link href="/exams/celpip" className="text-sm font-bold text-emerald-800">
            Exam guide & tips →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-[#dfe8e2] bg-white p-7 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl">{section.icon}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                  section.available
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-slate-100 text-slate-500"
                }`}>
                  {section.status}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold">{section.title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
                {section.description}
              </p>

              {section.available ? (
                <Link
                  href="/practice/celpip/reading"
                  className="mt-7 inline-flex rounded-full bg-[#173d3d] px-6 py-3 text-sm font-bold text-white"
                >
                  Start Reading practice →
                </Link>
              ) : (
                <p className="mt-7 text-sm font-semibold text-slate-400">
                  Practice module in development
                </p>
              )}
            </article>
          ))}
        </div>

        <section className="mt-9 rounded-3xl border border-[#dfe8e2] bg-[#e8f4ed] p-8">
          <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-800">
            Future feature
          </p>
          <h2 className="mt-3 text-2xl font-extrabold">Full mock examination</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            A complete simulated exam with section transitions, realistic timing,
            and a consolidated performance report. Not yet available.
          </p>
        </section>
      </div>
    </main>
  );
}
