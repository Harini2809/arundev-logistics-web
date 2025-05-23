
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Package, Plane, Ship, Clock, Shield } from "lucide-react";

const Products = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-blue-700" />,
      title: "Road Transportation",
      description: "Comprehensive road transport services with modern fleet covering all major routes across India.",
      features: ["Full Truck Load (FTL)", "Less Than Truck Load (LTL)", "Express Delivery", "Interstate Transport"]
    },
    {
      icon: <Package className="h-12 w-12 text-blue-700" />,
      title: "Warehousing Solutions",
      description: "Secure storage facilities with inventory management and distribution services.",
      features: ["Climate Controlled Storage", "Inventory Management", "Order Fulfillment", "Cross Docking"]
    },
    {
      icon: <Plane className="h-12 w-12 text-blue-700" />,
      title: "Express Delivery",
      description: "Fast and reliable express delivery services for time-sensitive shipments.",
      features: ["Same Day Delivery", "Next Day Delivery", "Air Cargo", "Priority Handling"]
    },
    {
      icon: <Ship className="h-12 w-12 text-blue-700" />,
      title: "Freight Forwarding",
      description: "Complete freight forwarding solutions for domestic and international shipments.",
      features: ["Custom Clearance", "Documentation", "Cargo Insurance", "Door to Door Service"]
    }
  ];

  const specializations = [
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Time-Critical Shipments",
      description: "Specialized handling for urgent and time-sensitive deliveries"
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Fragile & Valuable Goods",
      description: "Extra care and security for high-value and delicate items"
    },
    {
      icon: <Package className="h-8 w-8 text-orange-500" />,
      title: "Bulk Transportation",
      description: "Efficient solutions for large volume shipments"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your transportation needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From local deliveries to nationwide distribution, we have you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specializations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized services for unique transportation requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-gray-600">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across various sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              "Manufacturing", "Retail", "E-commerce", "Pharmaceuticals", 
              "Automotive", "Textiles", "Food & Beverage", "Electronics",
              "Construction", "Agriculture", "Chemicals", "FMCG"
            ].map((industry, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 hover:bg-blue-50 transition-colors">
                <span className="text-sm font-medium text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific transportation requirements and get a tailored quote.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/enquiry">Get Custom Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
