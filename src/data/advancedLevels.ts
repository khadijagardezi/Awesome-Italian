import type { Level } from "./courseData";

function ch(id: string, title: string, titleIt: string, desc: string, icon: string, vocabulary: any[], grammar: any[], dialogue: any, exercises: any[]) {
  return { id, title, titleIt, description: desc, icon, vocabulary, grammar, dialogue, exercises };
}

export const advancedLevels: Level[] = [
  // ───────── B2 ─────────
  {
    id: "b2",
    name: "B2",
    label: "Upper Intermediate",
    description: "Express yourself fluently on complex topics. Understand nuanced arguments and write detailed texts.",
    color: "primary",
    chapters: [
      ch("b2-ch1", "News & Current Affairs", "Notizie e Attualità", "Discuss headlines, politics, and social issues.",
        "📰",
        [
          { italian: "la notizia", english: "news item", example: "Hai sentito l'ultima notizia?", exampleTranslation: "Did you hear the latest news?", category: "media" },
          { italian: "il quotidiano", english: "daily newspaper", example: "Leggo il quotidiano ogni mattina.", exampleTranslation: "I read the newspaper every morning.", category: "media" },
          { italian: "l'articolo", english: "article", example: "Questo articolo è molto interessante.", exampleTranslation: "This article is very interesting.", category: "media" },
          { italian: "il telegiornale", english: "TV news", example: "Guardiamo il telegiornale delle otto.", exampleTranslation: "Let's watch the 8 o'clock news.", category: "media" },
          { italian: "l'intervista", english: "interview", example: "L'intervista al ministro è stata lunga.", exampleTranslation: "The interview with the minister was long.", category: "media" },
          { italian: "la politica", english: "politics", example: "Non parliamo di politica a tavola.", exampleTranslation: "Let's not talk about politics at the table.", category: "society" },
          { italian: "l'economia", english: "economy", example: "L'economia italiana sta migliorando.", exampleTranslation: "The Italian economy is improving.", category: "society" },
          { italian: "la disoccupazione", english: "unemployment", example: "La disoccupazione giovanile è un problema.", exampleTranslation: "Youth unemployment is a problem.", category: "society" },
          { italian: "il governo", english: "government", example: "Il governo ha approvato la nuova legge.", exampleTranslation: "The government approved the new law.", category: "society" },
          { italian: "l'opinione pubblica", english: "public opinion", example: "L'opinione pubblica è divisa.", exampleTranslation: "Public opinion is divided.", category: "society" },
        ],
        [
          { title: "Congiuntivo Presente (Subjunctive Present)", explanation: "Used after verbs of opinion, doubt, emotion, and impersonal expressions. Formed differently for -are, -ere, -ire verbs.", examples: [
            { italian: "Credo che lui abbia ragione.", english: "I believe he is right." },
            { italian: "È importante che tutti partecipino.", english: "It's important that everyone participates." },
            { italian: "Sembra che piova domani.", english: "It seems like it will rain tomorrow." },
          ]},
          { title: "Passive Voice (Forma Passiva)", explanation: "Formed with essere + past participle. The participle agrees with the subject.", examples: [
            { italian: "La legge è stata approvata.", english: "The law was approved." },
            { italian: "I giornali vengono letti da milioni di persone.", english: "Newspapers are read by millions of people." },
          ]},
        ],
        { title: "Discussing the News", context: "Two friends discuss a news article at a café.", lines: [
          { speaker: "Marco", italian: "Hai letto l'articolo sulla nuova riforma scolastica?", english: "Did you read the article about the new school reform?" },
          { speaker: "You", italian: "Sì, penso che sia una buona idea, ma ci sono dei problemi.", english: "Yes, I think it's a good idea, but there are some problems." },
          { speaker: "Marco", italian: "Sono d'accordo. Credo che servano più investimenti nell'istruzione.", english: "I agree. I believe more investment in education is needed." },
          { speaker: "You", italian: "Esatto. L'opinione pubblica sembra divisa sulla questione.", english: "Exactly. Public opinion seems divided on the issue." },
          { speaker: "Marco", italian: "Vediamo cosa deciderà il governo nelle prossime settimane.", english: "Let's see what the government decides in the coming weeks." },
        ]},
        [
          { type: "mcq", question: "Complete: Credo che lui ___ ragione.", options: ["ha", "abbia", "avrebbe", "avere"], answer: "abbia" },
          { type: "fill-blank", question: "La legge è stata ___ dal parlamento. (approved)", options: ["approvata", "approvato", "approvare", "approvando"], answer: "approvata" },
          { type: "translate", question: "Translate: 'I think it's important that everyone participates.'", answer: "Penso che sia importante che tutti partecipino." },
          { type: "mcq", question: "What does 'il telegiornale' mean?", options: ["Telephone", "TV news", "Telegram", "Journal"], answer: "TV news" },
        ]
      ),
      ch("b2-ch2", "Work & Career", "Lavoro e Carriera", "Job interviews, office culture, and professional Italian.",
        "💼",
        [
          { italian: "il colloquio", english: "job interview", example: "Ho un colloquio domani mattina.", exampleTranslation: "I have a job interview tomorrow morning.", category: "work" },
          { italian: "il curriculum", english: "CV / resume", example: "Devo aggiornare il mio curriculum.", exampleTranslation: "I need to update my CV.", category: "work" },
          { italian: "l'azienda", english: "company", example: "Lavoro per un'azienda internazionale.", exampleTranslation: "I work for an international company.", category: "work" },
          { italian: "lo stipendio", english: "salary", example: "Lo stipendio è buono ma il lavoro è stressante.", exampleTranslation: "The salary is good but the work is stressful.", category: "work" },
          { italian: "la riunione", english: "meeting", example: "Abbiamo una riunione alle tre.", exampleTranslation: "We have a meeting at three.", category: "work" },
          { italian: "il/la collega", english: "colleague", example: "I miei colleghi sono molto simpatici.", exampleTranslation: "My colleagues are very nice.", category: "work" },
          { italian: "la promozione", english: "promotion", example: "Ha ricevuto una promozione dopo due anni.", exampleTranslation: "He received a promotion after two years.", category: "career" },
          { italian: "le competenze", english: "skills", example: "Quali competenze hai?", exampleTranslation: "What skills do you have?", category: "career" },
          { italian: "il capo", english: "boss", example: "Il mio capo è molto esigente.", exampleTranslation: "My boss is very demanding.", category: "career" },
          { italian: "licenziarsi", english: "to resign", example: "Si è licenziato per seguire il suo sogno.", exampleTranslation: "He resigned to follow his dream.", category: "career" },
        ],
        [
          { title: "Condizionale Composto (Past Conditional)", explanation: "Used for unrealized wishes, polite requests about the past, and reported speech. Formed with condizionale of avere/essere + past participle.", examples: [
            { italian: "Avrei voluto studiare medicina.", english: "I would have liked to study medicine." },
            { italian: "Sarebbe stata una buona opportunità.", english: "It would have been a good opportunity." },
            { italian: "Avrebbero dovuto avvisarci prima.", english: "They should have warned us earlier." },
          ]},
          { title: "Gerundio (Gerund)", explanation: "Present gerund (-ando, -endo) for simultaneous actions. Past gerund (avendo/essendo + participle) for prior actions.", examples: [
            { italian: "Lavorando sodo, ha ottenuto la promozione.", english: "By working hard, he got the promotion." },
            { italian: "Avendo finito il progetto, sono andato a casa.", english: "Having finished the project, I went home." },
          ]},
        ],
        { title: "The Job Interview", context: "A formal job interview at an Italian company.", lines: [
          { speaker: "Interviewer", italian: "Mi parli delle sue esperienze lavorative.", english: "Tell me about your work experience." },
          { speaker: "You", italian: "Ho lavorato per cinque anni in un'azienda di marketing.", english: "I worked for five years at a marketing company." },
          { speaker: "Interviewer", italian: "Perché vorrebbe lavorare con noi?", english: "Why would you like to work with us?" },
          { speaker: "You", italian: "La vostra azienda è leader nel settore e offre grandi opportunità di crescita.", english: "Your company is a leader in the sector and offers great growth opportunities." },
          { speaker: "Interviewer", italian: "Quali sono i suoi punti di forza?", english: "What are your strengths?" },
          { speaker: "You", italian: "Sono organizzato, lavoro bene in team e parlo tre lingue.", english: "I'm organized, I work well in a team, and I speak three languages." },
        ]},
        [
          { type: "mcq", question: "How do you say 'job interview' in Italian?", options: ["la riunione", "il colloquio", "il curriculum", "lo stipendio"], answer: "il colloquio" },
          { type: "fill-blank", question: "Avrei ___ studiare all'estero. (wanted)", options: ["voluto", "volere", "voglio", "volli"], answer: "voluto" },
          { type: "translate", question: "Translate: 'By working hard, she got the promotion.'", answer: "Lavorando sodo, ha ottenuto la promozione." },
          { type: "mcq", question: "What is 'le competenze'?", options: ["competitions", "skills", "complaints", "compliments"], answer: "skills" },
        ]
      ),
      ch("b2-ch3", "Arts & Literature", "Arte e Letteratura", "Discuss Italian art, literature, cinema, and cultural movements.",
        "🎨",
        [
          { italian: "il capolavoro", english: "masterpiece", example: "La Gioconda è un capolavoro.", exampleTranslation: "The Mona Lisa is a masterpiece.", category: "art" },
          { italian: "il romanzo", english: "novel", example: "Sto leggendo un romanzo di Calvino.", exampleTranslation: "I'm reading a novel by Calvino.", category: "literature" },
          { italian: "il regista", english: "director", example: "Fellini è un grande regista italiano.", exampleTranslation: "Fellini is a great Italian director.", category: "cinema" },
          { italian: "la mostra", english: "exhibition", example: "C'è una mostra di Caravaggio al museo.", exampleTranslation: "There's a Caravaggio exhibition at the museum.", category: "art" },
          { italian: "il dipinto", english: "painting", example: "Questo dipinto è del Rinascimento.", exampleTranslation: "This painting is from the Renaissance.", category: "art" },
          { italian: "lo scrittore", english: "writer", example: "Dante è il più grande scrittore italiano.", exampleTranslation: "Dante is the greatest Italian writer.", category: "literature" },
          { italian: "la poesia", english: "poetry / poem", example: "Amo la poesia di Leopardi.", exampleTranslation: "I love Leopardi's poetry.", category: "literature" },
          { italian: "la scena", english: "scene", example: "Quella scena del film mi ha commosso.", exampleTranslation: "That scene in the film moved me.", category: "cinema" },
          { italian: "il Rinascimento", english: "the Renaissance", example: "Firenze è la culla del Rinascimento.", exampleTranslation: "Florence is the cradle of the Renaissance.", category: "history" },
          { italian: "l'opera", english: "opera", example: "Stasera andiamo all'opera.", exampleTranslation: "Tonight we're going to the opera.", category: "art" },
        ],
        [
          { title: "Congiuntivo Imperfetto (Imperfect Subjunctive)", explanation: "Used in hypothetical sentences (periodo ipotetico tipo 2) and after past tense main verbs. Formed from the imperfect stem.", examples: [
            { italian: "Se avessi più tempo, leggerei di più.", english: "If I had more time, I would read more." },
            { italian: "Vorrei che tu venissi alla mostra.", english: "I wish you would come to the exhibition." },
            { italian: "Pensavo che fosse un capolavoro.", english: "I thought it was a masterpiece." },
          ]},
        ],
        { title: "At the Art Gallery", context: "Visiting an exhibition with an Italian friend.", lines: [
          { speaker: "Friend", italian: "Guarda questo dipinto! È incredibile come Caravaggio usasse la luce.", english: "Look at this painting! It's incredible how Caravaggio used light." },
          { speaker: "You", italian: "Sì, sembra che le figure escano dalla tela.", english: "Yes, it seems like the figures come out of the canvas." },
          { speaker: "Friend", italian: "Se avessimo più tempo, potremmo visitare anche la sezione del Rinascimento.", english: "If we had more time, we could visit the Renaissance section too." },
          { speaker: "You", italian: "Vorrei che ci fossero più mostre come questa nella mia città.", english: "I wish there were more exhibitions like this in my city." },
          { speaker: "Friend", italian: "Hai mai letto qualcosa di Italo Calvino? Ti piacerebbe.", english: "Have you ever read anything by Italo Calvino? You'd like it." },
        ]},
        [
          { type: "mcq", question: "What is 'il capolavoro'?", options: ["the chapter", "the masterpiece", "the capital", "the cape"], answer: "the masterpiece" },
          { type: "fill-blank", question: "Se ___ più tempo, visiterei il museo. (I had)", options: ["avessi", "avrei", "ho", "avevo"], answer: "avessi" },
          { type: "translate", question: "Translate: 'Florence is the cradle of the Renaissance.'", answer: "Firenze è la culla del Rinascimento." },
          { type: "mcq", question: "Who is considered the greatest Italian writer?", options: ["Calvino", "Fellini", "Dante", "Caravaggio"], answer: "Dante" },
        ]
      ),
      ch("b2-ch4", "Environment & Science", "Ambiente e Scienza", "Discuss climate change, sustainability, and scientific topics.",
        "🌍",
        [
          { italian: "l'ambiente", english: "environment", example: "Dobbiamo proteggere l'ambiente.", exampleTranslation: "We must protect the environment.", category: "environment" },
          { italian: "il cambiamento climatico", english: "climate change", example: "Il cambiamento climatico è una sfida globale.", exampleTranslation: "Climate change is a global challenge.", category: "environment" },
          { italian: "l'inquinamento", english: "pollution", example: "L'inquinamento dell'aria è grave in città.", exampleTranslation: "Air pollution is serious in the city.", category: "environment" },
          { italian: "riciclare", english: "to recycle", example: "È importante riciclare la plastica.", exampleTranslation: "It's important to recycle plastic.", category: "environment" },
          { italian: "l'energia rinnovabile", english: "renewable energy", example: "L'Italia investe nell'energia rinnovabile.", exampleTranslation: "Italy invests in renewable energy.", category: "science" },
          { italian: "la ricerca", english: "research", example: "La ricerca scientifica è fondamentale.", exampleTranslation: "Scientific research is fundamental.", category: "science" },
          { italian: "lo sviluppo sostenibile", english: "sustainable development", example: "Lo sviluppo sostenibile è il futuro.", exampleTranslation: "Sustainable development is the future.", category: "science" },
          { italian: "la specie", english: "species", example: "Molte specie sono in pericolo.", exampleTranslation: "Many species are in danger.", category: "environment" },
          { italian: "il riscaldamento globale", english: "global warming", example: "Il riscaldamento globale preoccupa gli scienziati.", exampleTranslation: "Global warming worries scientists.", category: "environment" },
          { italian: "la scoperta", english: "discovery", example: "È stata una scoperta importante.", exampleTranslation: "It was an important discovery.", category: "science" },
        ],
        [
          { title: "Periodo Ipotetico di 3° tipo (Third Conditional)", explanation: "Expresses impossible/unrealized past conditions: Se + congiuntivo trapassato, condizionale composto.", examples: [
            { italian: "Se avessimo agito prima, avremmo salvato più foreste.", english: "If we had acted earlier, we would have saved more forests." },
            { italian: "Se non avessero inquinato il fiume, i pesci non sarebbero morti.", english: "If they hadn't polluted the river, the fish wouldn't have died." },
          ]},
        ],
        { title: "Environmental Debate", context: "A classroom debate about sustainability.", lines: [
          { speaker: "Professor", italian: "Quali sono le sfide ambientali più urgenti secondo voi?", english: "What are the most urgent environmental challenges in your opinion?" },
          { speaker: "You", italian: "Credo che il cambiamento climatico sia la sfida più grande.", english: "I believe climate change is the biggest challenge." },
          { speaker: "Classmate", italian: "Se avessimo investito prima nelle energie rinnovabili, non saremmo in questa situazione.", english: "If we had invested earlier in renewable energy, we wouldn't be in this situation." },
          { speaker: "You", italian: "È vero, ma penso che non sia troppo tardi per agire.", english: "That's true, but I think it's not too late to act." },
          { speaker: "Professor", italian: "Ottimi punti. Ricordate che ogni piccola azione conta.", english: "Great points. Remember that every small action counts." },
        ]},
        [
          { type: "mcq", question: "What is 'l'inquinamento'?", options: ["inquiry", "pollution", "innovation", "insurance"], answer: "pollution" },
          { type: "fill-blank", question: "Se avessimo agito prima, ___ salvato più foreste. (we would have)", options: ["avremmo", "abbiamo", "avevamo", "avremo"], answer: "avremmo" },
          { type: "translate", question: "Translate: 'We must protect the environment.'", answer: "Dobbiamo proteggere l'ambiente." },
          { type: "mcq", question: "What does 'riciclare' mean?", options: ["to research", "to recycle", "to recite", "to receive"], answer: "to recycle" },
        ]
      ),
    ],
  },

  // ───────── C1 ─────────
  {
    id: "c1",
    name: "C1",
    label: "Advanced",
    description: "Understand demanding texts, express yourself spontaneously with precision and nuance.",
    color: "primary",
    chapters: [
      ch("c1-ch1", "Philosophy & Abstract Thought", "Filosofia e Pensiero Astratto", "Discuss ideas, ethics, and philosophical concepts.",
        "🧠",
        [
          { italian: "il concetto", english: "concept", example: "Questo concetto è difficile da spiegare.", exampleTranslation: "This concept is difficult to explain.", category: "philosophy" },
          { italian: "la coscienza", english: "consciousness / conscience", example: "La coscienza è un mistero della scienza.", exampleTranslation: "Consciousness is a mystery of science.", category: "philosophy" },
          { italian: "l'etica", english: "ethics", example: "L'etica professionale è fondamentale.", exampleTranslation: "Professional ethics are fundamental.", category: "philosophy" },
          { italian: "il ragionamento", english: "reasoning", example: "Il tuo ragionamento è logico.", exampleTranslation: "Your reasoning is logical.", category: "thinking" },
          { italian: "la contraddizione", english: "contradiction", example: "C'è una contraddizione nel suo argomento.", exampleTranslation: "There's a contradiction in his argument.", category: "thinking" },
          { italian: "l'ipotesi", english: "hypothesis", example: "La sua ipotesi è interessante.", exampleTranslation: "His hypothesis is interesting.", category: "thinking" },
          { italian: "il dubbio", english: "doubt", example: "Il dubbio è l'inizio della saggezza.", exampleTranslation: "Doubt is the beginning of wisdom.", category: "philosophy" },
          { italian: "la verità", english: "truth", example: "La verità è spesso complessa.", exampleTranslation: "The truth is often complex.", category: "philosophy" },
          { italian: "il libero arbitrio", english: "free will", example: "Credi nel libero arbitrio?", exampleTranslation: "Do you believe in free will?", category: "philosophy" },
          { italian: "il pregiudizio", english: "prejudice", example: "Dobbiamo combattere i pregiudizi.", exampleTranslation: "We must fight prejudices.", category: "society" },
        ],
        [
          { title: "Discorso Indiretto (Reported Speech)", explanation: "When reporting what someone said, tenses shift back: presente → imperfetto, passato prossimo → trapassato prossimo, futuro → condizionale.", examples: [
            { italian: "Ha detto che era stanco.", english: "He said he was tired. (Ha detto: 'Sono stanco.')" },
            { italian: "Mi ha chiesto se avessi capito.", english: "He asked me if I had understood." },
            { italian: "Ha promesso che sarebbe venuto.", english: "He promised he would come." },
          ]},
          { title: "Congiuntivo Trapassato (Past Perfect Subjunctive)", explanation: "Used for past hypotheticals and wishes about the past: avessi/fossi + past participle.", examples: [
            { italian: "Se avessi studiato filosofia, avrei capito meglio.", english: "If I had studied philosophy, I would have understood better." },
            { italian: "Magari fossi stato lì!", english: "I wish I had been there!" },
          ]},
        ],
        { title: "A Philosophical Discussion", context: "A deep conversation after a university lecture.", lines: [
          { speaker: "Professor", italian: "Secondo Cartesio, il dubbio è il fondamento della conoscenza.", english: "According to Descartes, doubt is the foundation of knowledge." },
          { speaker: "You", italian: "È un concetto affascinante. Ma come possiamo distinguere la verità dall'illusione?", english: "It's a fascinating concept. But how can we distinguish truth from illusion?" },
          { speaker: "Classmate", italian: "Alcuni filosofi sostengono che la realtà sia soggettiva.", english: "Some philosophers argue that reality is subjective." },
          { speaker: "You", italian: "Se fosse così, non esisterebbe una verità oggettiva.", english: "If that were the case, no objective truth would exist." },
          { speaker: "Professor", italian: "Ottima osservazione. Il dibattito tra realismo e relativismo è ancora aperto.", english: "Excellent observation. The debate between realism and relativism is still open." },
        ]},
        [
          { type: "mcq", question: "What is 'il ragionamento'?", options: ["the region", "the reasoning", "the rage", "the ratio"], answer: "the reasoning" },
          { type: "fill-blank", question: "Ha detto che ___ stanco. (he was — reported speech)", options: ["era", "è", "sia", "fosse"], answer: "era" },
          { type: "translate", question: "Translate: 'Doubt is the beginning of wisdom.'", answer: "Il dubbio è l'inizio della saggezza." },
          { type: "mcq", question: "In reported speech, presente becomes:", options: ["passato prossimo", "imperfetto", "trapassato", "futuro"], answer: "imperfetto" },
        ]
      ),
      ch("c1-ch2", "Law & Bureaucracy", "Legge e Burocrazia", "Navigate Italian bureaucracy, contracts, and legal language.",
        "⚖️",
        [
          { italian: "il contratto", english: "contract", example: "Ho firmato il contratto di lavoro.", exampleTranslation: "I signed the work contract.", category: "legal" },
          { italian: "la legge", english: "law", example: "La legge è uguale per tutti.", exampleTranslation: "The law is equal for everyone.", category: "legal" },
          { italian: "il diritto", english: "right / law (field)", example: "Hai diritto a un avvocato.", exampleTranslation: "You have the right to a lawyer.", category: "legal" },
          { italian: "il tribunale", english: "court", example: "Il caso è stato portato in tribunale.", exampleTranslation: "The case was brought to court.", category: "legal" },
          { italian: "il permesso di soggiorno", english: "residence permit", example: "Devo rinnovare il permesso di soggiorno.", exampleTranslation: "I need to renew my residence permit.", category: "bureaucracy" },
          { italian: "la multa", english: "fine / ticket", example: "Ho preso una multa per eccesso di velocità.", exampleTranslation: "I got a fine for speeding.", category: "bureaucracy" },
          { italian: "il modulo", english: "form", example: "Devi compilare questo modulo.", exampleTranslation: "You need to fill out this form.", category: "bureaucracy" },
          { italian: "la scadenza", english: "deadline / expiry", example: "La scadenza è il 30 di questo mese.", exampleTranslation: "The deadline is the 30th of this month.", category: "bureaucracy" },
          { italian: "il cittadino", english: "citizen", example: "Ogni cittadino ha diritti e doveri.", exampleTranslation: "Every citizen has rights and duties.", category: "society" },
          { italian: "la denuncia", english: "report / complaint", example: "Ha presentato una denuncia alla polizia.", exampleTranslation: "He filed a report with the police.", category: "legal" },
        ],
        [
          { title: "Formal Register & Bureaucratic Italian", explanation: "Italian bureaucracy uses highly formal language: Lei form, infinitive instructions, passive voice, and impersonal constructions.", examples: [
            { italian: "Si prega di compilare il modulo allegato.", english: "Please fill out the attached form." },
            { italian: "Il sottoscritto dichiara che...", english: "The undersigned declares that..." },
            { italian: "Con la presente si comunica che...", english: "With this letter we inform you that..." },
          ]},
        ],
        { title: "At the Post Office", context: "Dealing with Italian bureaucracy to send an important document.", lines: [
          { speaker: "Clerk", italian: "Buongiorno, mi dica.", english: "Good morning, how can I help you?" },
          { speaker: "You", italian: "Devo spedire questa raccomandata e rinnovare il mio permesso di soggiorno.", english: "I need to send this registered letter and renew my residence permit." },
          { speaker: "Clerk", italian: "Per il permesso deve andare alla questura. Qui può solo spedire.", english: "For the permit you need to go to the police headquarters. Here you can only send mail." },
          { speaker: "You", italian: "Capisco. Mi serve anche un modulo per la dichiarazione dei redditi.", english: "I understand. I also need a form for the tax return." },
          { speaker: "Clerk", italian: "Ecco il modulo. Lo compili e lo riporti entro la scadenza del 30.", english: "Here's the form. Fill it out and bring it back by the deadline on the 30th." },
        ]},
        [
          { type: "mcq", question: "What is 'il permesso di soggiorno'?", options: ["parking permit", "residence permit", "building permit", "travel permit"], answer: "residence permit" },
          { type: "fill-blank", question: "Si prega di ___ il modulo allegato. (fill out)", options: ["compilare", "completare", "comporre", "comprare"], answer: "compilare" },
          { type: "translate", question: "Translate: 'The law is equal for everyone.'", answer: "La legge è uguale per tutti." },
          { type: "mcq", question: "What does 'la scadenza' mean?", options: ["the stairs", "the scandal", "the deadline", "the scale"], answer: "the deadline" },
        ]
      ),
      ch("c1-ch3", "Idiomatic Expressions", "Espressioni Idiomatiche", "Master colorful Italian idioms and figurative language.",
        "🎭",
        [
          { italian: "avere le mani in pasta", english: "to have a finger in every pie", example: "Lui ha sempre le mani in pasta.", exampleTranslation: "He always has a finger in every pie.", category: "idioms" },
          { italian: "non vedere l'ora", english: "can't wait", example: "Non vedo l'ora di partire!", exampleTranslation: "I can't wait to leave!", category: "idioms" },
          { italian: "prendere in giro", english: "to make fun of", example: "Non mi prendere in giro!", exampleTranslation: "Don't make fun of me!", category: "idioms" },
          { italian: "fare il furbo", english: "to try to be clever", example: "Non fare il furbo con me.", exampleTranslation: "Don't try to be clever with me.", category: "idioms" },
          { italian: "dare una mano", english: "to give a hand / help", example: "Mi dai una mano con questo?", exampleTranslation: "Can you give me a hand with this?", category: "idioms" },
          { italian: "in bocca al lupo", english: "good luck (lit. in the wolf's mouth)", example: "Domani hai l'esame? In bocca al lupo!", exampleTranslation: "You have the exam tomorrow? Good luck!", category: "idioms" },
          { italian: "acqua in bocca", english: "keep it secret (lit. water in mouth)", example: "Te lo dico ma... acqua in bocca!", exampleTranslation: "I'll tell you but... keep it secret!", category: "idioms" },
          { italian: "essere al verde", english: "to be broke", example: "Non posso uscire, sono al verde.", exampleTranslation: "I can't go out, I'm broke.", category: "idioms" },
          { italian: "avere un chiodo fisso", english: "to be obsessed with something", example: "La musica è il suo chiodo fisso.", exampleTranslation: "Music is his obsession.", category: "idioms" },
          { italian: "mettere le carte in tavola", english: "to lay one's cards on the table", example: "È ora di mettere le carte in tavola.", exampleTranslation: "It's time to lay our cards on the table.", category: "idioms" },
        ],
        [
          { title: "Figurative Language & Proverbs", explanation: "Italian is rich in figurative expressions. Many idioms use food, body parts, and animals. Understanding them is key to natural fluency.", examples: [
            { italian: "Chi dorme non piglia pesci.", english: "The early bird catches the worm. (He who sleeps doesn't catch fish.)" },
            { italian: "Tra il dire e il fare c'è di mezzo il mare.", english: "Easier said than done. (Between saying and doing there's the sea.)" },
            { italian: "Non tutte le ciambelle riescono col buco.", english: "Things don't always go as planned. (Not all donuts come out with a hole.)" },
          ]},
        ],
        { title: "Understanding Idioms in Context", context: "Chatting with Italian friends who use lots of idioms.", lines: [
          { speaker: "Giulia", italian: "Non vedo l'ora che arrivi l'estate! Sono al verde dopo le vacanze di Natale.", english: "I can't wait for summer! I'm broke after the Christmas holidays." },
          { speaker: "You", italian: "Anch'io! Ma non fare la furba, so che hai comprato una borsa nuova.", english: "Me too! But don't play clever, I know you bought a new bag." },
          { speaker: "Giulia", italian: "Acqua in bocca! Era un regalo per me stessa.", english: "Keep it secret! It was a gift for myself." },
          { speaker: "You", italian: "Tra il dire e il fare c'è di mezzo il mare, eh?", english: "Easier said than done, huh?" },
          { speaker: "Giulia", italian: "Esatto! Comunque, mi dai una mano a organizzare la festa?", english: "Exactly! Anyway, can you give me a hand organizing the party?" },
        ]},
        [
          { type: "mcq", question: "What does 'essere al verde' mean?", options: ["to be green", "to be broke", "to be jealous", "to be new"], answer: "to be broke" },
          { type: "fill-blank", question: "Non ___ l'ora di vederti! (I can't wait)", options: ["vedo", "ho", "faccio", "prendo"], answer: "vedo" },
          { type: "translate", question: "Translate: 'Can you give me a hand?'", answer: "Mi dai una mano?" },
          { type: "mcq", question: "What is the response to 'In bocca al lupo'?", options: ["Grazie!", "Crepi il lupo!", "Prego!", "Salute!"], answer: "Crepi il lupo!" },
        ]
      ),
      ch("c1-ch4", "Italian History & Society", "Storia e Società Italiana", "Explore Italy's rich history from Rome to modern times.",
        "🏛️",
        [
          { italian: "l'Impero Romano", english: "the Roman Empire", example: "L'Impero Romano è durato secoli.", exampleTranslation: "The Roman Empire lasted centuries.", category: "history" },
          { italian: "l'Unità d'Italia", english: "Italian Unification", example: "L'Unità d'Italia avvenne nel 1861.", exampleTranslation: "Italian Unification happened in 1861.", category: "history" },
          { italian: "la Resistenza", english: "the Resistance", example: "La Resistenza combatté contro il fascismo.", exampleTranslation: "The Resistance fought against fascism.", category: "history" },
          { italian: "il Risorgimento", english: "the Risorgimento", example: "Il Risorgimento portò all'unità nazionale.", exampleTranslation: "The Risorgimento led to national unity.", category: "history" },
          { italian: "la Repubblica", english: "the Republic", example: "L'Italia è una Repubblica dal 1946.", exampleTranslation: "Italy has been a Republic since 1946.", category: "politics" },
          { italian: "la Costituzione", english: "the Constitution", example: "La Costituzione italiana è del 1948.", exampleTranslation: "The Italian Constitution is from 1948.", category: "politics" },
          { italian: "il patrimonio", english: "heritage / assets", example: "L'Italia ha un ricco patrimonio culturale.", exampleTranslation: "Italy has a rich cultural heritage.", category: "culture" },
          { italian: "il Medioevo", english: "the Middle Ages", example: "Molti borghi italiani risalgono al Medioevo.", exampleTranslation: "Many Italian villages date back to the Middle Ages.", category: "history" },
          { italian: "la monarchia", english: "monarchy", example: "L'Italia era una monarchia fino al 1946.", exampleTranslation: "Italy was a monarchy until 1946.", category: "politics" },
          { italian: "il dopoguerra", english: "post-war period", example: "Il dopoguerra portò il miracolo economico.", exampleTranslation: "The post-war period brought the economic miracle.", category: "history" },
        ],
        [
          { title: "Passato Remoto (Remote Past)", explanation: "Used in written Italian and southern dialects for historical narration. Less common in spoken northern Italian (where passato prossimo is preferred).", examples: [
            { italian: "Roma fu fondata nel 753 a.C.", english: "Rome was founded in 753 BC." },
            { italian: "Garibaldi partì con i Mille nel 1860.", english: "Garibaldi departed with the Thousand in 1860." },
            { italian: "L'Italia diventò una Repubblica nel 1946.", english: "Italy became a Republic in 1946." },
          ]},
        ],
        { title: "A History Tour", context: "Visiting the Roman Forum with a knowledgeable guide.", lines: [
          { speaker: "Guide", italian: "Qui sorgeva il cuore dell'Impero Romano. Questo tempio fu costruito nel II secolo.", english: "Here stood the heart of the Roman Empire. This temple was built in the 2nd century." },
          { speaker: "You", italian: "È incredibile che queste rovine siano ancora in piedi dopo duemila anni.", english: "It's incredible that these ruins are still standing after two thousand years." },
          { speaker: "Guide", italian: "Dopo la caduta dell'Impero, l'Italia attraversò il Medioevo e poi il Rinascimento.", english: "After the fall of the Empire, Italy went through the Middle Ages and then the Renaissance." },
          { speaker: "You", italian: "E l'unificazione avvenne solo nel 1861, giusto?", english: "And unification only happened in 1861, right?" },
          { speaker: "Guide", italian: "Esatto. Prima, l'Italia era divisa in molti stati indipendenti.", english: "Exactly. Before, Italy was divided into many independent states." },
        ]},
        [
          { type: "mcq", question: "When did Italian Unification happen?", options: ["1789", "1861", "1946", "1948"], answer: "1861" },
          { type: "fill-blank", question: "Roma ___ fondata nel 753 a.C. (was — passato remoto)", options: ["fu", "era", "è stata", "venne"], answer: "fu" },
          { type: "translate", question: "Translate: 'Italy has been a Republic since 1946.'", answer: "L'Italia è una Repubblica dal 1946." },
          { type: "mcq", question: "What is 'il Risorgimento'?", options: ["the Renaissance", "the Resistance", "the movement for Italian unification", "the Reformation"], answer: "the movement for Italian unification" },
        ]
      ),
    ],
  },

  // ───────── C2 ─────────
  {
    id: "c2",
    name: "C2",
    label: "Mastery",
    description: "Near-native proficiency. Understand virtually everything, express yourself with precision, spontaneity, and style.",
    color: "primary",
    chapters: [
      ch("c2-ch1", "Rhetoric & Persuasion", "Retorica e Persuasione", "Master the art of argumentation, debate, and rhetorical devices.",
        "🎤",
        [
          { italian: "la retorica", english: "rhetoric", example: "La retorica è l'arte del persuadere.", exampleTranslation: "Rhetoric is the art of persuading.", category: "rhetoric" },
          { italian: "l'argomentazione", english: "argumentation", example: "La sua argomentazione era convincente.", exampleTranslation: "His argumentation was convincing.", category: "rhetoric" },
          { italian: "la metafora", english: "metaphor", example: "La vita è un viaggio è una metafora comune.", exampleTranslation: "'Life is a journey' is a common metaphor.", category: "literary" },
          { italian: "l'ironia", english: "irony", example: "L'ironia è un'arma potente.", exampleTranslation: "Irony is a powerful weapon.", category: "literary" },
          { italian: "il paradosso", english: "paradox", example: "È un paradosso interessante.", exampleTranslation: "It's an interesting paradox.", category: "literary" },
          { italian: "persuadere", english: "to persuade", example: "Non riesco a persuaderlo.", exampleTranslation: "I can't persuade him.", category: "rhetoric" },
          { italian: "confutare", english: "to refute", example: "Ha confutato la tesi dell'avversario.", exampleTranslation: "He refuted the opponent's thesis.", category: "rhetoric" },
          { italian: "la sfumatura", english: "nuance", example: "Le sfumature linguistiche sono importanti.", exampleTranslation: "Linguistic nuances are important.", category: "language" },
          { italian: "l'ambiguità", english: "ambiguity", example: "Il testo è pieno di ambiguità.", exampleTranslation: "The text is full of ambiguity.", category: "language" },
          { italian: "sottintendere", english: "to imply", example: "Cosa vuoi sottintendere?", exampleTranslation: "What are you implying?", category: "language" },
        ],
        [
          { title: "Advanced Sentence Structures", explanation: "At C2 level, master complex subordination, rhetorical questions, and sophisticated connectors for elegant expression.", examples: [
            { italian: "Per quanto ne sappia, nessuno ha mai dimostrato il contrario.", english: "As far as I know, no one has ever demonstrated the opposite." },
            { italian: "Ammesso e non concesso che tu abbia ragione, ciò non giustifica il tuo comportamento.", english: "Even assuming you're right, that doesn't justify your behavior." },
            { italian: "Non fosse stato per il suo intervento, la situazione sarebbe degenerata.", english: "Had it not been for his intervention, the situation would have deteriorated." },
          ]},
        ],
        { title: "A Formal Debate", context: "Participating in a university debate competition.", lines: [
          { speaker: "Moderator", italian: "Il tema di oggi: i social media fanno più male che bene alla società?", english: "Today's topic: do social media do more harm than good to society?" },
          { speaker: "You", italian: "Ammetto che i social media abbiano dei vantaggi, ma le sfumature del dibattito vanno oltre la semplice dicotomia.", english: "I admit social media have advantages, but the nuances of the debate go beyond a simple dichotomy." },
          { speaker: "Opponent", italian: "Confuto questa posizione. I dati dimostrano chiaramente un aumento della connessione sociale.", english: "I refute this position. Data clearly shows an increase in social connection." },
          { speaker: "You", italian: "C'è un paradosso in questa argomentazione: più connessione digitale non significa meno solitudine.", english: "There's a paradox in this argument: more digital connection doesn't mean less loneliness." },
          { speaker: "Moderator", italian: "Ottima osservazione. La retorica di entrambi i partecipanti è stata eccellente.", english: "Excellent observation. Both participants' rhetoric has been excellent." },
        ]},
        [
          { type: "mcq", question: "What does 'confutare' mean?", options: ["to confuse", "to refute", "to confirm", "to confide"], answer: "to refute" },
          { type: "fill-blank", question: "Per quanto ne ___, nessuno l'ha mai fatto. (as far as I know)", options: ["sappia", "so", "sapevo", "saprei"], answer: "sappia" },
          { type: "translate", question: "Translate: 'Irony is a powerful weapon.'", answer: "L'ironia è un'arma potente." },
          { type: "mcq", question: "What is 'la sfumatura'?", options: ["the smoke", "the nuance", "the furniture", "the shadow"], answer: "the nuance" },
        ]
      ),
      ch("c2-ch2", "Literary Analysis", "Analisi Letteraria", "Analyze classic and modern Italian literature with critical depth.",
        "📚",
        [
          { italian: "l'allegoria", english: "allegory", example: "La Divina Commedia è un'allegoria.", exampleTranslation: "The Divine Comedy is an allegory.", category: "literary" },
          { italian: "il narratore", english: "narrator", example: "Il narratore è inaffidabile.", exampleTranslation: "The narrator is unreliable.", category: "literary" },
          { italian: "la trama", english: "plot", example: "La trama è avvincente.", exampleTranslation: "The plot is gripping.", category: "literary" },
          { italian: "il verso", english: "verse / line of poetry", example: "Questo verso è di Petrarca.", exampleTranslation: "This verse is by Petrarch.", category: "poetry" },
          { italian: "la prosa", english: "prose", example: "Scrive una prosa elegante.", exampleTranslation: "He writes elegant prose.", category: "literary" },
          { italian: "il simbolismo", english: "symbolism", example: "Il simbolismo in quest'opera è profondo.", exampleTranslation: "The symbolism in this work is profound.", category: "literary" },
          { italian: "il personaggio", english: "character", example: "Il personaggio principale è complesso.", exampleTranslation: "The main character is complex.", category: "literary" },
          { italian: "la rima", english: "rhyme", example: "La poesia ha una rima perfetta.", exampleTranslation: "The poem has a perfect rhyme.", category: "poetry" },
          { italian: "il contesto storico", english: "historical context", example: "Il contesto storico è essenziale per capire l'opera.", exampleTranslation: "The historical context is essential to understand the work.", category: "analysis" },
          { italian: "l'interpretazione", english: "interpretation", example: "Ci sono molte interpretazioni possibili.", exampleTranslation: "There are many possible interpretations.", category: "analysis" },
        ],
        [
          { title: "Literary Critical Language", explanation: "Analyzing Italian literature requires specialized vocabulary and the ability to construct sophisticated arguments about texts.", examples: [
            { italian: "L'autore si avvale di un linguaggio evocativo per trasmettere il senso di perdita.", english: "The author employs evocative language to convey a sense of loss." },
            { italian: "Il sottotesto rivela una critica alla società borghese.", english: "The subtext reveals a critique of bourgeois society." },
            { italian: "Attraverso l'uso dell'allegoria, Dante rappresenta il percorso dell'anima.", english: "Through the use of allegory, Dante represents the soul's journey." },
          ]},
        ],
        { title: "Discussing Dante", context: "A university seminar on the Divine Comedy.", lines: [
          { speaker: "Professor", italian: "Nel primo canto dell'Inferno, Dante si trova in una selva oscura. Cosa simboleggia?", english: "In the first canto of the Inferno, Dante finds himself in a dark forest. What does it symbolize?" },
          { speaker: "You", italian: "La selva oscura è un'allegoria dello smarrimento morale e spirituale.", english: "The dark forest is an allegory of moral and spiritual confusion." },
          { speaker: "Classmate", italian: "E Virgilio rappresenta la ragione umana che guida l'anima.", english: "And Virgil represents human reason that guides the soul." },
          { speaker: "You", italian: "È interessante come Dante si avvalga del viaggio come metafora universale della condizione umana.", english: "It's interesting how Dante employs the journey as a universal metaphor for the human condition." },
          { speaker: "Professor", italian: "Esatto. Il contesto storico di Firenze del Trecento è fondamentale per l'interpretazione.", english: "Exactly. The historical context of 14th-century Florence is fundamental to the interpretation." },
        ]},
        [
          { type: "mcq", question: "What is 'l'allegoria'?", options: ["allergy", "allegory", "allegation", "alley"], answer: "allegory" },
          { type: "fill-blank", question: "La Divina Commedia è un'___ del percorso dell'anima. (allegory)", options: ["allegoria", "allegria", "allergia", "analogia"], answer: "allegoria" },
          { type: "translate", question: "Translate: 'The plot is gripping.'", answer: "La trama è avvincente." },
          { type: "mcq", question: "Who does Virgil represent in the Divine Comedy?", options: ["Faith", "Love", "Human reason", "God"], answer: "Human reason" },
        ]
      ),
      ch("c2-ch3", "Regional Italy & Dialects", "Italia Regionale e Dialetti", "Explore regional diversity, dialects, and local cultures.",
        "🗺️",
        [
          { italian: "il dialetto", english: "dialect", example: "Ogni regione ha il suo dialetto.", exampleTranslation: "Every region has its own dialect.", category: "language" },
          { italian: "il campanilismo", english: "local pride / parochialism", example: "Il campanilismo è molto forte in Italia.", exampleTranslation: "Local pride is very strong in Italy.", category: "culture" },
          { italian: "la sagra", english: "local food festival", example: "Andiamo alla sagra del tartufo!", exampleTranslation: "Let's go to the truffle festival!", category: "traditions" },
          { italian: "il borgo", english: "medieval village", example: "Questo borgo è patrimonio UNESCO.", exampleTranslation: "This village is a UNESCO heritage site.", category: "places" },
          { italian: "il paesaggio", english: "landscape", example: "Il paesaggio toscano è inconfondibile.", exampleTranslation: "The Tuscan landscape is unmistakable.", category: "places" },
          { italian: "la tradizione", english: "tradition", example: "Le tradizioni variano da regione a regione.", exampleTranslation: "Traditions vary from region to region.", category: "traditions" },
          { italian: "la gastronomia", english: "gastronomy", example: "La gastronomia italiana è la migliore al mondo.", exampleTranslation: "Italian gastronomy is the best in the world.", category: "food" },
          { italian: "il terroir", english: "terroir", example: "Il terroir influenza il sapore del vino.", exampleTranslation: "The terroir influences the wine's flavor.", category: "food" },
          { italian: "l'identità regionale", english: "regional identity", example: "L'identità regionale è fortissima.", exampleTranslation: "Regional identity is very strong.", category: "culture" },
          { italian: "la parlata", english: "way of speaking / accent", example: "Si riconosce subito dalla parlata.", exampleTranslation: "You can tell right away from the way they speak.", category: "language" },
        ],
        [
          { title: "Italian Dialects vs Standard Italian", explanation: "Italian dialects are not simply accented Italian — they are distinct Romance languages with their own grammar and vocabulary. Standard Italian is based on the Tuscan/Florentine dialect.", examples: [
            { italian: "Napoletano: 'Uè, comme staje?' = Come stai?", english: "Neapolitan: 'Hey, how are you?'" },
            { italian: "Milanese: 'Ciao, come te steet?' = Come stai?", english: "Milanese: 'Hi, how are you?'" },
            { italian: "Siciliano: 'Comu siti?' = Come state?", english: "Sicilian: 'How are you (pl.)?'" },
          ]},
        ],
        { title: "A Tour of Regional Italy", context: "Discussing regional differences with Italian friends from different regions.", lines: [
          { speaker: "Marco (Roma)", italian: "A Roma diciamo 'daje!' per incoraggiare. È romanesco puro.", english: "In Rome we say 'daje!' to encourage. It's pure Roman dialect." },
          { speaker: "Lucia (Napoli)", italian: "A Napoli abbiamo espressioni bellissime. 'Uè!' è il nostro modo di dire 'ehi!'", english: "In Naples we have beautiful expressions. 'Uè!' is our way of saying 'hey!'" },
          { speaker: "You", italian: "È affascinante come ogni regione abbia la propria identità linguistica.", english: "It's fascinating how every region has its own linguistic identity." },
          { speaker: "Paolo (Milano)", italian: "A Milano si usa molto 'ciuler' per prendere. Non è italiano standard!", english: "In Milan they use 'ciuler' for 'to take.' It's not standard Italian!" },
          { speaker: "You", italian: "Il campanilismo italiano è unico. Rende il paese incredibilmente ricco culturalmente.", english: "Italian local pride is unique. It makes the country incredibly culturally rich." },
        ]},
        [
          { type: "mcq", question: "What is 'il campanilismo'?", options: ["bell-ringing", "local pride / parochialism", "camping", "champagne"], answer: "local pride / parochialism" },
          { type: "fill-blank", question: "Ogni regione ha il suo ___. (dialect)", options: ["dialetto", "dialogo", "dilemma", "diploma"], answer: "dialetto" },
          { type: "translate", question: "Translate: 'The Tuscan landscape is unmistakable.'", answer: "Il paesaggio toscano è inconfondibile." },
          { type: "mcq", question: "Standard Italian is based on which dialect?", options: ["Roman", "Neapolitan", "Tuscan/Florentine", "Milanese"], answer: "Tuscan/Florentine" },
        ]
      ),
      ch("c2-ch4", "Style & Elegance in Writing", "Stile ed Eleganza nella Scrittura", "Write with sophistication — essays, formal letters, and creative prose.",
        "✍️",
        [
          { italian: "la coesione", english: "cohesion", example: "Il testo manca di coesione.", exampleTranslation: "The text lacks cohesion.", category: "writing" },
          { italian: "la coerenza", english: "coherence", example: "La coerenza logica è fondamentale.", exampleTranslation: "Logical coherence is fundamental.", category: "writing" },
          { italian: "il registro linguistico", english: "register / tone", example: "Il registro deve essere formale.", exampleTranslation: "The register must be formal.", category: "writing" },
          { italian: "la sintesi", english: "synthesis / summary", example: "Scrivi una sintesi del capitolo.", exampleTranslation: "Write a summary of the chapter.", category: "writing" },
          { italian: "l'eloquenza", english: "eloquence", example: "La sua eloquenza è ammirevole.", exampleTranslation: "His eloquence is admirable.", category: "style" },
          { italian: "la perifrasi", english: "periphrasis / circumlocution", example: "Evita le perifrasi inutili.", exampleTranslation: "Avoid unnecessary circumlocutions.", category: "style" },
          { italian: "il lessico", english: "lexicon / vocabulary", example: "Ha un lessico molto ricco.", exampleTranslation: "He has a very rich vocabulary.", category: "language" },
          { italian: "la punteggiatura", english: "punctuation", example: "La punteggiatura cambia il significato.", exampleTranslation: "Punctuation changes the meaning.", category: "writing" },
          { italian: "il capoverso", english: "paragraph", example: "Ogni capoverso deve avere un'idea centrale.", exampleTranslation: "Every paragraph should have a central idea.", category: "writing" },
          { italian: "raffinato", english: "refined / sophisticated", example: "Il suo stile è molto raffinato.", exampleTranslation: "His style is very refined.", category: "style" },
        ],
        [
          { title: "Mastering Written Italian Style", explanation: "At C2 level, vary sentence length for rhythm, use subordinate clauses with precision, and employ sophisticated connectors: ciononostante, nondimeno, in virtù di, a prescindere da.", examples: [
            { italian: "Ciononostante, non si può negare l'importanza del contributo.", english: "Nevertheless, one cannot deny the importance of the contribution." },
            { italian: "A prescindere dalle difficoltà, il risultato è stato eccellente.", english: "Regardless of the difficulties, the result was excellent." },
            { italian: "In virtù di quanto esposto, si conclude che...", english: "By virtue of what has been presented, it is concluded that..." },
          ]},
        ],
        { title: "Writing Workshop", context: "A creative writing class with a renowned Italian author.", lines: [
          { speaker: "Author", italian: "La buona scrittura è come la musica: ha ritmo, pause, e armonia.", english: "Good writing is like music: it has rhythm, pauses, and harmony." },
          { speaker: "You", italian: "Come si raggiunge l'eleganza nello stile senza risultare artificiosi?", english: "How does one achieve elegance in style without seeming artificial?" },
          { speaker: "Author", italian: "Leggendo molto e scrivendo ancora di più. Il lessico si arricchisce con l'esperienza.", english: "By reading a lot and writing even more. Vocabulary enriches with experience." },
          { speaker: "You", italian: "Ciononostante, a volte la semplicità è più efficace dell'eloquenza.", english: "Nevertheless, sometimes simplicity is more effective than eloquence." },
          { speaker: "Author", italian: "Esattamente! Calvino diceva che la leggerezza non è superficialità. Questa è vera raffinatezza.", english: "Exactly! Calvino said that lightness is not superficiality. That is true refinement." },
        ]},
        [
          { type: "mcq", question: "What does 'la coesione' mean?", options: ["cohesion", "collision", "coercion", "coincidence"], answer: "cohesion" },
          { type: "fill-blank", question: "___, non si può negare il contributo. (Nevertheless)", options: ["Ciononostante", "Comunque", "Invece", "Quindi"], answer: "Ciononostante" },
          { type: "translate", question: "Translate: 'His style is very refined.'", answer: "Il suo stile è molto raffinato." },
          { type: "mcq", question: "What is 'il registro linguistico'?", options: ["language register", "cash register", "registration", "recording"], answer: "language register" },
        ]
      ),
    ],
  },
];
