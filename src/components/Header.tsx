import { Link, useLocation } from "react-router-dom";
import { BookOpen, GraduationCap, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🇮🇹</span>
          <span className="font-display text-xl font-bold text-foreground">
            Parla<span className="text-primary">!</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          <Button variant={location.pathname.startsWith("/levels") ? "default" : "ghost"} size="sm" asChild>
            <Link to="/levels"><GraduationCap className="mr-1 h-4 w-4" />Levels</Link>
          </Button>
          <Button variant={location.pathname === "/flashcards" ? "default" : "ghost"} size="sm" asChild>
            <Link to="/flashcards"><BookOpen className="mr-1 h-4 w-4" />Flashcards</Link>
          </Button>
          <Button variant={location.pathname === "/glossary" ? "default" : "ghost"} size="sm" asChild>
            <Link to="/glossary"><List className="mr-1 h-4 w-4" />Glossary</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
