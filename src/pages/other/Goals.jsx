"use client"

import React, { useState, useRef } from "react"
import { Box, styled } from "@mui/material"
import { Link } from "react-router-dom"

// Styled GridBackground Component
const GridBackground = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `
    repeating-linear-gradient(0deg, rgba(249, 115, 22, 0.1) 0px, rgba(249, 115, 22, 0.1) 1px, transparent 1px, transparent 65px),
    repeating-linear-gradient(90deg, rgba(249, 115, 22, 0.1) 0px, rgba(249, 115, 22, 0.1) 1px, transparent 1px, transparent 65px)
  `,
  zIndex: 1,
  pointerEvents: "none",
})

// Background Wrapper Component
const BackgroundWrapper = ({ children }) => (
  <Box
    sx={{
      position: "relative",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
      overflow: "hidden",
    }}
  >
    <GridBackground />
    {/* Gradient Circles */}
    <Box
      sx={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(255, 102, 0, 0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(40px)",
        zIndex: 1,
      }}
    />
    <Box
      sx={{
        position: "absolute",
        bottom: "10%",
        right: "5%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(255, 153, 51, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(50px)",
        zIndex: 1,
      }}
    />
    {children}
  </Box>
)

const Goals = () => {
  // State to track show more/less for each container
  const [showMore, setShowMore] = useState({
    container1: false,
    container2: false,
    container3: false,
  })

  // Refs for each container to control scrolling
  const container1Ref = useRef(null)
  const container2Ref = useRef(null)
  const container3Ref = useRef(null)

  // Hover states for buttons
  const [hoveredButton1, setHoveredButton1] = useState(null)
  const [hoveredButton2, setHoveredButton2] = useState(null)
  const [hoveredButton3, setHoveredButton3] = useState(null)

  const toggleShowMore = (container) => {
    setShowMore((prev) => {
      const newState = { ...prev, [container]: !prev[container] }
      // Scroll to top for both Show More and Show Less
      const refMap = {
        container1: container1Ref,
        container2: container2Ref,
        container3: container3Ref,
      }
      refMap[container].current.scrollTo(0, 0)
      return newState
    })
  }

  // Character limit for truncated text (excluding heading)
  const charLimit = 200

  // Function to extract text from JSX content
  const extractText = (children) => {
    if (typeof children === "string") return children
    if (Array.isArray(children)) {
      return children.map(extractText).join("")
    }
    if (React.isValidElement(children)) {
      return extractText(children.props.children)
    }
    return ""
  }

  // Function to truncate text at the last complete word within charLimit
  const truncateText = (text, limit) => {
    if (text.length <= limit) return text
    const subString = text.slice(0, limit)
    const lastSpaceIndex = subString.lastIndexOf(" ")
    return lastSpaceIndex > 0 ? subString.slice(0, lastSpaceIndex) + "..." : subString + "..."
  }

  const pageStyle = {
    minHeight: "100vh",
    width: "100vw",
    margin: 0,
    padding: 0,
    position: "relative",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "clamp(100px, 10vh, 120px)",
  }

  const containerStyle = {
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
    padding: "clamp(20px, 5vw, 40px) clamp(10px, 3vw, 20px)",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "clamp(20px, 4vw, 40px)",
  }

  const titleStyle = {
    textAlign: "center",
    fontSize: "clamp(2rem, 6vw, 3.5rem)",
    fontWeight: "bold",
    marginBottom: "clamp(16px, 3vw, 32px)",
    background: "linear-gradient(45deg, #ff6600, #ff9933)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }

  const contentContainerStyle = {
    background: "linear-gradient(135deg, rgba(255, 102, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)",
    border: "2px solid #ff6600",
    borderRadius: "clamp(12px, 2vw, 20px)",
    padding: "clamp(16px, 3vw, 32px)",
    boxShadow: "0 10px 30px rgba(255, 102, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "auto",
    width: "100%",
    maxWidth: "clamp(300px, 80vw, 800px)",
    minHeight: "clamp(400px, 50vh, 600px)",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2,
  }

  const contentTextStyle = {
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    lineHeight: 1.8,
    marginBottom: "clamp(16px, 3vw, 32px)",
    color: "#f0f0f0",
    textAlign: "justify",
  }

  const buttonsContainerStyle = {
    display: "flex",
    gap: "clamp(10px, 2vw, 20px)",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "auto",
  }

  const buttonStyle = {
    background: "linear-gradient(135deg, #ff6600 0%, #ff9933 100%)",
    color: "#000000",
    border: "none",
    padding: "clamp(10px, 2vw, 15px) clamp(20px, 3vw, 30px)",
    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
    fontWeight: "bold",
    borderRadius: "12px",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0 5px 15px rgba(255, 102, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block",
  }

  const articleButtonStyle = {
    ...buttonStyle,
    padding: "clamp(10px, 2vw, 15px) clamp(30px, 4vw, 40px)",
  }

  const buttonHoverStyle = {
    transform: "translateY(-3px)",
    boxShadow: "0 8px 25px rgba(255, 102, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
    background: "linear-gradient(135deg, #ff9933 0%, #ffcc66 100%)",
  }

  const showMoreButtonStyle = {
    background: "transparent",
    color: "#ff6600",
    border: "1px solid #ff6600",
    padding: "clamp(8px, 1.5vw, 12px) clamp(16px, 2.5vw, 24px)",
    fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transition: "all 0.3s ease",
    marginTop: "8px",
  }

  const showMoreButtonHoverStyle = {
    background: "#ff6600",
    color: "#ffffff",
    transform: "translateY(-2px)",
  }

  const headingStyle = {
    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    fontWeight: "bold",
    color: "#ff6600",
    marginBottom: "clamp(8px, 2vw, 16px)",
    textAlign: "center",
  }

  const terminologyItemStyle = {
    background: "rgba(255, 102, 0, 0.05)",
    border: "1px solid rgba(255, 102, 0, 0.2)",
    borderRadius: "8px",
    padding: "clamp(12px, 2vw, 16px)",
    marginBottom: "clamp(8px, 1.5vw, 12px)",
    transition: "all 0.3s ease",
  }

  const terminologyTermStyle = {
    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
    fontWeight: "bold",
    color: "#ff6600",
    marginBottom: "4px",
    display: "block",
  }

  const terminologyMeaningStyle = {
    fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
    color: "#d0d0d0",
    lineHeight: 1.5,
  }

  const terminologyAuthorStyle = {
    fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)",
    color: "#ff9933",
    fontStyle: "italic",
    marginTop: "4px",
  }

  // Content for each container
  const content1 = {
    heading: "What's SIGN all about?",
    body: (
      <>
        Hey! Hey!! Heyyyyy!🧡👋 Grab your popcorn while I properly onboard and guide you through the best web3
        project🧡. I'm super excited to introduce you to one of the best projects that have re-written the future of
        cryptocurrency and web3; SIGN What is SIGN? SIGN is a tech company which offers MONEY, FREEDOM and INTEGRITY;
        FOR MONEY: Sign owns TokenTable which is the largest airdrop distribution system which have generated millions
        of dollars. Airdrops like notcoin and Kaito was distributed using the TokenTable. FOR FREEDOM: Sign created
        SignPass which is the on-chain residency card that will be adopted by many more countries. FOR INTEGRITY: Sign
        created Sign Protocol formerly known as ethsign which allows users to verify everything on-chain for instance
        signing of contract. So in essence, Sign is for Builders, Sign is for Countries, Sign is for Governments and
        Sign is basically for everyone. Sign built a platform where everyone is treated equally, and your success is
        sign's top priority. Sign created a community-driven ecosystem which fosters financial freedom, integrity, and
        growth for all. Sign's approach is to build a platform where you can be the best version of yourself (by
        thinking of who you want to be in the web3 space, working towards exploring all the ways that you want to
        potentially be in the future; for example being a content writer, video content creators, graphics designers and
        so on), and the sign community will always support you and boost your platform while connecting you with
        like-minded people. Now pay close attention to the next title below HOW TO EARN $SIGN AIRDROP/TOKENS WHICH ARE
        HUGE The $Sign airdrop is Sign's way of showing appreciation to the ones who have been with Sign through the
        ups, downs, builds, bugs, and breakthrough. You earn $sign airdrop by securing free Sign SBTs. SBTs are
        non-transferable badges of honor which you can receive based on your genuine engagement and contribution. Below
        are the 4 (four) official ways to earn sign SBTs. Support Warrior: These are for those who genuinely support
        sign and the sign community. Be a reply guy by giving genuine feedback to the tweets of your fellow sign members
        and genuinely participate in Sign's Twitter account Orange in the veins: These are for those who consistently
        show quality participation in the sign community which includes but not limited to -Consistent quality
        participation of Sign's Daily Orange Dynasty Calender on X (hosted by Oxzoe_im) -Consistent quality
        participation on Sign's Daily mission on Telegram (https://t.me/orangedynasty) Outstanding Content Creation:
        These are gotten based on the level of creativity and passion that one puts into creating content, the level of
        consistency and improvement of one's content. And this creation is not limited to any form or style. Serious
        Builders: These are those who go way above and beyond in building our sign community. The Best Part? Equal
        Opportunities: SIGN treats everyone that is seeing the signs equally, regardless of follower count, account size
        or background. Everyone can have access to the same opportunities and support. Supportive Community: When you
        join the sign community, you will meet like-minded individuals, developers, designers, content writers, and
        creators. Collaborate, learn, and grow together! Existing Success: SIGN products, including Sign Pass, Ethsign,
        Sign Protocol, and Token Table, are already making waves in the industry. Sign secured $15 million in revenue in
        2024 and also received a significant investment from CZ the CEO of Binance in 2025. No Ulterior Motives: Sign is
        not looking for community funding or promising unrealistic returns. Sign's goal is to support you in achieving
        your goals, and the rewards($sign will follow naturally. How Can You Benefit? Build and Grow: Create and build
        on Sign, and Sign will provide massive support to help you succeed. You will have access to exclusive
        opportunities, including early access to new Sign releases, community-driven projects, and exclusive benefits.
        Showcase Your Involvement: Earn badge of honor by securing Sign SBTs which include Outstanding Content Creators,
        Serious Builders, Orange in the Veins, and Support Warriors. You can also own and trade NFTs that represent your
        commitment to the Orange Dynasty. Connect with Like-Minded Individuals: Join our community and network with
        people who share your passions and interests. What Sets SIGN Apart? 🔥 No Farming: Sign is not farmable hence
        there is no referral link for sign up, and Sign is focused on building a sustainable ecosystem that benefits
        everyone. Community-First Approach: Sign is committed to providing value to every member. You're not creating
        for Sign; you're creating for yourself, and the sign community will be there to support you every step of the
        way. Ready to Join the Movement? 🔥 If you're ready to take control of your financial future and join a
        community that's changing the future of web3, then Sign is for you. Don't just think about what you can do for
        SIGN; think about how SIGN can help you grow and achieve your goals. Let's build a brighter future together! If
        you are just beginning to the See the $Sign, Congratulations on still being early, and you are perfectly
        positioned for our future SBT rounds and the Sign Super app. If you have seen the sign and sign is yet to see
        you then it's on its way. If you haven't Seen the Sign, Well now you do 🧡 Do not fade $Sign for any reason
      </>
    ),
  }

  const content2 = {
    heading: "Staking $SIGN",
    body: (
      <>
        The Sign Super App's staking program, centered on the $SIGN token, allows users to lock tokens for a 7-day
        minimum to earn rewards and benefits. With a 10% annual percentage rate (APR), staking offers competitive
        passive income, potentially yielding 100 $SIGN per 1,000 staked annually, though returns depend on token price
        stability. The process likely involves a web interface (e.g., app.ethsign.xyz/staking), where users connect
        wallets to stake, with rewards claimable periodically, offering flexibility due to the short unstaking period.
        Benefits of Staking: A unique role in the app (possibly a status or governance privilege). Exclusive early
        access to new releases. Recognition as a "certified orange builder" tied to the "Orange Dynasty" branding. These
        benefits aim to foster community engagement and loyalty, potentially offering priority in app features or
        events. However, the tangible value of these perks, like the role or early access, remains unclear without
        details on the app's functionality or roadmap, making it critical to verify their utility. Risks to Consider:
        Token price volatility. Network issues. Underwhelming app releases reducing the value of rewards and benefits.
        Surprise community-driven releases, like airdrops or NFTs, could enhance returns, but their impact depends on
        execution. Users should research the Sign Super App's ecosystem, roadmap, and $SIGN's market performance before
        staking, as the pre-launch stage adds speculative risk.
      </>
    ),
  }

  const content3 = {
    heading: "TERMINOLOGIES USED IN SIGN/ORANGE DYNASTY",
    body: (
      <div style={{ width: "100%" }}>
        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>I'm pulling Zoe</span>
          <div style={terminologyMeaningStyle}>I'm Shy</div>
          <div style={terminologyAuthorStyle}>@0xzoe_im</div>
        </div>

        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>Pulling a Tajudeen</span>
          <div style={terminologyMeaningStyle}>Excessively rugging on twitter space</div>
          <div style={terminologyAuthorStyle}>@Tajudeen_10</div>
        </div>

        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>Meme Push-up guy</span>
          <div style={terminologyMeaningStyle}>A reference to someone who's always active and energetic</div>
          <div style={terminologyAuthorStyle}>Lucky @Lucky_of_Web3</div>
        </div>

        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>Orange Dynasty</span>
          <div style={terminologyMeaningStyle}>The community of Sign</div>
        </div>

        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>Signees</span>
          <div style={terminologyMeaningStyle}>Members of Sign</div>
        </div>

        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>SIGM</span>
          <div style={terminologyMeaningStyle}>Greeting format in the Orange Dynasty</div>
        </div>

        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>Signish</span>
          <div style={terminologyMeaningStyle}>When someone is bullish on Sign</div>
        </div>

        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>Make sure you carry OS</span>
          <div style={terminologyMeaningStyle}>Make sure you babe</div>
        </div>

        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>Orange is my veins</span>
          <div style={terminologyMeaningStyle}>I'm bullish on Sign</div>
        </div>

        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>Are you seeing Sign?</span>
          <div style={terminologyMeaningStyle}>Are you positioned in Sign?</div>
        </div>

        <div style={terminologyItemStyle}>
          <span style={terminologyTermStyle}>Signor</span>
          <div style={terminologyMeaningStyle}>Someone who introduces people to Sign</div>
        </div>
      </div>
    ),
  }

  // Extract text for truncation
  const content1Text = extractText(content1.body)
  const content2Text = extractText(content2.body)
  const content3Text = extractText(content3.body)

  return (
    <BackgroundWrapper>
      <div style={pageStyle}>
        <div style={containerStyle}>
          {/* Page Title */}
          <h1 style={titleStyle}>Goals</h1>

          {/* First Content Container */}
          <div ref={container1Ref} style={contentContainerStyle}>
            <div style={contentTextStyle}>
              {showMore.container1 ? (
                <>
                  <div style={headingStyle}>{content1.heading}</div>
                  {content1.body}
                </>
              ) : (
                <>
                  <div style={headingStyle}>{content1.heading}</div>
                  {truncateText(content1Text, charLimit - content1.heading.length)}
                </>
              )}
            </div>

            {!showMore.container1 && content1Text.length + content1.heading.length > charLimit && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton1 === "showMore1" ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton1("showMore1")}
                onMouseLeave={() => setHoveredButton1(null)}
                onClick={() => toggleShowMore("container1")}
              >
                Show More
              </button>
            )}

            {showMore.container1 && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton1 === "showLess1" ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton1("showLess1")}
                onMouseLeave={() => setHoveredButton1(null)}
                onClick={() => toggleShowMore("container1")}
              >
                Show Less
              </button>
            )}

            <div style={buttonsContainerStyle}>
              <Link
                to="/article"
                style={{
                  ...articleButtonStyle,
                  ...(hoveredButton1 === "Articles" ? buttonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton1("Articles")}
                onMouseLeave={() => setHoveredButton1(null)}
              >
                Must read Articles
              </Link>
            </div>
          </div>

          {/* Second Content Container */}
          <div ref={container2Ref} style={contentContainerStyle}>
            <div style={contentTextStyle}>
              {showMore.container2 ? (
                <>
                  <div style={headingStyle}>{content2.heading}</div>
                  {content2.body}
                </>
              ) : (
                <>
                  <div style={headingStyle}>{content2.heading}</div>
                  {truncateText(content2Text, charLimit - content2.heading.length)}
                </>
              )}
            </div>

            {!showMore.container2 && content2Text.length + content2.heading.length > charLimit && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton2 === "showMore2" ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton2("showMore2")}
                onMouseLeave={() => setHoveredButton2(null)}
                onClick={() => toggleShowMore("container2")}
              >
                Show More
              </button>
            )}

            {showMore.container2 && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton2 === "showLess2" ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton2("showLess2")}
                onMouseLeave={() => setHoveredButton2(null)}
                onClick={() => toggleShowMore("container2")}
              >
                Show Less
              </button>
            )}

            <div style={buttonsContainerStyle}>
              {["Stake", "Unstake"].map((action) => (
                <a
                  key={action}
                  href=" http://stake.sign.global "
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...buttonStyle,
                    ...(hoveredButton2 === action ? buttonHoverStyle : {}),
                  }}
                  onMouseEnter={() => setHoveredButton2(action)}
                  onMouseLeave={() => setHoveredButton2(null)}
                >
                  {action}
                </a>
              ))}
            </div>
          </div>

          {/* Third Content Container - Terminologies */}
          <div ref={container3Ref} style={contentContainerStyle}>
            <div style={contentTextStyle}>
              {showMore.container3 ? (
                <>
                  <div style={headingStyle}>{content3.heading}</div>
                  {content3.body}
                </>
              ) : (
                <>
                  <div style={headingStyle}>{content3.heading}</div>
                  <div style={terminologyMeaningStyle}>
                    Discover the unique slangs and terminologies used within the Sign/Orange Dynasty community. Each
                    term carries special meaning and represents the vibrant culture of our ecosystem...
                  </div>
                </>
              )}
            </div>

            {!showMore.container3 && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton3 === "showMore3" ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton3("showMore3")}
                onMouseLeave={() => setHoveredButton3(null)}
                onClick={() => toggleShowMore("container3")}
              >
                Show More
              </button>
            )}

            {showMore.container3 && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton3 === "showLess3" ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton3("showLess3")}
                onMouseLeave={() => setHoveredButton3(null)}
                onClick={() => toggleShowMore("container3")}
              >
                Show Less
              </button>
            )}

            <div style={buttonsContainerStyle}>
              <Link
                to="/community"
                style={{
                  ...buttonStyle,
                  ...(hoveredButton3 === "JoinCommunity" ? buttonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton3("JoinCommunity")}
                onMouseLeave={() => setHoveredButton3(null)}
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  )
}

export default Goals