// src/CoreTeam.jsx
"use client";
import { motion } from "framer-motion";
import { Box, Typography, Grid, styled, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

const TeamMemberCard = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  backdropFilter: "blur(16px)",
  borderRadius: "16px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
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

const TeamMemberImage = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  margin: "0 auto 12px auto",
  overflow: "hidden",
  border: "3px solid #f97316",
  transition: "transform 0.3s ease",
  flexShrink: 0,
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "&:hover": {
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70px",
    height: "70px",
    margin: "0 auto 10px auto",
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  width: "40px",
  height: "40px",
  backgroundColor: "#f9e7dc",
  color: "#f97316",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "#f97316",
    color: "#ffffff",
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "36px",
    height: "36px",
  },
}));

const CoreTeam = () => {
  const teamMembers = [
    { name: "Xin Yan", role: "Founder", image: "SOE.jpeg", twitter: "https://x.com/realyanxin" },
    { name: "Potter Li", role: "Co-Founder & Tech Lead", image: "SOI.jpeg", twitter: "https://x.com/Potterlee222" },
    { name: "Jack Xu", role: "Co-Founder & CTO", image: "SOH.jpeg", twitter: "https://x.com/headcpx" },
    { name: "Zoe Chen", role: "Community Moderator", image: "SOG.jpeg", twitter: "https://x.com/0xzoe_im" },
    { name: "Sign Intern", role: "Project Intern", image: "SOF.jpeg", twitter: "https://x.com/roguescholarbro" },
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
        px: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 },
        py: { xs: "60px", md: "70px" },
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
          Sign Core Team
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
          Meet the passionate innovators driving Orange Dynasty (SIGN) to redefine Web3 engagement.
        </Typography>
      </motion.div>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        sx={{ maxWidth: { xs: "100%", lg: "1400px", xl: "1600px" }, margin: "0 auto" }}
      >
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ scale: 1.02 }}
              style={{ width: "100%", maxWidth: "280px", height: "100%" }}
            >
              <TeamMemberCard>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, justifyContent: "center" }}>
                  <TeamMemberImage>
                    <img src={member.image} alt={`${member.name}'s portrait`} />
                  </TeamMemberImage>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                      mb: 0.5,
                      lineHeight: 1.2,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      color: "#ffffff",
                      fontWeight: 500,
                      fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
                      lineHeight: 1.3,
                      mb: 1,
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "auto" }}>
                  <SocialIcon href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Twitter profile`}>
                    <TwitterIcon fontSize="small" />
                  </SocialIcon>
                </Box>
              </TeamMemberCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoreTeam;