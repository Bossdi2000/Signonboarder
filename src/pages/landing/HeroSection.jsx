"use client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Sparkles, RefreshCw, Maximize2, Download, Star, Zap, Shield, Globe, Users, TrendingUp, Smartphone } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigate
  const introText = "YOU ARE LUCKY TO HAVE DISCOVERED THE SIGNONBOARDER'S PLATFORM";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (index < introText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + introText[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Navigation handlers
  const handleSignItClick = () => {
    navigate('/goals'); // Navigate to goals page
  };

  const handleTeamClick = () => {
    navigate('/team'); // Navigate to team page
  };

  const features = [
    { icon: <Zap size={isMobile ? 18 : 20} />, title: "Lightning Fast", desc: "Instant onboarding" },
    { icon: <Shield size={isMobile ? 18 : 20} />, title: "Secure", desc: "Bank-grade security" },
    { icon: <Globe size={isMobile ? 18 : 20} />, title: "Global", desc: "Worldwide access" },
    { icon: <Users size={isMobile ? 18 : 20} />, title: "Team Ready", desc: "Collaborative tools" },
    { icon: <TrendingUp size={isMobile ? 18 : 20} />, title: "Analytics", desc: "Real-time insights" },
    { icon: <Star size={isMobile ? 18 : 20} />, title: "Premium", desc: "Best-in-class features" },
  ];

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
        boxSizing: "border-box",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        backdropFilter: "blur(16px)",
        overflow: "hidden",
        paddingTop: isMobile ? "140px" : "160px",
        paddingBottom: isMobile ? "80px" : "100px",
      }}
    >
      {/* Grid Background */}
      <div
        style={{
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
              transparent ${isMobile ? '45px' : '65px'}
            ),
            repeating-linear-gradient(90deg, 
              rgba(249, 115, 22, 0.1) 0px, 
              rgba(249, 115, 22, 0.1) 1px, 
              transparent 1px, 
              transparent ${isMobile ? '45px' : '65px'}
            )
          `,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      
      {/* Gradient Circles - Responsive positioning */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        <div
          className="floating-circle-1"
          style={{
            position: "absolute",
            top: isMobile ? "60px" : "80px",
            left: isMobile ? "20px" : "40px",
            width: isMobile ? "200px" : "300px",
            height: isMobile ? "200px" : "300px",
            background: "rgba(168, 85, 247, 0.2)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        <div
          className="floating-circle-2"
          style={{
            position: "absolute",
            bottom: isMobile ? "60px" : "80px",
            right: isMobile ? "20px" : "40px",
            width: isMobile ? "250px" : "400px",
            height: isMobile ? "250px" : "400px",
            background: "rgba(236, 72, 153, 0.2)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "400px" : "600px",
            height: isMobile ? "400px" : "600px",
            background: "rgba(59, 130, 246, 0.1)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Floating Icons - Responsive positioning */}
      <div
        className="floating-icon-1"
        style={{
          position: "absolute",
          top: isMobile ? "140px" : "180px",
          left: isMobile ? "20px" : "80px",
          color: "rgba(255, 255, 255, 0.3)",
          zIndex: 5,
        }}
      >
        <RefreshCw size={isMobile ? 20 : 24} />
      </div>

      <div
        className="floating-icon-2"
        style={{
          position: "absolute",
          top: isMobile ? "160px" : "200px",
          right: isMobile ? "30px" : "120px",
          color: "rgba(255, 255, 255, 0.3)",
          zIndex: 5,
        }}
      >
        <Sparkles size={isMobile ? 18 : 20} />
      </div>

      <div
        className="floating-icon-3"
        style={{
          position: "absolute",
          bottom: isMobile ? "160px" : "220px",
          right: isMobile ? "20px" : "80px",
          color: "rgba(255, 255, 255, 0.3)",
          zIndex: 5,
        }}
      >
        <Maximize2 size={isMobile ? 20 : 22} />
      </div>

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: isMobile ? "95%" : "clamp(600px, 80vw, 1000px)",
          width: "100%",
          padding: isMobile ? "1rem 0.75rem" : "clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1.5rem)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "16px" : "12px",
            alignItems: "center",
            width: "100%",
            opacity: 0,
            animation: "fadeInUp 1s ease-out forwards",
          }}
        >
          {/* Introductory Text with Split Colors */}
          <p
            style={{
              fontSize: isMobile ? "clamp(1.1rem, 4vw, 1.4rem)" : "clamp(1.4rem, 3.4vw, 2.2rem)",
              maxWidth: "95%",
              margin: isMobile ? "0 0 16px 0" : "0 0 20px 0",
              lineHeight: "1.4",
              fontFamily: "'Montserrat', sans-serif",
              fontStyle: "italic",
              fontWeight: "900",
              color: "white",
              animation: "slideInLeft 1s ease-out 0.3s backwards",
            }}
          >
            {displayedText.split("").map((char, i) => (
              <span
                key={i}
                style={{
                  color: i >= 16 ? "#f28c38" : "white",
                  opacity: 0,
                  animation: `fadeIn 0.1s ease-out ${i * 0.05}s forwards`,
                }}
              >
                {char}
              </span>
            ))}
          </p>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: isMobile ? "clamp(1.3rem, 6vw, 2rem)" : "clamp(1.5rem, 5vw, 2.5rem)",
              fontWeight: "600",
              color: "white",
              lineHeight: "1.2",
              margin: isMobile ? "0 0 6px" : "0 0 8px",
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "-0.01em",
              animation: "slideInRight 1s ease-out 0.5s backwards",
            }}
          >
            Show and be SIGNED
          </h1>

          <span
            style={{
              fontSize: isMobile ? "clamp(1.3rem, 6vw, 2rem)" : "clamp(1.5rem, 5vw, 2.5rem)",
              color: "#f28c38",
              fontWeight: "400",
              fontStyle: "italic",
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: "1.2",
              marginBottom: isMobile ? "12px" : "16px",
              display: "block",
              animation: "slideInLeft 1s ease-out 0.7s backwards",
            }}
          >
            Onboarding Made Easy,
          </span>

          {/* Features Grid - More responsive */}
          <div style={{ padding: isMobile ? "20px 0" : "28px 0", animation: "fadeInUp 1s ease-out 0.9s backwards" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile 
                  ? "repeat(2, 1fr)" 
                  : "repeat(3, 1fr)",
                gap: isMobile ? "16px" : "20px",
                maxWidth: isMobile ? "100%" : "700px",
                margin: "0 auto",
                marginBottom: isMobile ? "20px" : "24px",
              }}
            >
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-card"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: isMobile ? "12px" : "16px",
                    padding: isMobile ? "16px 12px" : "20px 16px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    minHeight: isMobile ? "100px" : "120px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    animation: `fadeInUp 0.6s ease-out ${1.1 + idx * 0.1}s forwards`,
                  }}
                >
                  <div
                    className="feature-icon"
                    style={{
                      color: "#f28c38",
                      marginBottom: "8px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 style={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: isMobile ? "0.85rem" : "1rem",
                    marginBottom: "4px",
                    fontFamily: "'Montserrat', sans-serif",
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: isMobile ? "0.72rem" : "0.85rem",
                    fontFamily: "'Montserrat', sans-serif",
                    lineHeight: "1.3",
                  }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons Container - Better mobile layout */}
          <div
            style={{
              paddingTop: isMobile ? "16px" : "20px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "10px" : "12px",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              animation: "fadeInUp 1s ease-out 1.8s backwards",
            }}
          >
            {/* Onboarder Team Button */}
            <button
              onClick={handleTeamClick}
              className="team-button"
              style={{
                position: "relative",
                padding: isMobile ? "10px 16px" : "clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)",
                background: "#f28c38",
                borderRadius: "10px",
                color: "white",
                fontWeight: "600",
                fontSize: isMobile ? "0.85rem" : "clamp(0.8rem, 2vw, 1rem)",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(242, 140, 56, 0.4)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "6px" : "clamp(4px, 1vw, 8px)",
                fontFamily: "'Montserrat', sans-serif",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? "280px" : "clamp(140px, 30vw, 160px)",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
            >
              <span>SignOnboarder Team</span>
              <div className="rotating-icon">
                <Maximize2 size={isMobile ? 14 : 16} />
              </div>
            </button>

            {/* Goals Button */}
            <button
              onClick={handleSignItClick}
              className="goals-button"
              style={{
                position: "relative",
                padding: isMobile ? "10px 16px" : "clamp(8px, 2vw, 12px) clamp(16px, 4vw, 24px)",
                background: "#f28c38",
                borderRadius: "10px",
                color: "white",
                fontWeight: "600",
                fontSize: isMobile ? "0.85rem" : "clamp(0.8rem, 2vw, 1rem)",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(242, 140, 56, 0.4)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "6px" : "clamp(4px, 1vw, 8px)",
                fontFamily: "'Montserrat', sans-serif",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? "280px" : "clamp(100px, 25vw, 120px)",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
            >
              <span>Beginner's Guide</span>
              <div className="rotating-icon">
                <Sparkles size={isMobile ? 14 : 16} />
              </div>
            </button>
          </div>

          {/* SuperApp Download Section - Enhanced with side-by-side buttons */}
          <div
            style={{
              marginTop: isMobile ? "30px" : "40px",
              padding: isMobile ? "24px 20px" : "35px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: isMobile ? "18px" : "24px",
              maxWidth: isMobile ? "100%" : "600px",
              width: "100%",
              animation: "fadeInUp 1s ease-out 2s backwards",
            }}
          >
            <div
              className="smartphone-icon"
              style={{
                color: "#f28c38",
                marginBottom: isMobile ? "16px" : "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Smartphone size={isMobile ? 28 : 32} />
            </div>

            <h2 style={{
              fontSize: isMobile ? "clamp(1.2rem, 5vw, 1.6rem)" : "clamp(1.4rem, 3.5vw, 2rem)",
              fontWeight: "700",
              color: "white",
              marginBottom: isMobile ? "12px" : "16px",
              fontFamily: "'Montserrat', sans-serif",
            }}>
              Get the <span style={{ color: "#f28c38" }}>SuperApp</span>
            </h2>

            <p style={{
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: isMobile ? "24px" : "28px",
              fontSize: isMobile ? "clamp(0.9rem, 3.5vw, 1.1rem)" : "clamp(1rem, 2.2vw, 1.2rem)",
              fontFamily: "'Montserrat', sans-serif",
              lineHeight: "1.6",
            }}>
              Download our powerful mobile app and take your onboarding experience to the next level
            </p>

            {/* App Store Buttons - Now side by side with increased size */}
            <div style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "14px" : "16px",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <a
                href="https://apps.apple.com/app/6747742070"
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-button"
                style={{
                  background: "#000000",
                  color: "white",
                  fontWeight: "600",
                  padding: isMobile ? "14px 20px" : "16px 24px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                  width: isMobile ? "100%" : "auto",
                  minWidth: isMobile ? "280px" : "220px",
                  maxWidth: isMobile ? "320px" : "240px",
                  fontFamily: "'Montserrat', sans-serif",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                  textDecoration: "none",
                }}
              >
                <div style={{
                  background: "white",
                  borderRadius: "8px",
                  padding: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "32px",
                  height: "32px",
                }}>
                  <svg width={isMobile ? "20" : "22"} height={isMobile ? "20" : "22"} viewBox="0 0 24 24" fill="none" style={{ color: "black" }}>
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <div style={{ textAlign: "left", flex: 1 }}>
                  <div style={{ fontSize: isMobile ? "10px" : "11px", color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.2" }}>Download on the</div>
                  <div style={{ fontSize: isMobile ? "14px" : "16px", fontWeight: "bold", lineHeight: "1.2" }}>App Store</div>
                </div>
              </a>

              <a
                href="https://orange.sign.global/app?invite-code=HWHMNYUNB2"
                target="_blank"
                rel="noopener noreferrer"
                className="google-play-button"
                style={{
                  background: "#000000",
                  color: "white",
                  fontWeight: "600",
                  padding: isMobile ? "14px 20px" : "16px 24px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                  width: isMobile ? "100%" : "auto",
                  minWidth: isMobile ? "280px" : "220px",
                  maxWidth: isMobile ? "320px" : "240px",
                  fontFamily: "'Montserrat', sans-serif",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                  textDecoration: "none",
                }}
              >
                <div style={{
                  background: "white",
                  borderRadius: "8px",
                  padding: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "32px",
                  height: "32px",
                }}>
                  <svg width={isMobile ? "20" : "22"} height={isMobile ? "20" : "22"} viewBox="0 0 24 24" fill="none" style={{ color: "black" }}>
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="currentColor"/>
                  </svg>
                </div>
                <div style={{ textAlign: "left", flex: 1 }}>
                  <div style={{ fontSize: isMobile ? "10px" : "11px", color: "rgba(255, 255, 255, 0.7)", lineHeight: "1.2" }}>Get it on</div>
                  <div style={{ fontSize: isMobile ? "14px" : "16px", fontWeight: "bold", lineHeight: "1.2" }}>Google Play</div>
                </div>
              </a>
            </div>

            <div
              className="download-available"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginTop: isMobile ? "24px" : "32px",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              <Download size={isMobile ? 18 : 20} />
              <span style={{ fontSize: isMobile ? "16px" : "18px", fontFamily: "'Montserrat', sans-serif" }}>
                Available now
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .floating-circle-1 {
          animation: pulse 3s infinite;
        }
        
        .floating-circle-2 {
          animation: pulse 3s infinite 1s;
        }
        
        .floating-icon-1 {
          animation: float1 4s ease-in-out infinite;
        }
        
        .floating-icon-2 {
          animation: float2 3s ease-in-out infinite 1s;
        }
        
        .floating-icon-3 {
          animation: float3 5s ease-in-out infinite 2s;
        }
        
        .rotating-icon {
          animation: rotate 2s linear infinite;
        }
        
        .feature-card:hover {
          transform: scale(1.05) translateY(-3px);
          box-shadow: 0 10px 25px rgba(242, 140, 56, 0.15);
        }
        
        .feature-icon {
          animation: iconFloat 2s ease-in-out infinite;
        }
        
        .smartphone-icon {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .download-available {
          animation: fadeInOut 2s ease-in-out infinite;
        }
        
        .team-button:hover, .goals-button:hover, .app-store-button:hover, .google-play-button:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 15px 30px rgba(242, 140, 56, 0.3);
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-5deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(5px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes iconFloat {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;