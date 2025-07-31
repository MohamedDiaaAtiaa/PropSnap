import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, Home, Users } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import heroProperty from "@/assets/hero-property.jpg";

const Hero = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSearchProperties = () => {
    if (!user) {
      navigate('/auth');
    } else {
      // Scroll to properties section or navigate to properties page
      const propertiesSection = document.getElementById('properties');
      if (propertiesSection) {
        propertiesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroProperty} 
          alt="Modern property" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            <Shield className="w-3 h-3 mr-1" />
            100% Secure & Mediated Platform
          </Badge>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Real Estate Made
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Safe</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Buy, sell, or rent properties through our secure mediation platform. 
            No direct contact, full transparency, complete protection.
          </p>

          {/* Search Bar */}
          <div className="bg-card p-2 rounded-xl shadow-elevated mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search by location, price, or property type..."
                  className="pl-10 border-0 bg-transparent focus-visible:ring-0 text-sm"
                />
              </div>
              <Button variant="hero" size="lg" className="sm:w-auto w-full" onClick={handleSearchProperties}>
                Search Properties
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="cta" size="lg" className="text-base px-8 pulse-glow hover:btn-hover" onClick={() => navigate('/buy')}>
              <Home className="w-4 h-4 mr-2" />
              Browse Properties
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 hover:btn-hover" onClick={() => navigate('/how-it-works')}>
              <Users className="w-4 h-4 mr-2" />
              How Mediation Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Secure Transactions</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-1">99.8%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Mediation Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;