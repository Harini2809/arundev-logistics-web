
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/utils/emailService";
import { Mail, Phone, Truck } from "lucide-react";

const Enquiry = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    companyLocation: "",
    phone: "",
    email: "",
    serviceType: [] as string[],
    fromLocation: "",
    toLocation: "",
    cargo: "",
    weight: "",
    dimensions: "",
    preferredDate: "",
    vehicleType: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceTypeChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      serviceType: checked 
        ? [...prev.serviceType, service]
        : prev.serviceType.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const success = await sendEmail(formData, 'Get Quote');
    
    if (success) {
      // Reset form
      setFormData({
        name: "",
        company: "",
        companyLocation: "",
        phone: "",
        email: "",
        serviceType: [],
        fromLocation: "",
        toLocation: "",
        cargo: "",
        weight: "",
        dimensions: "",
        preferredDate: "",
        vehicleType: "",
        message: ""
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Quote</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <Truck className="mr-2 h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 7904852870</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">sales@arundevlogistics.com</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Our Promises</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• On-time delivery rate</li>
                    <li>• Comprehensive insurance coverage</li>
                    <li>• Real-time tracking</li>
                    <li>• 24/7 customer support</li>
                    <li>• Competitive pricing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you with a detailed quote.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        required
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyLocation">Company Location *</Label>
                      <Input
                        id="companyLocation"
                        value={formData.companyLocation}
                        onChange={(e) => handleInputChange("companyLocation", e.target.value)}
                        required
                        placeholder="Enter company location"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email ID *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Service Details */}
                  <div>
                    <Label className="text-base font-medium">Service Preferred *</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      {["ADL Trucking", "Chennai Express", "Smart Storage", "ADL Packers & Movers"].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.serviceType.includes(service)}
                            onCheckedChange={(checked) => handleServiceTypeChange(service, !!checked)}
                          />
                          <Label htmlFor={service} className="text-sm">{service}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fromLocation">From Location *</Label>
                      <Input
                        id="fromLocation"
                        value={formData.fromLocation}
                        onChange={(e) => handleInputChange("fromLocation", e.target.value)}
                        required
                        placeholder="Pickup location"
                      />
                    </div>
                    <div>
                      <Label htmlFor="toLocation">To Location *</Label>
                      <Input
                        id="toLocation"
                        value={formData.toLocation}
                        onChange={(e) => handleInputChange("toLocation", e.target.value)}
                        required
                        placeholder="Delivery location"
                      />
                    </div>
                  </div>

                  {/* Cargo Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="cargo">Cargo</Label>
                      <Textarea
                        id="cargo"
                        value={formData.cargo}
                        onChange={(e) => handleInputChange("cargo", e.target.value)}
                        placeholder="Describe your cargo"
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Actual Weight of Cargo</Label>
                      <Input
                        id="weight"
                        value={formData.weight}
                        onChange={(e) => handleInputChange("weight", e.target.value)}
                        placeholder="e.g., 500 kg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dimensions">Dimensions (L×W×H)</Label>
                      <Input
                        id="dimensions"
                        value={formData.dimensions}
                        onChange={(e) => handleInputChange("dimensions", e.target.value)}
                        placeholder="e.g., 2×1×1 m"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Pickup Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="vehicleType">Preferred Vehicle Type</Label>
                      <Select onValueChange={(value) => handleInputChange("vehicleType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tata-ace">Tata Ace</SelectItem>
                          <SelectItem value="dhosth">Dhosth</SelectItem>
                          <SelectItem value="407">407</SelectItem>
                          <SelectItem value="14-feet">14 feet</SelectItem>
                          <SelectItem value="17-feet">17 feet</SelectItem>
                          <SelectItem value="20-feet">20 feet</SelectItem>
                          <SelectItem value="22-feet">22 feet</SelectItem>
                          <SelectItem value="24-feet">24 feet</SelectItem>
                          <SelectItem value="32-feet-sxl">32 feet SXL</SelectItem>
                          <SelectItem value="32-feet-mxl">32 feet MXL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Any special requirements or additional information..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-700 hover:bg-blue-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
