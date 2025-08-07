import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar } from '@mui/material';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  savings: string;
  timeSaved: string;
  avatar: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <Box id="customers" sx={{ py: 8, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#111827', mb: 2 }}>
          Customer Success Stories
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#6b7280', mb: 6, maxWidth: 600, mx: 'auto' }}>
          See how industry leaders are transforming their operations with DeepFrog solutions
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4 
        }}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} sx={{ height: '100%', borderRadius: 3, border: '1px solid #e5e7eb', bgcolor: '#ffffff' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="body1" sx={{ color: '#374151', mb: 3, fontStyle: 'italic' }}>
                  "{testimonial.quote}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar sx={{ bgcolor: '#0f766e', mr: 2, width: 48, height: 48 }}>
                    {testimonial.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#111827' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      {testimonial.role}, {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ bgcolor: '#f0fdf4', px: 2, py: 1, borderRadius: 2 }}>
                    <Typography variant="caption" sx={{ color: '#166534', fontWeight: 600 }}>
                      Saved {testimonial.savings}
                    </Typography>
                  </Box>
                  <Box sx={{ bgcolor: '#fef3c7', px: 2, py: 1, borderRadius: 2 }}>
                    <Typography variant="caption" sx={{ color: '#92400e', fontWeight: 600 }}>
                      {testimonial.timeSaved} faster
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;