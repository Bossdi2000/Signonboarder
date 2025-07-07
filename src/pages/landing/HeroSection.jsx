"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Sparkles, RefreshCw, Maximize2 } from "lucide-react"

const HeroSection = () => {
  const navigate = useNavigate()
  const introText = "YOU ARE LUCKY TO HAVE DISCOVERED THE SIGNONBOARDER'S PLATFORM"
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  // Typewriter effect
  useEffect(() => {
    if (index < introText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + introText[index])
        setIndex(index + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [index, introText])

  const handleSignItClick = () => {
    navigate("/goals")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

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
  }

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
        paddingTop: "clamp(100px, 10vh, 120px)",
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
          repeat: Number.POSITIVE_INFINITY,
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
          repeat: Number.POSITIVE_INFINITY,
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
          padding: "clamp(1.5rem, 5vw, 4rem) clamp(0.5rem, 2vw, 3rem)",
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
            gap: "12px",
            alignItems: "flex-start",
          }}
        >
          {/* Introductory Text with Split Colors - Reduced size for mobile */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.2rem, 4.2vw, 2.9rem)", // Reduced from 1.5rem to 1rem for mobile
              maxWidth: "100%",
              margin: "0 0 24px 0",
              lineHeight: "1.3",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: "520",
              textAlign: "center",
              width: "100%",
              padding: "0 8px",
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
              fontSize: "clamp(1.2rem, 6vw, 3rem)",
              fontWeight: "400",
              color: "white",
              lineHeight: "1.1",
              margin: "0 0 8px 0",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              letterSpacing: "-0.02em",
              fontFamily: "'Playfair Display', serif",
              padding: "0 8px",
            }}
          >
            <span>Show and be SIGNED</span>
          </motion.h1>

          <motion.span
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.2rem, 6vw, 3rem)",
              color: "#f28c38",
              fontWeight: "350",
              fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              display: "block",
              marginBottom: "16px",
              padding: "0 8px",
            }}
          >
            Onboarding Made Simple,
          </motion.span>

          {/* Buttons Container */}
          <motion.div
            variants={itemVariants}
            style={{
              paddingTop: "24px",
              display: "flex",
              gap: "12px",
              justifyContent: "flex-start",
              width: "100%",
              flexWrap: "wrap",
              padding: "24px 8px 0",
            }}
          >
            {/* Claim Airdrop Button - Reduced size for mobile */}
            <motion.a
              href="http://airdrop.sign.global"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(242, 140, 56, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative",
                padding: "clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)", // Responsive padding
                background: "#f28c38",
                borderRadius: "10px",
                color: "white",
                fontWeight: "600",
                fontSize: "clamp(0.8rem, 2vw, 1.2rem)", // Reduced from 0.9rem to 0.8rem for mobile
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(242, 140, 56, 0.4)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "clamp(4px, 1vw, 8px)", // Responsive gap
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
                minWidth: "max-content",
                flex: "1 1 auto",
                maxWidth: "clamp(140px, 30vw, 180px)", // Responsive max width
              }}
            >
              <span>Claim airdrop</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Maximize2 size={window.innerWidth < 768 ? 16 : 18} />
              </motion.div>
            </motion.a>

            {/* Goals Button - Reduced size for mobile */}
            <motion.button
              onClick={handleSignItClick}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(242, 140, 56, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative",
                padding: "clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)", // Responsive padding
                background: "#f28c38",
                borderRadius: "10px",
                color: "white",
                fontWeight: "600",
                fontSize: "clamp(0.8rem, 2vw, 1.2rem)", // Reduced from 0.9rem to 0.8rem for mobile
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(242, 140, 56, 0.4)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "clamp(4px, 1vw, 8px)", // Responsive gap
                fontFamily: "'Inter', sans-serif",
                minWidth: "max-content",
                flex: "1 1 auto",
                maxWidth: "clamp(100px, 25vw, 130px)", // Responsive max width
              }}
            >
              <span>Goals</span>
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
  )
}

export default HeroSection
