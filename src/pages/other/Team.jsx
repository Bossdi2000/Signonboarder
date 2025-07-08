"use client";
import { motion } from "framer-motion";
import { Box, Typography, Grid, styled, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

// Styled Components
const TeamMemberCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000",
  borderRadius: "10px", // Further reduced from 12px
  padding: "14px", // Reduced from 18px
  textAlign: "center",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)", // Softer shadow
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "240px", // Reduced from 280px (original 340px)
  maxWidth: "260px", // Reduced from 300px (original 360px)
  border: "1px solid #f97316", // Thinner border from 2px
  "&:hover": {
    transform: "translateY(-4px)", // Further reduced from -6px
    boxShadow: "0px 8px 18px rgba(249, 115, 22, 0.4)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px", // Reduced from 14px
    height: "200px", // Reduced from 240px (original 300px)
    maxWidth: "240px", // Reduced from 280px (original 320px)
  },
}));

const TeamMemberImage = styled(Box)(({ theme }) => ({
  width: "80px", // Reduced from 100px (original 120px)
  height: "80px", // Reduced from 100px (original 120px)
  borderRadius: "50%",
  margin: "0 auto 8px auto", // Reduced from 12px
  overflow: "hidden",
  border: "1px solid #f97316", // Thinner border from 2px
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
    width: "60px", // Reduced from 80px (original 100px)
    height: "60px", // Reduced from 80px (original 100px)
    margin: "0 auto 6px auto", // Reduced from 8px
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  width: "32px", // Reduced from 40px (original 48px)
  height: "32px", // Reduced from 40px (original 48px)
  backgroundColor: "#e65100",
  color: "#ffffff",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "#f97316",
    color: "#ffffff",
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "28px", // Reduced from 36px (original 44px)
    height: "28px", // Reduced from 36px (original 44px)
  },
}));

const Team = () => {
  const teamMembers = [
    {
      name: "Bonakesh",
      role: "SignOnboarder Founder",
      image: "/Team7.jpeg",
      twitter: "https://x.com/Bonakesh1",
    },
    {
      name: "Big_D",
      role: "SignOnboarder Developer",
      image: "/Team5.jpeg",
      twitter: "https://x.com/_BigDe",
    },
    {
      name: "D Moore",
      role: "SignOnboarder Ambassador",
      image: "/Team4.jpeg",
      twitter: "https://x.com/benz_urch01",
    },
    {
      name: "The OA",
      role: "SignOnboarder Writer",
      image: "/Team3.jpeg",
      twitter: "https://x.com/JamieInspires1",
    },
    {
      name: "DOL4PO",
      role: "SignOnboarder Writer",
      image: "/Team2.jpeg",
      twitter: "https://x.com/DOL4P0_",
    },
    {
      name: "MAALISH",
      role: "SignOnboarder Designer",
      image: "/Team1.jpeg",
      twitter: "https://x.com/itsabi4sure",
    },
    {
      name: "ROFYSAYO",
      role: "SignOnboarder Advocate",
      image: "/Team8.jpg",
      twitter: "https://x.com/roffysayo1",
    },
     {
      name: "Emerald's Gurl",
      role: "SignOnboarder Coordinator",
      image: "/Team9.jpg",
      twitter: "https://x.com/@Hotboxofchoco",
    },
     {
      name: "TABBYTHEBLACK",
      role: "SignOnboarder SupportWarrior",
      image: "/Team10.jpg",
      twitter: "https://x.com/@Tabbyomodudu",
    },
     {
      name: "BLACK DHEE",
      role: "SignOnboarder Content writer",
      image: "/Team11.jpg",
      twitter: "https://x.com/@Da_Blackduchess",
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

  return (
    <Box
      sx={{
        background: "#000000",
        position: "relative",
        overflow: "hidden",
        padding: { xs: "20px 0", md: "30px 0" }, // Further reduced from 30px/40px
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
            top: { xs: "20px", md: "40px" }, // Further adjusted
            left: { xs: "10px", md: "20px" },
            width: { xs: "120px", md: "200px" }, // Further reduced
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
            width: { xs: "240px", md: "400px" }, // Further reduced
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
          px: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }, // Further reduced padding
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
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
              fontSize: { xs: "1.1rem", sm: "1.5rem", md: "1.8rem", lg: "2.5rem" }, // Further reduced
              fontWeight: 700,
              mb: { xs: 1.5, md: 2 }, // Reduced margin
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            Our Team
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              color: "#d1d5db",
              maxWidth: { xs: "100%", md: "500px", lg: "600px" }, // Further reduced
              margin: { xs: "0 auto 16px auto", md: "0 auto 24px auto" }, // Further reduced
              textAlign: "center",
              lineHeight: 1.8,
              fontSize: { xs: "0.8rem", md: "0.9rem", lg: "1rem" }, // Further reduced
              px: { xs: 1, sm: 0 }, // Adjusted for smaller screens
            }}
          >
            Meet the passionate innovators driving Orange Dynasty (SIGN) to redefine Web3 engagement.
          </Typography>
        </motion.div>

        {/* Team Grid */}
        <Grid
          container
          spacing={{ xs: 1.5, sm: 2, md: 2.5 }} // Further reduced spacing
          justifyContent="center"
          sx={{
            maxWidth: { xs: "100%", lg: "1400px", xl: "1600px" }, // Further reduced
            margin: "0 auto",
          }}
        >
          {teamMembers.map((member, index) => (
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
                style={{ width: "100%", maxWidth: "260px", height: "100%" }} // Match maxWidth
              >
                <TeamMemberCard>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flex: 1,
                      justifyContent: "center",
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
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, // Further reduced
                        mb: 0.3, // Reduced margin
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
                        fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.9rem" }, // Further reduced
                        lineHeight: 1.3,
                        textAlign: "center",
                        mb: 0.5, // Reduced margin
                      }}
                    >
                      {member.role}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
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
    </Box>
  );
};

export default Team;