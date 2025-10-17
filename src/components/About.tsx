import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Compromisso total com os mais altos padrões de segurança em todas as operações.",
  },
  {
    icon: Users,
    title: "Equipa Experiente",
    description: "Profissionais altamente qualificados e com vasta experiência no setor.",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Certificações e processos que asseguram excelência em cada serviço prestado.",
  },
  {
    icon: Clock,
    title: "Disponibilidade",
    description: "Atendimento ágil e suporte contínuo para suas necessidades logísticas.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre a TANK18
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sediada em Santa Iria de Azóia, Lisboa, a TANK18 LDA é referência em serviços 
              técnicos e logísticos para contentores-Tank.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-card border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">A Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proporcionar soluções técnicas e logísticas de excelência para contentores-Tank, 
                  garantindo eficiência, segurança e confiabilidade em cada operação. O nosso compromisso 
                  é superar as expectativas dos clientes através de um atendimento personalizado e 
                  serviços de alta qualidade.
                </p>
              </CardContent>
            </Card>

<a
  href="https://www.google.com/maps/place/Estrada+Nacional+10+KM+11,+2690-361+Santa+Iria+de+Azóia"
  target="_blank"
  rel="noopener noreferrer"
  className="block hover:shadow-lg transition-shadow duration-300"
>
<Card className="shadow-card border-border/50">
  <CardContent className="pt-6">
    <h3 className="text-xl font-semibold text-foreground mb-4">
      A Nossa Localização
    </h3>
    <p className="text-muted-foreground leading-relaxed mb-4">
      Estrategicamente localizada na Estrada Nacional 10, KM 11, em Santa Iria de Azóia, 
      a nossa infraestrutura moderna está preparada para atender as suas necessidades logísticas 
      com agilidade e profissionalismo.
    </p>
    <p className="text-sm text-muted-foreground">
      <strong className="text-foreground">Endereço:</strong><br />
      <a
        href="https://www.google.com/maps/place/Estrada+Nacional+10+KM+11,+2690-361+Santa+Iria+de+Azóia"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground no-underline hover:no-underline cursor-pointer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        Estrada Nacional 10 KM 11<br />
        Edifício TANK18<br />
        2690-361 Santa Iria de Azóia
      </a>
    </p>
  </CardContent>
</Card>


          </a>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
