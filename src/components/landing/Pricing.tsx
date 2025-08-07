import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import PricingCard from './PricingCard';

interface PricingPlan {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'contained' | 'outlined';
}

interface PricingProps {
  isAuthenticated: boolean;
  getPricingButton: (defaultText: string, authenticatedText: string) => { text: string; action: () => void | Promise<void> };
}

const Pricing: React.FC<PricingProps> = ({ isAuthenticated, getPricingButton }) => {
  const pricingPlans: PricingPlan[] = [
    {
      title: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        'Up to 5 team members',
        'Basic analytics',
        'Standard support',
        '1 database connection',
        'Basic dashboards',
      ],
      buttonText: getPricingButton('Start Free Trial', 'Upgrade Now').text,
      buttonVariant: 'outlined',
    },
    {
      title: 'Professional',
      price: '$99',
      period: '/month',
      features: [
        'Up to 25 team members',
        'Advanced analytics',
        'Priority support',
        'Unlimited connections',
        'Custom dashboards',
        'API access',
        'Advanced security',
      ],
      popular: true,
      buttonText: getPricingButton('Start Free Trial', 'Upgrade Now').text,
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited team members',
        'Enterprise analytics',
        '24/7 support',
        'Custom integrations',
        'White-label options',
        'Advanced security',
        'SLA guarantee',
        'Dedicated account manager',
      ],
      buttonText: getPricingButton('Contact Sales', 'Contact Sales').text,
      buttonVariant: 'outlined',
    },
  ];

  return (
    <Box id="pricing" sx={{ py: 8, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#111827', mb: 2 }}>
          Simple, Transparent Pricing
        </Typography>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#6b7280', mb: 6, maxWidth: 600, mx: 'auto' }}>
          Choose the plan that fits your needs. All plans include a 14-day free trial.
        </Typography>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          justifyContent: 'center'
        }}>
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;