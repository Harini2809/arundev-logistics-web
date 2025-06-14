
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

// EmailJS configuration - you'll need to replace these with your actual values
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';

export const sendEmail = async (formData: Record<string, any>, formType: string) => {
  try {
    const templateParams = {
      ...formData,
      form_type: formType,
      to_email: 'sales@arundevlogistics.com'
    };

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
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
