
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
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-16 mt-4 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `url('/lovable-uploads/59dd22ff-cc5b-47bf-982d-be22f5550805.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
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
