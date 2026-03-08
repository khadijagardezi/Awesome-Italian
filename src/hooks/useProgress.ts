import { useState, useEffect } from "react";

interface Progress {
  completedChapters: string[];
  vocabularyReviewed: string[];
  exerciseScores: Record<string, number>;
  streak: number;
  lastActive: string;
}

const defaultProgress: Progress = {
  completedChapters: [],
  vocabularyReviewed: [],
  exerciseScores: {},
  streak: 0,
  lastActive: new Date().toISOString(),
};

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    const saved = localStorage.getItem("italiano-progress");
    return saved ? JSON.parse(saved) : defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem("italiano-progress", JSON.stringify(progress));
  }, [progress]);

  const completeChapter = (chapterId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedChapters: [...new Set([...prev.completedChapters, chapterId])],
      lastActive: new Date().toISOString(),
    }));
  };

  const saveExerciseScore = (chapterId: string, score: number) => {
    setProgress((prev) => ({
      ...prev,
      exerciseScores: { ...prev.exerciseScores, [chapterId]: Math.max(prev.exerciseScores[chapterId] || 0, score) },
    }));
  };

  const isChapterCompleted = (chapterId: string) => progress.completedChapters.includes(chapterId);

  const getLevelProgress = (levelId: string, totalChapters: number) => {
    const completed = progress.completedChapters.filter((c) => c.startsWith(levelId)).length;
    return totalChapters > 0 ? Math.round((completed / totalChapters) * 100) : 0;
  };

  return { progress, completeChapter, saveExerciseScore, isChapterCompleted, getLevelProgress };
}
