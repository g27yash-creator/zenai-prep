import { Suspense } from "react";
import { notFound } from "next/navigation";
import ReadingEngine from "@/components/practice/reading-engine";
import { celpipReadingLibrary } from "@/lib/practice/celpip-reading-library";

type Props = {
  params: Promise<{ part: string }>;
};

export function generateStaticParams() {
  return celpipReadingLibrary.map((part) => ({
    part: part.id,
  }));
}

export default function ReadingPartPage({ params }: Props) {
  return (
    <Suspense fallback={<main className="p-8">Loading practice...</main>}>
      <ReadingPartContent params={params} />
    </Suspense>
  );
}

async function ReadingPartContent({ params }: Props) {
  const { part } = await params;

  const selected = celpipReadingLibrary.find(
    (item) => item.id === part
  );

  if (!selected) notFound();

  return <ReadingEngine practiceSet={selected.practiceSet} />;
}
