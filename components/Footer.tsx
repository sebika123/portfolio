'use client';

import { Box, Container, Typography, Link, Divider } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4,
        backgroundColor: '#1A1A2E',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'center' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} Sebika Nepal. All rights reserved.
          </Typography>
          
          
        </Box>
      </Container>
    </Box>
  );
}