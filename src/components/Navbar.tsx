
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/enquiry", label: "Get Quote" },
    { path: "/track", label: "Track Package" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/7bb6529b-da9c-4ad2-91d8-7fba9d87ad83.png" 
              alt="Arundev Logistics Logo" 
              className="h-16 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800">
                Arundev <span className="text-orange-500">Logistics</span>
              </span>
              <div className="text-xs text-gray-600 italic max-w-[240px]">
                <div>Where logistics meets Innovation-</div>
                <div>Made simple for You</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-2 py-1 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive(path)
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(path)
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
