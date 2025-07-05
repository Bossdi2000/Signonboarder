import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, RefreshCw, Maximize2 } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const introText = "You are lucky to have discovered the signonboarder’s platform";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (index < introText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + introText[index]);
        setIndex(index + 1);
      }, 50); // Reduced from 100ms to 50ms for faster display
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
        marginTop: "20px",
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
          color: "rgba(255, 255, 255, 0.3)", // Corrected from 0.9 to match other icons
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
          padding: "clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)",
          paddingBottom: "40px",
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
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          {/* Introductory Text with Typewriter Effect */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(3.1rem, 4vw, 2.6rem)", // Larger than main heading
              color: "#f97316", // Changed to match Onboarding Made Simple
              maxWidth: "660px",
              margin: "0",
              lineHeight: "1",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: "500",
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
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              fontWeight: "600",
              color: "white",
              lineHeight: "1.2",
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              letterSpacing: "-0.02em",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <span>Show and be SIGNED</span>
          </motion.h1>
          <motion.span
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.8rem, 4.2vw, 3rem)",
              color: "#f97316",
              fontWeight: "500",
              fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
          >
            Onboarding Made Simple,
          </motion.span>

          {/* Subtitle */}
           
          {/* Buttons Container */}
          <motion.div
            variants={itemVariants}
            style={{
              paddingTop: "24px",
              display: "flex",
              gap: "16px",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            {/* Claim Airdrop Button */}
            <motion.a
              href="http://airdrop.sign.global"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative",
                padding: "14px 28px",
                background: "#f97316",
                borderRadius: "10px",
                color: "white",
                fontWeight: "600",
                fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
              }}
            >
              <span>Claim airdrop</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Maximize2 size={18} />
              </motion.div>
            </motion.a>

            {/* Goals Button */}
            <motion.button
              onClick={handleSignItClick}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative",
                padding: "14px 28px",
                background: "#f97316",
                borderRadius: "10px",
                color: "white",
                fontWeight: "600",
                fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span>Goals</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={18} />
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