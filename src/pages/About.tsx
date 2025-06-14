import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Eye, Heart, ArrowRight, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-700" />,
      title: "Technology - Human centred",
      description: "We follow a \"Build. Break. Better.\" Mindset, always ready to rethink. If it helps the client, we're not afraid to redo or reinvent. Our tools are designed to make your work easier, not harder. Because great logistics tech should work for people, not the other way around."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-700" />,
      title: "Customer Centric",
      description: "We serve not just our customers, but our customers' customers. Your priorities shape our processes, not the other way around. We stay accountable, proactive, and easy to reach. Because your trust and theirs, rides with us."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-700" />,
      title: "Our People, Our Priority",
      description: "People aren't just part of our business; they are the business. From drivers and partners to clients and team members, every relationship matters. We lead with respect, act with fairness, and communicate with transparency. Because strong logistics is built on stronger human connections."
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-700" />,
      title: "Transparency",
      description: "What we commit is what we deliver, no surprises, no hidden terms. From pricing to timelines, we keep everything clear and upfront. We communicate early, often, and honestly, even when it's tough. Because long-term trust starts with complete clarity."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Arundev Logistics</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Building trust through reliable transportation solutions since our inception
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-lg text-gray-600 mb-4">
                At Arundev Logistics, we specialize in reliable, tailored logistics solutions and have established ourselves since 2019 as the go-to logistics partner for businesses of all sizes and individuals across Chennai.
              </p>
              <p className="text-lg text-gray-600">
                Driven by a client-first mindset, we combine innovation with simplicity to deliver logistics solutions that just work—no jargon, no confusion, and absolutely no BS. Your logistics, made smarter, faster, and more dependable.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/28510f6a-4699-476c-a538-40a7a953b084.png" 
                alt="Arundev Logistics Warehouse" 
                className="h-[450px] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-blue-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to transform your logistics experience with us?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/enquiry">
                Get Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/track">
                Track Package <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-700 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  To revolutionize logistics by offering seamless, reliable, and cost effective transportation solutions that empower businesses and individuals alike.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-700 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  To be a trusted leader in the logistics industry, known for innovation, efficiency, and a customer-first approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Principles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Arundev Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
