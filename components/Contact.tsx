"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  useTheme,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Mail,
  Phone,
  LocationOn,
  Send,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
export default function Contact() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send via Resend API first
      const resendRes = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const resendSuccess = resendRes.ok;

      // Send to Django backend (optional)
      let djangoSuccess = false;
      try {
        const djangoRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/contact/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );
        djangoSuccess = djangoRes.ok;
      } catch (djangoErr) {
        console.warn("Django request failed:", djangoErr);
      }

      // Treat as success if either works
      if (resendSuccess || djangoSuccess) {
        console.log(
          "Resend success:",
          resendSuccess,
          "Django success:",
          djangoSuccess
        );

        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSnackbar({
          open: true,
          message: "Error sending message. Please try again.",
          severity: "error",
        });
      }
    } catch (err: any) {
      console.error("Server error:", err);
      setSnackbar({
        open: true,
        message: "Server error. Please try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactItems = [
    
    {
      icon: <Mail color="primary" fontSize="large" />,
      title: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },

    {
      icon: <LocationOn color="primary" fontSize="large" />,
      title: "Location",
      value: personalInfo.location,
    },
  ];

  return (
    <>
      <Box
        id="contact"
        sx={{
          py: 12,
          backgroundColor: "primary.main",
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            title="Contact Me"
            subtitle="Let's get in touch"
            light
          />

          <Box ref={ref} sx={{ mt: 5 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={5}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Get In Touch
                  </Typography>

                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ mb: 4, opacity: 0.9 }}
                  >
                    Feel free to reach out if you're looking for a frontend
                    developer, have a question, or just want to connect.
                  </Typography>

                  <Box sx={{ mt: 4 }}>
                    {contactItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Box
                          sx={{ display: "flex", mb: 3, alignItems: "center" }}
                        >
                          <Box
                            sx={{
                              mr: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 50,
                              height: 50,
                              borderRadius: "50%",
                              bgcolor: "rgba(255, 255, 255, 0.1)",
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="subtitle2"
                              sx={{ opacity: 0.8 }}
                            >
                              {item.title}
                            </Typography>
                            {item.link ? (
                              <Link
                                href={item.link}
                                variant="h6"
                                underline="hover"
                                sx={{ color: "white", fontWeight: "medium" }}
                              >
                                {item.value}
                              </Link>
                            ) : (
                              <Typography
                                variant="h6"
                                sx={{ fontWeight: "medium" }}
                              >
                                {item.value}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>

                  <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <Box
                        component="a"
                        href={personalInfo.github}
                        target="_blank"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          bgcolor: "rgba(255, 255, 255, 0.1)",
                          color: "white",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.2)",
                            transform: "translateY(-3px)",
                          },
                        }}
                      >
                        <GitHub />
                      </Box>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <Box
                        component="a"
                        href={personalInfo.linkedin}
                        target="_blank"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          bgcolor: "rgba(255, 255, 255, 0.1)",
                          color: "white",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.2)",
                            transform: "translateY(-3px)",
                          },
                        }}
                      >
                        <LinkedIn />
                      </Box>
                    </motion.div>
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={7}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      fontWeight="bold"
                      color="primary.main"
                    >
                      Send A Message
                    </Typography>

                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      sx={{ mt: 3 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                            margin="normal"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Your Email"
                            variant="outlined"
                            margin="normal"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Subject"
                            variant="outlined"
                            margin="normal"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            color="primary"
                            endIcon={<Send />}
                            sx={{
                              mt: 2,
                              px: 4,
                              py: 1.5,
                              borderRadius: "30px",
                            }}
                            disabled={loading}
                          >
                            {loading ? "Sending..." : "Send Message"}
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity as "success" | "error"}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
