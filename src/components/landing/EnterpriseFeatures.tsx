import React from 'react';
import { Box, Container, Typography } from '@mui/material';

interface EnterpriseFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface EnterpriseFeaturesProps {
  enterpriseFeatures: EnterpriseFeature[];
}

const EnterpriseFeatures: React.FC<EnterpriseFeaturesProps> = ({ enterpriseFeatures }) => {
  return (
    <Box id="sectors" sx={{ py: 8, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#111827', mb: 2 }}>
          Logistics Expertise
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#6b7280', mb: 6, maxWidth: 600, mx: 'auto' }}>
          Specialized solutions for logistics with deep domain knowledge across freight, carriers, and operations
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4 
        }}>
          {enterpriseFeatures.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, p: 4, borderRadius: 3, bgcolor: '#f8fafc', border: '1px solid #e5e7eb' }}>
              <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'rgba(15, 118, 110, 0.1)', color: '#0f766e' }}>
                {feature.icon}
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#111827', mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default EnterpriseFeatures;