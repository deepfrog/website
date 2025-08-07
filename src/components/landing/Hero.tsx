import React from 'react';
import { Box, Container, Typography, Button, Chip, Paper, Stack } from '@mui/material';
import { ArrowForward, Psychology as AIIcon } from '@mui/icons-material';

interface HeroFeature {
  icon: React.ReactNode;
  text: string;
}

interface HeroProps {
  isAuthenticated: boolean;
  navigate: (path: string) => void;
  heroFeatures: HeroFeature[];
}

const Hero: React.FC<HeroProps> = ({ isAuthenticated, navigate, heroFeatures }) => {
  return (
    <Box sx={{ py: 8, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          alignItems: 'center'
        }}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                color: '#111827',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
             Revolutionizing Industries through{' '}
              <Box component="span" sx={{ color: '#0f766e' }}>
              Intelligence
              </Box>
            </Typography>
            <Typography variant="h6" sx={{ color: '#6b7280', mb: 4, lineHeight: 1.6 }}>
              DeepFrog is a product development company specializing in logistics, fintech and healthcare. 
              We build intelligent platforms that drive innovation and efficiency across industries.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
              {heroFeatures.map((feature, index) => (
                <Chip
                  key={index}
                  icon={feature.icon as React.ReactElement}
                  label={feature.text}
                  sx={{
                    bgcolor: 'rgba(15, 118, 110, 0.1)',
                    color: '#0f766e',
                    fontWeight: 600,
                    '& .MuiChip-icon': {
                      color: '#0f766e',
                    },
                  }}
                />
              ))}
            </Stack>
            <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  const productsSection = document.getElementById('products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{
                  bgcolor: '#0f766e',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#0f766e',
                  },
                }}
              >
                Explore Our Products
                <ArrowForward sx={{ ml: 1 }} />
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/#')}
                sx={{
                  borderColor: '#0f766e',
                  color: '#0f766e',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#0f766e',
                    bgcolor: 'rgba(15, 118, 110, 0.04)',
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
          <Box sx={{ position: 'relative', height: 400 }}>
            <Paper
              elevation={8}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              {/* Hero Image - Clean display without overlay */}
              <Box
                component="img"
                src="/heroimage.jpg"
                alt="DeepFrog Platform"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;