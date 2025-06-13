
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-700" />,
      title: "Reliability",
      description: "We deliver on our promises with consistent, dependable service."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-700" />,
      title: "Customer Focus",
      description: "Your success is our success. We put customers at the heart of everything we do."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-700" />,
      title: "Teamwork",
      description: "Our experienced team works together to deliver exceptional results."
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-700" />,
      title: "Transparency",
      description: "Clear communication and honest pricing in all our business dealings."
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Arundev Logistics was founded with a simple mission: to provide reliable, 
                efficient, and cost-effective transportation solutions for businesses across India. 
                What started as a small family business has grown into a trusted logistics partner 
                serving diverse industries.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our commitment to excellence and customer satisfaction has been the driving force 
                behind our growth. We understand that every shipment is important to our clients, 
                and we treat each delivery with the care and attention it deserves.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to expand our services while maintaining the personal touch 
                and reliability that our customers have come to expect from Arundev Logistics.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/7bb6529b-da9c-4ad2-91d8-7fba9d87ad83.png" 
                alt="Arundev Logistics" 
                className="h-80 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">
                  To provide exceptional transportation and logistics services that exceed 
                  customer expectations while maintaining the highest standards of safety, 
                  reliability, and professionalism. We strive to be the preferred logistics 
                  partner for businesses seeking efficient and cost-effective solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">
                  To become the leading logistics company in India, recognized for our 
                  innovation, reliability, and commitment to sustainable transportation 
                  solutions. We envision a future where our services enable businesses 
                  to thrive through seamless supply chain management.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Arundev Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
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
