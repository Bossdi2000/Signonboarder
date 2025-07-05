import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Keep for mobile menu animations

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'OnboarderTeam', href: '/team', type: 'route' },
    { label: 'Signees', href: '/signees', type: 'section' },
    { label: 'Get signed', href: 'http://sign.global/orange-dynasty', type: 'external' },
  ];

  // Animation variants only for mobile menu items
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        bgcolor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '3px solid #ffffff',
        boxShadow: '0 4px 24px rgba(249, 115, 22, 0.2)',
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 4, lg: 8 },
          py: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              component="img"
              src="/CS1.jpeg"
              alt="Sign-Onboarder Logo"
              sx={{
                width: 40,
                height: 40,
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Dancing Script, cursive',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#f97316',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#f97316cc',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Sign-Onboarder
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.label}
                component={item.type === 'route' ? Link : 'a'}
                to={item.type === 'route' ? item.href : undefined}
                href={item.type !== 'route' ? item.href : undefined}
                target={item.type === 'external' ? '_blank' : undefined}
                rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                sx={{
                  color: '#ffffff',
                  fontSize: '1.125rem',
                  fontWeight: 'medium',
                  position: 'relative',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#f97316',
                  },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: 0,
                    height: '2px',
                    bgcolor: '#f97316',
                    transition: 'all 0.3s ease',
                  },
                  '&:hover:after': {
                    width: '100%',
                    left: 0,
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* CTA Button (Desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button
              component="a"
              href="https://x.com/signonboarder"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: 'linear-gradient(90deg, #f97316, #ff8c00)',
                color: '#808080',
                px: 3,
                py: 1.5,
                borderRadius: '20px',
                fontFamily: 'Dancing Script, cursive',
                fontWeight: 'bold',
                border: '2px solid #f97316',
                '&:hover': {
                  bgcolor: 'linear-gradient(90deg, #ea580c, #ff7400)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)',
                },
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
            >
              Join us
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Button
              onClick={handleMobileMenuToggle}
              sx={{
                color: '#f97316',
                p: 1,
                borderRadius: '8px',
                '&:hover': {
                  bgcolor: 'rgba(249, 115, 22, 0.1)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </Box>
        </Box>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            sx={{
              display: { xs: 'block', md: 'none' },
              bgcolor: 'rgba(26, 26, 46, 0.9)',
              borderTop: '1px solid rgba(249, 115, 22, 0.3)',
              py: 2,
              mt: 2,
              borderRadius: '0 0 12px 12px',
            }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                sx={{ py: 1 }}
              >
                <Typography
                  component={item.type === 'route' ? Link : 'a'}
                  to={item.type === 'route' ? item.href : undefined}
                  href={item.type !== 'route' ? item.href : undefined}
                  target={item.type === 'external' ? '_blank' : undefined}
                  rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                  sx={{
                    display: 'block',
                    color: '#ffffff',
                    fontSize: '1.125rem',
                    fontWeight: 'medium',
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    '&:hover': {
                      color: '#f97316',
                      bgcolor: 'rgba(249, 115, 22, 0.1)',
                      transform: 'translateX(8px)',
                    },
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Typography>
              </motion.div>
            ))}
            <Box sx={{ px: 2, pt: 2 }}>
              <Button
                component="a"
                href="https://x.com/signonboarder"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: '100%',
                  bgcolor: 'linear-gradient(90deg, #f97316, #ff8c00)',
                  color: '#808080',
                  px: 3,
                  py: 1.5,
                  borderRadius: '20px',
                  fontFamily: 'Dancing Script, cursive',
                  fontWeight: 'bold',
                  border: '2px solid #f97316',
                  '&:hover': {
                    bgcolor: 'linear-gradient(90deg, #ea580c, #ff7400)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 15px rgba(249, 57, 22, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
              >
                Join us
              </Button>
            </Box>
          </motion.div>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;