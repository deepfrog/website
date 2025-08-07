import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Card, 
  CardContent,
  Alert,
  Snackbar,
  Paper
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    captcha: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });
  const [captchaValue, setCaptchaValue] = useState('');
  const [userCaptchaInput, setUserCaptchaInput] = useState('');

  // Generate random CAPTCHA
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaValue(result);
  };

  // Initialize CAPTCHA on component mount
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 30, color: '#0f766e' }} />,
      title: 'Email',
      value: 'contact@deepfrog.ai',
      action: 'mailto:contact@deepfrog.ai',
    },
    {
      icon: <LocationIcon sx={{ fontSize: 30, color: '#0f766e' }} />,
      title: 'Office',
      value: 'Dubai, UAE & Los Angeles, USA',
      action: '#',
    },
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!userCaptchaInput.trim()) {
      newErrors.captcha = 'CAPTCHA is required';
    } else if (userCaptchaInput.toUpperCase() !== captchaValue) {
      newErrors.captcha = 'CAPTCHA is incorrect';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCaptchaChange = (value: string) => {
    setUserCaptchaInput(value);
    if (errors.captcha) {
      setErrors(prev => ({ ...prev, captcha: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Create email content
      const emailSubject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const emailBody = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from the DeepFrog website contact form.
      `);

      // Open default email client
      const mailtoLink = `mailto:contact@deepfrog.ai?subject=${emailSubject}&body=${emailBody}`;
      window.open(mailtoLink);

      // Show success message
      setSnackbar({
        open: true,
        message: 'Thank you for your message! Your email client should open with a pre-filled message.',
        severity: 'success',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        captcha: '',
      });
      setUserCaptchaInput('');
      generateCaptcha(); // Generate new CAPTCHA

    } catch (error) {
      setSnackbar({
        open: true,
        message: 'There was an error sending your message. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box id="contact" sx={{ py: 8, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 3 }}>
            Get in Touch
          </Typography>
          <Typography variant="h6" sx={{ color: '#6b7280', maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
            Ready to transform your business? Let's discuss how DeepFrog can help you achieve your goals.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: 6 
        }}>
          {/* Contact Form */}
          <Card sx={{ borderRadius: 3, border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#111827', mb: 3 }}>
                Send us a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 3 
                }}>
                  <Box>
                    <TextField
                      fullWidth
                      label="Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      error={!!errors.name}
                      helperText={errors.name}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={!!errors.email}
                      helperText={errors.email}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Box>
                  <Box sx={{ gridColumn: { xs: '1 / -1', sm: '1 / -1' } }}>
                    <TextField
                      fullWidth
                      label="Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Box>
                  <Box sx={{ gridColumn: { xs: '1 / -1', sm: '1 / -1' } }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Box>
                  <Box sx={{ gridColumn: { xs: '1 / -1', sm: '1 / -1' } }}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      error={!!errors.message}
                      helperText={errors.message}
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                    />
                  </Box>
                  
                  {/* CAPTCHA Section */}
                  <Box sx={{ gridColumn: { xs: '1 / -1', sm: '1 / -1' } }}>
                    <Typography variant="body2" sx={{ color: '#6b7280', mb: 2 }}>
                      Please verify you're human:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Paper
                        sx={{
                          p: 2,
                          bgcolor: '#f3f4f6',
                          border: '2px dashed #d1d5db',
                          borderRadius: 2,
                          minWidth: 120,
                          textAlign: 'center',
                          fontFamily: 'monospace',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          letterSpacing: '0.2em',
                          color: '#374151',
                          userSelect: 'none',
                        }}
                      >
                        {captchaValue}
                      </Paper>
                      <Button
                        onClick={generateCaptcha}
                        startIcon={<RefreshIcon />}
                        sx={{
                          minWidth: 'auto',
                          p: 1,
                          borderRadius: 2,
                          color: '#6b7280',
                          '&:hover': {
                            bgcolor: 'rgba(15, 118, 110, 0.04)',
                            color: '#0f766e',
                          },
                        }}
                      >
                        Refresh
                      </Button>
                    </Box>
                    <TextField
                      fullWidth
                      label="Enter CAPTCHA"
                      value={userCaptchaInput}
                      onChange={(e) => handleCaptchaChange(e.target.value)}
                      error={!!errors.captcha}
                      helperText={errors.captcha}
                      sx={{ 
                        mt: 2,
                        '& .MuiOutlinedInput-root': { borderRadius: 2 } 
                      }}
                    />
                  </Box>

                  <Box sx={{ gridColumn: { xs: '1 / -1', sm: '1 / -1' } }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<SendIcon />}
                      sx={{
                        bgcolor: '#0f766e',
                        color: 'white',
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: '#0f766e',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#111827', mb: 4 }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactInfo.map((info, index) => (
                <Card key={index} sx={{ 
                  borderRadius: 2, 
                  border: '1px solid #e5e7eb',
                  bgcolor: '#f8fafc',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  },
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(15, 118, 110, 0.1)' }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#111827', mb: 0.5 }}>
                          {info.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: '#6b7280',
                            cursor: info.action !== '#' ? 'pointer' : 'default',
                            '&:hover': info.action !== '#' ? { color: '#0f766e' } : {},
                          }}
                          onClick={() => {
                            if (info.action !== '#') {
                              window.open(info.action, '_blank');
                            }
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Box sx={{ mt: 6, p: 4, bgcolor: '#f8fafc', borderRadius: 3, border: '1px solid #e5e7eb' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#111827', mb: 2 }}>
                Business Hours
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
                Human Support - Monday - Friday: 9:00 AM - 6:00 PM PST
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7280', mb: 3 }}>
                Agent Support - Our Agents are available 24/7 to assist you.
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                We typically respond to inquiries in minutes.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
