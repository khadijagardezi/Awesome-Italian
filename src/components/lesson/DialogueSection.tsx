import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dialogue } from "@/data/courseData";

interface Props {
  dialogue: Dialogue;
}

export function DialogueSection({ dialogue }: Props) {
  const [showTranslation, setShowTranslation] = useState(false);

  const speak = (text: string) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "it-IT";
    u.rate = 0.8;
    speechSynthesis.speak(u);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-italia-green-light p-4">
        <h3 className="font-display text-lg font-bold text-foreground">{dialogue.title}</h3>
        <p className="text-sm text-muted-foreground">{dialogue.context}</p>
      </div>

      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={() => setShowTranslation(!showTranslation)}>
          {showTranslation ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
          {showTranslation ? "Hide" : "Show"} Translation
        </Button>
      </div>

      <div className="space-y-3">
        {dialogue.lines.map((line, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
            >
              <div className={`max-w-[80%] rounded-2xl p-4 ${isLeft ? "rounded-tl-sm bg-card border border-border" : "rounded-tr-sm bg-primary/10"}`}>
                <div className="mb-1 flex items-center gap-2">
                  <span className="text-xs font-bold text-primary">{line.speaker}</span>
                  <button onClick={() => speak(line.italian)} className="text-muted-foreground hover:text-primary">
                    <Volume2 className="h-3 w-3" />
                  </button>
                </div>
                <p className="font-medium text-foreground">{line.italian}</p>
                {showTranslation && <p className="mt-1 text-xs text-muted-foreground">{line.english}</p>}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
