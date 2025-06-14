
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { sendEmail } from "@/utils/emailService";
import { toast } from "sonner";

const Contact = () => {
  const [isVendorSubmitting, setIsVendorSubmitting] = useState(false);
  const [isCareerSubmitting, setIsCareerSubmitting] = useState(false);
  const [vendorFormData, setVendorFormData] = useState({
    companyName: "",
    contactPerson: "",
    phoneNumber: "",
    location: "",
    type: ""
  });
  const [careerFormData, setCareerFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: "",
    experience: ""
  });

  const handleVendorInputChange = (field: string, value: string) => {
    setVendorFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCareerInputChange = (field: string, value: string) => {
    setCareerFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVendorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVendorSubmitting(true);
    
    const success = await sendEmail(vendorFormData, 'Become our Vendor');
    
    if (success) {
      setVendorFormData({
        companyName: "",
        contactPerson: "",
        phoneNumber: "",
        location: "",
        type: ""
      });
    }
    
    setIsVendorSubmitting(false);
  };

  const handleCareerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCareerSubmitting(true);
    
    const success = await sendEmail(careerFormData, 'Join Us');
    
    if (success) {
      setCareerFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        position: "",
        experience: ""
      });
    }
    
    setIsCareerSubmitting(false);
  };

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Phone
                </h3>
                <p className="text-gray-600 text-sm">
                  +91 7904852870
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Email
                </h3>
                <p className="text-gray-600 text-sm">
                  sales@arundevlogistics.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Become our Vendor Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                  Become our Vendor
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Become our Vendor</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleVendorSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input 
                      id="companyName" 
                      value={vendorFormData.companyName}
                      onChange={(e) => handleVendorInputChange("companyName", e.target.value)}
                      placeholder="Enter company name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input 
                      id="contactPerson" 
                      value={vendorFormData.contactPerson}
                      onChange={(e) => handleVendorInputChange("contactPerson", e.target.value)}
                      placeholder="Enter contact person name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vendorPhone">Phone Number *</Label>
                    <Input 
                      id="vendorPhone" 
                      type="tel" 
                      value={vendorFormData.phoneNumber}
                      onChange={(e) => handleVendorInputChange("phoneNumber", e.target.value)}
                      placeholder="Enter phone number" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input 
                      id="location" 
                      value={vendorFormData.location}
                      onChange={(e) => handleVendorInputChange("location", e.target.value)}
                      placeholder="Enter location" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Type *</Label>
                    <Select onValueChange={(value) => handleVendorInputChange("type", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="truck-owner">Truck Owner</SelectItem>
                        <SelectItem value="transporter">Transporter</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full" disabled={isVendorSubmitting}>
                    {isVendorSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* Get Custom Quote Button */}
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/enquiry">Get Custom Quote</Link>
            </Button>

            {/* Join Us Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white">
                  Join Us
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Join Our Team</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCareerSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input 
                      id="fullName" 
                      value={careerFormData.fullName}
                      onChange={(e) => handleCareerInputChange("fullName", e.target.value)}
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="careerEmail">Email Address *</Label>
                    <Input 
                      id="careerEmail" 
                      type="email" 
                      value={careerFormData.email}
                      onChange={(e) => handleCareerInputChange("email", e.target.value)}
                      placeholder="Enter email address" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="careerPhone">Phone Number *</Label>
                    <Input 
                      id="careerPhone" 
                      type="tel" 
                      value={careerFormData.phoneNumber}
                      onChange={(e) => handleCareerInputChange("phoneNumber", e.target.value)}
                      placeholder="Enter phone number" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position of Interest</Label>
                    <Input 
                      id="position" 
                      value={careerFormData.position}
                      onChange={(e) => handleCareerInputChange("position", e.target.value)}
                      placeholder="e.g., Driver, Operations, Sales" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience</Label>
                    <Textarea 
                      id="experience" 
                      value={careerFormData.experience}
                      onChange={(e) => handleCareerInputChange("experience", e.target.value)}
                      placeholder="Tell us about your relevant experience" 
                    />
                  </div>
                  <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
                    Send your updated CV to sales@arundevlogistics.com
                  </div>
                  <Button type="submit" className="w-full" disabled={isCareerSubmitting}>
                    {isCareerSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* Track Package Button */}
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/track">Track Package</Link>
            </Button>
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
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/enquiry">Submit Enquiry</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
