
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Clock, Zap, ArrowRight, IndianRupee } from "lucide-react";

const Index = () => {
  // Get the base URL for assets
  const baseUrl = import.meta.env.BASE_URL;
  
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
      {/* Hero Section with Background Image and Thiruvalluvar Quote */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px]"
        style={{
          backgroundImage: `url('${baseUrl}images/background.png')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-900/40"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] flex flex-col justify-between py-6">
          
          {/* Main Content - Thiruvalluvar and Quote */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-[21px] flex-grow">
            
            {/* Thiruvalluvar Image */}
            <div className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64">
              <img 
                src={`${baseUrl}images/person.png`}
                alt="Thiruvalluvar"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Quote Section */}
            <div className="flex-grow text-center lg:text-left pt-2 leading-10">
              {/* Kural Number */}
              <p className="text-white/80 text-sm sm:text-base md:text-lg font-medium mb-2">
                குறள் 754 :
              </p>
              
              {/* Tamil Text */}
              <div className="mb-3 sm:mb-4 leading-10">
                <p 
                  className="text-white text-[4vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed lg:leading-[2rem] xl:leading-[2rem]" 
                  style={{ fontFamily: "'Noto Sans Tamil', 'Latha', sans-serif" }}
                >
                  அறன்ஈனும் <span className="text-orange-500 font-bold">இன்பமும்</span> ஈனும் திறனறிந்து
                </p>
                <p 
                  className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-relaxed lg:leading-[3rem] xl:leading-[4rem]" 
                  style={{ fontFamily: "'Noto Sans Tamil', 'Latha', sans-serif" }}
                >
                  <span className="text-orange-500 font-bold">தீதின்றி</span> வந்த பொருள்.
                </p>
              </div>
              
              {/* English Translation */}
              <div className="mt-4 sm:mt-6">
                <p className="text-white text-[4vw] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed">
                  Profit attained <span className="text-orange-500">ethically</span> and responsibly
                </p>
                <p className="text-white text-[4vw] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed">
                  brings both <span className="text-orange-500">righteousness</span> and <span className="text-orange-500">happiness</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Buttons at the bottom */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 lg:mt-0">
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
