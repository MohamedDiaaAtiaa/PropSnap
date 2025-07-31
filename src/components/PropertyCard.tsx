import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square, Shield, Heart } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface PropertyCardProps {
  id: string;
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "sale" | "rent";
  verified?: boolean;
  featured?: boolean;
}

const PropertyCard = ({ 
  image, 
  price, 
  title, 
  location, 
  beds, 
  baths, 
  sqft, 
  type,
  verified = false,
  featured = false 
}: PropertyCardProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInitiateNegotiation = () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    // For now, show a toast indicating the feature is coming soon
    toast({
      title: "Negotiation Initiated",
      description: "Our mediation team will contact you within 24 hours to begin the secure negotiation process.",
    });
  };

  return (
    <Card className="group overflow-hidden hover:card-hover transition-all duration-300 stagger-item cursor-pointer">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlays */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={type === "sale" ? "default" : "secondary"} className="text-xs">
            For {type === "sale" ? "Sale" : "Rent"}
          </Badge>
          {featured && (
            <Badge className="bg-gradient-primary text-primary-foreground text-xs">
              Featured
            </Badge>
          )}
        </div>

        <div className="absolute top-3 right-3 flex gap-2">
          {verified && (
            <Badge variant="secondary" className="text-xs">
              <Shield className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          )}
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-background/80 hover:bg-background">
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        <div className="absolute bottom-3 left-3">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1">
            <span className="font-heading font-bold text-lg text-foreground">{price}</span>
            {type === "rent" && <span className="text-sm text-muted-foreground">/month</span>}
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{beds} bed{beds !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{baths} bath{baths !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <Button variant="cta" className="w-full hover:btn-hover" onClick={handleInitiateNegotiation}>
          Initiate Negotiation
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;