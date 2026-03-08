import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Youtube, Mic, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const resourceData: Record<string, { title: string, icon: React.ElementType, description: string, links: { title: string, url: string, description: string }[] }> = {
  youtube: {
    title: "YouTube Channels",
    icon: Youtube,
    description: "Great video content for learning Italian.",
    links: [
      { title: "Learn Italian with Lucrezia", url: "https://www.youtube.com/user/lucreziaoddone", description: "Vlogs, grammar, and vocabulary from a native speaker." },
      { title: "Italy Made Easy", url: "https://www.youtube.com/c/ItalyMadeEasy", description: "Comprehensive lessons for all levels." },
      { title: "Easy Italian", url: "https://www.youtube.com/c/EasyItalian", description: "Street interviews to learn how Italians really speak." },
      { title: "Podcast Italiano", url: "https://www.youtube.com/c/PodcastItaliano", description: "Advanced vocabulary and cultural insights." }
    ]
  },
  podcasts: {
    title: "Podcasts",
    icon: Mic,
    description: "Improve your listening comprehension on the go.",
    links: [
      { title: "Coffee Break Italian", url: "https://radiolingua.com/coffeebreakitalian/", description: "Structured audio lessons from basics to advanced." },
      { title: "News in Slow Italian", url: "https://www.newsinslowitalian.com/", description: "Current events discussed at a manageable pace." },
      { title: "Italiano Automatico", url: "https://www.italianoautomatico.com/", description: "Focus on listening and natural language acquisition." }
    ]
  },
  blogs: {
    title: "Blogs & Reading",
    icon: Globe,
    description: "Articles and stories to build vocabulary and grammar.",
    links: [
      { title: "Transparent Language Italian Blog", url: "https://blogs.transparent.com/italian/", description: "Regular articles on language, culture, and grammar." },
      { title: "The Local Italy", url: "https://www.thelocal.it/", description: "Italian news in English, great for cultural context." },
      { title: "Il Post", url: "https://www.ilpost.it/", description: "An Italian news site with clear, accessible journalism (for B1+)." }
    ]
  }
};

export default function Resources() {
  const { category } = useParams<{ category: string }>();
  const data = category && resourceData[category] ? resourceData[category] : null;

  if (!data) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold">Category not found</h1>
        <Button asChild className="mt-4"><Link to="/">Go Back Home</Link></Button>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="container max-w-4xl py-12 md:py-20">
      <Button variant="ghost" asChild className="mb-8">
        <Link to="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
      </Button>

      <div className="mb-12 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <div>
          <h1 className="font-display text-4xl font-bold text-foreground">{data.title}</h1>
          <p className="text-lg text-muted-foreground">{data.description}</p>
        </div>
      </div>

      <div className="grid gap-6">
        {data.links.map((link, i) => (
          <motion.a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-card-foreground group-hover:text-primary">{link.title}</h3>
              <p className="mt-1 text-muted-foreground">{link.description}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="flex items-center text-sm font-medium text-primary">
                Visit <ExternalLink className="ml-1 h-4 w-4" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}