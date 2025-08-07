import React from 'react';
import { Box, Container, Typography } from '@mui/material';

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface StatsProps {
  stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <Box sx={{ py: 8, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 4 
        }}>
          {stats.map((stat, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <Box sx={{ p: 2, borderRadius: 3, bgcolor: 'rgba(15, 118, 110, 0.1)', color: '#0f766e' }}>
                  {stat.icon}
                </Box>
              </Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#0f766e', mb: 1 }}>
                {stat.number}
              </Typography>
              <Typography variant="body1" sx={{ color: '#6b7280', fontWeight: 500 }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Stats;