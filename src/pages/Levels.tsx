import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { courseData } from "@/data/courseData";
import { useProgress } from "@/hooks/useProgress";
import { CheckCircle2, Lock, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Levels() {
  const { isChapterCompleted, getLevelProgress } = useProgress();
  const { levelId } = useParams();

  const displayedLevels = levelId 
    ? courseData.filter(l => l.id === levelId)
    : courseData;

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        {levelId && (
          <Button variant="ghost" asChild className="mb-6 -ml-4">
            <Link to="/levels">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all levels
            </Link>
          </Button>
        )}
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Course Levels</h1>
        <p className="mb-10 text-muted-foreground">Progress through A1 → A2 → B1 and become conversational in Italian.</p>

        <div className="space-y-12">
          {displayedLevels.map((level) => {
            const pct = getLevelProgress(level.id, level.chapters.length);
            return (
              <motion.section
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">{level.name}</span>
                  <h2 className="font-display text-2xl font-bold text-foreground">{level.label}</h2>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">{level.description}</p>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{pct}%</span>
                </div>

                <div className="space-y-3">
                  {level.chapters.map((chapter) => {
                    const done = isChapterCompleted(chapter.id);
                    return (
                      <Link
                        key={chapter.id}
                        to={`/lesson/${chapter.id}`}
                        className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
                      >
                        <span className="text-2xl">{chapter.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary">{chapter.title}</h3>
                          <p className="text-xs text-muted-foreground">{chapter.titleIt} · {chapter.description}</p>
                        </div>
                        {done ? (
                          <CheckCircle2 className="h-6 w-6 text-secondary" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
