import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyListings from "@/components/PropertyListings";
import { Badge } from "@/components/ui/badge";

const Buy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">
            Buy Properties
          </Badge>
          <h1 className="text-4xl font-bold font-heading mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of properties for sale with complete transparency and security through our mediation platform.
          </p>
        </div>
        <PropertyListings />
      </main>
      <Footer />
    </div>
  );
};

export default Buy;