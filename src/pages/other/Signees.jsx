"use client"

import { motion } from "framer-motion"
import { Box, Typography, Grid, styled, Button } from "@mui/material"
import TwitterIcon from "@mui/icons-material/Twitter"
import CheckCircle from "@mui/icons-material/CheckCircle"
import PersonAdd from "@mui/icons-material/PersonAdd"

// Styled Components
const SigneeCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000",
  borderRadius: "8px",
  padding: "12px",
  textAlign: "center",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "220px",
  border: "1px solid #f97316",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0px 6px 16px rgba(249, 115, 22, 0.3)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
    height: "200px",
  },
}))

const SigneeImage = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  margin: "0 auto 8px auto",
  overflow: "hidden",
  border: "2px solid #f97316",
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
    width: "45px",
    height: "45px",
    margin: "0 auto 6px auto",
  },
}))

const StatusLabel = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "24px",
  backgroundColor: "#e65100",
  color: "#ffffff",
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontSize: "0.6rem",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px",
  [theme.breakpoints.down("sm")]: {
    width: "55px",
    height: "22px",
    fontSize: "0.55rem",
  },
}))

const FollowButton = styled(Button)(({ theme }) => ({
  width: "60px",
  height: "24px",
  backgroundColor: "#000000",
  color: "#ffffff",
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  fontSize: "0.6rem",
  textTransform: "none",
  borderRadius: "4px",
  border: "1px solid #f97316",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  gap: "2px",
  minWidth: "60px",
  "&:hover": {
    backgroundColor: "#f97316",
    transform: "scale(1.05)",
    borderColor: "#f97316",
  },
  [theme.breakpoints.down("sm")]: {
    width: "55px",
    height: "22px",
    fontSize: "0.55rem",
  },
}))

