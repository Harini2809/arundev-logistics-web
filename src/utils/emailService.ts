
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

export const sendEmail = async (formData: Record<string, any>, formType: string) => {
  try {
    const config = EMAIL_CONFIGS[formType as keyof typeof EMAIL_CONFIGS];
    
    if (!config) {
      throw new Error(`No email configuration found for form type: ${formType}`);
    }

    const templateParams = {
      ...formData,
      form_type: formType,
      to_email: 'arundevlogistics19@gmail.com'
    };

    console.log('Sending email with config:', { formType, serviceId: config.SERVICE_ID, templateId: config.TEMPLATE_ID });
    console.log('Template params:', templateParams);

    const result = await emailjs.send(
      config.SERVICE_ID,
      config.TEMPLATE_ID,
      templateParams,
      config.PUBLIC_KEY
    );

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
