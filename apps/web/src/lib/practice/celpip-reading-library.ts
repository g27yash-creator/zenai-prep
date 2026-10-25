import type { ReadingPracticeSet } from "./types";

export type CelpipReadingPart = {
  id: string;
  title: string;
  description: string;
  practiceSet: ReadingPracticeSet;
};

export const celpipReadingLibrary: CelpipReadingPart[] = [
  {
    id: "correspondence",
    title: "Part 1 — Reading Correspondence",
    description: "Understand written communication and identify key details.",
    practiceSet: {
      id: "celpip-correspondence-01",
      title: "Reading Correspondence — Community Event",
      exam: "CELPIP General",
      durationSeconds: 600,
      passageTitle: "Community Volunteer Event",
      passage: `Hello Daniel,

Thank you for volunteering at our neighbourhood cleanup event this Saturday. We will meet outside the community centre at 9:00 a.m. Please arrive 15 minutes early to collect your supplies.

The organizers will provide gloves, garbage bags, and safety vests. Volunteers should bring their own reusable water bottles and wear comfortable shoes.

The event is expected to finish at noon. However, if the weather is severe, it will be postponed until the following Saturday.

Best regards,
Sarah
Volunteer Coordinator`,
      questions: [
        {
          id: "c1",
          prompt: "When should Daniel arrive?",
          options: [
            "8:45 a.m.",
            "9:00 a.m.",
            "9:15 a.m.",
            "12:00 p.m."
          ],
          correctIndex: 0,
          explanation: "The meeting starts at 9:00 a.m., and volunteers are asked to arrive 15 minutes early."
        },
        {
          id: "c2",
          prompt: "What should volunteers bring?",
          options: [
            "Garbage bags",
            "Safety vests",
            "Reusable water bottles",
            "Cleaning gloves"
          ],
          correctIndex: 2,
          explanation: "Organizers provide supplies, but volunteers must bring their own water bottles."
        },
        {
          id: "c3",
          prompt: "What will happen if severe weather occurs?",
          options: [
            "The event will move indoors",
            "The event will be postponed by one week",
            "The event will start later",
            "The event will be cancelled permanently"
          ],
          correctIndex: 1,
          explanation: "The email states that severe weather will postpone the event until the following Saturday."
        }
      ]
    }
  },
  {
    id: "diagram",
    title: "Part 2 — Reading to Apply a Diagram",
    description: "Interpret schedules and select information for a situation.",
    practiceSet: {
      id: "celpip-diagram-01",
      title: "Reading to Apply a Diagram — Recreation Centre",
      exam: "CELPIP General",
      durationSeconds: 600,
      passageTitle: "Recreation Centre Schedule",
      passage: `WEEKDAY PROGRAM SCHEDULE

Swimming
Monday and Wednesday
6:00 p.m. – 7:00 p.m.
Fee: $12 per session

Yoga
Tuesday and Thursday
5:30 p.m. – 6:30 p.m.
Fee: $15 per session

Badminton
Monday and Friday
7:30 p.m. – 9:00 p.m.
Fee: $10 per session

Fitness Training
Wednesday and Friday
5:00 p.m. – 6:00 p.m.
Fee: $18 per session

All participants must register online before attending.`,
      questions: [
        {
          id: "d1",
          prompt: "Which activity is available on Thursday?",
          options: ["Swimming", "Yoga", "Badminton", "Fitness Training"],
          correctIndex: 1,
          explanation: "Yoga is scheduled for Tuesday and Thursday."
        },
        {
          id: "d2",
          prompt: "Which activity costs the least per session?",
          options: ["Swimming", "Yoga", "Badminton", "Fitness Training"],
          correctIndex: 2,
          explanation: "Badminton costs $10 per session, the lowest listed fee."
        },
        {
          id: "d3",
          prompt: "What must participants do before attending?",
          options: [
            "Call the instructor",
            "Register online",
            "Pay an annual membership",
            "Visit the centre in person"
          ],
          correctIndex: 1,
          explanation: "The schedule states that all participants must register online."
        }
      ]
    }
  },
  {
    id: "information",
    title: "Part 3 — Reading for Information",
    description: "Identify main ideas, supporting details, and implications.",
    practiceSet: {
      id: "celpip-information-01",
      title: "Reading for Information — Urban Gardens",
      exam: "CELPIP General",
      durationSeconds: 600,
      passageTitle: "Community Gardens in Canadian Cities",
      passage: `Community gardens have become increasingly popular in Canadian cities. These shared spaces allow residents to grow vegetables, herbs, and flowers even when they do not have private gardens.

Supporters believe community gardens offer several benefits. They can improve access to fresh produce, encourage physical activity, and help neighbours build stronger relationships.

However, establishing a community garden requires careful planning. Organizers must identify suitable land, arrange access to water, and coordinate volunteers. Some projects also face challenges related to long-term funding.

Municipal governments sometimes support these initiatives by providing land or small grants. Nevertheless, community participation remains essential to their continued success.`,
      questions: [
        {
          id: "i1",
          prompt: "What is one benefit of community gardens?",
          options: [
            "They eliminate all food expenses",
            "They encourage relationships among neighbours",
            "They replace municipal parks",
            "They require no maintenance"
          ],
          correctIndex: 1,
          explanation: "The passage identifies stronger relationships among neighbours as a benefit."
        },
        {
          id: "i2",
          prompt: "Which challenge is mentioned?",
          options: [
            "A lack of interest in vegetables",
            "Restrictions on growing flowers",
            "Securing long-term funding",
            "Excessive government regulation"
          ],
          correctIndex: 2,
          explanation: "Long-term funding is explicitly identified as a challenge."
        },
        {
          id: "i3",
          prompt: "What is essential for continued success?",
          options: [
            "Community participation",
            "Private ownership of every garden",
            "Paid professional gardeners",
            "A large admission fee"
          ],
          correctIndex: 0,
          explanation: "The final sentence emphasizes the importance of community participation."
        }
      ]
    }
  },
  {
    id: "viewpoints",
    title: "Part 4 — Reading for Viewpoints",
    description: "Compare opinions and evaluate supporting arguments.",
    practiceSet: {
      id: "celpip-viewpoints-01",
      title: "Reading for Viewpoints — Remote Work",
      exam: "CELPIP General",
      durationSeconds: 600,
      passageTitle: "Should Companies Expand Remote Work?",
      passage: `Remote work continues to generate debate among employers and employees.

Supporters argue that working from home reduces commuting time and gives employees greater flexibility. They also believe companies may save money by maintaining smaller offices.

Critics, however, suggest that remote work can make spontaneous collaboration more difficult. New employees may also find it harder to build relationships with colleagues when they rarely meet in person.

Some organizations have adopted hybrid schedules that combine office and remote work. Advocates of this approach believe it offers flexibility while preserving opportunities for face-to-face collaboration.`,
      questions: [
        {
          id: "v1",
          prompt: "Which benefit is emphasized by remote-work supporters?",
          options: [
            "Longer commutes",
            "Greater employee flexibility",
            "More expensive office space",
            "Mandatory in-person meetings"
          ],
          correctIndex: 1,
          explanation: "Supporters emphasize reduced commuting and greater flexibility."
        },
        {
          id: "v2",
          prompt: "What concern do critics raise?",
          options: [
            "Remote work increases travel costs",
            "Employees cannot use computers at home",
            "Spontaneous collaboration may become harder",
            "Office buildings become larger"
          ],
          correctIndex: 2,
          explanation: "Critics suggest spontaneous collaboration is more difficult when employees work remotely."
        },
        {
          id: "v3",
          prompt: "Why do some organizations prefer hybrid schedules?",
          options: [
            "To eliminate all remote work",
            "To combine flexibility with in-person collaboration",
            "To prevent employees from choosing work locations",
            "To increase commuting requirements"
          ],
          correctIndex: 1,
          explanation: "Hybrid schedules aim to balance flexibility with face-to-face collaboration."
        }
      ]
    }
  }
];
