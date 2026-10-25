import Link from "next/link";
import exams from "@/lib/exam-guides.json";
import "./guides.css";

export const metadata = {
  title: "Exam Guides & Preparation Tips | ZenAI Prep",
  description: "Explore exam formats, sections, scoring and study tips."
};

export default function ExamDirectory() {
  return (
    <main className="guideShell">
      <div className="guideWrap">
        <Link href="/" className="guideBack">← ZenAI Prep</Link>
        <p className="guideEyebrow">FREE LEARNING RESOURCES</p>
        <h1>Explore exam guides</h1>
        <p className="guideLead">
          Understand the exam before you start preparing.
          Explore sections, scoring, practical strategies and study plans.
        </p>
        <div className="guideGrid">
          {exams.map(exam => (
            <Link className="guideCard" href={`/exams/${exam.slug}`} key={exam.slug}>
              <span className="guidePill">{exam.status}</span>
              <h2>{exam.name}</h2>
              <p>{exam.description}</p>
              <strong>Read guide →</strong>
            </Link>
          ))}
        </div>
        <p className="guideNote">
          These are introductory preparation guides, not official exam materials.
          Always verify current test requirements with the exam provider.
        </p>
      </div>
    </main>
  );
}
