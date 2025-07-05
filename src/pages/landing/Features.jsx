// src/Features.jsx
"use client";
import { motion } from "framer-motion";
import { Box, Typography, Grid, styled } from "@mui/material";
import { Star } from "@mui/icons-material";

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  backdropFilter: "blur(16px)",
  borderRadius: "16px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "280px",
  height: "280px",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0px 12px 32px rgba(249, 115, 22, 0.25)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "16px",
    height: "260px",
    width: "90vw",
    maxWidth: "260px",
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#f9e7dc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "16px",
  color: "#f97316",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50px",
    height: "50px",
    marginBottom: "12px",
  },
}));

const Features = () => {
  const features = [
    {
      title: "Proper Onboarding",
      description: "Signonboarder ensures new users experience a seamless integration with tailored guidance and resources, setting the stage for success.",
      icon: <Star sx={{ fontSize: { xs: "24px", sm: "28px" } }} />,
    },
    {
      title: "Spotlighting",
      description: "Signonboarder enhances your visibility as new signee by spotlighting your personality and profile, amplifying your standout moments.",
      icon: <Star sx={{ fontSize: { xs: "24px", sm: "28px" } }} />,
    },
    {
      title: "Network New Signees",
      description: "Signonboarder links new signees with experienced members, spots each signee’s key skills, and promotes collaboration and support smoothly within the Orange Dynasty.",
      icon: <Star sx={{ fontSize: { xs: "24px", sm: "28px" } }} />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    }),
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
        py: { xs: "40px", md: "50px" },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Inter, sans-serif",
            color: "#ffffff",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            fontWeight: 700,
            mb: { xs: 2, md: 3 },
            textAlign: "center",
          }}
        >
          Our Features
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter, sans-serif",
            color: "#d1d5db",
            maxWidth: { xs: "100%", md: "700px", lg: "800px" },
            margin: { xs: "0 auto 32px auto", md: "0 auto 48px auto" },
            textAlign: "center",
            lineHeight: 1.8,
            fontSize: { xs: "1rem", md: "1.1rem", lg: "1.2rem" },
          }}
        >
          Discover the tools and systems powering Orange Dynasty’s Web3 revolution.
        </Typography>
      </motion.div>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        sx={{ maxWidth: { xs: "100%", lg: "1400px", xl: "1600px" }, margin: "0 auto" }}
      >
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ scale: 1.02 }}
              style={{ width: "100%", maxWidth: "280px", height: "100%" }}
            >
              <FeatureCard>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    mb: 1,
                    lineHeight: 1.2,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    color: "#d1d5db",
                    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                    lineHeight: 1.5,
                  }}
                >
                  {feature.description}
                </Typography>
              </FeatureCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;