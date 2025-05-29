import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "홈", labelEn: "Home" },
    { path: "/services", label: "서비스", labelEn: "Services" },
    { path: "/portfolio", label: "포트폴리오", labelEn: "Portfolio" },
    { path: "/about", label: "About Us", labelEn: "About Us" },
    { path: "/insights", label: "인사이트", labelEn: "Insights" },
    { path: "/contact", label: "Contact", labelEn: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const NavLink = ({ path, label, mobile = false }: { path: string; label: string; mobile?: boolean }) => (
    <Link href={path}>
      <Button
        variant={isActive(path) ? "default" : "ghost"}
        className={`${mobile ? "w-full justify-start" : ""} ${
          isActive(path) 
            ? "bg-primary text-primary-foreground" 
            : "text-muted-foreground hover:text-primary"
        }`}
        onClick={() => mobile && setIsOpen(false)}
      >
        {label}
      </Button>
    </Link>
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 gradient-primary rounded-lg mr-3"></div>
              <span className="text-xl font-bold text-primary">DataViz Agency</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.path} path={item.path} label={item.label} />
            ))}
            <Link href="/dashboard">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground ml-4">
                대시보드
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <NavLink key={item.path} path={item.path} label={item.label} mobile />
                  ))}
                  <Link href="/dashboard">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      대시보드
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
