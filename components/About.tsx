"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "@/lib/data";

export default function About() {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      id="about"
      sx={{
        py: 12,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <Grid container spacing={4} ref={ref}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  borderRadius: 3,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight="bold"
                  color="primary.main"
                >
                  Who I Am
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ mb: 3, lineHeight: 1.8 }}
                >
                  I am a passionate frontend developer with a strong focus on
                  creating responsive, user-friendly, and visually appealing web
                  applications. With expertise in modern technologies and
                  frameworks, I strive to deliver high-quality solutions that
                  meet both user needs and business requirements.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ mb: 3, lineHeight: 1.8 }}
                >
                  My journey in web development began during my computer science
                  studies, where I discovered my passion for frontend
                  development. Since then, I've been continuously expanding my
                  skills and staying up-to-date with the latest trends and
                  technologies in the industry.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  I believe in writing clean, maintainable code and following
                  best practices to ensure the longevity and scalability of the
                  applications I build.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 3,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight="bold"
                  color="primary.main"
                >
                  Personal Information
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Name
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      {personalInfo.name}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="medium"
                      sx={{
                        mb: 2,
                        wordBreak: "break-word",
                      }}
                    >
                      {personalInfo.email}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="medium"
                      sx={{ mb: 2 }}
                    >
                      {personalInfo.location}
                    </Typography>
                  </Grid>
                </Grid>

                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  fontWeight="bold"
                  color="primary.main"
                >
                  My Approach
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  I approach each project with a focus on understanding the
                  unique requirements and challenges. My development process
                  emphasizes clean architecture, component reusability, and
                  performance optimization. I'm committed to continuous learning
                  and improving my skills to deliver the best possible
                  solutions.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
