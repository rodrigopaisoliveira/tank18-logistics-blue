import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Tank18 Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Especialistas em serviços técnicos e logísticos para contentores-Tank. 
              Qualidade, segurança e eficiência em cada operação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#home" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps?q=Estrada+Nacional+10+KM+11,+Edif%C3%ADcio+Tank18,+2690-361+Santa+Iria+de+Az%C3%B3ia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Estrada Nacional 10 KM 11, Edifício Tank18<br />
                  2690-361 Santa Iria de Azóia
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <a href="tel:218310595" className="hover:text-primary-foreground transition-colors">
                    218 310 595
                  </a>
                  {" / "}
                  <a href="tel:919460684" className="hover:text-primary-foreground transition-colors">
                    919 460 684
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a 
                  href="mailto:Tank18lda@gmail.com" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all"
                >
                  Tank18lda@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-4 md:justify-start justify-center">
              <a
                href="https://www.facebook.com/TRANSPORTESCGL/" // substitui pelo link real se for diferente
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/cglgroup.pt/" // substitui pelo link real se for diferente
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center text-sm text-primary-foreground/60">
            <p>© {currentYear} Tank18 LDA. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
