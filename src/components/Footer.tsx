
import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/7bb6529b-da9c-4ad2-91d8-7fba9d87ad83.png`} 
                alt="Arundev Logistics Logo" 
                className="h-24 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-4xl font-bold">
                  Arundev <span className="text-orange-500">Logistics</span>
                </span>
                <div className="text-sm text-gray-400 italic">
                  <div>Where logistics meets Innovation-</div>
                  <div>Made simple for You</div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted logistics partner providing reliable transportation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Become our Vendor
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">+91 7904852870</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">sales@arundevlogistics.com</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <a 
                  href="https://www.linkedin.com/in/arundev-logistics-a529591b8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/arundevlogistics?igsh=NGZ5bGRoazUxb2Rn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Arundev Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
