"use client";
import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { 
  Menu, 
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { scrollY } = useScroll();
  const [navbarBorder, setNavbarBorder] = useState("1px solid rgba(249, 115, 22, 0.3)");
  const [navbarShadow, setNavbarShadow] = useState("none");

  // Define constants for reused styles with orange theme
  const PRIMARY_GRADIENT = "linear-gradient(135deg, #f97316 0%, #ff8c00 50%, #ea580c 100%)";
  const DARK_GRADIENT = "linear-gradient(135deg, #000000 0%, #0D1117 30%, #1a1a1a 70%, #000000 100%)";
  const ORANGE_GLOW = "0 0 20px rgba(249, 115, 22, 0.5), 0 0 40px rgba(249, 115, 22, 0.3), 0 0 80px rgba(249, 115, 22, 0.1)";
  const ORANGE_SHADOW = "0 4px 16px rgba(249, 115, 22, 0.25)";

  const BUTTON_STYLES = {
    background: PRIMARY_GRADIENT,
    border: "1px solid #f97316",
    color: "#000000",
    padding: "6px 14px", // Reduced from 12px 24px
    borderRadius: "8px", // Reduced from 12px
    fontSize: "13px", // Reduced from 16px
    fontWeight: "600", // Reduced from 700
    cursor: "pointer",
    boxShadow: ORANGE_SHADOW,
    transition: "all 0.3s ease",
    textTransform: "none",
    fontFamily: "'Montserrat', sans-serif",
    minHeight: "32px", // Set explicit height
    "&:hover": {
      transform: "scale(1.05) translateY(-1px)", // Reduced translateY
      background: "linear-gradient(135deg, #f97316 0%, #ff7400 100%)",
      boxShadow: ORANGE_GLOW,
      border: "1px solid #f97316",
    },
  };

  const NAV_BUTTON_STYLES = {
    background: "rgba(249, 115, 22, 0.1)",
    border: "1px solid rgba(249, 115, 22, 0.3)",
    color: "#f97316",
    padding: "6px 12px", // Reduced from 8px 16px
    borderRadius: "6px", // Reduced from 8px
    fontSize: "12px", // Reduced from 14px
    fontWeight: "500", // Reduced from 600
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "none",
    fontFamily: "'Montserrat', sans-serif",
    textDecoration: "none",
    display: "inline-block",
    minHeight: "28px", // Set explicit height
    "&:hover": {
      background: "rgba(249, 115, 22, 0.2)",
      border: "1px solid #f97316",
      boxShadow: "0 2px 8px rgba(249, 115, 22, 0.2)", // Reduced shadow
    },
  };

  const SIGN_UP_BUTTON_STYLES = {
    background: "rgba(249, 115, 22, 0.1)",
    border: "1px solid rgba(249, 115, 22, 0.3)",
    color: "#f97316",
    padding: "6px 12px", // Reduced from 8px 16px
    borderRadius: "6px", // Reduced from 8px
    fontSize: "12px", // Reduced from 14px
    fontWeight: "500", // Reduced from 600
    cursor: "pointer",
    transition: "all 0.3s ease",
    textTransform: "none",
    fontFamily: "'Montserrat', sans-serif",
    display: "flex",
    alignItems: "center",
    gap: "6px", // Reduced from 8px
    minHeight: "28px", // Set explicit height
    "&:hover": {
      background: "rgba(249, 115, 22, 0.2)",
      border: "1px solid #f97316",
      boxShadow: "0 2px 8px rgba(249, 115, 22, 0.2)", // Reduced shadow
    },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setNavbarBorder("1px solid rgba(249, 115, 22, 0.5)");
      setNavbarShadow(ORANGE_GLOW);
    } else {
      setNavbarBorder("1px solid rgba(249, 115, 22, 0.3)");
      setNavbarShadow("none");
    }
  });

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Claim airdrop", href: "https://airdrop.sign.global", type: "external" },
    { label: "Signees", href: "/signees", type: "route" },
    { label: "Get signed", href: "http://sign.global/orange-dynasty", type: "external" },
    { label: "Sign-team", href: "/sign-team", type: "route" },
  ];

  // Animation variants for mobile menu items
  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const drawer = (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        width: "280px",
        height: "100vh",
        background: DARK_GRADIENT,
        padding: "20px", // Reduced from 24px
        display: "flex",
        flexDirection: "column",
        gap: "14px", // Reduced from 16px
        borderLeft: "2px solid #f97316",
        backdropFilter: "blur(20px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5, // Reduced from 2
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Box
            component="img"
            src="/CS1.jpeg"
            alt="Sign-Onboarder Logo"
            sx={{
              width: 36, // Reduced from 48
              height: 36, // Reduced from 48
              borderRadius: "8px", // Reduced from 12px
              objectFit: "cover",
              boxShadow: ORANGE_SHADOW,
              border: "2px solid rgba(249, 115, 22, 0.3)",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1.2rem", // Reduced from 1.5rem
              fontWeight: "bold",
              background: PRIMARY_GRADIENT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
            }}
          >
            SIGN-ONBOARDER
          </Typography>
        </Box>
      </motion.div>

      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
          >
            <ListItem disablePadding sx={{ mb: 0.8 }}> {/* Reduced margin */}
              <Typography
                component={item.type === "route" ? Link : "a"}
                to={item.type === "route" ? item.href : undefined}
                href={item.type !== "route" ? item.href : undefined}
                target={item.type === "external" ? "_blank" : undefined}
                rel={item.type === "external" ? "noopener noreferrer" : undefined}
                sx={{
                  display: "block",
                  width: "100%",
                  color: "#ffffff",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.95rem", // Reduced from 1.125rem
                  fontWeight: "medium",
                  px: 2,
                  py: 1.2, // Reduced from 1.5
                  borderRadius: "6px", // Reduced from 8px
                  background: "rgba(249, 115, 22, 0.1)",
                  border: "1px solid rgba(249, 115, 22, 0.2)",
                  "&:hover": {
                    color: "#f97316",
                    background: "rgba(249, 115, 22, 0.2)",
                    border: "1px solid #f97316",
                    transform: "translateX(6px)", // Reduced from 8px
                    boxShadow: "0 2px 8px rgba(249, 115, 22, 0.2)", // Reduced shadow
                  },
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Typography>
            </ListItem>
          </motion.div>
        ))}
      </List>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Box sx={{ px: 1.5, pt: 1.5 }}> {/* Reduced padding */}
          <Button
            component="a"
            href="https://x.com/signonboarder"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ...BUTTON_STYLES, width: "100%" }}
          >
            Join us
          </Button>
        </Box>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      animate={{
        background: "rgba(0, 0, 0, 0.95)",
        borderBottom: navbarBorder,
        boxShadow: navbarShadow,
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: "blur(16px)",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 1, sm: 2.5, md: 4, lg: 8 }, // Much smaller mobile padding
          py: { xs: 0.5, sm: 0.8, md: 1.2 }, // Much smaller mobile padding
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "48px", // Set explicit min height for consistency
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }} // Reduced from 1.05
            whileTap={{ scale: 0.97 }} // Reduced from 0.95
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5, // Reduced from 2
              }}
            >
              <Box
                component="img"
                src="/CS1.jpeg"
                alt="Sign-Onboarder Logo"
                sx={{
                  width: 32, // Reduced from 40
                  height: 32, // Reduced from 40
                  borderRadius: "6px", // Reduced from 8px
                  objectFit: "cover",
                  boxShadow: "0 4px 16px rgba(249, 115, 22, 0.25)", // Reduced shadow
                  border: "2px solid rgba(249, 115, 22, 0.3)",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.1rem", // Reduced from 1.3rem
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #f97316 0%, #ff8c00 50%, #ea580c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
                  "&:hover": {
                    transform: "scale(1.03)", // Reduced from 1.05
                  },
                }}
              >
                SIGN-ONBOARDER
              </Typography>
            </Box>
          </motion.div>

          {/* Desktop Navigation */}
          {isDesktop ? (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                background: "rgba(249, 115, 22, 0.1)",
                border: "1px solid rgba(249, 115, 22, 0.3)",
                borderRadius: "8px", // Reduced from 12px
                padding: "6px", // Reduced from 8px
                boxShadow: "0 2px 8px rgba(249, 115, 22, 0.2)", // Reduced shadow
                gap: 0.8, // Reduced from 1
              }}
            >
              {/* Main Navigation Items */}
              <Box sx={{ display: "flex", gap: "6px", mr: 1.5 }}> {/* Reduced gaps */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.03 }} // Reduced from 1.05
                    whileTap={{ scale: 0.97 }} // Reduced from 0.95
                  >
                    <Typography
                      component={item.type === "route" ? Link : "a"}
                      to={item.type === "route" ? item.href : undefined}
                      href={item.type !== "route" ? item.href : undefined}
                      target={item.type === "external" ? "_blank" : undefined}
                      rel={item.type === "external" ? "noopener noreferrer" : undefined}
                      sx={NAV_BUTTON_STYLES}
                    >
                      {item.label}
                    </Typography>
                  </motion.div>
                ))}
              </Box>

              {/* Join Us Button */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  component="a"
                  href="https://x.com/signonboarder"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={BUTTON_STYLES}
                >
                  Join us
                </Button>
              </motion.div>
            </Box>
          ) : (
            /* Mobile Menu Button */
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                onClick={handleMobileMenuToggle}
                sx={{
                  color: "#f97316",
                  p: 0.8, // Reduced from 1
                  borderRadius: "6px", // Reduced from 8px
                  border: "1px solid rgba(249, 115, 22, 0.3)",
                  width: "36px", // Set explicit size
                  height: "36px", // Set explicit size
                  "&:hover": {
                    bgcolor: "rgba(249, 115, 22, 0.1)",
                    transform: "scale(1.08)", // Reduced from 1.1
                    boxShadow: "0 2px 8px rgba(249, 115, 22, 0.2)", // Reduced shadow
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />} {/* Reduced icon size */}
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleMobileMenuToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "280px",
                background: "transparent",
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;