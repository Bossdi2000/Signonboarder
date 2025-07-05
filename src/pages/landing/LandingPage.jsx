"use client";
import React from "react";
import { Box, Typography, styled } from "@mui/material";
import Navbar from "./Navbar"; // Adjust path
import HeroSection from "./HeroSection"; // Placeholder or actual component
import Features from "./Features";
import CoreTeam from "./CoreTeam"; // Adjust path (or use Team if identical)
import Footer from "./Footer";

// Styled GridBackground (from Footer.jsx)
const GridBackground = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `
    repeating-linear-gradient(0deg, 
      rgba(249, 115, 22, 0.1) 0px, 
      rgba(249, 115, 22, 0.1) 1px, 
      transparent 1px, 
      transparent 65px
    ),
    repeating-linear-gradient(90deg, 
      rgba(249, 115, 22, 0.1) 0px, 
      rgba(249, 115, 22, 0.1) 1px, 
      transparent 1px, 
      transparent 65px
    )
  `,
  zIndex: 1,
  pointerEvents: "none",
});

// Background Wrapper Component
const BackgroundWrapper = ({ children }) => (
  <Box
    sx={{
      backgroundColor: "rgba(0, 0, 0, 0.95)",
      backdropFilter: "blur(16px)",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
      width: "100vw",
    }}
  >
    <GridBackground />
    {/* Gradient Circles */}
    <Box sx={{ position: "absolute", inset: 0, zIndex: 1 }}>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "40px", md: "80px" },
          left: { xs: "20px", md: "40px" },
          width: { xs: "200px", md: "300px" },
          height: { xs: "200px", md: "300px" },
          background: "rgba(168, 85, 247, 0.2)",
          borderRadius: "50%",
          filter: "blur(60px)",
          animation: "pulse 3s infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "40px", md: "80px" },
          right: { xs: "20px", md: "40px" },
          width: { xs: "250px", md: "400px" },
          height: { xs: "250px", md: "400px" },
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
          width: { xs: "400px", md: "600px" },
          height: { xs: "400px", md: "600px" },
          background: "rgba(59, 130, 246, 0.1)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
    </Box>
    <Box sx={{ position: "relative", zIndex: 3 }}>{children}</Box>
    <style jsx>{`
      @keyframes pulse {
        0%, 100% {
          opacity: 0.4;
        }
        50% {
          opacity: 0.8;
        }
      }
    `}</style>
  </Box>
);

const LandingPage = () => {
  return (
    <>
      <Navbar /> {/* Moved outside BackgroundWrapper */}
      <BackgroundWrapper>
        <Box
          sx={{
            pt: { xs: "80px", md: "100px" }, // Offset for Navbar height
            width: "100%",
            px: { xs: 2, md: 4 },
            py: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <HeroSection />
          <Features />
          <CoreTeam />
          <Footer />
        </Box>
      </BackgroundWrapper>
    </>
  );
};

export default LandingPage;