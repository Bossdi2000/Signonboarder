"use client";
import { motion } from "framer-motion";
import { Box, Typography, Grid, styled, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

// Styled Components - Now Smaller Circular
const TeamMemberCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000",
  borderRadius: "50%", // Changed from "10px" to make it circular
  padding: "15px", // Reduced padding for smaller circular layout
  textAlign: "center",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Center content in circular container
  alignItems: "center",
  width: "200px", // Reduced from 260px to 200px
  height: "200px", // Reduced from 260px to 200px
  border: "1px solid #f97316",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0px 8px 18px rgba(249, 115, 22, 0.4)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "12px",
    width: "160px", // Reduced from 200px to 160px
    height: "160px",
  },
}));

const TeamMemberImage = styled(Box)(({ theme }) => ({
  width: "60px", // Reduced from 80px to 60px
  height: "60px",
  borderRadius: "50%",
  margin: "0 auto 8px auto",
  overflow: "hidden",
  border: "1px solid #f97316",
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
    width: "45px", // Reduced from 60px to 45px
    height: "45px",
    margin: "0 auto 6px auto",
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  width: "28px", // Reduced from 32px to 28px
  height: "28px",
  backgroundColor: "#e65100",
  color: "#ffffff",
  transition: "all 0.2s ease",
  marginTop: "6px", // Reduced from 8px to 6px
  "&:hover": {
    backgroundColor: "#f97316",
    color: "#ffffff",
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "24px", // Reduced from 28px to 24px
    height: "24px",
  },
}));

