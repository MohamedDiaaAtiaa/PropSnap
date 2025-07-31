import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, MessageCircle, FileCheck, CreditCard, Users, Search } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Mediation",
      description: "All communications go through our secure platform. No direct contact between parties until deal completion.",
      badge: "Core Feature"
    },
    {
      icon: MessageCircle,
      title: "AI-Filtered Chat",
      description: "Smart filters prevent sharing personal info and manipulative language during negotiations.",
      badge: "Smart Tech"
    },
    {
      icon: FileCheck,
      title: "Auto-Generated Contracts",
      description: "Legal documents created automatically based on agreed terms. E-signature and blockchain verification included.",
      badge: "Legal Protection"
    },
    {
      icon: CreditCard,
      title: "Escrow Protection",
      description: "Secure payment holding until all conditions are met. Complete financial protection for both parties.",
      badge: "Financial Safety"
    },
    {
      icon: Users,
      title: "Dispute Resolution",
      description: "Professional mediation service with human reviewers and AI assistance for conflict resolution.",
      badge: "Support"
    },
    {
      icon: Search,
      title: "Verified Listings",
      description: "All properties and owners verified with ID and ownership proof. No fake listings or scams.",
      badge: "Trust & Safety"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Shield className="w-3 h-3 mr-1" />
            Why Choose PropSnap
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Protection for Real Estate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform eliminates the risks and complications of traditional real estate transactions 
            through advanced mediation technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;