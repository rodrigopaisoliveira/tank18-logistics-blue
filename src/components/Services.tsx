import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Warehouse, Container, Wrench, Truck, Settings } from "lucide-react";
import heatingImage from "@/assets/service-heating.jpg";
import storageImage from "@/assets/service-storage.jpg";
import flexiTankImage from "@/assets/service-flexiTank.jpg";

const services = [
  {
    icon: Flame,
    title: "Aquecimento de Contentores-Tank",
    description: "Sistemas de aquecimento eficientes e seguros para manutenção da temperatura ideal dos seus contentores. Garantimos o acondicionamento perfeito do produto para a próxima fase logística.",
    image: heatingImage,
  },
  {
    icon: Warehouse,
    title: "Parqueamento de Contentores",
    description: "Infraestrutura moderna para parqueamento seguro de contentores de 20, 30 e 40 pés, carregados ou vazios. Oferecemos total segurança e rastreabilidade na nossa localização estratégica em Santa Iria de Azóia.",
    image: storageImage,
  },
  {
    icon: Container,
    title: "Instalação e Remoção de FlexiTanks",
    description: "Serviço profissional de instalação e remoção de flexiTanks. Contamos com equipa especializada e equipamentos de última geração para garantir a máxima fiabilidade no manuseamento de líquidos a granel.",
    image: flexiTankImage,
  },
  {
    icon: Wrench,
    title: "Inspeção e Reparação de Tanks",
    description: "Serviços especializados de inspeção e reparação de Tanks e contentores-Tank. Inclui testes de pressão para deteção de fugas, manutenção preventiva e corretiva, além de inspeções periódicas de 2,5 e 5 anos.",
    image: null,
  },
  {
    icon: Truck,
    title: "Logística Especializada",
    description: "Soluções logísticas customizadas para transporte e movimentação de contentores-Tank. Forte foco na eficiência, segurança e fiabilidade, adaptando-nos às suas necessidades específicas.",
    image: null,
  },
  {
    icon: Settings,
    title: "Aluguer de Equipamentos",
    description: "Disponibilizamos equipamentos de qualidade para locação, com preços personalizados. A nossa oferta inclui: Unidade móvel de recuperação de gás, Guarda-corpos de segurança móveis e Mangueiras de descarga.",
    image: null,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Os Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos soluções completas e personalizadas para contentores-Tank, 
            com forte foco na eficiência, segurança e fiabilidade. **Preços sob consulta.**
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
                    loading="lazy"
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
            A TANK18 garante soluções rápidas, seguras e adaptadas aos nossos parceiros. 
            Entre em contacto para um orçamento personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;