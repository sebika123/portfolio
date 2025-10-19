'use client';

import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Container, 
  useTheme, 
  useMediaQuery,
  Link as MuiLink
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  GitHub, 
  LinkedIn, 
  Mail, 
  Phone, 
  Home,
  Person,
  Code,
  Work,
  School
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';

const navItems = [
  { text: 'Home', href: '#home', icon: <Home /> },
  { text: 'About', href: '#about', icon: <Person /> },
  { text: 'Skills', href: '#skills', icon: <Code /> },
  { text: 'Experience', href: '#experience', icon: <Work /> },
  { text: 'Projects', href: '#projects', icon: <Code /> },
  { text: 'Education', href: '#education', icon: <School /> },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {personalInfo.name}
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.text} 
            component="a" 
            href={item.href} 
            sx={{ 
              justifyContent: 'center', 
              py: 1.5,
              color: 'text.primary',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                color: 'primary.main',
                bgcolor: 'rgba(37, 99, 235, 0.1)',
              },
            }}
          >
            <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
              {item.icon}
            </Box>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? 'background.paper' : 'transparent',
        transition: 'all 0.3s ease-in-out',
        boxShadow: scrolled ? 'rgb(0 0 0 / 8%) 0px 1px 12px' : 'none',
        color: scrolled ? 'text.primary' : '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 700, display: { xs: 'none', md: 'flex' } }}
            >
              {personalInfo.name}
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', ml: 1 }}
            >
              {personalInfo.name}
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  component="a"
                  href={item.href}
                  color="inherit"
                  sx={{ 
                    fontWeight: 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0',
                      height: '2px',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s'
                    },
                    '&:hover::after': {
                      width: '100%'
                    }
                  }}
                >
                  {item.text}
                </Button>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <IconButton color="inherit" component="a" href={personalInfo.github} target="_blank" aria-label="GitHub">
                  <GitHub />
                </IconButton>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <IconButton color="inherit" component="a" href={personalInfo.linkedin} target="_blank" aria-label="LinkedIn">
                  <LinkedIn />
                </IconButton>
              </motion.div>
              {!isMobile && (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                  >
                    <IconButton color="inherit" component="a" href={`mailto:${personalInfo.email}`} aria-label="Email">
                      <Mail />
                    </IconButton>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 }}
                  >
                    <IconButton color="inherit" component="a" href={`tel:${personalInfo.phone}`} aria-label="Phone">
                      <Phone />
                    </IconButton>
                  </motion.div>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}