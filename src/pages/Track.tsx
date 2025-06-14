
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Package, Search } from "lucide-react";
import { sendEmail } from "@/utils/emailService";

const Track = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    trackingNumber: "",
    customerName: "",
    phoneNumber: "",
    email: "",
    orderDate: "",
    additionalInfo: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const success = await sendEmail(formData, 'Track Package');
    
    if (success) {
      // Reset form
      setFormData({
        trackingNumber: "",
        customerName: "",
        phoneNumber: "",
        email: "",
        orderDate: "",
        additionalInfo: ""
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-12">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="h-16 w-16 mx-auto mb-4 text-orange-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Your Package</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Enter your tracking details below to get real-time updates on your shipment
          </p>
        </div>
      </section>

      {/* Track Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                <Search className="h-6 w-6" />
                Track Your Shipment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="trackingNumber">Tracking Number *</Label>
                    <Input
                      id="trackingNumber"
                      name="trackingNumber"
                      value={formData.trackingNumber}
                      onChange={(e) => handleInputChange("trackingNumber", e.target.value)}
                      placeholder="Enter your tracking number"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customerName">Customer Name *</Label>
                    <Input
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={(e) => handleInputChange("customerName", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="orderDate">Order Date</Label>
                  <Input
                    id="orderDate"
                    name="orderDate"
                    type="date"
                    value={formData.orderDate}
                    onChange={(e) => handleInputChange("orderDate", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                    placeholder="Any additional details that might help us locate your package"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                  disabled={isSubmitting}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Submitting...' : 'Track Package'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you're having trouble tracking your package or need assistance, please contact our customer service team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Phone:</span>
                  <span className="ml-2">+91 7904852870</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Email:</span>
                  <span className="ml-2">sales@arundevlogistics.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Track;
