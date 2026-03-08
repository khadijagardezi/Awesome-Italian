import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Trophy } from "lucide-react";
import type { Exercise } from "@/data/courseData";

interface Props {
  exercises: Exercise[];
  onComplete: (score: number) => void;
}

export function ExerciseSection({ exercises, onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  const ex = exercises[current];

  const checkAnswer = () => {
    const isCorrect = ex.type === "translate"
      ? userInput.toLowerCase().trim() === ex.answer.toLowerCase().trim()
      : selected === ex.answer;
    if (isCorrect) setCorrect((c) => c + 1);
    setChecked(true);
  };

  const next = () => {
    if (current < exercises.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setUserInput("");
      setChecked(false);
    } else {
      const finalScore = Math.round(((correct + (checked && (ex.type === "translate" ? userInput.toLowerCase().trim() === ex.answer.toLowerCase().trim() : selected === ex.answer) ? 0 : 0)) / exercises.length) * 100);
      setFinished(true);
      onComplete(finalScore);
    }
  };

  if (finished) {
    const score = Math.round((correct / exercises.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center rounded-2xl border border-border bg-card p-12 text-center">
        <Trophy className="mb-4 h-16 w-16 text-accent" />
        <h2 className="mb-2 font-display text-3xl font-bold text-foreground">Chapter Complete!</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          You scored <span className="font-bold text-primary">{correct}/{exercises.length}</span> ({score}%)
        </p>
        <Button onClick={() => { setCurrent(0); setCorrect(0); setFinished(false); setChecked(false); setSelected(null); setUserInput(""); }}>
          Try Again
        </Button>
      </motion.div>
    );
  }

  const isCorrectAnswer = ex.type === "translate"
    ? userInput.toLowerCase().trim() === ex.answer.toLowerCase().trim()
    : selected === ex.answer;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Question {current + 1} of {exercises.length}</span>
        <span>{correct} correct</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${((current + 1) / exercises.length) * 100}%` }} />
      </div>

      <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-xl border border-border bg-card p-6">
        <span className="mb-2 inline-block rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground capitalize">{ex.type.replace("-", " ")}</span>
        <h3 className="mb-4 font-display text-lg font-semibold text-foreground">{ex.question}</h3>

        {(ex.type === "mcq" || ex.type === "fill-blank") && ex.options && (
          <div className="grid gap-2 sm:grid-cols-2">
            {ex.options.map((opt) => {
              let style = "border border-border bg-background text-foreground hover:border-primary";
              if (checked) {
                if (opt === ex.answer) style = "border-2 border-secondary bg-secondary/10 text-secondary";
                else if (opt === selected && opt !== ex.answer) style = "border-2 border-destructive bg-destructive/10 text-destructive";
              } else if (opt === selected) {
                style = "border-2 border-primary bg-primary/10 text-primary";
              }
              return (
                <button
                  key={opt}
                  onClick={() => !checked && setSelected(opt)}
                  className={`rounded-lg p-3 text-left text-sm font-medium transition-all ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        )}

        {ex.type === "translate" && (
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={checked}
            placeholder="Type your translation..."
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        )}

        {ex.type === "matching" && ex.pairs && (
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">Match these pairs:</p>
            <div className="grid gap-2">
              {ex.pairs.map((p) => (
                <div key={p.left} className="flex items-center gap-4 rounded-lg border border-border bg-background p-3">
                  <span className="font-semibold text-foreground">{p.left}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-muted-foreground">{p.right}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {checked && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`mt-4 flex items-center gap-2 rounded-lg p-3 ${isCorrectAnswer ? "bg-secondary/10 text-secondary" : "bg-destructive/10 text-destructive"}`}>
            {isCorrectAnswer ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
            <span className="text-sm font-medium">
              {isCorrectAnswer ? "Correct! Bravissimo! 🎉" : `Not quite. The answer is: "${ex.answer}"`}
            </span>
          </motion.div>
        )}
      </motion.div>

      <div className="flex justify-end gap-3">
        {!checked ? (
          <Button onClick={checkAnswer} disabled={!selected && !userInput && ex.type !== "matching"}>
            Check Answer
          </Button>
        ) : (
          <Button onClick={next}>
            {current < exercises.length - 1 ? "Next Question" : "Finish"}
          </Button>
        )}
      </div>
    </div>
  );
}
