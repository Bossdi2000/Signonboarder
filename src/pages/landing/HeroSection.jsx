"use client";
import { useState, useEffect } from "react";
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

  const handleTeamClick = () => {
    navigate("/team");
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
        padding: 0, // Removed paddingTop
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
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
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "clamp(100px, 10vh, 140px)",
          left: "clamp(40px, 5vw, 80px)",
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
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          top: "clamp(120px, 12vh, 180px)",
          right: "clamp(60px, 7vw, 120px)",
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
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          position: "absolute",
          bottom: "clamp(120px, 12vh, 200px)",
          right: "clamp(40px, 5vw, 80px)",
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
          maxWidth: "clamp(600px, 80vw, 1000px)",
          width: "100%",
          padding: "clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1.5rem)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Introductory Text with Split Colors */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.4rem, 3.4vw, 2.2rem)",
              maxWidth: "90%",
              margin: "0 0 20px 0",
              lineHeight: "1.4",
              fontFamily: "'Montserrat', sans-serif",
              fontStyle: "italic",
              fontWeight: "900",
              color: "white",
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
                  style={{
                    color: i >= 16 ? "#f28c38" : "white",
                  }}
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
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              fontWeight: "600",
              color: "white",
              lineHeight: "1.2",
              margin: "0 0 8px",
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            Show and be SIGNED
          </motion.h1>

          <motion.span
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              color: "#f28c38",
              fontWeight: "400",
              fontStyle: "italic",
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: "1.2",
              marginBottom: "16px",
              display: "block",
            }}
          >
            Onboarding Made Easy,
          </motion.span>

          {/* Buttons Container */}
          <motion.div
            variants={itemVariants}
            style={{
              paddingTop: "20px",
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {/* Onboarder Team Button */}
            <motion.button
              onClick={handleTeamClick}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(242, 140, 56, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative",
                padding: "clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)",
                background: "#f28c38",
                borderRadius: "10px",
                color: "white",
                fontWeight: "600",
                fontSize: "clamp(0.8rem, 2vw, 1rem)",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(242, 140, 56, 0.4)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "clamp(4px, 1vw, 8px)",
                fontFamily: "'Montserrat', sans-serif",
                minWidth: "max-content",
                flex: "1 1 auto",
                maxWidth: "clamp(140px, 30vw, 160px)",
              }}
            >
              <span>Onboarder Team</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Maximize2 size={window.innerWidth < 768 ? 16 : 18} />
              </motion.div>
            </motion.button>

            {/* Goals Button */}
            <motion.button
              onClick={handleSignItClick}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(242, 140, 56, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative",
                padding: "clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)",
                background: "#f28c38",
                borderRadius: "10px",
                color: "white",
                fontWeight: "600",
                fontSize: "clamp(0.8rem, 2vw, 1rem)",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(242, 140, 56, 0.4)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "clamp(4px, 1vw, 8px)",
                fontFamily: "'Montserrat', sans-serif",
                minWidth: "max-content",
                flex: "1 1 auto",
                maxWidth: "clamp(100px, 25vw, 120px)",
              }}
            >
              <span>Sign's Guard</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles size={window.innerWidth < 768 ? 16 : 18} />
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