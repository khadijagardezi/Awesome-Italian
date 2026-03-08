import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseData } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { Volume2, RotateCcw, ChevronLeft, ChevronRight, Shuffle } from "lucide-react";

export default function Flashcards() {
  const allWords = useMemo(() => courseData.flatMap((l) => l.chapters.flatMap((c) => c.vocabulary)), []);
  const [words, setWords] = useState(allWords);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const shuffle = () => {
    setWords([...allWords].sort(() => Math.random() - 0.5));
    setIndex(0);
    setFlipped(false);
  };

  const speak = (text: string) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "it-IT";
    u.rate = 0.8;
    speechSynthesis.speak(u);
  };

  const word = words[index];

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-2xl text-center">
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Flashcards</h1>
        <p className="mb-8 text-muted-foreground">
          {words.length} words · Card {index + 1} of {words.length}
        </p>

        <div className="relative mx-auto mb-8 h-64 w-full max-w-md cursor-pointer perspective-1000" onClick={() => setFlipped(!flipped)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${index}-${flipped}`}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex h-full flex-col items-center justify-center rounded-2xl border-2 p-8 shadow-lg ${
                flipped ? "border-secondary bg-secondary/5" : "border-primary bg-primary/5"
              }`}
            >
              {!flipped ? (
                <>
                  <span className="mb-2 text-xs font-medium text-muted-foreground">ITALIANO</span>
                  <span className="font-display text-3xl font-bold text-foreground">{word.italian}</span>
                  <button onClick={(e) => { e.stopPropagation(); speak(word.italian); }} className="mt-4 rounded-full p-2 text-primary hover:bg-primary/10">
                    <Volume2 className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <>
                  <span className="mb-2 text-xs font-medium text-muted-foreground">ENGLISH</span>
                  <span className="font-display text-3xl font-bold text-foreground">{word.english}</span>
                  <p className="mt-3 text-sm italic text-muted-foreground">"{word.example}"</p>
                  <p className="text-xs text-muted-foreground">{word.exampleTranslation}</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="mb-6 text-xs text-muted-foreground">Tap to flip</p>

        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" size="icon" onClick={() => { setIndex(Math.max(0, index - 1)); setFlipped(false); }} disabled={index === 0}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={shuffle}>
            <Shuffle className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => { setIndex(0); setFlipped(false); }}>
            <RotateCcw className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => { setIndex(Math.min(words.length - 1, index + 1)); setFlipped(false); }} disabled={index === words.length - 1}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
