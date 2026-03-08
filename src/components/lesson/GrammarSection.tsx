import { motion } from "framer-motion";
import type { GrammarPoint } from "@/data/courseData";

interface Props {
  grammar: GrammarPoint[];
}

export function GrammarSection({ grammar }: Props) {
  return (
    <div className="space-y-8">
      {grammar.map((point, i) => (
        <motion.div
          key={point.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <h3 className="mb-3 font-display text-xl font-bold text-foreground">{point.title}</h3>
          <p className="mb-4 text-muted-foreground leading-relaxed">{point.explanation}</p>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-left font-semibold text-foreground">Italiano 🇮🇹</th>
                  <th className="px-4 py-2 text-left font-semibold text-foreground">English 🇬🇧</th>
                </tr>
              </thead>
              <tbody>
                {point.examples.map((ex, j) => (
                  <tr key={j} className="border-t border-border">
                    <td className="px-4 py-2 font-medium text-foreground">{ex.italian}</td>
                    <td className="px-4 py-2 text-muted-foreground">{ex.english}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
