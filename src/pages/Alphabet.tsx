import { useState } from "react";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";

const alphabet = [
  { letter: "A a", name: "a", sound: "ah", example: "amore (love)" },
  { letter: "B b", name: "bi", sound: "bee", example: "bello (beautiful)" },
  { letter: "C c", name: "ci", sound: "chee", example: "casa (house)" },
  { letter: "D d", name: "di", sound: "dee", example: "donna (woman)" },
  { letter: "E e", name: "e", sound: "eh", example: "estate (summer)" },
  { letter: "F f", name: "effe", sound: "ef-feh", example: "fiore (flower)" },
  { letter: "G g", name: "gi", sound: "jee", example: "gatto (cat)" },
  { letter: "H h", name: "acca", sound: "ahk-kah", example: "hotel (hotel)" },
  { letter: "I i", name: "i", sound: "ee", example: "isola (island)" },
  { letter: "L l", name: "elle", sound: "el-leh", example: "luna (moon)" },
  { letter: "M m", name: "emme", sound: "em-meh", example: "mare (sea)" },
  { letter: "N n", name: "enne", sound: "en-neh", example: "notte (night)" },
  { letter: "O o", name: "o", sound: "oh", example: "oro (gold)" },
  { letter: "P p", name: "pi", sound: "pee", example: "pane (bread)" },
  { letter: "Q q", name: "cu", sound: "koo", example: "quando (when)" },
  { letter: "R r", name: "erre", sound: "er-reh", example: "rosa (rose)" },
  { letter: "S s", name: "esse", sound: "es-seh", example: "sole (sun)" },
  { letter: "T t", name: "ti", sound: "tee", example: "tempo (time)" },
  { letter: "U u", name: "u", sound: "oo", example: "uomo (man)" },
  { letter: "V v", name: "vu", sound: "voo", example: "vita (life)" },
  { letter: "Z z", name: "zeta", sound: "dzeh-tah", example: "zero (zero)" },
];

const foreign = [
  { letter: "J j", name: "i lunga", sound: "ee loon-gah", example: "jeans" },
  { letter: "K k", name: "cappa", sound: "kahp-pah", example: "kiwi" },
  { letter: "W w", name: "doppia vu", sound: "dop-pyah voo", example: "web" },
  { letter: "X x", name: "ics", sound: "eeks", example: "xilofono" },
  { letter: "Y y", name: "ipsilon", sound: "eep-see-lon", example: "yogurt" },
];

const pronunciationRules = [
  { rule: "C + e/i", pronunciation: "ch", examples: ["cena (cheh-nah) — dinner", "cinema (chee-neh-mah)"] },
  { rule: "C + a/o/u", pronunciation: "k", examples: ["casa (kah-sah) — house", "cuore (kwoh-reh) — heart"] },
  { rule: "CH", pronunciation: "k (before e/i)", examples: ["che (keh) — what", "chiave (kyah-veh) — key"] },
  { rule: "G + e/i", pronunciation: "j", examples: ["gelato (jeh-lah-toh)", "giorno (jor-noh) — day"] },
  { rule: "G + a/o/u", pronunciation: "g (hard)", examples: ["gatto (gaht-toh) — cat", "gusto (goo-stoh)"] },
  { rule: "GH", pronunciation: "g (hard, before e/i)", examples: ["spaghetti (spah-get-tee)", "ghiaccio (gyahch-choh)"] },
  { rule: "GN", pronunciation: "ny", examples: ["gnocchi (nyok-kee)", "bagno (bah-nyoh) — bath"] },
  { rule: "GL + i", pronunciation: "ly", examples: ["famiglia (fah-mee-lyah) — family", "figlio (fee-lyoh) — son"] },
  { rule: "SC + e/i", pronunciation: "sh", examples: ["pesce (peh-sheh) — fish", "scienza (shen-tsah)"] },
  { rule: "Double consonants", pronunciation: "longer/stronger", examples: ["notte (noht-teh) — night", "pizza (peet-tsah)"] },
];

export default function Alphabet() {
  const [playing, setPlaying] = useState<string | null>(null);

  const speak = (text: string) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "it-IT";
    u.rate = 0.6;
    setPlaying(text);
    u.onend = () => setPlaying(null);
    speechSynthesis.speak(u);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Italian Alphabet</h1>
        <p className="mb-10 text-muted-foreground">
          The Italian alphabet has 21 letters (+ 5 foreign letters). Tap any letter to hear it.
        </p>

        {/* Main Alphabet */}
        <h2 className="mb-4 font-display text-xl font-bold text-foreground">21 Standard Letters</h2>
        <div className="mb-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
          {alphabet.map((item, i) => (
            <motion.button
              key={item.letter}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.02 }}
              onClick={() => speak(item.name)}
              className={`group flex flex-col items-center rounded-xl border-2 p-3 transition-all hover:border-primary hover:shadow-md ${
                playing === item.name ? "border-primary bg-primary/5" : "border-border bg-card"
              }`}
            >
              <span className="font-display text-2xl font-bold text-foreground">{item.letter}</span>
              <span className="text-xs font-medium text-primary">{item.name}</span>
              <span className="text-[10px] text-muted-foreground">/{item.sound}/</span>
            </motion.button>
          ))}
        </div>

        {/* Foreign Letters */}
        <h2 className="mb-4 font-display text-xl font-bold text-foreground">5 Foreign Letters</h2>
        <p className="mb-4 text-sm text-muted-foreground">Used in borrowed words only.</p>
        <div className="mb-12 grid grid-cols-3 gap-3 sm:grid-cols-5">
          {foreign.map((item, i) => (
            <motion.button
              key={item.letter}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.02 }}
              onClick={() => speak(item.name)}
              className={`group flex flex-col items-center rounded-xl border-2 border-dashed p-3 transition-all hover:border-secondary hover:shadow-md ${
                playing === item.name ? "border-secondary bg-secondary/5" : "border-border bg-card"
              }`}
            >
              <span className="font-display text-2xl font-bold text-foreground">{item.letter}</span>
              <span className="text-xs font-medium text-secondary">{item.name}</span>
              <span className="text-[10px] text-muted-foreground">/{item.sound}/</span>
            </motion.button>
          ))}
        </div>

        {/* Pronunciation Rules */}
        <h2 className="mb-4 font-display text-xl font-bold text-foreground">Key Pronunciation Rules</h2>
        <p className="mb-6 text-sm text-muted-foreground">Italian pronunciation is very consistent — learn these rules and you can read almost anything!</p>
        <div className="space-y-3">
          {pronunciationRules.map((rule, i) => (
            <motion.div
              key={rule.rule}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="rounded-lg bg-primary/10 px-3 py-1 font-display text-sm font-bold text-primary">
                  {rule.rule}
                </span>
                <span className="text-sm text-muted-foreground">→ sounds like <strong className="text-foreground">{rule.pronunciation}</strong></span>
              </div>
              <div className="flex flex-wrap gap-2">
                {rule.examples.map((ex) => (
                  <span key={ex} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">{ex}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
