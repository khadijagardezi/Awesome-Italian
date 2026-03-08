export interface VocabWord {
  italian: string;
  english: string;
  example: string;
  exampleTranslation: string;
  category: string;
}

export interface GrammarPoint {
  title: string;
  explanation: string;
  examples: { italian: string; english: string }[];
}

export interface Dialogue {
  title: string;
  context: string;
  lines: { speaker: string; italian: string; english: string }[];
}

export interface Exercise {
  type: "mcq" | "fill-blank" | "matching" | "reorder" | "translate";
  question: string;
  options?: string[];
  answer: string;
  pairs?: { left: string; right: string }[];
}

export interface Chapter {
  id: string;
  title: string;
  titleIt: string;
  description: string;
  icon: string;
  vocabulary: VocabWord[];
  grammar: GrammarPoint[];
  dialogue: Dialogue;
  exercises: Exercise[];
}

export interface Level {
  id: string;
  name: string;
  label: string;
  description: string;
  color: string;
  chapters: Chapter[];
}

export const courseData: Level[] = [
  {
    id: "a1",
    name: "A1",
    label: "Absolute Beginner",
    description: "Start from zero. Learn greetings, introductions, numbers, and basic survival Italian.",
    color: "primary",
    chapters: [
      {
        id: "a1-ch1",
        title: "Greetings & Introductions",
        titleIt: "Saluti e Presentazioni",
        description: "Learn to say hello, introduce yourself, and basic pleasantries.",
        icon: "👋",
        vocabulary: [
          { italian: "Ciao", english: "Hello / Bye", example: "Ciao, come stai?", exampleTranslation: "Hi, how are you?", category: "greetings" },
          { italian: "Buongiorno", english: "Good morning", example: "Buongiorno, signora!", exampleTranslation: "Good morning, ma'am!", category: "greetings" },
          { italian: "Buonasera", english: "Good evening", example: "Buonasera a tutti.", exampleTranslation: "Good evening, everyone.", category: "greetings" },
          { italian: "Arrivederci", english: "Goodbye (formal)", example: "Arrivederci, professore.", exampleTranslation: "Goodbye, professor.", category: "greetings" },
          { italian: "Mi chiamo", english: "My name is", example: "Mi chiamo Marco.", exampleTranslation: "My name is Marco.", category: "introductions" },
          { italian: "Piacere", english: "Nice to meet you", example: "Piacere di conoscerti!", exampleTranslation: "Nice to meet you!", category: "introductions" },
          { italian: "Come stai?", english: "How are you? (informal)", example: "Ciao! Come stai?", exampleTranslation: "Hi! How are you?", category: "greetings" },
          { italian: "Bene, grazie", english: "Fine, thanks", example: "Sto bene, grazie.", exampleTranslation: "I'm fine, thanks.", category: "greetings" },
          { italian: "Sì", english: "Yes", example: "Sì, sono italiano.", exampleTranslation: "Yes, I am Italian.", category: "basics" },
          { italian: "No", english: "No", example: "No, grazie.", exampleTranslation: "No, thank you.", category: "basics" },
          { italian: "Per favore", english: "Please", example: "Un caffè, per favore.", exampleTranslation: "A coffee, please.", category: "basics" },
          { italian: "Grazie", english: "Thank you", example: "Grazie mille!", exampleTranslation: "Thank you very much!", category: "basics" },
        ],
        grammar: [
          {
            title: "Subject Pronouns",
            explanation: "Italian has subject pronouns similar to English, but they're often dropped because the verb ending tells you who's doing the action.",
            examples: [
              { italian: "Io sono Marco.", english: "I am Marco." },
              { italian: "Tu sei americana?", english: "Are you American?" },
              { italian: "Lui è italiano.", english: "He is Italian." },
              { italian: "Lei è studentessa.", english: "She is a student." },
            ],
          },
          {
            title: "Essere (To Be) – Present Tense",
            explanation: "'Essere' is one of the most important verbs. Like English 'to be', it's irregular and must be memorized.",
            examples: [
              { italian: "Io sono", english: "I am" },
              { italian: "Tu sei", english: "You are" },
              { italian: "Lui/Lei è", english: "He/She is" },
              { italian: "Noi siamo", english: "We are" },
              { italian: "Voi siete", english: "You (all) are" },
              { italian: "Loro sono", english: "They are" },
            ],
          },
        ],
        dialogue: {
          title: "Meeting Someone New",
          context: "At a café in Rome, two people meet for the first time.",
          lines: [
            { speaker: "Marco", italian: "Ciao! Mi chiamo Marco. E tu?", english: "Hi! My name is Marco. And you?" },
            { speaker: "Sarah", italian: "Ciao Marco! Mi chiamo Sarah. Piacere!", english: "Hi Marco! My name is Sarah. Nice to meet you!" },
            { speaker: "Marco", italian: "Piacere! Sei americana?", english: "Nice to meet you! Are you American?" },
            { speaker: "Sarah", italian: "Sì, sono americana. Sono di New York.", english: "Yes, I'm American. I'm from New York." },
            { speaker: "Marco", italian: "Fantastico! Benvenuta a Roma!", english: "Fantastic! Welcome to Rome!" },
            { speaker: "Sarah", italian: "Grazie mille! Roma è bellissima.", english: "Thank you so much! Rome is beautiful." },
          ],
        },
        exercises: [
          { type: "mcq", question: "How do you say 'My name is' in Italian?", options: ["Mi chiamo", "Come stai", "Piacere", "Buongiorno"], answer: "Mi chiamo" },
          { type: "mcq", question: "What does 'Piacere' mean?", options: ["Goodbye", "Please", "Nice to meet you", "Thank you"], answer: "Nice to meet you" },
          { type: "fill-blank", question: "Ciao! ___ stai? (How are you?)", options: ["Come", "Dove", "Quando", "Chi"], answer: "Come" },
          { type: "fill-blank", question: "___ bene, grazie. (I'm fine, thanks)", options: ["Sto", "Sono", "Ho", "Faccio"], answer: "Sto" },
          { type: "translate", question: "Translate: 'Good morning, sir!'", answer: "Buongiorno, signore!" },
          { type: "mcq", question: "Which is the formal way to say goodbye?", options: ["Ciao", "Arrivederci", "A dopo", "Buonanotte"], answer: "Arrivederci" },
          { type: "matching", question: "Match the Italian with the English:", pairs: [{ left: "Grazie", right: "Thank you" }, { left: "Per favore", right: "Please" }, { left: "Ciao", right: "Hello" }, { left: "Sì", right: "Yes" }], answer: "" },
          { type: "fill-blank", question: "Io ___ Marco. (I am Marco)", options: ["sono", "sei", "è", "siamo"], answer: "sono" },
        ],
      },
      {
        id: "a1-ch2",
        title: "Numbers & Ordering",
        titleIt: "Numeri e Ordinare",
        description: "Count from 1 to 100 and order at a café or restaurant.",
        icon: "☕",
        vocabulary: [
          { italian: "Uno", english: "One", example: "Un caffè, per favore.", exampleTranslation: "One coffee, please.", category: "numbers" },
          { italian: "Due", english: "Two", example: "Due gelati, grazie.", exampleTranslation: "Two ice creams, thanks.", category: "numbers" },
          { italian: "Tre", english: "Three", example: "Tre bicchieri d'acqua.", exampleTranslation: "Three glasses of water.", category: "numbers" },
          { italian: "Quattro", english: "Four", example: "Siamo in quattro.", exampleTranslation: "There are four of us.", category: "numbers" },
          { italian: "Cinque", english: "Five", example: "Cinque minuti, per favore.", exampleTranslation: "Five minutes, please.", category: "numbers" },
          { italian: "Il conto", english: "The bill", example: "Il conto, per favore.", exampleTranslation: "The bill, please.", category: "restaurant" },
          { italian: "Vorrei", english: "I would like", example: "Vorrei un cappuccino.", exampleTranslation: "I would like a cappuccino.", category: "ordering" },
          { italian: "Il menù", english: "The menu", example: "Posso avere il menù?", exampleTranslation: "Can I have the menu?", category: "restaurant" },
          { italian: "Acqua", english: "Water", example: "Un'acqua naturale, per favore.", exampleTranslation: "A still water, please.", category: "food" },
          { italian: "Caffè", english: "Coffee", example: "Un caffè espresso.", exampleTranslation: "An espresso coffee.", category: "food" },
        ],
        grammar: [
          {
            title: "Articles: Un, Una, Il, La",
            explanation: "Italian has gendered articles. 'Il' (the, masculine) and 'La' (the, feminine). 'Un' (a, masculine) and 'Una' (a, feminine).",
            examples: [
              { italian: "Il caffè", english: "The coffee (masculine)" },
              { italian: "La pizza", english: "The pizza (feminine)" },
              { italian: "Un gelato", english: "An ice cream" },
              { italian: "Una birra", english: "A beer" },
            ],
          },
          {
            title: "Vorrei (I would like)",
            explanation: "'Vorrei' is the polite way to order or ask for something. It comes from the verb 'volere' (to want).",
            examples: [
              { italian: "Vorrei un caffè.", english: "I would like a coffee." },
              { italian: "Vorrei il menù.", english: "I would like the menu." },
            ],
          },
        ],
        dialogue: {
          title: "At the Café",
          context: "Ordering a morning coffee at a bar in Florence.",
          lines: [
            { speaker: "Barista", italian: "Buongiorno! Cosa desidera?", english: "Good morning! What would you like?" },
            { speaker: "You", italian: "Buongiorno! Vorrei un cappuccino, per favore.", english: "Good morning! I would like a cappuccino, please." },
            { speaker: "Barista", italian: "Certo! Qualcos'altro?", english: "Of course! Anything else?" },
            { speaker: "You", italian: "Sì, anche un cornetto.", english: "Yes, also a croissant." },
            { speaker: "Barista", italian: "Perfetto. Sono tre euro e cinquanta.", english: "Perfect. That's three euros and fifty cents." },
            { speaker: "You", italian: "Ecco. Grazie!", english: "Here you go. Thank you!" },
          ],
        },
        exercises: [
          { type: "mcq", question: "How do you politely say 'I would like' in Italian?", options: ["Voglio", "Vorrei", "Ho", "Posso"], answer: "Vorrei" },
          { type: "fill-blank", question: "Vorrei ___ cappuccino. (I'd like a cappuccino)", options: ["un", "una", "il", "la"], answer: "un" },
          { type: "mcq", question: "What does 'Il conto' mean?", options: ["The menu", "The bill", "The table", "The coffee"], answer: "The bill" },
          { type: "translate", question: "Translate: 'Two coffees, please.'", answer: "Due caffè, per favore." },
          { type: "fill-blank", question: "___ pizza margherita, per favore. (A margherita pizza, please)", options: ["Una", "Un", "Il", "Lo"], answer: "Una" },
        ],
      },
      {
        id: "a1-ch3",
        title: "Getting Around",
        titleIt: "Muoversi in Città",
        description: "Ask for directions, use transportation, and navigate the city.",
        icon: "🗺️",
        vocabulary: [
          { italian: "Dov'è...?", english: "Where is...?", example: "Dov'è la stazione?", exampleTranslation: "Where is the station?", category: "directions" },
          { italian: "A destra", english: "To the right", example: "Gira a destra.", exampleTranslation: "Turn right.", category: "directions" },
          { italian: "A sinistra", english: "To the left", example: "Gira a sinistra.", exampleTranslation: "Turn left.", category: "directions" },
          { italian: "Dritto", english: "Straight", example: "Vai sempre dritto.", exampleTranslation: "Go straight ahead.", category: "directions" },
          { italian: "Vicino", english: "Near", example: "È vicino a qui.", exampleTranslation: "It's near here.", category: "directions" },
          { italian: "Lontano", english: "Far", example: "È lontano?", exampleTranslation: "Is it far?", category: "directions" },
          { italian: "La stazione", english: "The station", example: "Dov'è la stazione?", exampleTranslation: "Where is the station?", category: "places" },
          { italian: "L'aeroporto", english: "The airport", example: "Come arrivo all'aeroporto?", exampleTranslation: "How do I get to the airport?", category: "places" },
          { italian: "Il treno", english: "The train", example: "Il treno parte alle tre.", exampleTranslation: "The train leaves at three.", category: "transport" },
          { italian: "L'autobus", english: "The bus", example: "Prendo l'autobus.", exampleTranslation: "I take the bus.", category: "transport" },
        ],
        grammar: [
          {
            title: "Asking Questions with Dove, Come, Quando",
            explanation: "Italian question words: Dove (where), Come (how), Quando (when), Quanto (how much).",
            examples: [
              { italian: "Dove è il museo?", english: "Where is the museum?" },
              { italian: "Come arrivo alla stazione?", english: "How do I get to the station?" },
              { italian: "Quando parte il treno?", english: "When does the train leave?" },
            ],
          },
        ],
        dialogue: {
          title: "Asking for Directions",
          context: "You're lost in Milan and need to find the Duomo.",
          lines: [
            { speaker: "You", italian: "Scusi, dov'è il Duomo?", english: "Excuse me, where is the Duomo?" },
            { speaker: "Stranger", italian: "Il Duomo? Vai sempre dritto e poi gira a destra.", english: "The Duomo? Go straight ahead and then turn right." },
            { speaker: "You", italian: "È lontano?", english: "Is it far?" },
            { speaker: "Stranger", italian: "No, è vicino. Circa cinque minuti a piedi.", english: "No, it's close. About five minutes on foot." },
            { speaker: "You", italian: "Grazie mille!", english: "Thank you so much!" },
            { speaker: "Stranger", italian: "Prego! Buona passeggiata!", english: "You're welcome! Enjoy your walk!" },
          ],
        },
        exercises: [
          { type: "mcq", question: "How do you ask 'Where is...?' in Italian?", options: ["Come è?", "Dov'è?", "Quando è?", "Perché è?"], answer: "Dov'è?" },
          { type: "fill-blank", question: "Gira a ___. (Turn right.)", options: ["destra", "sinistra", "dritto", "vicino"], answer: "destra" },
          { type: "translate", question: "Translate: 'Is it far?'", answer: "È lontano?" },
          { type: "mcq", question: "What does 'dritto' mean?", options: ["Right", "Left", "Straight", "Near"], answer: "Straight" },
        ],
      },
    ],
  },
  {
    id: "a2",
    name: "A2",
    label: "Elementary",
    description: "Build on basics. Learn past tense, describe people, talk about daily routines, and handle shopping.",
    color: "secondary",
    chapters: [
      {
        id: "a2-ch1",
        title: "Daily Routine",
        titleIt: "La Routine Quotidiana",
        description: "Talk about your day, morning habits, and schedule.",
        icon: "🌅",
        vocabulary: [
          { italian: "Mi sveglio", english: "I wake up", example: "Mi sveglio alle sette.", exampleTranslation: "I wake up at seven.", category: "routine" },
          { italian: "Faccio colazione", english: "I have breakfast", example: "Faccio colazione al bar.", exampleTranslation: "I have breakfast at the café.", category: "routine" },
          { italian: "Vado al lavoro", english: "I go to work", example: "Vado al lavoro in autobus.", exampleTranslation: "I go to work by bus.", category: "routine" },
          { italian: "Pranzo", english: "Lunch", example: "A pranzo mangio la pasta.", exampleTranslation: "For lunch I eat pasta.", category: "food" },
          { italian: "Cena", english: "Dinner", example: "La cena è alle otto.", exampleTranslation: "Dinner is at eight.", category: "food" },
          { italian: "Dormo", english: "I sleep", example: "Dormo otto ore.", exampleTranslation: "I sleep eight hours.", category: "routine" },
        ],
        grammar: [
          {
            title: "Reflexive Verbs",
            explanation: "Many daily routine verbs in Italian are reflexive (the action reflects back on the subject). They use 'mi, ti, si, ci, vi, si' before the verb.",
            examples: [
              { italian: "Mi sveglio alle sette.", english: "I wake (myself) up at seven." },
              { italian: "Ti vesti velocemente.", english: "You get dressed quickly." },
              { italian: "Si lava i denti.", english: "He/She brushes teeth." },
            ],
          },
        ],
        dialogue: {
          title: "Talking About Your Day",
          context: "Chatting with your Italian roommate about daily schedules.",
          lines: [
            { speaker: "You", italian: "A che ora ti svegli di solito?", english: "What time do you usually wake up?" },
            { speaker: "Roommate", italian: "Mi sveglio alle sei e mezza. E tu?", english: "I wake up at six thirty. And you?" },
            { speaker: "You", italian: "Io alle sette. Poi faccio colazione.", english: "Me at seven. Then I have breakfast." },
            { speaker: "Roommate", italian: "Dove fai colazione? A casa?", english: "Where do you have breakfast? At home?" },
            { speaker: "You", italian: "No, al bar vicino all'università.", english: "No, at the café near the university." },
          ],
        },
        exercises: [
          { type: "mcq", question: "What does 'Mi sveglio' mean?", options: ["I eat", "I wake up", "I sleep", "I go"], answer: "I wake up" },
          { type: "fill-blank", question: "___ sveglio alle sette. (I wake up at seven)", options: ["Mi", "Ti", "Si", "Ci"], answer: "Mi" },
          { type: "translate", question: "Translate: 'I have breakfast at the café.'", answer: "Faccio colazione al bar." },
        ],
      },
      {
        id: "a2-ch2",
        title: "Shopping & Clothes",
        titleIt: "Shopping e Vestiti",
        description: "Shop for clothes, ask about sizes, and handle transactions.",
        icon: "🛍️",
        vocabulary: [
          { italian: "Quanto costa?", english: "How much does it cost?", example: "Quanto costa questa maglietta?", exampleTranslation: "How much does this t-shirt cost?", category: "shopping" },
          { italian: "La taglia", english: "The size", example: "Che taglia porti?", exampleTranslation: "What size do you wear?", category: "shopping" },
          { italian: "Troppo caro", english: "Too expensive", example: "È troppo caro per me.", exampleTranslation: "It's too expensive for me.", category: "shopping" },
          { italian: "Lo prendo", english: "I'll take it", example: "Mi piace, lo prendo!", exampleTranslation: "I like it, I'll take it!", category: "shopping" },
          { italian: "La gonna", english: "The skirt", example: "Questa gonna è bella.", exampleTranslation: "This skirt is beautiful.", category: "clothes" },
          { italian: "I pantaloni", english: "The pants", example: "Vorrei provare questi pantaloni.", exampleTranslation: "I'd like to try these pants.", category: "clothes" },
        ],
        grammar: [
          {
            title: "Demonstrative Adjectives: Questo / Quella",
            explanation: "'Questo' (this) and 'Quello' (that) change based on gender and number of the noun.",
            examples: [
              { italian: "Questo vestito è bello.", english: "This dress is beautiful." },
              { italian: "Questa borsa è grande.", english: "This bag is big." },
              { italian: "Quei pantaloni sono cari.", english: "Those pants are expensive." },
            ],
          },
        ],
        dialogue: {
          title: "At the Clothing Store",
          context: "Shopping for clothes in a store in Milan.",
          lines: [
            { speaker: "You", italian: "Buongiorno! Quanto costa questa maglietta?", english: "Good morning! How much does this t-shirt cost?" },
            { speaker: "Shop assistant", italian: "Costa venticinque euro.", english: "It costs twenty-five euros." },
            { speaker: "You", italian: "Avete la taglia media?", english: "Do you have size medium?" },
            { speaker: "Shop assistant", italian: "Sì, un momento. Eccola!", english: "Yes, one moment. Here it is!" },
            { speaker: "You", italian: "Posso provarla?", english: "Can I try it on?" },
            { speaker: "Shop assistant", italian: "Certo! Il camerino è laggiù.", english: "Of course! The fitting room is over there." },
          ],
        },
        exercises: [
          { type: "mcq", question: "How do you ask 'How much does it cost?'", options: ["Dove costa?", "Quanto costa?", "Come costa?", "Chi costa?"], answer: "Quanto costa?" },
          { type: "fill-blank", question: "___ maglietta è bella. (This t-shirt is beautiful)", options: ["Questa", "Questo", "Quella", "Quello"], answer: "Questa" },
          { type: "translate", question: "Translate: 'I'll take it!'", answer: "Lo prendo!" },
        ],
      },
    ],
  },
  {
    id: "b1",
    name: "B1",
    label: "Intermediate",
    description: "Express opinions, talk about the future, handle complex situations, and have flowing conversations.",
    color: "olive",
    chapters: [
      {
        id: "b1-ch1",
        title: "Opinions & Feelings",
        titleIt: "Opinioni e Sentimenti",
        description: "Express what you think and feel about things in Italian.",
        icon: "💭",
        vocabulary: [
          { italian: "Penso che", english: "I think that", example: "Penso che sia una buona idea.", exampleTranslation: "I think it's a good idea.", category: "opinions" },
          { italian: "Secondo me", english: "In my opinion", example: "Secondo me, Roma è la più bella.", exampleTranslation: "In my opinion, Rome is the most beautiful.", category: "opinions" },
          { italian: "Sono d'accordo", english: "I agree", example: "Sono d'accordo con te.", exampleTranslation: "I agree with you.", category: "opinions" },
          { italian: "Non sono d'accordo", english: "I disagree", example: "Non sono d'accordo.", exampleTranslation: "I disagree.", category: "opinions" },
          { italian: "Mi sembra", english: "It seems to me", example: "Mi sembra giusto.", exampleTranslation: "It seems right to me.", category: "opinions" },
          { italian: "Felice", english: "Happy", example: "Sono molto felice oggi.", exampleTranslation: "I'm very happy today.", category: "feelings" },
          { italian: "Preoccupato", english: "Worried", example: "Sono un po' preoccupato.", exampleTranslation: "I'm a bit worried.", category: "feelings" },
          { italian: "Entusiasta", english: "Enthusiastic", example: "Sono entusiasta del viaggio!", exampleTranslation: "I'm enthusiastic about the trip!", category: "feelings" },
        ],
        grammar: [
          {
            title: "The Subjunctive (Congiuntivo) – Introduction",
            explanation: "The subjunctive is used after expressions of opinion, doubt, or emotion. It's one of the trickiest parts of Italian, but essential for B1 level. After 'penso che', 'credo che', 'spero che', use the subjunctive form.",
            examples: [
              { italian: "Penso che sia interessante.", english: "I think it's interesting." },
              { italian: "Credo che lui abbia ragione.", english: "I believe he's right." },
              { italian: "Spero che tu stia bene.", english: "I hope you're well." },
            ],
          },
        ],
        dialogue: {
          title: "Discussing Plans",
          context: "Talking with friends about weekend plans.",
          lines: [
            { speaker: "Friend", italian: "Cosa ne pensi di andare al mare questo weekend?", english: "What do you think about going to the beach this weekend?" },
            { speaker: "You", italian: "Mi sembra un'ottima idea! Sono entusiasta.", english: "Seems like a great idea! I'm enthusiastic." },
            { speaker: "Friend", italian: "Secondo te, dovremmo partire sabato mattina?", english: "In your opinion, should we leave Saturday morning?" },
            { speaker: "You", italian: "Penso che sia meglio partire presto.", english: "I think it's better to leave early." },
            { speaker: "Friend", italian: "Sono d'accordo. Alle sette va bene?", english: "I agree. Seven o'clock, is that ok?" },
            { speaker: "You", italian: "Perfetto! Non vedo l'ora!", english: "Perfect! I can't wait!" },
          ],
        },
        exercises: [
          { type: "mcq", question: "How do you say 'In my opinion' in Italian?", options: ["Penso che", "Secondo me", "Mi sembra", "Credo che"], answer: "Secondo me" },
          { type: "fill-blank", question: "Penso che ___ una buona idea. (I think it's a good idea)", options: ["sia", "è", "sono", "hai"], answer: "sia" },
          { type: "translate", question: "Translate: 'I agree with you.'", answer: "Sono d'accordo con te." },
          { type: "mcq", question: "What does 'preoccupato' mean?", options: ["Happy", "Worried", "Excited", "Tired"], answer: "Worried" },
        ],
      },
    ],
  },
];
