import React from 'react';
import { Box, Typography, Link, Container, IconButton, styled } from '@mui/material';
import { Telegram, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

// Custom Discord icon using SvgIcon from Material UI
const DiscordIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02z"/>
    <path d="M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"/>
  </svg>
);

const GridBackground = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `
    repeating-linear-gradient(0deg, 
      rgba(249, 115, 22, 0.1) 0px, 
      rgba(249, 115, 22, 0.1) 1px, 
      transparent 1px, 
      transparent 65px
    ),
    repeating-linear-gradient(90deg, 
      rgba(249, 115, 22, 0.1) 0px, 
      rgba(249, 115, 22, 0.1) 1px, 
      transparent 1px, 
      transparent 65px
    )
  `,
  zIndex: 1,
  pointerEvents: 'none',
});

const SocialIcon = styled(IconButton)({
  backgroundColor: 'rgba(249, 115, 22, 0.1)', // Updated to match orange theme
  color: 'white',
  padding: '10px',
  margin: '0 8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#f97316', // Updated to match orange theme
    transform: 'translateY(-3px)',
    boxShadow: '0 5px 10px rgba(249, 115, 22, 0.3)', // Updated to match orange theme
  },
});

const FooterLink = styled(Link)({
  color: 'rgba(255, 255, 255, 0.8)',
  textDecoration: 'none',
  fontFamily: 'Inter, sans-serif', // Fallback to Inter since Manrope might not be available
  fontSize: '0.95rem',
  fontWeight: 400,
  transition: 'all 0.2s ease',
  position: 'relative',
  paddingLeft: '0',
  display: 'inline-block',
  '&:hover': {
    color: '#f97316', // Updated to match orange theme
    paddingLeft: '6px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '1px',
    bottom: '-2px',
    left: '0',
    backgroundColor: '#f97316', // Updated to match orange theme
    transition: 'all 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
});

const ColumnHeader = styled(Typography)({
  fontFamily: 'Inter, sans-serif', // Fallback to Inter since Aeonik might not be available
  fontSize: '1.1rem',
  fontWeight: 600,
  color: 'white',
  marginBottom: '20px',
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '30px',
    height: '2px',
    backgroundColor: '#f97316', // Updated to match orange theme
    bottom: '-8px',
    left: '0',
  },
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        color: 'white',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(249, 115, 22, 0.3)', // Updated to match orange theme
      }}
    >
      <GridBackground />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: { xs: 5, md: 4 },
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Logo & About Column */}
          <Box sx={{ maxWidth: { xs: '100%', sm: '300px' } }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'bold',
                mb: 2,
                color: '#f97316', // Updated to match orange theme
                letterSpacing: '0.02em',
              }}
            >
              Orange Dynasty
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 3,
                fontFamily: 'Inter, sans-serif',
                lineHeight: 1.7,
              }}
            >
              Bridging innovation and community within the SIGN ecosystem. Building the future of decentralized engagement, one block at a time.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', mt: 2 }}>
              <SocialIcon aria-label="Twitter" href="https://x.com/sign" target="_blank" rel="noopener noreferrer">
                <Twitter fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="Discord" href="https://discord.gg" target="_blank" rel="noopener noreferrer">
                <DiscordIcon />
              </SocialIcon>
              <SocialIcon aria-label="Telegram" href="https://t.me/orangedynasty" target="_blank" rel="noopener noreferrer">
                <Telegram fontSize="small" />
              </SocialIcon>
              <SocialIcon aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram fontSize="small" />
              </SocialIcon>
            </Box>
          </Box>

          {/* Protocol Column */}
          <Box sx={{ minWidth: { xs: '45%', md: 'auto' } }}>
            <ColumnHeader>Protocol</ColumnHeader>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['Documentation', 'Security', 'Roadmap', 'Governance'].map((item) => (
                <FooterLink key={item} href="#">
                  {item}
                </FooterLink>
              ))}
            </Box>
          </Box>

          {/* Community Column */}
          <Box sx={{ minWidth: { xs: '45%', md: 'auto' } }}>
            <ColumnHeader>Community</ColumnHeader>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['Blog', 'Community Hub', 'Forums', 'Events'].map((item) => (
                <FooterLink key={item} href="#">
                  {item}
                </FooterLink>
              ))}
            </Box>
          </Box>

          {/* Resources Column */}
          <Box sx={{ minWidth: { xs: '45%', md: 'auto' } }}>
            <ColumnHeader>Resources</ColumnHeader>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['About', 'Press Kit', 'Contact', 'Careers'].map((item) => (
                <FooterLink key={item} href="#">
                  {item}
                </FooterLink>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 6,
            pt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
            position: 'relative',
            zIndex: 10,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            © {currentYear} Sign Onboarder. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <FooterLink href="#" sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>
              Privacy Policy
            </FooterLink>
            <FooterLink href="#" sx={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>
              Terms of Service
            </FooterLink>
          </Box>
        </Box>

        {/* Large Text Background */}
        <Typography
          sx={{
            position: 'absolute',
            bottom: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: { xs: '15vw', md: '10vw' },
            color: 'rgba(249, 115, 22, 0.03)', // Updated to match orange theme
            fontWeight: 'bold',
            zIndex: 1,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Orange Dynasty
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;