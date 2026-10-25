"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReadingPracticeSet } from "@/lib/practice/types";

type Props = { practiceSet: ReadingPracticeSet };
type FinishReason = "manual" | "timeout";

function formatTime(value: number) {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function ReadingEngine({ practiceSet }: Props) {
  const questions = practiceSet.questions;

  const [started, setStarted] = useState(false);
  const [remaining, setRemaining] = useState(practiceSet.durationSeconds);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState<FinishReason | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const deadline = useRef<number | null>(null);
  const completed = useRef(false);

  const current = questions[currentIndex];
  const answeredCount = questions.filter(
    (question) => answers[question.id] !== undefined
  ).length;
  const flaggedCount = questions.filter(
    (question) => flagged[question.id]
  ).length;
  const score = questions.filter(
    (question) => answers[question.id] === question.correctIndex
  ).length;

  const finish = useCallback((reason: FinishReason) => {
    if (completed.current) return;
    completed.current = true;
    deadline.current = null;
    setFinished(reason);
    setConfirmOpen(false);
  }, []);

  function start() {
    completed.current = false;
    deadline.current = Date.now() + practiceSet.durationSeconds * 1000;
    setAnswers({});
    setFlagged({});
    setCurrentIndex(0);
    setRemaining(practiceSet.durationSeconds);
    setFinished(null);
    setConfirmOpen(false);
    setStarted(true);
  }

  useEffect(() => {
    if (!started || finished !== null) return;

    const interval = window.setInterval(() => {
      if (deadline.current === null) return;

      const seconds = Math.max(
        0,
        Math.ceil((deadline.current - Date.now()) / 1000)
      );

      setRemaining(seconds);

      if (seconds === 0) finish("timeout");
    }, 250);

    return () => window.clearInterval(interval);
  }, [started, finished, finish]);

  if (!started) {
    return (
      <main className="min-h-screen bg-[#f4f7f5] px-5 py-12 text-[#173d3d]">
        <div className="mx-auto max-w-3xl">
          <Link href="/practice/celpip" className="font-semibold text-emerald-800">
            ← Practice dashboard
          </Link>

          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
            <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-700">
              ZenAI Prep / Exam Simulator
            </p>
            <h1 className="mt-4 text-4xl font-extrabold">
              {practiceSet.title}
            </h1>
            <p className="mt-5 leading-7 text-slate-600">
              You are about to begin a timed Reading practice exercise.
              Review the instructions before starting.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Section", "Reading"],
                ["Questions", String(questions.length)],
                ["Duration", formatTime(practiceSet.durationSeconds)],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-[#f3f7f4] p-5">
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-2 text-xl font-extrabold">{value}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-9 text-lg font-bold">Instructions</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Read the passage and choose one answer per question.</li>
              <li>Use the question palette to move between questions.</li>
              <li>Flag questions you want to revisit.</li>
              <li>The timer begins when you start the test.</li>
              <li>The test submits automatically when time expires.</li>
              <li>Refreshing the page resets this practice attempt.</li>
            </ul>

            <p className="mt-6 text-sm text-slate-500">
              Original sample questions. Not an official CELPIP examination.
            </p>

            <button
              type="button"
              onClick={start}
              className="mt-8 rounded-full bg-[#173d3d] px-8 py-4 font-bold text-white"
            >
              Start test →
            </button>
          </section>
        </div>
      </main>
    );
  }

  if (finished !== null) {
    return (
      <main className="min-h-screen bg-[#f4f7f5] px-5 py-10 text-[#173d3d]">
        <div className="mx-auto max-w-4xl">
          <Link href="/practice/celpip" className="font-semibold text-emerald-800">
            ← Practice dashboard
          </Link>

          <section className="mt-9 rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-bold text-emerald-700">
              {finished === "timeout" ? "Time expired" : "Test submitted"}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold">Your test results</h1>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["Score", `${score} / ${questions.length}`],
                ["Answered", `${answeredCount} / ${questions.length}`],
                ["Time used", formatTime(practiceSet.durationSeconds - remaining)],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-[#f1f7f3] p-5">
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-2 text-2xl font-extrabold">{value}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-slate-500">
              This score is for practice only and does not represent an official CELPIP level.
            </p>

            <button
              type="button"
              onClick={start}
              className="mt-7 rounded-full bg-[#173d3d] px-7 py-3 font-bold text-white"
            >
              Retake practice
            </button>
          </section>

          <div className="mt-7 space-y-4">
            {questions.map((question, index) => {
              const selected = answers[question.id];
              const correct = selected === question.correctIndex;

              return (
                <article key={question.id} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold text-emerald-700">
                    Question {index + 1} — {correct ? "Correct" : selected === undefined ? "Unanswered" : "Incorrect"}
                  </p>
                  <h2 className="mt-3 font-bold">{question.prompt}</h2>
                  <p className="mt-3 text-sm text-slate-600">
                    Your answer: {selected === undefined ? "Not answered" : question.options[selected]}
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    Correct answer: {question.options[question.correctIndex]}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {question.explanation}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#edf2ef] text-[#173d3d]">
      <header className="sticky top-0 z-30 bg-[#173d3d] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-200">
              ZenAI Prep · Exam Simulator
            </p>
            <h1 className="mt-1 text-lg font-bold">
              CELPIP General — Reading
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-xs text-emerald-100 sm:inline">
              Practice Set 01
            </span>
            <div
              role="timer"
              aria-label="Time remaining"
              className={`rounded-xl px-5 py-2 text-center ${
                remaining <= 60 ? "bg-red-700" : "bg-[#315d50]"
              }`}
            >
              <p className="text-[10px] font-bold tracking-widest">
                TIME REMAINING
              </p>
              <p className="mt-1 text-2xl font-extrabold tabular-nums">
                {formatTime(remaining)}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid gap-5 xl:grid-cols-[1fr_270px]">
          <div className="min-w-0">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Reading / Practice Set 01
                  </p>
                  <p className="mt-1 font-bold">
                    Question {currentIndex + 1} of {questions.length}
                  </p>
                </div>
                <span className="text-sm text-slate-500">
                  {answeredCount} of {questions.length} answered
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full bg-emerald-600"
                  style={{ width: `${answeredCount / questions.length * 100}%` }}
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <section className="rounded-2xl border border-slate-200 bg-white p-6 lg:max-h-[65vh] lg:overflow-y-auto">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Reading passage
                </p>
                <h2 className="mt-3 text-xl font-extrabold">
                  {practiceSet.passageTitle}
                </h2>
                <p className="mt-6 whitespace-pre-line text-sm leading-8 text-slate-700">
                  {practiceSet.passage}
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  Question {currentIndex + 1}
                </p>
                <h2 className="mt-4 text-lg font-extrabold">{current.prompt}</h2>

                <fieldset className="mt-7 space-y-3">
                  <legend className="sr-only">Select one answer</legend>
                  {current.options.map((option, index) => (
                    <label
                      key={index}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm ${
                        answers[current.id] === index
                          ? "border-emerald-500 bg-emerald-50"
                          : "border-slate-200"
                      }`}
                    >
                      <input
                        type="radio"
                        name={current.id}
                        checked={answers[current.id] === index}
                        onChange={() =>
                          setAnswers((previous) => ({
                            ...previous,
                            [current.id]: index,
                          }))
                        }
                        className="mt-1"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </fieldset>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6">
                  <button
                    type="button"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex((index) => index - 1)}
                    className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold disabled:opacity-40"
                  >
                    ← Previous
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setFlagged((previous) => ({
                        ...previous,
                        [current.id]: !previous[current.id],
                      }))
                    }
                    className="text-sm font-bold text-amber-700"
                  >
                    {flagged[current.id] ? "⚑ Flagged" : "⚑ Flag for review"}
                  </button>

                  {currentIndex < questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentIndex((index) => index + 1)}
                      className="rounded-full bg-[#173d3d] px-6 py-3 text-sm font-bold text-white"
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setConfirmOpen(true)}
                      className="rounded-full bg-[#173d3d] px-6 py-3 text-sm font-bold text-white"
                    >
                      Review & submit
                    </button>
                  )}
                </div>
              </section>
            </div>
          </div>

          <aside className="self-start rounded-2xl border border-slate-200 bg-white p-5 xl:sticky xl:top-28">
            <h2 className="font-extrabold">Question navigator</h2>
            <p className="mt-2 text-xs text-slate-500">
              Select any question to revisit it.
            </p>

            <div className="mt-5 grid grid-cols-5 gap-2">
              {questions.map((question, index) => (
                <button
                  key={question.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Question ${index + 1}${flagged[question.id] ? ", flagged" : ""}`}
                  aria-current={currentIndex === index ? "step" : undefined}
                  className={`relative h-10 rounded-lg border text-sm font-bold ${
                    currentIndex === index
                      ? "border-[#173d3d] bg-[#173d3d] text-white"
                      : answers[question.id] !== undefined
                      ? "border-emerald-300 bg-emerald-100 text-emerald-800"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  {index + 1}
                  {flagged[question.id] && (
                    <span className="absolute -right-1 -top-2 text-amber-600">
                      ⚑
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-sm">
              <p>Answered: <strong>{answeredCount}</strong></p>
              <p>Unanswered: <strong>{questions.length - answeredCount}</strong></p>
              <p>Flagged: <strong>{flaggedCount}</strong></p>
            </div>

            <button
              type="button"
              onClick={() => setConfirmOpen(true)}
              className="mt-7 w-full rounded-full bg-[#173d3d] px-5 py-3 text-sm font-bold text-white"
            >
              Finish test
            </button>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Original practice content. Not an official CELPIP test.
            </p>
          </aside>
        </div>
      </div>

      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="submit-title"
            className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
          >
            <h2 id="submit-title" className="text-2xl font-extrabold">
              Submit your test?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              You have answered {answeredCount} of {questions.length} questions.
              {flaggedCount > 0 && ` ${flaggedCount} question(s) are flagged for review.`}
              Unanswered questions will be marked incorrect.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setConfirmOpen(false)}
                className="rounded-full border border-slate-300 px-6 py-3 font-bold"
              >
                Continue test
              </button>
              <button
                type="button"
                onClick={() => finish("manual")}
                className="rounded-full bg-[#173d3d] px-6 py-3 font-bold text-white"
              >
                Submit test
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
