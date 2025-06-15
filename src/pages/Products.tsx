
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const services = [
    {
      icon: <img src={`${import.meta.env.BASE_URL}lovable-uploads/7bb6529b-da9c-4ad2-91d8-7fba9d87ad83.png`} alt="ADL Trucking" className="h-16 w-16 object-contain" />,
      title: "ADL Trucking",
      description: "ADL Trucking is our dedicated Full Truck Load solution designed for businesses that demand punctuality, visibility, and control. Whether it's a single shipment or a recurring route, we ensure on-time vehicle placement, live tracking, and zero guesswork. Our centralized Control Tower Team monitors every move, proactively managing routes, schedules, and exceptions to keep your cargo on track.",
      features: ["Full Truck Load (FTL)", "Live Tracking", "Control Tower Management", "On-time Vehicle Placement"]
    },
    {
      icon: <img src={`${import.meta.env.BASE_URL}lovable-uploads/7bb6529b-da9c-4ad2-91d8-7fba9d87ad83.png`} alt="Chennai Express" className="h-16 w-16 object-contain" />,
      title: "Chennai Express",
      description: "Say goodbye to overpaying for partial truck loads. Chennai Express is our new-age, no-nonsense solution for first mile and last mile partial truckload and small package movement within the city, you pay only for the space you use, not for the whole truck. No surge pricing. No shady charges. No waiting-time traps. Just simple, city-smart logistics. Built for businesses of all size and Individuals, Chennai Express offers same day and next day delivery.",
      features: ["Same Day Delivery", "Next Day Delivery", "Pay as u Use", "No Surge Pricing"]
    },
    {
      icon: <img src={`${import.meta.env.BASE_URL}lovable-uploads/7bb6529b-da9c-4ad2-91d8-7fba9d87ad83.png`} alt="Smart Storage" className="h-16 w-16 object-contain" />,
      title: "Smart Storage",
      description: "Introducing Smart Storage, a first-of-its-kind in-transit storage solution in Chennai. Designed for businesses and individuals who need flexible, short-term storage, we offer secure space on a per-day pricing model, without locking you into long-term commitments. What makes it smarter? It's seamlessly bundled with our specialised transportation services, giving you a fully integrated move–store–move experience. Whether you're between drop-offs, managing overflow, or pausing a delivery, we've got your back. No complicated contracts. No hidden costs. Just custom-fit storage, when and where you need it, at a price that makes sense.",
      features: ["Per-day Pricing", "No Long-term Commitment", "Integrated Transportation", "Secure Storage"]
    },
    {
      icon: <img src={`${import.meta.env.BASE_URL}lovable-uploads/7bb6529b-da9c-4ad2-91d8-7fba9d87ad83.png`} alt="ADL Packers & Movers" className="h-16 w-16 object-contain" />,
      title: "ADL Packers & Movers",
      description: "ADL Packers & Movers isn't your average relocation service, it's a carefully crafted solution for businesses and individuals who value clarity, care, and commitment. We provide precise solutions and transparent offers. NO vague promises, NO hidden costs, NO last-minute surprises. From packing to unloading, we focus on the safety and security of your inventory, treating every item like it's our own. Our goal ? A smooth transition that helps you settle into your new space with ease, minus the stress and the \"fake promises\"",
      features: ["Transparent Pricing", "No Hidden Costs", "Safe & Secure", "Professional Packing"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From local deliveries to nationwide distribution, we have you covered through...
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            <ArrowRight className="w-4 h-4 text-blue-700 mr-3" />
                            <span className="font-medium">{feature}</span>
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

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific logistics and transportation requirements and get a tailored solutions.
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
