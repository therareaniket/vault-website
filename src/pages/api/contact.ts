import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
    
    try {
      const { name, email, organization, message } = req.body;
      
      if (!name || !email || !organization || !message) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required'
        });
      }
  
      const FORM_ID = process.env.VAULT_CF7_FORM_ID || '256';
      const CF7_ENDPOINT = `${process.env.VAULT_WORDPRESS_API_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`;
  
      console.log('Connecting to:', CF7_ENDPOINT);
  
      const formData = new FormData();
      
      // Your form fields
      formData.append('your-name', name);
      formData.append('your-email', email);
      formData.append('your-organization', organization);
      formData.append('your-message', message);
      
      // Required CF7 hidden fields (updated to version 6.1.3)
      formData.append('_wpcf7', FORM_ID);
      formData.append('_wpcf7_version', '6.1.3'); // Updated to your CF7 version
      formData.append('_wpcf7_locale', 'en_US');
      formData.append('_wpcf7_unit_tag', `wpcf7-f${FORM_ID}-p1-o1`);
      formData.append('_wpcf7_container_post', '0');
  
      const wpResponse = await fetch(CF7_ENDPOINT, {
        method: 'POST',
        body: formData,
      });
  
      const result = await wpResponse.json();
  
      console.log('CF7 Response:', result);
  
      if (result.status === 'mail_sent') {
        return res.status(200).json({
          success: true,
          message: result.message || 'Message sent successfully!',
        });
      } else {
        return res.status(400).json({
          success: false,
          message: result.message || 'Failed to send message',
          errors: result.invalid_fields,
        });
      }
  
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error occurred'
      });
    }
}