const Signees = () => {
  const signees = [
    {
      name: "Mackaddy",
      image: "/Sign1.jpeg",
      twitter: "https://x.com/@UniqueKhaddy_0X",
    },
    {
      name: "Favour",
      image: "/Sign2.jpeg",
      twitter: "https://x.com/@favour46069",
    },
    {
      name: "Dolapo",
      image: "/Team2.jpeg",
      twitter: "https://x.com/@D0L4PO_",
    },
    {
      name: "Joe Boy",
      image: "/Sign3.jpeg",
      twitter: "https://x.com/@vigho4u",
    },
    {
      name: "Hey Amari",
      image: "/Sign4.jpeg",
      twitter: "https://x.com/@Amari_metax",
    },
    {
      name: "Roffysayo",
      image: "/Team8.jpg",
      twitter: "https://x.com/@roffysayo1",
    },
    {
      name: "D Moore",
      image: "/Team4.jpeg",
      twitter: "https://x.com/@benz_urch01",
    },
    {
      name: "CalyShangy",
      image: "/Sign5.jpeg",
      twitter: "https://x.com/@CalyShangi001",
    },
    {
      name: "Walliyullah",
      image: "/Sign6.jpg",
      twitter: "https://x.com/@WaliyullahAremu",
    },
    {
      name: "Engr Virus",
      image: "/Sign7.jpg",
      twitter: "https://x.com/@Engrvirus1",
    },
    {
      name: "LoveLambo",
      image: "/Sign8.jpg",
      twitter: "https://x.com/@lovelambogpt",
    },
    {
      name: "Gabby",
      image: "/Sign9.jpg",
      twitter: "https://x.com/@gabriel_nd70091",
    },
    {
      name: "Realdiamond",
      image: "/Sign10.jpg",
      twitter: "https://x.com/@realdiamond689",
    },
    {
      name: "BlackBirD",
      image: "/Sign11.jpg",
      twitter: "https://x.com/@signblackbird",
    },
    {
      name: "Oxriel",
      image: "/Sign12.jpg",
      twitter: "https://x.com/@0x_riel5",
    },
    {
      name: "TAwaii",
      image: "/Sign13.jpg",
      twitter: "https://x.com/@crypto_spraise",
    },
    {
      name: "Solojay",
      image: "/Sign14.jpg",
      twitter: "https://x.com/@SolojayCreation",
    },
    {
      name: "Black Dhee",
      image: "/Team11.jpg",
      twitter: "https://x.com/@Da_Blackduchess",
    },
    {
      name: "Treasure",
      image: "/Sign15.jpg",
      twitter: "https://x.com/@treasure77491",
    },
    {
      name: "Emerald's Gurl",
      image: "/Team9.jpg",
      twitter: "https://x.com/@Hotboxofchoco",
    },
    {
      name: "SIGN VDM",
      image: "/Sign16.jpg",
      twitter: "https://x.com/@Drop_wizard",
    },
    {
      name: "Triumph",
      image: "/Sign17.jpg",
      twitter: "https://x.com/@web3triumph",
    },
    {
      name: "Em-Dee-Bee",
      image: "/Sign18.jpg",
      twitter: "https://x.com/@Mcubevisions",
    },
    {
      name: "RITA Boogas",
      image: "/Sign19.jpg",
      twitter: "https://x.com/@Reall_thaa",
    },
    {
      name: "Peace",
      image: "/Sign20.jpg",
      twitter: "https://x.com/@peace_oluwat",
    },
    {
      name: "hustler9figures",
      image: "/Sign21.jpg",
      twitter: "https://x.com/@hustler9figures",
    },
    {
      name: "Mimahh",
      image: "/Sign22.jpg",
      twitter: "https://x.com/@jemimah_bulus",
    },
    {
      name: "Terminator",
      image: "/Sign23.jpg",
      twitter: "https://x.com/@Terminator6047",
    },
    {
      name: "Zealous",
      image: "/Sign24.jpg",
      twitter: "https://x.com/@rollandosilva7",
    },
    {
      name: "Yin",
      image: "/Sign25.jpg",
      twitter: "https://x.com/@alphanode_sol",
    },
    {
      name: "Trillijay ₿",
      image: "/Sign26.jpg",
      twitter: "https://x.com/@adenolajamiu2",
    },
    {
      name: "Wizzkilly",
      image: "/Sign27.jpg",
      twitter: "https://x.com/@wizzkilly",
    },
    {
      name: "Welbina",
      image: "/Sign28.jpg",
      twitter: "https://x.com/@welbina10",
    },
  ]

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.06 },
    }),
  }

  return (
    <Box
      sx={{
        background: "#000000",
        position: "relative",
        overflow: "hidden",
        padding: { xs: "20px 0", md: "30px 0" },
        width: "100%",
        minHeight: "100vh", // Ensure full screen height
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

      {/* Background Gradient Circles - Full Screen Coverage */}
      <Box sx={{ position: "absolute", inset: 0 }}>
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: { xs: "120px", md: "200px" },
            height: { xs: "120px", md: "200px" },
            background: "rgba(168, 85, 247, 0.2)",
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "pulse 3s infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: { xs: "150px", md: "250px" },
            height: { xs: "150px", md: "250px" },
            background: "rgba(236, 72, 153, 0.2)",
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "pulse 3s infinite 1s",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "200px", md: "300px" },
            height: { xs: "200px", md: "300px" },
            background: "rgba(59, 130, 246, 0.1)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
      </Box>

      {/* Full Width Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          height: "100%",
          px: { xs: 2, sm: 3, md: 4 }, // Consistent padding for full screen
        }}
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Inter, sans-serif",
              color: "#ffffff",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
              fontWeight: 700,
              mb: { xs: 1, md: 2 },
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            Our Signees
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Inter, sans-serif",
              color: "#d1d5db",
              maxWidth: "600px",
              margin: { xs: "0 auto 30px auto", md: "0 auto 40px auto" },
              textAlign: "center",
              lineHeight: 1.6,
              fontSize: { xs: "0.9rem", md: "1rem", lg: "1.1rem" },
              px: { xs: 2, sm: 0 },
            }}
          >
            Meet the talented individuals we've spotlighted and onboarded to our community.
          </Typography>
        </motion.div>

        {/* Full Width Grid - Perfect Screen Balance */}
        <Grid
          container
          spacing={{ xs: 2, sm: 2.5, md: 3, lg: 3.5 }}
          sx={{
            width: "100%",
            margin: 0,
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {signees.map((signee, index) => (
            <Grid
              item
              xs={6} // 2 cards per row on mobile
              sm={4} // 3 cards per row on small tablets
              md={3} // 4 cards per row on medium screens
              lg={2.4} // 5 cards per row on large screens
              xl={2} // 6 cards per row on extra large screens
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
              }}
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.02 }}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <SigneeCard>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <SigneeImage>
                      <img src={signee.image || "/placeholder.svg"} alt={`${signee.name}'s portrait`} />
                    </SigneeImage>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                        mb: 0.5,
                        lineHeight: 1.2,
                        textAlign: "center",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "100%",
                      }}
                    >
                      {signee.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "6px",
                      mt: "auto",
                      width: "100%",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: "4px", justifyContent: "center" }}>
                      <StatusLabel aria-label={`${signee.name} is signed`}>
                        <CheckCircle sx={{ fontSize: "10px" }} />
                        Signed
                      </StatusLabel>
                      <StatusLabel aria-label={`${signee.name} is onboarded`}>
                        <PersonAdd sx={{ fontSize: "10px" }} />
                        Onboarded
                      </StatusLabel>
                    </Box>
                    <FollowButton
                      href={signee.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow ${signee.name} on Twitter`}
                      startIcon={<TwitterIcon sx={{ fontSize: "10px" }} />}
                    >
                      Follow
                    </FollowButton>
                  </Box>
                </SigneeCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Signees