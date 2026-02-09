import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg" className="bg-primary text-primary-foreground">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
