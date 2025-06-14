
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

// EmailJS configuration for different form types
const EMAIL_CONFIGS = {
  // First account for Get Quote and Track Package
  'Get Quote': {
    SERVICE_ID: 'service_9tuwpgj',
    TEMPLATE_ID: 'template_wu2dv6h',
    PUBLIC_KEY: 'e3U5Zmkk7TN9OLxNW'
  },
  'Track Package': {
    SERVICE_ID: 'service_9tuwpgj',
    TEMPLATE_ID: 'template_b33b008',
    PUBLIC_KEY: 'e3U5Zmkk7TN9OLxNW'
  },
  // Second account for Become our Vendor and Join Us
  'Become our Vendor': {
    SERVICE_ID: 'service_3pywxw9',
    TEMPLATE_ID: 'template_lwmz71w',
    PUBLIC_KEY: 'kLpYBMwpcygleOgwr'
  },
  'Join Us': {
    SERVICE_ID: 'service_3pywxw9',
    TEMPLATE_ID: 'template_zu2kvqn',
    PUBLIC_KEY: 'kLpYBMwpcygleOgwr'
  }
};

// Map form data to consistent template parameter names
const mapFormDataToTemplate = (formData: Record<string, any>, formType: string) => {
  const baseParams = {
    to_email: 'arundevlogistics19@gmail.com',
    form_type: formType,
    from_name: formData.name || formData.fullName || formData.customerName || formData.contactPerson || 'Unknown',
    reply_to: formData.email || 'noreply@arundevlogistics.com'
  };

  // Add all original form data with prefixed keys to avoid conflicts
  const formParams: Record<string, any> = {};
  Object.keys(formData).forEach(key => {
    formParams[`form_${key}`] = formData[key];
  });

  // Also add direct mapping for common fields
  const directMapping = {
    name: formData.name,
    company: formData.company,
    companyName: formData.companyName,
    companyLocation: formData.companyLocation,
    phone: formData.phone || formData.phoneNumber,
    email: formData.email,
    serviceType: Array.isArray(formData.serviceType) ? formData.serviceType.join(', ') : formData.serviceType,
    fromLocation: formData.fromLocation,
    toLocation: formData.toLocation,
    cargo: formData.cargo,
    weight: formData.weight,
    dimensions: formData.dimensions,
    preferredDate: formData.preferredDate,
    vehicleType: formData.vehicleType,
    message: formData.message,
    additionalInfo: formData.additionalInfo,
    trackingNumber: formData.trackingNumber,
    customerName: formData.customerName,
    contactPerson: formData.contactPerson,
    location: formData.location,
    type: formData.type,
    fullName: formData.fullName,
    position: formData.position,
    experience: formData.experience
  };

  return {
    ...baseParams,
    ...formParams,
    ...directMapping
  };
};

export const sendEmail = async (formData: Record<string, any>, formType: string) => {
  try {
    const config = EMAIL_CONFIGS[formType as keyof typeof EMAIL_CONFIGS];
    
    if (!config) {
      throw new Error(`No email configuration found for form type: ${formType}`);
    }

    const templateParams = mapFormDataToTemplate(formData, formType);

    console.log('Sending email with config:', { 
      formType, 
      serviceId: config.SERVICE_ID, 
      templateId: config.TEMPLATE_ID,
      publicKey: config.PUBLIC_KEY 
    });
    console.log('Original form data:', formData);
    console.log('Mapped template params:', templateParams);

    const result = await emailjs.send(
      config.SERVICE_ID,
      config.TEMPLATE_ID,
      templateParams,
      config.PUBLIC_KEY
    );

    console.log('EmailJS result:', result);

    if (result.status === 200) {
      toast.success('Form submitted successfully! We\'ll get back to you soon.');
      return true;
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending error:', error);
    toast.error('Failed to submit form. Please try again or contact us directly.');
    return false;
  }
};
