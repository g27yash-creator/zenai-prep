import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import exams from "@/lib/exam-guides.json";
import "../guides.css";

export function generateStaticParams() {
  return exams.map(exam => ({ slug: exam.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = exams.find(item => item.slug === slug);
  return { title: exam ? `${exam.name} Guide | ZenAI Prep` : "Exam Guide" };
}

export default function ExamGuide({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<main className="guideShell"><p>Loading exam guide...</p></main>}>
      <ExamGuideContent params={params} />
    </Suspense>
  );
}

async function ExamGuideContent({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = exams.find(item => item.slug === slug);
  if (!exam) notFound();

  return (
    <main className="guideShell">
      <div className="guideWrap">
        <Link href="/exams" className="guideBack">← All exam guides</Link>
        <p className="guideEyebrow">{exam.status.toUpperCase()}</p>
        <h1>{exam.name} preparation guide</h1>
        <p className="guideLead">{exam.description}</p>

        <nav className="guideNav" aria-label="Guide sections">
          <a href="#pattern">Exam overview</a>
          <a href="#sections">Sections & tips</a>
          <a href="#scoring">Scoring</a>
          <a href="#plan">Study plan</a>
        </nav>

        <section className="guidePanel" id="pattern">
          <h2>Exam pattern & overview</h2>
          <p>
            This guide introduces the major areas of the exam.
            Exact timing, task counts and test-day rules should be
            checked against the official provider's latest handbook.
          </p>
          <p><strong>Sections:</strong> {exam.sections.map(s => s[0]).join(", ")}</p>
        </section>

        <section id="sections">
          <h2>Sections & preparation tips</h2>
          <div className="guideGrid">
            {exam.sections.map(section => (
              <article className="guideCard" key={section[0]}>
                <h3>{section[0]}</h3>
                <p>{section[1]}</p>
                <strong>Preparation tip</strong>
                <p>{section[2]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="guidePanel" id="scoring">
          <h2>Understanding scoring</h2>
          <p>{exam.scoring}</p>
          <p>
            AI-generated practice estimates, when available, will not
            be official exam scores.
          </p>
        </section>

        <section id="plan">
          <h2>Choose a preparation plan</h2>
          <div className="guideGrid">
            {[
              ["7 days", "Review the format, identify weak areas, practise daily and complete a timed review."],
              ["14 days", "Alternate section drills with feedback, revision and timed practice."],
              ["30 days", "Build foundations, strengthen weak skills and finish with realistic timed practice."]
            ].map(plan => (
              <article className="guideCard" key={plan[0]}>
                <h3>{plan[0]}</h3>
                <p>{plan[1]}</p>
              </article>
            ))}
          </div>
        </section>

        <p className="guideNote">
          Independent educational content. Not affiliated with or
          endorsed by the exam providers. Confirm all exam details
          before relying on them.
        </p>
      </div>
    </main>
  );
}
