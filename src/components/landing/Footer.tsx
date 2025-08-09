import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#111827', color: '#ffffff', py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr 1fr' },
          gap: 4 
        }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
                  D
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                DeepFrog
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#9ca3af', mb: 3, maxWidth: 300 }}>
              A product development company specializing in logistics. We build intelligent solutions that drive innovation and efficiency.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffffff', mb: 3 }}>
              Products
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>
                Frognosis
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>
                Pangents
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>
                DecentAI
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffffff', mb: 3 }}>
              Sector
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'default' }}>
                Logistics
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffffff', mb: 3 }}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>
                About Us
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>
                Contact
              </Typography>
              <Typography variant="body2" sx={{ color: '#9ca3af', cursor: 'pointer', '&:hover': { color: '#ffffff' } }}>
                Documentation
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ borderTop: '1px solid #374151', mt: 4, pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#9ca3af' }}>
            © 2023-2025 DeepFrog. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;