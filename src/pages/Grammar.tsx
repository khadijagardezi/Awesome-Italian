import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface GrammarTopic {
  title: string;
  level: string;
  sections: {
    heading: string;
    content: string;
    table?: { headers: string[]; rows: string[][] };
    examples?: { italian: string; english: string }[];
  }[];
}

const grammarTopics: GrammarTopic[] = [
  {
    title: "Articles (Articoli)",
    level: "A1",
    sections: [
      {
        heading: "Definite Articles (The)",
        content: "Italian has different words for 'the' depending on gender, number, and the first letter of the following word.",
        table: {
          headers: ["", "Masculine", "Feminine"],
          rows: [
            ["Singular", "il / lo / l'", "la / l'"],
            ["Plural", "i / gli", "le"],
          ],
        },
        examples: [
          { italian: "il libro", english: "the book" },
          { italian: "lo studente", english: "the student" },
          { italian: "l'amico", english: "the friend (m)" },
          { italian: "la casa", english: "the house" },
          { italian: "i libri", english: "the books" },
          { italian: "le case", english: "the houses" },
        ],
      },
      {
        heading: "Indefinite Articles (A/An)",
        content: "Like 'a' or 'an' in English, these change based on gender and first letter.",
        table: {
          headers: ["", "Masculine", "Feminine"],
          rows: [["Singular", "un / uno", "una / un'"]],
        },
        examples: [
          { italian: "un ragazzo", english: "a boy" },
          { italian: "uno zaino", english: "a backpack" },
          { italian: "una ragazza", english: "a girl" },
          { italian: "un'amica", english: "a friend (f)" },
        ],
      },
    ],
  },
  {
    title: "Nouns & Gender (Sostantivi)",
    level: "A1",
    sections: [
      {
        heading: "Gender Rules",
        content: "All Italian nouns are either masculine or feminine. Most nouns ending in -o are masculine, and most ending in -a are feminine. Nouns ending in -e can be either.",
        examples: [
          { italian: "ragazzo → ragazza", english: "boy → girl" },
          { italian: "libro (m)", english: "book" },
          { italian: "casa (f)", english: "house" },
          { italian: "studente (m) / stazione (f)", english: "-e can be either" },
        ],
      },
      {
        heading: "Plural Formation",
        content: "Change the ending to make nouns plural.",
        table: {
          headers: ["Singular ending", "Plural ending", "Example"],
          rows: [
            ["-o (m)", "-i", "libro → libri"],
            ["-a (f)", "-e", "casa → case"],
            ["-e (m/f)", "-i", "studente → studenti"],
          ],
        },
      },
    ],
  },
  {
    title: "Subject Pronouns (Pronomi)",
    level: "A1",
    sections: [
      {
        heading: "Personal Pronouns",
        content: "Italian often drops the subject pronoun since the verb form indicates the subject. But it's important to know them.",
        table: {
          headers: ["Italian", "English"],
          rows: [
            ["io", "I"],
            ["tu", "you (informal)"],
            ["lui / lei / Lei", "he / she / You (formal)"],
            ["noi", "we"],
            ["voi", "you (plural)"],
            ["loro", "they"],
          ],
        },
      },
    ],
  },
  {
    title: "Present Tense (Presente)",
    level: "A1",
    sections: [
      {
        heading: "-ARE Verbs (e.g. parlare — to speak)",
        content: "The largest group of Italian verbs. Remove -are and add the endings.",
        table: {
          headers: ["Pronoun", "Ending", "Parlare"],
          rows: [
            ["io", "-o", "parlo"],
            ["tu", "-i", "parli"],
            ["lui/lei", "-a", "parla"],
            ["noi", "-iamo", "parliamo"],
            ["voi", "-ate", "parlate"],
            ["loro", "-ano", "parlano"],
          ],
        },
      },
      {
        heading: "-ERE Verbs (e.g. scrivere — to write)",
        content: "Remove -ere and add the endings.",
        table: {
          headers: ["Pronoun", "Ending", "Scrivere"],
          rows: [
            ["io", "-o", "scrivo"],
            ["tu", "-i", "scrivi"],
            ["lui/lei", "-e", "scrive"],
            ["noi", "-iamo", "scriviamo"],
            ["voi", "-ete", "scrivete"],
            ["loro", "-ono", "scrivono"],
          ],
        },
      },
      {
        heading: "-IRE Verbs (e.g. dormire — to sleep)",
        content: "Remove -ire and add the endings.",
        table: {
          headers: ["Pronoun", "Ending", "Dormire"],
          rows: [
            ["io", "-o", "dormo"],
            ["tu", "-i", "dormi"],
            ["lui/lei", "-e", "dorme"],
            ["noi", "-iamo", "dormiamo"],
            ["voi", "-ite", "dormite"],
            ["loro", "-ono", "dormono"],
          ],
        },
      },
    ],
  },
  {
    title: "Essere & Avere (To Be & To Have)",
    level: "A1",
    sections: [
      {
        heading: "Essere (to be)",
        content: "The most important irregular verb in Italian.",
        table: {
          headers: ["Pronoun", "Essere"],
          rows: [
            ["io", "sono"],
            ["tu", "sei"],
            ["lui/lei", "è"],
            ["noi", "siamo"],
            ["voi", "siete"],
            ["loro", "sono"],
          ],
        },
        examples: [
          { italian: "Io sono italiano.", english: "I am Italian." },
          { italian: "Lei è una studentessa.", english: "She is a student." },
        ],
      },
      {
        heading: "Avere (to have)",
        content: "Used for possession and in many expressions (age, hunger, etc.).",
        table: {
          headers: ["Pronoun", "Avere"],
          rows: [
            ["io", "ho"],
            ["tu", "hai"],
            ["lui/lei", "ha"],
            ["noi", "abbiamo"],
            ["voi", "avete"],
            ["loro", "hanno"],
          ],
        },
        examples: [
          { italian: "Ho venti anni.", english: "I am twenty years old. (lit. I have 20 years)" },
          { italian: "Hai fame?", english: "Are you hungry? (lit. Do you have hunger?)" },
        ],
      },
    ],
  },
  {
    title: "Prepositions (Preposizioni)",
    level: "A2",
    sections: [
      {
        heading: "Simple Prepositions",
        content: "The most common Italian prepositions.",
        table: {
          headers: ["Italian", "English", "Example"],
          rows: [
            ["di", "of / from", "il libro di Marco"],
            ["a", "to / at", "vado a Roma"],
            ["da", "from / since / at (someone's)", "vengo da Milano"],
            ["in", "in / to", "vivo in Italia"],
            ["con", "with", "parlo con te"],
            ["su", "on / about", "il gatto è su tavolo"],
            ["per", "for / through", "questo è per te"],
            ["tra/fra", "between / among / in (time)", "arrivo tra un'ora"],
          ],
        },
      },
    ],
  },
  {
    title: "Adjective Agreement (Aggettivi)",
    level: "A1",
    sections: [
      {
        heading: "Agreement Rules",
        content: "Italian adjectives must agree in gender and number with the noun they describe.",
        table: {
          headers: ["", "Masculine", "Feminine"],
          rows: [
            ["Singular", "-o / -e", "-a / -e"],
            ["Plural", "-i", "-e / -i"],
          ],
        },
        examples: [
          { italian: "il ragazzo alto → i ragazzi alti", english: "the tall boy → the tall boys" },
          { italian: "la ragazza alta → le ragazze alte", english: "the tall girl → the tall girls" },
          { italian: "il problema grande → i problemi grandi", english: "the big problem → the big problems" },
        ],
      },
    ],
  },
];

