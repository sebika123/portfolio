'use client';

import { Box, Typography, Container, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, LinkedIn, Mail, Phone, LocationOn, ArrowDownward } from '@mui/icons-material';
import { personalInfo } from '@/lib/data';
import Image from 'next/image';

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundImage: 'linear-gradient(135deg, rgba(37, 99, 235, 0.9), rgba(15, 118, 110, 0.8))',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '60vmax',
          height: '60vmax',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          top: '-20vmax',
          right: '-15vmax',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '40vmax',
          height: '40vmax',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          bottom: '-15vmax',
          left: '-10vmax',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ zIndex: 1, mt: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  mb: 2, 
                  display: 'inline-block',
                  background: 'rgba(255, 255, 255, 0.1)',
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                }}
              >
                Hello, I am
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                {personalInfo.name}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 500 }}>
                {personalInfo.title}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', lineHeight: 1.7 }}>
                {personalInfo.bio}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button 
                  variant="contained" 
                  href="#projects"
                  sx={{ 
                    bgcolor: 'white', 
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                    }
                  }}
                >
                  View My Work
                </Button>
                <Button 
                  variant="outlined"
                  href={`mailto:${personalInfo.email}`}
                  sx={{ 
                    borderColor: 'white', 
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, color: 'rgba(255, 255, 255, 0.8)', justifyContent: { xs: 'center', md: 'flex-start' }}}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">{personalInfo.location}</Typography>
              </Box>

              {isMobile && (
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                  <IconButton color="inherit" component="a" href={personalInfo.github} target="_blank" aria-label="GitHub" sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}>
                    <GitHub />
                  </IconButton>
                  <IconButton color="inherit" component="a" href={personalInfo.linkedin} target="_blank" aria-label="LinkedIn" sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}>
                    <LinkedIn />
                  </IconButton>
                  <IconButton color="inherit" component="a" href={`mailto:${personalInfo.email}`} aria-label="Email" sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}>
                    <Mail />
                  </IconButton>
                  <IconButton color="inherit" component="a" href={`tel:${personalInfo.phone}`} aria-label="Phone" sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}>
                    <Phone />
                  </IconButton>
                </Box>
              )}
            </motion.div>
          </Box>

          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box 
                sx={{ 
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Image
        src="/images/sebikanepal.png"  
        alt="Profile"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <IconButton
            color="inherit"
            onClick={scrollToNextSection}
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}
            aria-label="Scroll down"
          >
            <ArrowDownward />
          </IconButton>
        </motion.div>
      </Box>
    </Box>
  );
}