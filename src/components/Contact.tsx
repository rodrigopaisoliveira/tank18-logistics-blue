import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Validação simples
  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: "Campos obrigatórios",
      description: "Por favor, preencha todos os campos obrigatórios.",
      variant: "destructive",
    });
    return;
  }

  // Cria o corpo do e-mail formatado
  const emailBody = `
Olá Tank18,

O meu nome é ${formData.name}${formData.phone ? `, proprietário do número ${formData.phone}` : ""}.
Gostaria de solicitar um orçamento / entrar em contacto.

Mensagem:
${formData.message}

Melhores cumprimentos,
${formData.name}
${formData.email}
  `;

  // Link mailto formatado
  const mailtoLink = `mailto:Tank18lda@gmail.com?subject=${encodeURIComponent(
    `Pedido de Orçamento - ${formData.name}`
  )}&body=${encodeURIComponent(emailBody)}`;

  // Abre o cliente de e-mail
  window.location.href = mailtoLink;

  toast({
    title: "A abrir o cliente de e-mail...",
    description: "Verifique o seu programa de e-mail para enviar a mensagem.",
  });

  // Limpa o formulário
  setFormData({ name: "", email: "", phone: "", message: "" });
};


  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em Contacto
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender as suas necessidades. Solicite um orçamento personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                    <a
                      href="https://www.google.com/maps?q=Estrada+Nacional+10+KM+11,+Edif%C3%ADcio+Tank18,+2690-361+Santa+Iria+de+Az%C3%B3ia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Estrada Nacional 10 KM 11<br />
                      Edifício TANK18<br />
                      2690-361 Santa Iria de Azóia
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefones</h3>
                    <p className="text-sm text-muted-foreground">
                      Fixo: <a href="tel:218310595" className="hover:text-primary transition-colors">218 310 595</a><br />
                      Móvel: <a href="tel:919460684" className="hover:text-primary transition-colors">919 460 684</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <p className="text-sm text-muted-foreground">
                      <a 
                        href="mailto:Tank18lda@gmail.com" 
                        className="hover:text-primary transition-colors break-all"
                      >
                        Tank18lda@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-border/50">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nome Completo <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Nome Completo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-mail <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="joao@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+351 912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Mensagem <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva as suas necessidades ou solicite um orçamento."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Solicitar Orçamento
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
