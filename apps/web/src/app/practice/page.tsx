import Link from "next/link";

export const metadata = {
  title: "Practice Tests | ZenAI Prep",
};

export default function PracticeDirectory() {
  return (
    <main className="min-h-screen bg-[#f8faf6] px-6 py-12 text-[#183c39]">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="font-semibold text-emerald-700">
          ← ZenAI Prep
        </Link>

        <div className="mt-14">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Practice with purpose
          </p>
          <h1 className="mt-4 text-5xl font-bold">
            Practice Tests
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Build confidence through exam-style practice,
            useful feedback, and measurable improvement.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Link
            href="/practice/celpip"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8"
          >
            <span className="text-sm font-semibold text-emerald-700">
              First launch
            </span>
            <h2 className="mt-5 text-3xl font-bold">CELPIP</h2>
            <p className="mt-3 text-slate-600">
              Explore reading, writing, listening, and speaking practice.
            </p>
            <p className="mt-8 font-semibold text-emerald-800">
              Explore practice →
            </p>
          </Link>

          {["IELTS", "PTE", "GRE", "GMAT"].map((exam) => (
            <div
              key={exam}
              className="rounded-3xl border border-slate-200 bg-white p-8"
            >
              <span className="text-sm text-slate-500">
                Planned
              </span>
              <h2 className="mt-5 text-3xl font-bold">{exam}</h2>
              <p className="mt-3 text-slate-600">
                Practice tests are on our roadmap.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
