'use client';

import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Circle, Work } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import { experiences } from '@/lib/data';

export default function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box 
      id="experience" 
      sx={{ 
        py: isSmallScreen ? 6 : 12,
        backgroundColor: 'rgba(37, 99, 235, 0.03)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: isSmallScreen ? 0 : 3 }}>
        <Box sx={{ px: isSmallScreen ? 3 : 0 }}>
          <SectionTitle title="Work Experience" subtitle="My professional journey" />
        </Box>
        
        <Box ref={ref} sx={{ mt: 5 }}>
          <Timeline position={isMobile ? "right" : "alternate"} sx={{ p: 0 }}>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.company} sx={{ 
                '&:before': {
                  flex: isSmallScreen ? 0 : 1,
                  padding: isSmallScreen ? 0 : '6px 16px',
                }
              }}>
                {!isMobile && (
                  <TimelineOppositeContent 
                    color="text.secondary"
                    sx={{ 
                      flex: 0.4,
                      px: isSmallScreen ? 1 : 2,
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Typography variant="h6" component="h3" fontWeight="bold" color="primary.main">
                        {experience.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {experience.period}
                      </Typography>
                    </motion.div>
                  </TimelineOppositeContent>
                )}
                
                <TimelineSeparator>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  >
                    <TimelineDot color="primary" variant="outlined">
                      <Work fontSize="small" />
                    </TimelineDot>
                  </motion.div>
                  {index < experiences.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={inView ? { opacity: 1, height: 'auto' } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      <TimelineConnector />
                    </motion.div>
                  )}
                </TimelineSeparator>
                
                <TimelineContent sx={{ px: isSmallScreen ? 2 : 3 }}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  >
                    <Box 
                      sx={{ 
                        p: isSmallScreen ? 2 : 3, 
                        bgcolor: 'background.paper', 
                        borderRadius: 3,
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                        mb: 3,
                        mx: isSmallScreen ? 1 : 0,
                      }}
                    >
                      {isMobile && (
                        <>
                          <Typography variant="h6" component="h3" fontWeight="bold" color="primary.main">
                            {experience.company}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {experience.period}
                          </Typography>
                        </>
                      )}
                      
                      <Typography variant="h6" component="h4" fontWeight="medium" sx={{ mb: 2 }}>
                        {experience.position}
                      </Typography>
                      
                      <List disablePadding>
                        {experience.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.2 + 0.2 + i * 0.1 }}
                          >
                            <ListItem disablePadding sx={{ mb: 1 }}>
                              <ListItemIcon sx={{ minWidth: 24 }}>
                                <Circle sx={{ fontSize: 8, color: 'primary.main' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary={achievement} 
                                primaryTypographyProps={{ 
                                  variant: 'body2',
                                  sx: { 
                                    lineHeight: 1.6,
                                    fontSize: isSmallScreen ? '0.875rem' : '0.9375rem' 
                                  } 
                                }} 
                              />
                            </ListItem>
                          </motion.div>
                        ))}
                      </List>
                    </Box>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
}