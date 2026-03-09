import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, Search } from "lucide-react";
import { courseData } from "@/data/courseData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Glossary() {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    setLimit(20);
  }, [search]);

  const allWords = useMemo(() => {
    const words = courseData.flatMap((l) =>
      l.chapters.flatMap((c) => c.vocabulary)
    );
    // Deduplicate by italian word
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

  const speak = (text: string) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "it-IT";
    u.rate = 0.85;
    speechSynthesis.speak(u);
  };

  // Group by first letter
  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    const displayedWords = filtered.slice(0, limit);
    for (const w of displayedWords) {
      const letter = w.italian[0].toUpperCase();
      (map[letter] ??= []).push(w);
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered, limit]);

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
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {grouped.length === 0 && (
          <p className="text-center text-muted-foreground">No words found.</p>
        )}

        <div className="space-y-8">
          {grouped.map(([letter, words]) => (
            <section key={letter}>
              <h2 className="mb-3 font-display text-2xl font-bold text-primary">{letter}</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                {words.map((word, i) => (
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
          ))}
        </div>

        {limit < filtered.length && (
          <div className="mt-8 flex justify-center">
            <Button variant="outline" onClick={() => setLimit(l => l + 20)}>
              Show 20 more
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
