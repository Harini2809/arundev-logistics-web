
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Truck, Shield, Clock, Award, ArrowRight } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Truck className="h-12 w-12 text-blue-700" />,
      title: "Reliable Transport",
      description: "Professional transportation services with modern fleet and experienced drivers."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-700" />,
      title: "Safe & Secure",
      description: "Your goods are protected with comprehensive insurance and secure handling."
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-700" />,
      title: "On-Time Delivery",
      description: "We ensure punctual delivery with real-time tracking and updates."
    },
    {
      icon: <Award className="h-12 w-12 text-blue-700" />,
      title: "Quality Service",
      description: "Award-winning customer service with 24/7 support for all your needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/lovable-uploads/941a8acf-d27d-4157-84c0-8b840dc0455c.png" 
                alt="Thiruvalluvar" 
                className="h-80 w-auto object-contain"
              />
            </div>
            <div className="pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Trusted <span className="text-orange-400">Logistics</span> Partner
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Delivering excellence in transportation and logistics solutions across India. 
                Safe, reliable, and on-time delivery guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link to="/enquiry">
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white hover:text-blue-700">
                  <Link to="/about">Learn More</Link>
                </Button>
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Link to="/track">
                    Track Package <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Arundev Logistics?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive logistics solutions with a commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Ship with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a custom quote and experience the difference of working with professionals.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
