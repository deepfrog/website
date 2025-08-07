import React from 'react';
import { Box } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Cloud as CloudIcon,
  Bolt as BoltIcon,
  Shield as ShieldIcon,
  Group as GroupIcon,
  AutoAwesome as AutoAwesomeIcon,
  Business as BusinessIcon,
  HealthAndSafety as HealthIcon,
  LocalShipping as LogisticsIcon,
  AccountBalance as FintechIcon,
  Work as CareerIcon,
  AccountTree as BlockchainIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Stats from '../components/landing/Stats';
import CoreFeatures from '../components/landing/CoreFeatures';
import EnterpriseFeatures from '../components/landing/EnterpriseFeatures';
import Partners from '../components/landing/Partners';
import AboutUs from '../components/landing/AboutUs';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const heroFeatures = [
    { icon: <HealthIcon />, text: 'Healthcare' },
    { icon: <LogisticsIcon />, text: 'Logistics' },
    { icon: <FintechIcon />, text: 'Fintech' },
  ];

  const coreFeatures = [
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: '#0f766e' }} />,
      title: 'Frognosis - Data Intelligence',
      description: 'Make your data speak with our intelligent dashboard platform. Transform raw data into actionable insights with AI-powered analytics and real-time visualizations.',
      highlights: ['AI-powered analytics', 'Real-time dashboards', 'Multi-datasource support', 'Natural language queries'],
      color: '#0f766e',
      link: 'https://frognosis.deepfrog.ai',
    },
    {
      icon: <CareerIcon sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Pangents - Lead & Career Vetting',
      description: 'Automate your lead generation and career vetting processes with intelligent screening and verification systems.',
      highlights: ['Automated vetting', 'Lead scoring', 'Background verification', 'Career assessment'],
      color: '#3b82f6',
    },
    {
      icon: <BlockchainIcon sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'DecentAI - Decentralized AI Platform',
      description: 'End-to-end workflow automation with blockchain security. Secure, transparent, and efficient AI-powered solutions.',
      highlights: ['Blockchain security', 'Workflow automation', 'Decentralized processing', 'Smart contracts'],
      color: '#10b981',
    },
  ];

  const enterpriseFeatures = [
    {
      icon: <GroupIcon />,
      title: 'Multi-Tenant Solutions',
      description: 'Enterprise-grade multi-tenant architecture with organization-based access control and user management.',
    },
    {
      icon: <ShieldIcon />,
      title: 'Industry Compliance',
      description: 'Built-in compliance for healthcare (HIPAA), finance (PCI-DSS), and logistics (ISO) standards.',
    },
    {
      icon: <CloudIcon />,
      title: 'Cloud-Native Platform',
      description: 'Built for the cloud with auto-scaling, high availability, and enterprise-grade reliability.',
    },
    {
      icon: <AutoAwesomeIcon />,
      title: 'AI-Powered Intelligence',
      description: 'Every solution powered by AI - from data analytics to process automation and predictive insights.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Enterprise Clients', icon: <BusinessIcon /> },
    { number: '3', label: 'Core Products', icon: <DashboardIcon /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <ShieldIcon /> },
    { number: '40%', label: 'Efficiency Gain', icon: <BoltIcon /> },
  ];

  const partners = [
    { name: 'Ultraship TMS', logo: 'U', sector: 'Logistics', image: '/image1.png' },
    { name: 'Shine Logistics Inc', logo: 'S', sector: 'Logistics', image: '/image2.png' },
  ];

  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
      <Header isAuthenticated={false} navigate={navigate} />
      <Hero isAuthenticated={false} navigate={navigate} heroFeatures={heroFeatures} />
      <Stats stats={stats} />
      <AboutUs />
      <CoreFeatures coreFeatures={coreFeatures} />
      <EnterpriseFeatures enterpriseFeatures={enterpriseFeatures} />
      <Partners partners={partners} />
      {/* <Pricing isAuthenticated={false} getPricingButton={getPricingButton} /> */}
      <CTA isAuthenticated={false} navigate={navigate} />
      <Footer />
    </Box>
  );
};

export default Landing;