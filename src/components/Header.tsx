import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">TANK18</div>
            <div className="text-sm text-muted-foreground hidden md:block">LDA</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("contact")} size="lg">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Contato
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full" size="lg">
              Fale Conosco
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
