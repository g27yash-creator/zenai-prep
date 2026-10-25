import Link from "next/link";

export const metadata = {
  title: "CELPIP Practice | ZenAI Prep",
};

const sections = [
  {
    name: "Reading",
    icon: "📖",
    description: "Practise reading comprehension with interactive questions.",
    href: "/practice/celpip/reading",
    available: true,
  },
  {
    name: "Writing",
    icon: "✍️",
    description: "Email writing and survey responses.",
    href: "#",
    available: false,
  },
  {
    name: "Listening",
    icon: "🎧",
    description: "Audio-based comprehension practice.",
    href: "#",
    available: false,
  },
  {
    name: "Speaking",
    icon: "🎙️",
    description: "Timed speaking exercises.",
    href: "#",
    available: false,
  },
];

export default function CelpipPractice() {
  return (
    <main className="min-h-screen bg-[#f8faf6] px-6 py-12 text-[#183c39]">
      <div className="mx-auto max-w-5xl">
        <Link href="/practice" className="font-semibold text-emerald-700">
          ← All practice tests
        </Link>

        <h1 className="mt-14 text-5xl font-bold">
          CELPIP Practice
        </h1>

        <p className="mt-5 text-lg text-slate-600">
          Choose a skill to begin your preparation.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map((section) => {
            const content = (
              <>
                <div className="text-3xl">{section.icon}</div>
                <h2 className="mt-5 text-2xl font-bold">
                  {section.name}
                </h2>
                <p className="mt-3 text-slate-600">
                  {section.description}
                </p>
                <p className="mt-7 font-semibold text-emerald-700">
                  {section.available ? "Start practice →" : "Coming soon"}
                </p>
              </>
            );

            return section.available ? (
              <Link
                key={section.name}
                href={section.href}
                className="rounded-3xl border border-emerald-200 bg-white p-8 hover:bg-emerald-50"
              >
                {content}
              </Link>
            ) : (
              <div
                key={section.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 opacity-70"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
