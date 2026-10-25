export type MultipleChoiceQuestion = {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type ReadingPracticeSet = {
  id: string;
  title: string;
  exam: string;
  durationSeconds: number;
  passageTitle: string;
  passage: string;
  questions: MultipleChoiceQuestion[];
};
