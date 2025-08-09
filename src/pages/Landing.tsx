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
      title: 'Frognosis — AI Data Intelligence',
      description: 'Unify metrics, detect anomalies, and ask questions in natural language across all your data sources — in real time.',
      highlights: [
        'Auto-generated dashboards',
        'Anomaly detection & forecasting',
        'Natural-language queries (NLQ)',
        'Connectors for DBs, APIs, files'
      ],
      color: '#0f766e',
    },
    {
      icon: <LogisticsIcon sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Pangents — Logistics Lead-to-Cash',
      description: 'From lead identification and carrier vetting to deal closure, shipment tracking, and invoice finalization — with voice agents that negotiate and close with carriers to boost efficiency.',
      highlights: [
        'Lead identification & enrichment',
        'Carrier vetting & compliance',
        'AI voice agents for deal closure',
        'Shipment tracking & exceptions',
        'Invoice reconciliation & finalization',
        'Cut cycle time by 40% and reduce manual calls by 60%'
      ],
      color: '#3b82f6',
    },
    {
      icon: <BlockchainIcon sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'DecentAI — Decentralized AI Orchestration',
      description: 'Orchestrate secure AI workflows and agents with on-chain auditability and policy-based access controls.',
      highlights: [
        'Agent & workflow orchestration',
        'On-chain audit trail',
        'Policy-based access control',
        'Smart-contract automations'
      ],
      color: '#10b981',
    },
  ];

  const enterpriseFeatures = [
    {
      icon: <GroupIcon />,
      title: 'Supply Chain Optimization',
      description: 'End-to-end optimization across planning, procurement, logistics, and fulfillment using data-driven automation and predictive insights.',
    },
    {
      icon: <ShieldIcon />,
      title: 'Industry Specific LLMs',
      description: 'Domain-tuned LLMs for healthcare, logistics, and fintech that deliver accurate, compliant, and context-aware responses.',
    },
    {
      icon: <CloudIcon />,
      title: 'Cloud Native Platform',
      description: 'Scalable, resilient, and secure by design with autoscaling, high availability, and multi-tenant controls.',
    },
    {
      icon: <AutoAwesomeIcon />,
      title: 'AI Agents Eco System',
      description: 'Composable AI agents that coordinate tasks, integrate with your tools and data, and automate complex workflows safely.',
    },
  ];

  const stats = [
    { number: '5+', label: 'Enterprise Clients', icon: <BusinessIcon /> },
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
      {/* <Partners partners={partners} /> */}
      {/* <Pricing isAuthenticated={false} getPricingButton={getPricingButton} /> */}
      <CTA isAuthenticated={false} navigate={navigate} />
      <Footer />
    </Box>
  );
};

export default Landing;