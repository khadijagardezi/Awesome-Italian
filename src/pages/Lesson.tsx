import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courseData, type Chapter } from "@/data/courseData";
import { useProgress } from "@/hooks/useProgress";
import { Button } from "@/components/ui/button";
import { VocabularySection } from "@/components/lesson/VocabularySection";
import { GrammarSection } from "@/components/lesson/GrammarSection";
import { DialogueSection } from "@/components/lesson/DialogueSection";
import { ExerciseSection } from "@/components/lesson/ExerciseSection";
import { ArrowLeft, ArrowRight, BookOpen, MessageSquare, PenTool, Languages } from "lucide-react";

const tabs = [
  { id: "vocab", label: "Vocabulary", icon: BookOpen },
  { id: "grammar", label: "Grammar", icon: Languages },
  { id: "dialogue", label: "Dialogue", icon: MessageSquare },
  { id: "exercises", label: "Exercises", icon: PenTool },
] as const;

type TabId = typeof tabs[number]["id"];

export default function Lesson() {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { completeChapter, saveExerciseScore, isChapterCompleted } = useProgress();
  const [activeTab, setActiveTab] = useState<TabId>("vocab");

  let chapter: Chapter | undefined;
  for (const level of courseData) {
    chapter = level.chapters.find((c) => c.id === chapterId);
    if (chapter) break;
  }

  if (!chapter) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Chapter not found.</p>
      </div>
    );
  }

  const handleComplete = (score?: number) => {
    if (score !== undefined) saveExerciseScore(chapter!.id, score);
    completeChapter(chapter!.id);
  };

  const tabIndex = tabs.findIndex((t) => t.id === activeTab);
  const goNext = () => tabIndex < tabs.length - 1 && setActiveTab(tabs[tabIndex + 1].id);
  const goPrev = () => tabIndex > 0 && setActiveTab(tabs[tabIndex - 1].id);

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-4xl">
        <button onClick={() => navigate(-1)} className="mb-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{chapter.icon}</span>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">{chapter.title}</h1>
              <p className="text-sm text-muted-foreground">{chapter.titleIt} · {chapter.description}</p>
            </div>
            {isChapterCompleted(chapter.id) && (
              <span className="ml-auto rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">✓ Completed</span>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto rounded-xl bg-muted p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "vocab" && <VocabularySection vocabulary={chapter.vocabulary} />}
            {activeTab === "grammar" && <GrammarSection grammar={chapter.grammar} />}
            {activeTab === "dialogue" && <DialogueSection dialogue={chapter.dialogue} />}
            {activeTab === "exercises" && <ExerciseSection exercises={chapter.exercises} onComplete={handleComplete} />}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={goPrev} disabled={tabIndex === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button onClick={goNext} disabled={tabIndex === tabs.length - 1}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
