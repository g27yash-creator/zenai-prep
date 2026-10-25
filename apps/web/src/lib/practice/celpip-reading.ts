import type { ReadingPracticeSet } from "./types";

export const celpipReadingSet: ReadingPracticeSet = {
  id: "celpip-reading-intro-01",
  title: "Reading Practice — Community Library",
  exam: "CELPIP General",
  durationSeconds: 600,
  passageTitle: "Extended Library Hours",
  passage: `The Halifax Community Library recently introduced extended evening hours to accommodate residents who work during the day. Previously, the library closed at 6 p.m. on weekdays. Under the new schedule, it remains open until 9 p.m. from Monday to Thursday.

The library has also added quiet study areas and additional computer workstations. According to library staff, these changes were introduced following feedback from local students and working professionals.

Although the extended schedule has received positive feedback, some residents have requested similar hours on weekends. Library management plans to review attendance figures after three months before deciding whether further changes are needed.`,
  questions: [
    {
      id: "q1",
      prompt: "Why did the library extend its weekday hours?",
      options: [
        "To reduce operating expenses",
        "To accommodate people who work during the day",
        "To replace weekend services",
        "To organize evening concerts"
      ],
      correctIndex: 1,
      explanation: "The passage says the extended hours accommodate residents who work during the day."
    },
    {
      id: "q2",
      prompt: "What additional facilities were introduced?",
      options: [
        "A restaurant and parking garage",
        "A children's swimming pool",
        "Quiet study areas and computer workstations",
        "A new auditorium"
      ],
      correctIndex: 2,
      explanation: "The library added quiet study areas and additional computer workstations."
    },
    {
      id: "q3",
      prompt: "What will management review after three months?",
      options: [
        "Attendance figures",
        "Book prices",
        "Employee salaries",
        "Building renovations"
      ],
      correctIndex: 0,
      explanation: "Management will review attendance figures before deciding on further changes."
    },
    {
      id: "q4",
      prompt: "Which change has some residents requested?",
      options: [
        "Shorter weekday hours",
        "Additional weekend evening hours",
        "Removal of computer workstations",
        "A reduction in study spaces"
      ],
      correctIndex: 1,
      explanation: "Some residents requested similar extended hours on weekends."
    },
    {
      id: "q5",
      prompt: "What can reasonably be inferred about future schedule changes?",
      options: [
        "They are guaranteed to happen next month",
        "They have already been cancelled",
        "They will depend partly on attendance information",
        "They will require the library to close on Mondays"
      ],
      correctIndex: 2,
      explanation: "Management plans to review attendance before deciding whether further changes are needed."
    }
  ]
};
