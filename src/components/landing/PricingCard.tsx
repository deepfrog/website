import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'contained' | 'outlined';
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  popular = false,
  buttonText,
  buttonVariant,
}) => {
  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 3,
        border: popular ? '2px solid #0f766e' : '1px solid #e5e7eb',
        bgcolor: '#ffffff',
        position: 'relative',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
      }}
    >
      {popular && (
        <Box
          sx={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            bgcolor: '#0f766e',
            color: 'white',
            px: 3,
            py: 0.5,
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: 600,
          }}
        >
          Most Popular
        </Box>
      )}
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#111827', mb: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#0f766e' }}>
            {price}
          </Typography>
          <Typography variant="body1" sx={{ color: '#6b7280', ml: 1 }}>
            {period}
          </Typography>
        </Box>
        <List dense sx={{ mb: 4 }}>
          {features.map((feature, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CheckIcon sx={{ color: '#0f766e', fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={feature}
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
        <Button
          variant={buttonVariant}
          fullWidth
          size="large"
          sx={{
            borderRadius: 2,
            py: 1.5,
            fontWeight: 600,
            ...(buttonVariant === 'contained' && {
              bgcolor: '#0f766e',
              '&:hover': {
                bgcolor: '#0f766e',
              },
            }),
            ...(buttonVariant === 'outlined' && {
              borderColor: '#0f766e',
              color: '#0f766e',
              '&:hover': {
                borderColor: '#0f766e',
                bgcolor: 'rgba(15, 118, 110, 0.04)',
              },
            }),
          }}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;