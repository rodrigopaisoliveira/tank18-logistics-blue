import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Warehouse, Container, Wrench, Truck, Settings } from "lucide-react";
import heatingImage from "@/assets/service-heating.jpg";
import storageImage from "@/assets/service-storage.jpg";
import flexitankImage from "@/assets/service-flexitank.jpg";

const services = [
  {
    icon: Flame,
    title: "Aquecimento de Contentores-Tanque",
    description: "Sistemas de aquecimento eficientes e seguros para manutenção da temperatura ideal dos seus contentores.",
    image: heatingImage,
  },
  {
    icon: Warehouse,
    title: "Armazenamento Seguro",
    description: "Infraestrutura moderna para armazenamento de contentores-tanque com total segurança e rastreabilidade.",
    image: storageImage,
  },
  {
    icon: Container,
    title: "Instalação de Flexitanks",
    description: "Instalação profissional de flexitanks com equipamentos de última geração e equipe especializada.",
    image: flexitankImage,
  },
  {
    icon: Wrench,
    title: "Manutenção Técnica",
    description: "Serviços completos de manutenção preventiva e corretiva para seus equipamentos.",
    image: null,
  },
  {
    icon: Truck,
    title: "Logística Especializada",
    description: "Soluções logísticas customizadas para transporte e movimentação de contentores-tanque.",
    image: null,
  },
  {
    icon: Settings,
    title: "Aluguer de Equipamentos",
    description: "Disponibilizamos equipamentos de qualidade para locação, com preços personalizados.",
    image: null,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos soluções completas e personalizadas para contentores-tanque, 
            com preços adaptados às suas necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              )}
              <CardHeader className={!service.image ? "pt-8" : ""}>
                {!service.image && (
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                )}
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-card rounded-lg p-6 shadow-card max-w-2xl mx-auto">
          <p className="text-foreground font-medium mb-2">
            Atendimento Personalizado
          </p>
          <p className="text-muted-foreground">
            Cada serviço é adaptado às necessidades específicas do cliente. 
            Entre em contato para um orçamento personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
