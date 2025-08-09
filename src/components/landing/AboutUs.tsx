import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import {
  Business as BusinessIcon,
  Lightbulb as InnovationIcon,
  Security as SecurityIcon,
  TrendingUp as GrowthIcon,
} from '@mui/icons-material';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <InnovationIcon sx={{ fontSize: 40, color: '#0f766e' }} />,
      title: 'Innovation',
      description: 'Pushing the boundaries of technology to create cutting-edge solutions that transform industries.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Security',
      description: 'Bank-grade security and compliance standards ensuring your data and operations are always protected.',
    },
    {
      icon: <GrowthIcon sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'Growth',
      description: 'Partnering with businesses to scale efficiently and achieve sustainable growth through intelligent automation.',
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Excellence',
      description: 'Delivering exceptional quality and performance in every solution we build and every client we serve.',
    },
  ];

  return (
    <Box id="about" sx={{ py: 8, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 3 }}>
            About DeepFrog
          </Typography>
          <Typography variant="h6" sx={{ color: '#6b7280', maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
            We are a product development company specializing in logistics. 
            Our mission is to transform freight and supply chains through intelligent, AI-powered solutions that drive innovation and efficiency.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#111827', mb: 4, textAlign: 'center' }}>
            Our Story
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            alignItems: 'center'
          }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#111827', mb: 2 }}>
              Revolutionizing Industries through Intelligence
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b7280', mb: 3, lineHeight: 1.6 }}>
                Founded with a vision to bridge the gap between complex business challenges and innovative technological solutions, 
                DeepFrog has emerged as a trusted partner for organizations seeking to modernize their operations.
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b7280', mb: 3, lineHeight: 1.6 }}>
                Our team of experts combines deep industry knowledge with cutting-edge technology to deliver solutions that 
                not only solve immediate problems but also create long-term competitive advantages.
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                From shippers optimizing planning to carriers improving utilization and on-time performance, we're proud to be part of our clients' success stories.
              </Typography>
            </Box>
            <Box sx={{ 
              p: 4, 
              bgcolor: '#ffffff', 
              borderRadius: 3, 
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#111827', mb: 3 }}>
                What We Do
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#0f766e' }} />
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Build Automations using agentic AI
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#0f766e' }} />
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    R&D in Nuero Symbolic AI
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#0f766e' }} />
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Bring Security & Immutability using blockchain layer
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#0f766e' }} />
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Provide industry-specific consulting
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#111827', mb: 4, textAlign: 'center' }}>
            Our Values
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 4 
          }}>
            {values.map((value, index) => (
              <Card key={index} sx={{ 
                height: '100%', 
                borderRadius: 3, 
                border: '1px solid #e5e7eb',
                bgcolor: '#ffffff',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                },
              }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 3 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#111827', mb: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
