import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyListings from "@/components/PropertyListings";
import { Badge } from "@/components/ui/badge";

const Rent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">
            Rental Properties
          </Badge>
          <h1 className="text-4xl font-bold font-heading mb-4">
            Find Your Perfect Rental
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover rental properties with verified landlords and secure lease agreements through our mediation platform.
          </p>
        </div>
        <PropertyListings />
      </main>
      <Footer />
    </div>
  );
};

export default Rent;