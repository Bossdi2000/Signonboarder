import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, RefreshCw, Maximize2 } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const introText = "YOU ARE LUCKY TO HAVE DISCOVERED THE SIGNONBOARDER'S PLATFORM";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (index < introText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + introText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, introText]);

  const handleSignItClick = () => {
    navigate("/goals");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "clamp(100px, 10vh, 120px)", // Added to account for fixed Navbar
      }}
    >
      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "140px",
          left: "80px",
          color: "rgba(255, 255, 255, 0.3)",
          zIndex: 1,
        }}
      >
        <RefreshCw size={24} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          top: "180px",
          right: "120px",
          color: "rgba(255, 255, 255, 0.3)",
          zIndex: 1,
        }}
      >
        <Sparkles size={20} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          position: "absolute",
          bottom: "200px",
          right: "80px",
          color: "rgba(255, 255, 255, 0.3)",
          zIndex: 1,
        }}
      >
        <Maximize2 size={22} />
      </motion.div>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          width: "100%",
          padding: "clamp(1.5rem, 5vw, 4rem) clamp(0.5rem, 2vw, 3rem)", // Optimized padding for mobile
          paddingBottom: "40px", // Increased bottom padding
          textAlign: "left",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px", // Reduced from 16px
            alignItems: "flex-start",
          }}
        >
          {/* Introductory Text with Typewriter Effect - Now Centered */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(2rem, 6vw, 3.2rem)", // Significantly increased font size
              color: "white", // Changed to white as requested
              maxWidth: "100%", // Full width to center properly
              margin: "0 0 24px 0", // Added bottom margin for spacing
              lineHeight: "1.3", // Slightly increased line height for better readability
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: "530",
              textAlign: "center", // Center the text
              width: "100%", // Ensure full width
              padding: "0 8px", // Added padding for small screens
            }}
          >
            <AnimatePresence>
              {displayedText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </AnimatePresence>
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.2rem, 6vw, 3rem)", // Significantly increased font size
              fontWeight: "350",
              color: "white",
              lineHeight: "1.1", // Tighter line height for large text
              margin: "0 0 8px 0", // Added margin for spacing
              display: "flex",
              flexWrap: "wrap",
              gap: "8px", // Increased gap
              letterSpacing: "-0.02em",
              fontFamily: "'Playfair Display', serif",
              padding: "0 8px", // Added padding for small screens
            }}
          >
            <span>Show and be SIGNED</span>
          </motion.h1>
          <motion.span
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.2rem, 6vw, 3rem)", // Significantly increased font size
              color: "#f28c38", // Match intro text color
              fontWeight: "350",
              fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
              lineHeight: "1.1", // Tighter line height for large text
              letterSpacing: "-0.02em",
              display: "block",
              marginBottom: "16px", // Added margin for spacing
              padding: "0 8px", // Added padding for small screens
            }}
          >
            Onboarding Made Simple,
          </motion.span>

          {/* Buttons Container */}
          <motion.div
            variants={itemVariants}
            style={{
              paddingTop: "24px", // Increased padding
              display: "flex",
              gap: "16px", // Increased gap
              justifyContent: "flex-start",
              width: "100%",
              flexWrap: "wrap", // Allow wrapping on small screens
              padding: "24px 8px 0", // Added horizontal padding
            }}
          >
            {/* Claim Airdrop Button */}
            <motion.a
              href="http://airdrop.sign.global"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(242, 140, 56, 0.3)", // Updated to match new color
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative",
                padding: "16px 32px", // Increased padding for better touch targets
                background: "#f28c38", // Updated color
                borderRadius: "12px", // Increased border radius
                color: "white",
                fontWeight: "600",
                fontSize: "clamp(1.1rem, 3vw, 1.4rem)", // Increased font size with better mobile scaling
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(242, 140, 56, 0.4)", // Updated color
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "10px", // Increased gap
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
                minWidth: "max-content", // Prevent text wrapping
                flex: "1 1 auto", // Responsive flex
                maxWidth: "280px", // Max width for large screens
              }}
            >
              <span>Claim airdrop</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Maximize2 size={20} /> {/* Increased icon size */}
              </motion.div>
            </motion.a>

            {/* Goals Button */}
            <motion.button
              onClick={handleSignItClick}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(242, 140, 56, 0.3)", // Updated color
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative",
                padding: "16px 32px", // Increased padding for better touch targets
                background: "#f28c38", // Updated color
                borderRadius: "12px", // Increased border radius
                color: "white",
                fontWeight: "600",
                fontSize: "clamp(1.1rem, 3vw, 1.4rem)", // Increased font size with better mobile scaling
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(242, 140, 56, 0.4)", // Updated color
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "10px", // Increased gap
                fontFamily: "'Inter', sans-serif",
                minWidth: "max-content", // Prevent text wrapping
                flex: "1 1 auto", // Responsive flex
                maxWidth: "200px", // Max width for large screens
              }}
            >
              <span>Goals</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={20} /> {/* Increased icon size */}
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;