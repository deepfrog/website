import React from 'react';
import { Box, Container, Typography, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { Check as CheckIcon, Launch as LaunchIcon } from '@mui/icons-material';

interface CoreFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
  color: string;
  link?: string; // Optional link for the feature
}

interface CoreFeaturesProps {
  coreFeatures: CoreFeature[];
}

const CoreFeatures: React.FC<CoreFeaturesProps> = ({ coreFeatures }) => {
  return (
    <Box id="products" sx={{ py: 8, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#111827', mb: 2 }}>
          Our Products & Solutions
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#6b7280', mb: 6, maxWidth: 600, mx: 'auto' }}>
          Comprehensive intelligent solutions designed for healthcare, logistics, and fintech industries
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          gap: 4 
        }}>
          {coreFeatures.map((feature, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                borderRadius: 3,
                border: '1px solid #e5e7eb',
                bgcolor: '#ffffff',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ p: 2, borderRadius: 2, bgcolor: `${feature.color}15`, color: feature.color, mr: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#111827' }}>
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: '#6b7280', mb: 3, lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>
                <List dense>
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <ListItem key={highlightIndex} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckIcon sx={{ color: feature.color, fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={highlight}
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontSize: '0.875rem',
                            color: '#374151',
                            fontWeight: 500,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                
                {/* Link Button for Frognosis */}
                {feature.link && (
                  <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => window.open(feature.link, '_blank')}
                      startIcon={<LaunchIcon />}
                      sx={{
                        borderColor: feature.color,
                        color: feature.color,
                        '&:hover': {
                          borderColor: feature.color,
                          bgcolor: `${feature.color}08`,
                        },
                      }}
                    >
                      Visit Platform
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoreFeatures;