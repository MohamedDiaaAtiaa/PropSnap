import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, User, Search, Menu, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  const handleSearch = () => {
    if (!user) {
      navigate('/auth');
    } else {
      // Implement search functionality for authenticated users
      console.log('Search functionality for authenticated users');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b glass-nav">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/4867b80b-cc57-497f-ad6c-323a9a9bd373.png" 
            alt="PropSnap" 
            className="w-8 h-8"
          />
          <span className="font-heading font-semibold text-xl text-foreground">
            PropSnap
          </span>
          <Badge variant="secondary" className="hidden sm:inline-flex text-xs">
            Mediated
          </Badge>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {user && (
            <>
              <Link to="/buy" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                Buy
              </Link>
              <Link to="/rent" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                Rent
              </Link>
              <Link to="/list-property" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                List Property
              </Link>
            </>
          )}
          <Link to="/how-it-works" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
            How it Works
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" onClick={handleSearch}>
            <Search className="w-4 h-4" />
          </Button>
          
          {user && (
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
            </Button>
          )}

          <Button 
            variant={user ? "ghost" : "outline"} 
            size="sm" 
            className="hidden sm:inline-flex"
            onClick={handleAuthAction}
          >
            {user ? <LogOut className="w-4 h-4" /> : <User className="w-4 h-4" />}
            {user ? "Sign Out" : "Sign In"}
          </Button>

          {!user && (
            <Button variant="cta" size="sm" className="hidden sm:inline-flex" onClick={() => navigate('/auth')}>
              Get Started
            </Button>
          )}

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;