import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Search, MessageSquare, FileCheck, Key, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Properties",
      description: "Search through our verified listings with detailed information and photos.",
    },
    {
      icon: MessageSquare,
      title: "Express Interest",
      description: "Click 'Initiate Negotiation' to start the mediated communication process.",
    },
    {
      icon: Shield,
      title: "Secure Mediation",
      description: "Our platform facilitates all communication between buyers and sellers safely.",
    },
    {
      icon: FileCheck,
      title: "Document Review",
      description: "All legal documents and contracts are reviewed by our mediation team.",
    },
    {
      icon: Key,
      title: "Safe Transaction",
      description: "Complete your purchase or rental with full transparency and protection.",
    },
    {
      icon: Star,
      title: "Ongoing Support",
      description: "Get continued support throughout and after your property transaction.",
    },
  ];

  const benefits = [
    "No direct contact required - all communication is mediated",
    "Verified properties and users for your safety",
    "Legal document review and protection",
    "Transparent pricing with no hidden fees",
    "24/7 customer support throughout the process",
    "Secure payment processing and escrow services",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            How It Works
          </Badge>
          <h1 className="text-4xl font-bold font-heading mb-4">
            Safe Real Estate Made Simple
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mediated platform ensures every transaction is secure, transparent, and hassle-free for both buyers and sellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Why Choose PropSnap Mediation?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <h2 className="text-2xl font-bold font-heading mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of satisfied users who have safely bought, sold, and rented properties through PropSnap.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;