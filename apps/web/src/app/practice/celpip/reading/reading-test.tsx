"use client";

import Link from "next/link";
import { useState } from "react";

const passage = `
The Halifax Community Library recently introduced extended
evening hours to accommodate residents who work during the day.
Previously, the library closed at 6 p.m. on weekdays. Under the
new schedule, it remains open until 9 p.m. from Monday to Thursday.

The library has also added quiet study areas and additional
computer workstations. According to library staff, these changes
were introduced following feedback from local students and
working professionals.

Although the extended schedule has received positive feedback,
some residents have requested similar hours on weekends.
Library management plans to review attendance figures after
three months before deciding whether further changes are needed.
`;

const questions = [
  {
    question: "Why did the library extend its weekday hours?",
    options: [
      "To reduce operating expenses",
      "To accommodate people who work during the day",
      "To replace weekend services",
      "To organize evening concerts",
    ],
    answer: 1,
    explanation:
      "The passage states that the extended hours accommodate residents who work during the day.",
  },
  {
    question: "What additional facilities were introduced?",
    options: [
      "A restaurant and parking garage",
      "A children's swimming pool",
      "Quiet study areas and computer workstations",
      "A new auditorium",
    ],
    answer: 2,
    explanation:
      "The library added quiet study areas and additional computer workstations.",
  },
  {
    question: "What will management review after three months?",
    options: [
      "Attendance figures",
      "Book prices",
      "Employee salaries",
      "Building renovations",
    ],
    answer: 0,
    explanation:
      "Management plans to review attendance figures before deciding on further changes.",
  },
];

export default function ReadingTest() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.filter(
    (question, index) => answers[index] === question.answer
  ).length;

  const complete = questions.every(
    (_, index) => answers[index] !== undefined
  );

  function restart() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-[#f8faf6] px-6 py-10 text-[#183c39]">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/practice/celpip"
          className="font-semibold text-emerald-700"
        >
          ← CELPIP Practice
        </Link>

        <div className="mt-10">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Free sample practice
          </p>
          <h1 className="mt-3 text-4xl font-bold">
            CELPIP Reading Practice
          </h1>
          <p className="mt-4 text-slate-600">
            Read the passage and answer all three questions.
            This is an original introductory exercise,
            not an official CELPIP test.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="self-start rounded-3xl border border-slate-200 bg-white p-8 lg:sticky lg:top-8">
            <h2 className="text-2xl font-bold">Reading Passage</h2>
            <p className="mt-6 whitespace-pre-line leading-8 text-slate-700">
              {passage.trim()}
            </p>
          </section>

          <section className="space-y-6">
            {questions.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <p className="text-sm font-semibold text-emerald-700">
                  Question {index + 1} of {questions.length}
                </p>

                <h3 className="mt-3 text-lg font-bold">
                  {item.question}
                </h3>

                <div className="mt-5 space-y-3">
                  {item.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4"
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        checked={answers[index] === optionIndex}
                        disabled={submitted}
                        onChange={() =>
                          setAnswers((current) => ({
                            ...current,
                            [index]: optionIndex,
                          }))
                        }
                        className="mt-1"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>

                {submitted && (
                  <div className="mt-5 rounded-xl bg-emerald-50 p-4">
                    <p className="font-bold">
                      {answers[index] === item.answer
                        ? "Correct ✓"
                        : "Incorrect"}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      {item.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {!submitted ? (
              <button
                type="button"
                disabled={!complete}
                onClick={() => setSubmitted(true)}
                className="w-full rounded-full bg-[#173d3d] px-8 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Submit answers
              </button>
            ) : (
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
                <h2 className="text-2xl font-bold">Your Results</h2>
                <p className="mt-4 text-4xl font-bold">
                  {score} / {questions.length}
                </p>
                <p className="mt-3 text-slate-600">
                  This practice score is not an official CELPIP level.
                </p>
                <button
                  type="button"
                  onClick={restart}
                  className="mt-6 rounded-full bg-[#173d3d] px-7 py-3 font-semibold text-white"
                >
                  Try again
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
