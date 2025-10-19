'use client';

import { Box, Typography, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box 
      ref={ref} 
      sx={{ 
        textAlign: 'center', 
        mb: 6,
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Typography 
          variant="subtitle1"
          component="div"
          sx={{ 
            color: light ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
            mb: 1,
            display: 'inline-block',
            p: 1,
          }}
        >
          {subtitle}
        </Typography>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography 
          variant="h3" 
          component="h2"
          sx={{ 
            fontWeight: 'bold',
            color: light ? 'white' : 'text.primary',
            mb: 2,
          }}
        >
          {title}
        </Typography>
      </motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: 80 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{
          margin: '0 auto',
          height: 3,
          backgroundColor: light ? 'white' : '#2563eb',
          borderRadius: 3,
        }}
      />
    </Box>
  );
}