function TopicCard({ topic }: { topic: GrammarTopic }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-xl border border-border bg-card"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-muted/50"
      >
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">{topic.level}</span>
          <h3 className="font-display text-lg font-bold text-foreground">{topic.title}</h3>
        </div>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="space-y-6 border-t border-border p-5">
              {topic.sections.map((section) => (
                <div key={section.heading}>
                  <h4 className="mb-2 font-display font-semibold text-foreground">{section.heading}</h4>
                  <p className="mb-3 text-sm text-muted-foreground">{section.content}</p>

                  {section.table && (
                    <div className="mb-3 overflow-x-auto rounded-lg border border-border">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-muted">
                            {section.table.headers.map((h) => (
                              <th key={h} className="px-3 py-2 text-left font-medium text-foreground">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, i) => (
                            <tr key={i} className="border-t border-border">
                              {row.map((cell, j) => (
                                <td key={j} className={`px-3 py-2 ${j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.examples && (
                    <div className="space-y-1">
                      {section.examples.map((ex) => (
                        <div key={ex.italian} className="flex gap-2 text-sm">
                          <span className="font-medium text-foreground">{ex.italian}</span>
                          <span className="text-muted-foreground">— {ex.english}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Grammar() {
  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Grammar Reference</h1>
        <p className="mb-10 text-muted-foreground">
          Essential Italian grammar rules with tables and examples. Tap any topic to expand.
        </p>

        <div className="space-y-3">
          {grammarTopics.map((topic) => (
            <TopicCard key={topic.title} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
}
