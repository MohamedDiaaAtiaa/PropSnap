import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import PropertyCard from "./PropertyCard";
import { Filter, Grid, List, MapPin } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const PropertyListings = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const properties = [
    {
      id: "1",
      image: property1,
      price: "$850,000",
      title: "Modern Family Home with Garden",
      location: "Downtown District",
      beds: 4,
      baths: 3,
      sqft: 2400,
      type: "sale" as const,
      verified: true,
      featured: true
    },
    {
      id: "2",
      image: property2,
      price: "$3,200",
      title: "Luxury Downtown Apartment",
      location: "Financial District",
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "rent" as const,
      verified: true,
    },
    {
      id: "3",
      image: property3,
      price: "$1,850",
      title: "Charming Townhouse in Historic Area",
      location: "Old Town",
      beds: 3,
      baths: 2,
      sqft: 1600,
      type: "rent" as const,
      verified: true,
    },
    {
      id: "4",
      image: property1,
      price: "$750,000",
      title: "Spacious Suburban Home",
      location: "Greenfield Heights",
      beds: 5,
      baths: 3,
      sqft: 2800,
      type: "sale" as const,
      verified: true,
    },
    {
      id: "5",
      image: property2,
      price: "$2,400",
      title: "Modern Studio Apartment",
      location: "Tech District",
      beds: 1,
      baths: 1,
      sqft: 650,
      type: "rent" as const,
      verified: true,
    },
    {
      id: "6",
      image: property3,
      price: "$950,000",
      title: "Executive Townhouse",
      location: "Business Quarter",
      beds: 4,
      baths: 3,
      sqft: 2200,
      type: "sale" as const,
      verified: true,
      featured: true
    }
  ];

  return (
    <section id="properties" className="py-16 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <MapPin className="w-3 h-3 mr-1" />
            All Properties Mediated & Verified
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our curated selection of verified properties. All negotiations are handled securely through our platform.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-xl shadow-card mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-500k">$0 - $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                  <SelectItem value="1m+">$1M+</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="Location..." className="w-full sm:w-48" />
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
              
              <div className="flex rounded-lg border p-1">
                <Button 
                  variant={viewMode === "grid" ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="px-3"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button 
                  variant={viewMode === "list" ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            Showing {properties.length} properties
          </div>
        </div>

        {/* Property Grid */}
        <div className={`grid gap-6 mb-8 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {properties.map((property, index) => (
            <div key={property.id} className="stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="hover:btn-hover">
            Load More Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;