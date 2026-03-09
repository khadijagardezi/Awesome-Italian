import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, MessageCircle, Trophy, Zap, Type, BookText, Youtube, Mic, Globe, Tv } from "lucide-react";
import { courseData } from "@/data/courseData";
import { useProgress } from "@/hooks/useProgress";

const features = [
{ icon: BookOpen, title: "Structured Lessons", desc: "From A1 to B1 with vocabulary, grammar, and dialogues" },
{ icon: MessageCircle, title: "Real Conversations", desc: "Practice with real-life scenarios: cafés, travel, university" },
{ icon: Zap, title: "Interactive Exercises", desc: "MCQs, fill-in-blanks, matching, and translation practice" },
{ icon: Trophy, title: "Track Progress", desc: "Complete chapters, earn badges, and review vocabulary" }];


export default function Index() {
  const { getLevelProgress } = useProgress();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-italia-green-light via-background to-italia-red-light py-20 md:py-32">
        <div className="container relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block animate-float text-6xl">🇮🇹</span>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Learn Italian,<br />
              Live the Culture
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Your personal journey from "Ciao!" to flowing conversations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/levels">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/flashcards">Try Flashcards</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.08),transparent_60%)]" />
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground">Why Parla!?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) =>
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
              
                <f.icon className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Levels Preview */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground">Your Learning Journey</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Pre-A1 Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.5 }}>
              
              <div className="group block rounded-2xl border-2 border-dashed border-border bg-card p-8 transition-all hover:border-primary hover:shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-bold text-secondary">Pre-A1</span>
                  <span className="text-sm text-muted-foreground">Basics</span>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-card-foreground">Getting Started</h3>
                <p className="mb-4 text-sm text-muted-foreground">Learn the Italian alphabet, pronunciation rules, and essential grammar foundations.</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/alphabet"><Type className="mr-1 h-4 w-4" />Alphabet</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/grammar"><BookText className="mr-1 h-4 w-4" />Grammar</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Course levels */}
            {courseData.map((level, i) => {
              const pct = getLevelProgress(level.id, level.chapters.length);
              return (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 1) * 0.15, duration: 0.5 }}>
                  <Link
                    to={`/levels/${level.id}`}
                    className="group block rounded-2xl border-2 border-border bg-card p-8 transition-all hover:border-primary hover:shadow-xl">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                        {level.name}
                      </span>
                      <span className="text-sm text-muted-foreground">{level.chapters.length} chapters</span>
                    </div>
                    <h3 className="mb-2 font-display text-xl font-bold text-card-foreground">{level.label}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{level.description}</p>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${pct}%` }} />
                    </div>
                    <span className="mt-2 block text-xs text-muted-foreground">{pct}% complete</span>
                  </Link>
                </motion.div>);
            })}
          </div>
        </div>
      </section>


      {/* More Resources */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground">More Resources</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link to="/resources/youtube" className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Youtube className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">YouTube Channels</h3>
              <p className="text-sm text-muted-foreground">Learn Italian with Lucrezia, Italy Made Easy, and more great video content.</p>
            </Link>
            
            <Link to="/resources/podcasts" className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">Podcasts</h3>
              <p className="text-sm text-muted-foreground">Coffee Break Italian, News in Slow Italian, and other audio resources.</p>
            </Link>

            <Link to="/resources/blogs" className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">Blogs & Reading</h3>
              <p className="text-sm text-muted-foreground">Articles, short stories, and cultural insights to improve your reading.</p>
            </Link>
            
            <Link to="/resources/movies" className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Tv className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold">Movies & TV</h3>
              <p className="text-sm text-muted-foreground">Discover Italian cinema, series, and shows to immerse yourself.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border bg-muted/30 pb-8 pt-16">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 font-display text-2xl font-bold text-foreground">La Mia Storia</h2>
            <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm md:p-8">
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">Ciao! I'm the creator of Parla!. I started out in the tech world before taking a huge leap to move to Italy for my advanced degree. Arriving in a completely new country was both thrilling and overwhelming. I built this platform because I know exactly how it feels to start from zero. 

              </p>
              <p className="text-base leading-relaxed text-muted-foreground">Parla! brings together the structured lessons I needed and the real-world situations I actually faced. Whether you're planning a big move, studying abroad, or just dreaming about Italy, I hope this helps you feel a little more confident in your own Italian adventure.

              </p>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>Parla! - Learn Italian, one conversation at a time.</p>
          </div>
        </div>
      </footer>
    </div>);

}