const SignTeam = () => {
  const teamMembers = [
    {
      name: "Xin Yan",
      role: "CEO/Co-Founder",
      image: "/SOE.jpeg",
      twitter: "https://x.com/realyanxin",
    },
    {
      name: "Potter Lee",
      role: "Co-Founder & Tech Lead",
      image: "/SOI.jpeg",
      twitter: "https://x.com/Potterlee222",
    },
    {
      name: "Jack Xu",
      role: "Co-Founder & CTO",
      image: "/SOH.jpeg",
      twitter: "https://x.com/headcpx",
    },
    
    {
      name: "JerryZ",
      role: "Product",
      image: "/Core1.jpg",
      twitter: "https://x.com/@Jerry_ZZQ",
    },
    {
      name: "LJ",
      role: "Project Intern",
      image: "/Core2.jpg",
      twitter: "https://x.com/@lj_xbt",
    },
    {
      name: "Claire",
      role: "Head of product",
      image: "/Core3.jpg",
      twitter: "https://x.com/@ClaireMa12",
    },
    {
      name: "Zoe Chen",
      role: "Community Moderator",
      image: "/SOG.jpeg",
      twitter: "https://x.com/0xzoe_im",
    },
    {
      name: "Megan w",
      role: "Project Intern",
      image: "/SOF.jpeg",
      twitter: "https://x.com/roguescholarbro",
    },
  ];

  // The OGs team members (11 members)
  const ogMembers = [
    {
      name: "Tajudeen",
      role: "King of Sign",
      image: "/OG1.jpg",
      twitter: "https://x.com/@Tajudeen_10",
    },
    {
      name: "hime Sama",
      role: "Queen of Sign",
      image: "/OG2.jpg",
      twitter: "https://x.com/himesama_01",
    },
    {
      name: "Lucky Esemuede",
      role: "Meme-Lord of Sign",
      image: "/OG3.jpg",
      twitter: "https://x.com/Lucky_of_Web3",
    },
    {
      name: "Immanuel_Web3",
      role: "Sign titan",
      image: "/OG4.jpg",
      twitter: "https://x.com/Web3Immanuel",
    },
    {
      name: "Big Gids",
      role: "Sign Community Lead",
      image: "/OG5.jpg",
      twitter: "https://x.com/_biggids",
    },
    {
      name: "HAIKEYS",
      role: "Chief Content of Sign",
      image: "/OG6.jpg",
      twitter: "https://x.com/Haikeystweett",
    },
    {
      name: "Angel",
      role: "Strategy Consultant",
      image: "/OG7.jpg",
      twitter: "https://x.com/AngelofWeb3_",
    },
    {
      name: "Thoth",
      role: "Sign Seisei",
      image: "/OG8.jpg",
      twitter: "https://x.com/Trojan_Bus1",
    },
    {
      name: "Truth",
      role: "Growth Hacker",
      image: "/OG9.jpg",
      twitter: "https://x.com/TruthOnchained",
    },
    {
      name: "Frans TP",
      role: "Sign SuperHero",
      image: "/OG10.jpg",
      twitter: "https://x.com/FransTp0",
    },
    {
      name: "Oxbossj",
      role: "Wizard of Sign",
      image: "/OG11.jpg",
      twitter: "https://x.com/Oxbossj",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    }),
  };

  const TeamSection = ({ title, members, description }) => (
    <Box sx={{ mb: { xs: 4, md: 6 } }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: "#ffffff",
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" }, // Increased font sizes
            fontWeight: 700,
            mb: { xs: 1.5, md: 2 },
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter, sans-serif",
            color: "#d1d5db",
            maxWidth: { xs: "100%", md: "500px", lg: "600px" },
            margin: { xs: "0 auto 16px auto", md: "0 auto 24px auto" },
            textAlign: "center",
            lineHeight: 1.8,
            fontSize: { xs: "0.9rem", md: "1rem", lg: "1.1rem" }, // Increased font sizes
            px: { xs: 1, sm: 0 },
          }}
        >
          {description}
        </Typography>
      </motion.div>

      {/* Team Grid */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }} // Increased spacing for circular layout
        justifyContent="center"
        sx={{
          maxWidth: { xs: "100%", lg: "1400px", xl: "1600px" },
          margin: "0 auto",
        }}
      >
        {members.map((member, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ scale: 1.02 }}
              style={{ width: "100%", maxWidth: "200px", height: "100%" }} // Updated maxWidth
            >
              <TeamMemberCard>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <TeamMemberImage>
                    <img src={member.image} alt={`${member.name}'s portrait`} />
                  </TeamMemberImage>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" }, // Adjusted for smaller circles
                      mb: 0.3,
                      lineHeight: 1.2,
                      textAlign: "center",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      color: "#ffb74d",
                      fontWeight: 500,
                      fontSize: { xs: "0.65rem", sm: "0.7rem", md: "0.8rem" }, // Adjusted for smaller circles
                      lineHeight: 1.3,
                      textAlign: "center",
                      mb: 0.5,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <SocialIcon
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s Twitter profile`}
                  >
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

  return (
    <Box
      sx={{
        background: "#000000",
        position: "relative",
        overflow: "hidden",
        padding: { xs: "20px 0", md: "40px 0" },
        width: "100%",
      }}
    >
      {/* Global Styles for Pulse Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>

      {/* Background Gradient Circles */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "20px", md: "40px" },
            left: { xs: "10px", md: "20px" },
            width: { xs: "120px", md: "200px" },
            height: { xs: "120px", md: "200px" },
            background: "rgba(168, 85, 247, 0.2)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "pulse 3s infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "20px", md: "40px" },
            right: { xs: "10px", md: "20px" },
            width: { xs: "160px", md: "300px" },
            height: { xs: "160px", md: "300px" },
            background: "rgba(236, 72, 153, 0.2)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "pulse 3s infinite 1s",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "240px", md: "400px" },
            height: { xs: "240px", md: "400px" },
            background: "rgba(59, 130, 246, 0.1)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          px: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
        }}
      >
        {/* Core Team Section */}
        <TeamSection
          title="The Core-Team"
          members={teamMembers}
          description="Meet the passionate innovators driving Orange Dynasty (SIGN) to redefine Web3 engagement."
        />

        {/* The OGs Section */}
        <TeamSection
          title="The OGs"
          members={ogMembers}
          description="Our original supporters and community champions who have been with us since the beginning."
        />
      </Box>
    </Box>
  );
};

export default SignTeam;