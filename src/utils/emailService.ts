// Email service utility for contact form
// This can be extended to integrate with email services like SendGrid, Mailgun, etc.

export const sendEmail = async (emailData: {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}) => {
  try {
    // For now, we'll just log the email data
    // In production, you can integrate with email services
    console.log('Email data received:', emailData);
    
    // Example integration with email service:
    // const response = await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(emailData)
    // });
    
    // For demo purposes, we'll simulate success
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email' };
  }
};

export const saveDemoRequest = async (email: string) => {
  try {
    const response = await fetch('/api/save-demo-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, timestamp: new Date().toISOString() })
    });

    if (!response.ok) {
      return { success: false, message: 'Failed to save demo request' };
    }

    const data = await response.json();
    return { success: !!data.success, message: data.success ? 'Demo request saved successfully' : 'Failed to save demo request' };
  } catch (error) {
    console.error('Error saving demo request:', error);
    return { success: false, message: 'Failed to save demo request' };
  }
};
