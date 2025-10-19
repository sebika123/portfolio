import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Chip, Link as MuiLink } from '@mui/material';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';


const Projects = () => {
  return (
    <Box sx={{ py: 10, bgcolor: '#f9fafb' }}>
      <Container>
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
            Featured Projects
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="600px" mx="auto">
            A showcase of my recent work and contributions to various projects
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                  },
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: 192,
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)',
                    }}
                  />
                </Box>

                <CardContent>
                  <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                    {project.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    mb: 2
                  }}>
                    {project.description}
                  </Typography>

                  <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: 'purple.100',
                          color: 'purple.700',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>

                  {project.link && (
                    <MuiLink
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: 'primary.main',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: 'primary.dark',
                        },
                      }}
                    >
                      <ExternalLink style={{ width: 16, height: 16, marginRight: 4 }} />
                      Live Demo
                    </MuiLink>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
