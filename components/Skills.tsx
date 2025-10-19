'use client';

import { Box, Container, Grid, Paper, Typography, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import { skills } from '@/lib/data';

export default function Skills() {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getChipColor = (index: number) => {
    const colors = [
      { bg: 'primary.main', text: 'white' },
      { bg: 'secondary.main', text: 'white' },
      { bg: 'tertiary.main', text: 'white' },
      { bg: 'success.main', text: 'white' },
    ];
    return colors[index % colors.length];
  };

  return (
    <Box 
      id="skills" 
      sx={{ 
        py: 12,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle title="My Skills" subtitle="What I bring to the table" />

        <Box ref={ref}>
          <Grid container spacing={4}>
            {skills.map((skillGroup, index) => (
              <Grid item xs={12} md={6} key={skillGroup.category}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 4, 
                      borderRadius: 3,
                      height: '100%',
                      backgroundColor: 'white',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '4px', 
                        bgcolor: getChipColor(index).bg 
                      }} 
                    />
                    
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom 
                      fontWeight="bold"
                      sx={{ mb: 3, color: getChipColor(index).bg }}
                    >
                      {skillGroup.category}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skillGroup.items.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        >
                          <Chip 
                            label={skill} 
                            sx={{ 
                              my: 0.5,
                              fontWeight: 500,
                              bgcolor: `${getChipColor(index).bg}20`,
                              color: getChipColor(index).bg,
                              '&:hover': {
                                bgcolor: `${getChipColor(index).bg}30`,
                              }
                            }} 
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}