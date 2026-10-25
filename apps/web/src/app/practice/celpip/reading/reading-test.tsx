import ReadingEngine from "@/components/practice/reading-engine";
import { celpipReadingSet } from "@/lib/practice/celpip-reading";

export default function ReadingTest() {
  return <ReadingEngine practiceSet={celpipReadingSet} />;
}
