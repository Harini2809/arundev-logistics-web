
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-700" />,
      title: "Address",
      details: [
        "123 Logistics Street",
        "Transport City, State 560001",
        "India"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-700" />,
      title: "Phone",
      details: [
        "+91 9876543210",
        "+91 9876543211",
        "Toll Free: 1800-123-4567"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-700" />,
      title: "Email",
      details: [
        "info@arundevlogistics.com",
        "sales@arundevlogistics.com",
        "support@arundevlogistics.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-700" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const offices = [
    {
      city: "Mumbai",
      address: "456 Commerce Hub, Mumbai 400001",
      phone: "+91 9876543212"
    },
    {
      city: "Delhi",
      address: "789 Capital Center, Delhi 110001",
      phone: "+91 9876543213"
    },
    {
      city: "Bangalore",
      address: "321 Tech Park, Bangalore 560001",
      phone: "+91 9876543214"
    },
    {
      city: "Chennai",
      address: "654 Port Road, Chennai 600001",
      phone: "+91 9876543215"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team for all your logistics needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help with all your transportation and logistics requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-16">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-400">123 Logistics Street, Transport City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Branch Offices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We have offices across major cities to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {office.city}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <p className="text-gray-600 text-sm">{office.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Shipment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Fill out our enquiry form and get a personalized quote for your transportation needs.
          </p>
          <a
            href="/enquiry"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Submit Enquiry
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
