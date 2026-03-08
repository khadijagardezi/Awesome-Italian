import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import type { VocabWord } from "@/data/courseData";

interface Props {
  vocabulary: VocabWord[];
}

export function VocabularySection({ vocabulary }: Props) {
  const [playing, setPlaying] = useState<string | null>(null);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "it-IT";
    utterance.rate = 0.85;
    setPlaying(text);
    utterance.onend = () => setPlaying(null);
    speechSynthesis.speak(utterance);
  };

  const categories = [...new Set(vocabulary.map((v) => v.category))];

  return (
    <div className="space-y-8">
      {categories.map((cat) => (
        <div key={cat}>
          <h3 className="mb-3 font-display text-lg font-semibold capitalize text-foreground">{cat}</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {vocabulary
              .filter((v) => v.category === cat)
              .map((word, i) => (
                <motion.div
                  key={word.italian}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <span className="font-display text-lg font-bold text-foreground">{word.italian}</span>
                      <span className="ml-2 text-sm text-muted-foreground">— {word.english}</span>
                    </div>
                    <button
                      onClick={() => speak(word.italian)}
                      className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      <Volume2 className={`h-4 w-4 ${playing === word.italian ? "text-primary" : ""}`} />
                    </button>
                  </div>
                  <p className="text-sm italic text-muted-foreground">"{word.example}"</p>
                  <p className="text-xs text-muted-foreground">{word.exampleTranslation}</p>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
