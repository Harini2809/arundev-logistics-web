
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Warehouse, Users, Clock, DollarSign, Zap } from "lucide-react";

const Products = () => {
  const services = [
    {
      icon: <img src="/lovable-uploads/7bb6529b-da9c-4ad2-91d8-7fba9d87ad83.png" alt="ADL Trucking" className="h-12 w-12 object-contain" />,
      title: "ADL Trucking",
      description: "ADL Trucking is our dedicated Full Truck Load solution designed for businesses that demand punctuality, visibility, and control. Whether it's a single shipment or a recurring route, we ensure on-time vehicle placement, live tracking, and zero guesswork. Our centralized Control Tower Team monitors every move, proactively managing routes, schedules, and exceptions to keep your cargo on track.",
      features: ["Full Truck Load (FTL)", "Live Tracking", "Control Tower Management", "On-time Vehicle Placement"]
    },
    {
      icon: <img src="/lovable-uploads/ea1d26fc-376e-4f00-ad4f-a810693a1acb.png" alt="Chennai Express" className="h-12 w-12 object-contain" />,
      title: "Chennai Express",
      description: "Say goodbye to overpaying for partial truck loads. Chennai Express is our new-age, no-nonsense solution for first mile and last mile partial truckload and small package movement within the city, you pay only for the space you use, not for the whole truck. No surge pricing. No shady charges. No waiting-time traps. Just simple, city-smart logistics. Built for businesses of all size and Individuals, Chennai Express offers same day and next day delivery.",
      features: ["Same Day Delivery", "Next Day Delivery", "Pay Per Space", "No Surge Pricing"]
    },
    {
      icon: <Warehouse className="h-12 w-12 text-blue-700" />,
      title: "Smart Storage",
      description: "Introducing Smart Storage, a first-of-its-kind in-transit storage solution in Chennai. Designed for businesses and individuals who need flexible, short-term storage, we offer secure space on a per-day pricing model, without locking you into long-term commitments. What makes it smarter? It's seamlessly bundled with our specialised transportation services, giving you a fully integrated move–store–move experience. Whether you're between drop-offs, managing overflow, or pausing a delivery, we've got your back. No complicated contracts. No hidden costs. Just custom-fit storage, when and where you need it, at a price that makes sense.",
      features: ["Per-day Pricing", "No Long-term Commitment", "Integrated Transportation", "Secure Storage"]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-700" />,
      title: "ADL Packers & Movers",
      description: "ADL Packers & Movers isn't your average relocation service, it's a carefully crafted solution for businesses and individuals who value clarity, care, and commitment. We provide precise solutions and transparent offers. NO vague promises, NO hidden costs, NO last-minute surprises. From packing to unloading, we focus on the safety and security of your inventory, treating every item like it's our own. Our goal ? A smooth transition that helps you settle into your new space with ease, minus the stress and the \"fake promises\"",
      features: ["Transparent Pricing", "No Hidden Costs", "Safe & Secure", "Professional Packing"]
    }
  ];

  const promises = [
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Time definite",
      description: "We commit to timelines isn't just about delivery, it's in everything we do. Our Clients, Partners and Vendors count on us to move with urgency, clarity, and reliability. We build time discipline into our services, commitments, and communication. Because every minute matters and we treat it that way."
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Flexibility",
      description: "No two customers are the same and we don't treat them that way. We don't expect you to fit into our system, we adapt to yours. We understand every need is unique, and so is our approach. Our solutions are built to flex with your changing needs, not resist them."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-orange-500" />,
      title: "No Surprise pricing",
      description: "No hidden & Confusing quotes, No Surprise Charges, No fine Print. We believe in clear, consistent pricing that builds trust. Our rate cards are simple, because logistics should be easy to understand, starting with the bill."
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

      {/* Our Promises */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Promises</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The commitments that guide everything we do at Arundev Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promises.map((promise, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {promise.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {promise.title}
                  </h3>
                  <p className="text-gray-600">
                    {promise.description}
                  </p>
                </CardContent>
              </Card>
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
