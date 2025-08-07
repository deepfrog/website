import React from 'react';
import { Box, Container, Typography } from '@mui/material';

interface Partner {
  name: string;
  logo: string;
  sector: string;
  image?: string; // For actual logo images
}

interface PartnersProps {
  partners: Partner[];
}

const Partners: React.FC<PartnersProps> = ({ partners }) => {
  return (
    <Box id="partners" sx={{ py: 8, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#111827', mb: 2 }}>
          Trusted by Industry Leaders
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#6b7280', mb: 6, maxWidth: 600, mx: 'auto' }}>
          Partnering with leading organizations across healthcare, logistics, and fintech sectors
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          flexWrap: 'wrap'
        }}>
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                borderRadius: 2,
                bgcolor: '#0f766e',
                border: '1px solid #e5e7eb',
                transition: 'transform 0.2s, box-shadow 0.2s',
                minWidth: 200,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {partner.image ? (
                // Display actual logo image
                <Box
                  component="img"
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  sx={{
                    width: 80,
                    height: 60,
                    objectFit: 'contain',
                    mb: 2,
                    display: 'block',
                    margin: '0 auto',
                    filter: 'brightness(0) invert(1)', // Makes logos white
                  }}
                />
              ) : (
                // Display fallback letter logo with green background
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                  }}
                >
                  {partner.logo}
                </Box>
              )}
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ffffff', textAlign: 'center', mb: 1 }}>
                {partner.name}
              </Typography>
              <Typography variant="caption" sx={{ color: '#ffffff', textAlign: 'center' }}>
                {partner.sector}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Partners;
