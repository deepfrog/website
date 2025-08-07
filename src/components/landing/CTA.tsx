import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack,
  TextField,
  Alert,
  Snackbar,
  FormControlLabel,
  Checkbox,
  Link
} from '@mui/material';
import { ArrowForward, Dashboard as DashboardIcon } from '@mui/icons-material';
import { saveDemoRequest } from '../../utils/emailService';

interface CTAProps {
  isAuthenticated: boolean;
  navigate: (path: string) => void;
}

const CTA: React.FC<CTAProps> = ({ navigate }) => {
  const isAuthenticated = false;
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [consentChecked, setConsentChecked] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailError) {
      setEmailError('');
    }
  };

  const handleBookDemo = async () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    if (!consentChecked) {
      setSnackbar({
        open: true,
        message: 'Please consent to our Privacy Policy and Terms.',
        severity: 'error',
      });
      return;
    }

    try {
      const result = await saveDemoRequest(email);
      
      if (result.success) {
        setSnackbar({
          open: true,
          message: 'Thank you! We\'ll contact you soon to schedule your demo.',
          severity: 'success',
        });
        
        // Reset form
        setEmail('');
        setEmailError('');
        setConsentChecked(false);
      } else {
        setSnackbar({
          open: true,
          message: 'There was an error. Please try again.',
          severity: 'error',
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'There was an error. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <>
      <Box sx={{ py: 8, bgcolor: '#0f766e' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#ffffff', mb: 3 }}>
              Ready to Transform Your Industry?
            </Typography>
            <Typography variant="h6" sx={{ color: '#e0f2fe', mb: 4, fontWeight: 400 }}>
              Join leading companies in healthcare, logistics, and fintech using DeepFrog solutions
            </Typography>
            
            {isAuthenticated ? (
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/app/dashboard')}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    bgcolor: '#ffffff',
                    color: '#0f766e',
                    '&:hover': { bgcolor: '#f8fafc', transform: 'translateY(-2px)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <DashboardIcon sx={{ mr: 1 }} />
                  Go to Dashboard
                  <ArrowForward sx={{ ml: 1 }} />
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/app/api-docs')}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    '&:hover': { borderColor: '#ffffff', bgcolor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                >
                  Explore API
                </Button>
              </Stack>
            ) : (
              <Box sx={{ maxWidth: 600, mx: 'auto' }}>
                {/* Email Input and Button Container */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2, 
                  mb: 3,
                  flexDirection: { xs: 'column', sm: 'row' }
                }}>
                  <TextField
                    fullWidth
                    placeholder="Enter business email*"
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    error={!!emailError}
                    sx={{ 
                      '& .MuiOutlinedInput-root': { 
                        borderRadius: 2,
                        bgcolor: 'white',
                        '&:hover fieldset': {
                          borderColor: '#ffffff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#ffffff',
                        },
                        '&.Mui-error fieldset': {
                          borderColor: '#ff6b6b',
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: '#6b7280',
                        opacity: 1,
                      },
                    }}
                  />
                  <Button 
                    onClick={handleBookDemo}
                    variant="contained"
                    sx={{
                      bgcolor: '#ffffff',
                      color: '#0f766e',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 600,
                      minWidth: { xs: '100%', sm: 'auto' },
                      whiteSpace: 'nowrap',
                      '&:hover': { bgcolor: '#f8fafc' },
                    }}
                  >
                    BOOK A DEMO
                  </Button>
                </Box>

                {/* Error Message */}
                {emailError && (
                  <Typography variant="body2" sx={{ color: '#ff6b6b', mb: 2, textAlign: 'left' }}>
                    {emailError}
                  </Typography>
                )}

                {/* Consent Checkbox */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                        sx={{
                          color: '#ffffff',
                          '&.Mui-checked': {
                            color: '#ffffff',
                          },
                          mt: 0,
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2" sx={{ color: '#e0f2fe', mt: 0 }}>
                        By submitting, you consent to being contacted about our products per our{' '}
                        <Link href="#" sx={{ color: '#ffffff', textDecoration: 'underline' }}>
                          Privacy Policy
                        </Link>
                        {' '}&{' '}
                        <Link href="#" sx={{ color: '#ffffff', textDecoration: 'underline' }}>
                          Terms
                        </Link>
                        .*
                      </Typography>
                    }
                    sx={{ 
                      mt: 0,
                      alignItems: 'flex-start',
                      '& .MuiFormControlLabel-label': {
                        mt: 0,
                      }
                    }}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      {/* Success/Error Snackbar */}
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
    </>
  );
};

export default CTA;