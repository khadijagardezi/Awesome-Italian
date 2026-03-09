import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { courseData } from "@/data/courseData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Glossary() {
  const [search, setSearch] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  const allWords = useMemo(() => {
    const words = courseData.flatMap((l) =>
      l.chapters.flatMap((c) => c.vocabulary)
    );
    const seen = new Set<string>();
    return words.filter((w) => {
      if (seen.has(w.italian)) return false;
      seen.add(w.italian);
      return true;
    }).sort((a, b) => a.italian.localeCompare(b.italian));
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return allWords;
    const q = search.toLowerCase();
    return allWords.filter(
      (w) =>
        w.italian.toLowerCase().includes(q) ||
        w.english.toLowerCase().includes(q)
    );
  }, [allWords, search]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    for (const w of filtered) {
      const letter = w.italian[0].toUpperCase();
      (map[letter] ??= []).push(w);
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  // Reset index when search changes or goes out of bounds
  const safeIndex = Math.min(letterIndex, Math.max(grouped.length - 1, 0));
  const currentGroup = grouped[safeIndex];

  const speak = (text: string) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "it-IT";
    u.rate = 0.85;
    speechSynthesis.speak(u);
  };

  const goNext = () => setLetterIndex((i) => Math.min(i + 1, grouped.length - 1));
  const goPrev = () => setLetterIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Glossary</h1>
        <p className="mb-8 text-muted-foreground">
          All {allWords.length} Italian words in one place.
        </p>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search Italian or English..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setLetterIndex(0); }}
            className="pl-10"
          />
        </div>

        {/* Letter navigation pills */}
        {grouped.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-1.5">
            {grouped.map(([letter], i) => (
              <button
                key={letter}
                onClick={() => setLetterIndex(i)}
                className={`h-8 w-8 rounded-lg text-sm font-bold transition-colors ${
                  i === safeIndex
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        )}

        {!currentGroup ? (
          <p className="text-center text-muted-foreground">No words found.</p>
        ) : (
          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-primary">{currentGroup[0]}</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {currentGroup[1].map((word, i) => (
                <motion.div
                  key={word.italian}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card p-3 transition-all hover:border-primary/50 hover:shadow-sm"
                >
                  <div className="min-w-0 flex-1">
                    <span className="font-display font-bold text-foreground">{word.italian}</span>
                    <span className="ml-2 text-sm text-muted-foreground">— {word.english}</span>
                  </div>
                  <button
                    onClick={() => speak(word.italian)}
                    className="ml-2 shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    <Volume2 className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Prev / Next navigation */}
        {grouped.length > 1 && (
          <div className="mt-8 flex items-center justify-between">
            <Button variant="outline" disabled={safeIndex === 0} onClick={goPrev}>
              <ChevronLeft className="mr-1 h-4 w-4" /> Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              {safeIndex + 1} / {grouped.length}
            </span>
            <Button variant="outline" disabled={safeIndex === grouped.length - 1} onClick={goNext}>
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
