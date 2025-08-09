import React, { useState } from 'react';
import { Box, Container, Button, Link, IconButton } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Dashboard as DashboardIcon } from '@mui/icons-material';

interface HeaderProps {
  isAuthenticated: boolean;
  navigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuthenticated = false;

  return (
    <Box sx={{ borderBottom: '1px solid #e5e7eb', bgcolor: '#ffffff', position: 'sticky', top: 0, zIndex: 1000 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="img"
              src="/deepfroglogo.png"
              alt="DeepFrog Logo"
              sx={{
                width: 120,
                height: 40,
                objectFit: 'contain',
              }}
            />

          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
          <Link href="#about" sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
              About
            </Link>
            <Link href="#products" sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
              Products
            </Link>
            <Link href="#sectors" sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
              Sectors
            </Link>
            {/* <Link href="#partners" sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
              Partners
            </Link> */}
            {/* <Link href="#contact" sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500 }}>
              Contact
            </Link> */}
            {/* <Link
              component="button"
              onClick={() => navigate('/documentation')}
              sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Documentation
            </Link> */}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {isAuthenticated ? (
              <>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate('/app/dashboard')}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    fontWeight: 600,
                    borderColor: '#0f766e',
                    color: '#0f766e',
                    '&:hover': { borderColor: '#0f766e', bgcolor: 'rgba(15, 118, 110, 0.04)' },
                  }}
                >
                  Go to Dashboard
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => navigate('/app/dashboard')}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    fontWeight: 600,
                    bgcolor: '#0f766e',
                    '&:hover': { bgcolor: '#0f766e' },
                  }}
                >
                  <DashboardIcon sx={{ mr: 1, fontSize: 16 }} />
                  Platform
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => navigate('/#')}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    fontWeight: 600,
                    bgcolor: '#0f766e',
                    '&:hover': { bgcolor: '#0f766e' },
                  }}
                >
                  Get Started
                </Button>
              </>
            )}
          </Box>
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        {mobileMenuOpen && (
          <Box sx={{ display: { xs: 'block', md: 'none' }, py: 2, borderTop: '1px solid #e5e7eb' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="#products" sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500, py: 1 }}>
                Products
              </Link>
              <Link href="#sectors" sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500, py: 1 }}>
                Sectors
              </Link>
              {/* <Link href="#partners" sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500, py: 1 }}>
                Partners
              </Link> */}
              <Link href="#about" sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500, py: 1 }}>
                About
              </Link>
              {/* <Link href="#contact" sx={{ color: '#374151', textDecoration: 'none', fontWeight: 500, py: 1 }}>
                Contact
              </Link> */}
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate('/signup')}
                sx={{
                  borderRadius: 2,
                  px: 3,
                  fontWeight: 600,
                  bgcolor: '#0f766e',
                  '&:hover': { bgcolor: '#0f766e' },
                  alignSelf: 'flex-start',
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Header;