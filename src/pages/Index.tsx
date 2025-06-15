
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Zap, ArrowRight, IndianRupee } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Clock className="h-12 w-12 text-orange-500" />,
      title: "Time definite",
      description: "We commit to timelines isn't just about delivery, it's in everything we do. Our Clients, Partners and Vendors count on us to move with urgency, clarity, and reliability. We build time discipline into our services, commitments, and communication. Because every minute matters and we treat it that way."
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      title: "Flexibility",
      description: "No two customers are the same and we don't treat them that way. We don't expect you to fit into our system, we adapt to yours. We understand every need is unique, and so is our approach. Our solutions are built to flex with your changing needs, not resist them."
    },
    {
      icon: <IndianRupee className="h-12 w-12 text-orange-500" />,
      title: "No Surprise pricing",
      description: "No hidden & Confusing quotes, No Surprise Charges, No fine Print. We believe in clear, consistent pricing that builds trust. Our rate cards are simple, because logistics should be easy to understand, starting with the bill."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[400px] flex items-end"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}lovable-uploads/59dd22ff-cc5b-47bf-982d-be22f5550805.png')`
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end pb-4 pr-8">
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
              The commitments that guide everything we do at Arundev Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                About Us
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                At <strong>Arundev Logistics</strong>, we specialize in reliable, tailored logistics solutions and have established ourselves since 2019 as the <strong>go-to logistics partner</strong> for businesses of all sizes and individuals across Chennai.
              </p>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-blue-700">
                <Link to="/about">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="text-center lg:text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to transform your logistics experience?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Experience seamless logistics solutions tailored just for you
              </p>
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/contact">
                  Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
