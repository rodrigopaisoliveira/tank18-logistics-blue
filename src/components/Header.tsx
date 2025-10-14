import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react"; // Importamos o ícone Phone
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Defina o número de telefone aqui
  const phoneNumber = "+351919460684"; 

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  
  // Função para lidar com a chamada
  const handleCall = () => {
      window.location.href = `tel:${phoneNumber}`;
      setIsMenuOpen(false); // Fecha o menu se estiver aberto
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2 focus:outline-none cursor-pointer group"
              aria-label="Voltar para a Home"
          >
              <div className="text-2xl font-bold text-primary group-hover:opacity-80 transition-opacity">TANK18</div>
              <div className="text-sm text-muted-foreground hidden md:block group-hover:opacity-80 transition-opacity">LDA</div>
          </button>

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
              Contacto
            </button>
          </nav>

          {/* Desktop - Solicitar Orçamento */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("contact")} size="lg">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Actions: Call Button & Menu Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Botão de Chamada para Telemóvel */}
            <Button onClick={handleCall} size="icon" className="flex-shrink-0"> 
                <Phone size={20} />
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary p-2"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
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
              Contacto
            </button>
            
            {/* Botão de Solicitar Orçamento (No menu mobile) */}
            <Button onClick={() => scrollToSection("contact")} className="w-full" size="lg">
              Solicitar Orçamento
            </Button>
            
             {/* Botão de Chamada Completo (No menu mobile) */}
            <Button onClick={handleCall} className="w-full" size="lg">
              <Phone className="mr-2 h-4 w-4" /> Ligar Agora
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;