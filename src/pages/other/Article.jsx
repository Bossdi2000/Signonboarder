import React, { useState, useRef } from 'react';
import { Box, styled } from '@mui/material';

// Styled GridBackground Component
const GridBackground = styled(Box)({
  position: 'absolute',
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
  pointerEvents: 'none',
});

// Background Wrapper Component
const BackgroundWrapper = ({ children }) => (
  <Box
    sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(16px)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      width: '100vw',
      zIndex: 0,
    }}
  >
    <GridBackground />
    {/* Gradient Circles */}
    <Box sx={{ position: 'absolute', inset: 0, zIndex: 1 }}>
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '40px', md: '80px' },
          left: { xs: '20px', md: '40px' },
          width: { xs: '200px', md: '300px' },
          height: { xs: '200px', md: '300px' },
          background: 'rgba(168, 85, 247, 0.2)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 3s infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '40px', md: '80px' },
          right: { xs: '20px', md: '40px' },
          width: { xs: '250px', md: '400px' },
          height: { xs: '250px', md: '400px' },
          background: 'rgba(236, 72, 153, 0.2)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 3s infinite 1s',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '400px', md: '600px' },
          height: { xs: '400px', md: '600px' },
          background: 'rgba(59, 130, 246, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
    </Box>
    {children}
  </Box>
);

const Article = () => {
  // State to track show more/less for each container
  const [showMore, setShowMore] = useState({
    container1: false,
    container2: false,
    container3: false,
  });

  // Refs for each container to control scrolling
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);

  // Hover states for buttons
  const [hoveredButton1, setHoveredButton1] = useState(null); // For first container
  const [hoveredButton2, setHoveredButton2] = useState(null); // For second container
  const [hoveredButton3, setHoveredButton3] = useState(null); // For third container

  const toggleShowMore = (container) => {
    setShowMore((prev) => {
      const newState = { ...prev, [container]: !prev[container] };
      // Scroll to top for both Show More and Show Less
      const refMap = {
        container1: container1Ref,
        container2: container2Ref,
        container3: container3Ref,
      };
      refMap[container].current.scrollTo(0, 0);
      return newState;
    });
  };

  // Character limit for truncated text (excluding heading)
  const charLimit = 200;

  // Function to extract text from JSX content
  const extractText = (children) => {
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) {
      return children.map(extractText).join('');
    }
    if (React.isValidElement(children)) {
      return extractText(children.props.children);
    }
    return '';
  };

  // Function to truncate text at the last complete word within charLimit
  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    const subString = text.slice(0, limit);
    const lastSpaceIndex = subString.lastIndexOf(' ');
    return lastSpaceIndex > 0 ? subString.slice(0, lastSpaceIndex) + '...' : subString + '...';
  };

  const pageStyle = {
    minHeight: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    position: 'relative',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 'clamp(20px, 5vh, 40px)',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    padding: 'clamp(20px, 5vw, 40px) clamp(10px, 3vw, 20px)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(20px, 4vw, 40px)',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    fontWeight: 'bold',
    marginBottom: 'clamp(16px, 3vw, 32px)',
    background: 'linear-gradient(45deg, #ff6600, #ff9933)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const contentContainerStyle = {
    background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
    border: '2px solid #ff6600',
    borderRadius: 'clamp(12px, 2vw, 20px)',
    padding: 'clamp(16px, 3vw, 32px)',
    boxShadow: '0 10px 30px rgba(255, 102, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    overflow: 'auto',
    width: '100%',
    maxWidth: 'clamp(300px, 80vw, 800px)',
    minHeight: 'clamp(400px, 50vh, 600px)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2,
  };

  const contentTextStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
    lineHeight: 1.8,
    color: '#f0f0f0',
    textAlign: 'justify',
    marginBottom: 'clamp(8px, 2vw, 16px)',
  };

  const headingStyle = {
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 'clamp(8px, 2vw, 16px)',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: 'clamp(200px, 50vw, 400px)',
    height: 'clamp(100px, 25vw, 200px)',
    border: '1px solid #ff6600',
    borderRadius: '8px',
    marginBottom: 'clamp(16px, 3vw, 32px)',
    objectFit: 'cover', // Ensure image covers the area without distortion
  };

  const linkStyle = {
    color: '#ff6600',
    textDecoration: 'underline',
    transition: 'color 0.3s ease',
  };

  const showMoreButtonStyle = {
    background: 'transparent',
    color: '#ff6600',
    border: '1px solid #ff6600',
    padding: 'clamp(8px, 1.5vw, 12px) clamp(16px, 2.5vw, 24px)',
    fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    marginTop: '8px',
  };

  const showMoreButtonHoverStyle = {
    background: '#ff6600',
    color: '#ffffff',
    transform: 'translateY(-2px)',
  };

  const listStyle = {
    ...contentTextStyle,
    paddingLeft: 'clamp(20px, 4vw, 40px)',
    listStyleType: 'disc',
  };

  const listItemStyle = {
    marginBottom: 'clamp(4px, 1vw, 8px)',
  };

  const decorativeCircleStyle = {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(20px)',
    pointerEvents: 'none',
    background: 'radial-gradient(circle, rgba(255, 102, 0, 0.1) 0%, transparent 70%)',
  };

  // Content for each container
  const content1 = (
    <>
      <p><strong>Earning SBT and $SIGN</strong></p>
      <p>This post will explain 2 things clearly: whether Sign is farmable, and how exactly you can get $SIGN after TGE.</p>
      <p><em>(Note: we have not launched any tokens yet, beware of scams)</em></p>
      <p>We’ve done the impossible: we built a loving community in farm-cultured space. We don’t farm users’ platforms for external tasks, we let you build the platform that you desire for yourself.</p>
      <p>The reason we have the luxury of not following the farming norm is because we don’t need to accumulate a number of followers to show VCs and sell concepts of products. Sign already has solid products and strong VC backing; we are already profitable, we don’t need any of these tactics, we just want you to be rewarded for being yourself.</p>
      <p>There is no shortcut to building a legacy and dynasty together. Be warned: only Sign if you are truly committed - if so, you will be working for yourself and see drastic improvements and be rewarded for it; if not, typical farming tactics such as using bots or spamming posts will not work here.</p>
      <p>We are maintaining a delicate balance between transparency and anti-sybil security, therefore we will tell you how earning $SIGN works without revealing our own snapshot algorithm in order to prevent unfair farming.</p>
      <p>NFT and SBT holders will receive $SIGN airdrops. SBTs are non-transferrable badges of honor, NFTs are its tradable version.</p>
      <p>Here are the 4 tiers of SBTs and what their eligibility is based on:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Support Warrior:</strong> Genuine supporters of Sign and Orange Dynasty community members measured by:
          <ul style={listStyle}>
            <li style={listItemStyle}>Frequency of engagement with community members’ posts</li>
            <li style={listItemStyle}>Quality of engagement with community members’ posts</li>
            <li style={listItemStyle}>Whether the engagement is generated via AI (preference given to non-AI)</li>
            <li style={listItemStyle}>Whether the engagement is a genuine effort to make a connection</li>
          </ul>
        </li>
        <li style={listItemStyle}>
          <strong>Orange in the Veins:</strong> Avid representation of your participation in the Orange Dynasty, included but not limited to:
          <ul style={listStyle}>
            <li style={listItemStyle}>Consistent quality participation of Sign’s Daily Orange Dynasty Calendar on X (hosted by <a href="https://x.com/0xzoe_im" style={linkStyle} target="_blank" rel="noopener noreferrer">@0xzoe_im</a>)</li>
            <li style={listItemStyle}>Consistent quality participation of Sign’s Daily mission on Telegram (<a href="https://t.me/orangedynasty" style={linkStyle} target="_blank" rel="noopener noreferrer">t.me/orangedynasty</a>)</li>
            <li style={listItemStyle}>Consistent active presence in Sign’s TwitterSpaces</li>
          </ul>
        </li>
        <li style={listItemStyle}>
          <strong>Outstanding Content Creation:</strong> Active and avid creation and exploration of content, measured by:
          <ul style={listStyle}>
            <li style={listItemStyle}>The level of passion one puts into creating content</li>
            <li style={listItemStyle}>The level of creativity one puts into creating content</li>
            <li style={listItemStyle}>The degree of consistency and improvement of one’s content</li>
            <li style={listItemStyle}>The level of support and openness to feedback one has towards others</li>
          </ul>
        </li>
        <li style={listItemStyle}>
          <strong>Serious Builder:</strong> Those who go way above and beyond in building our orange dynasty. Metrics may vary case-by-case.
        </li>
      </ul>
      <p>It’s important to keep in mind that the purpose of these descriptions are to provide insights of each SBT category. They should not be used as a guide to get points; instead, you should focus on your genuine presence in our dynasty and find what you align with the most.</p>
      <p>We previously announced that each round of SBTs will reduce in half after the first round; however, our team is deeply moved by your genuine engagement and contribution. Therefore, we have decided not only to cancel this decreasing mechanism, but to increase the number and frequency of the distribution. 🧡👁️👅👁️🧡</p>
      <p>Remember: all of this, including $SIGN, should be a motivator for you to build your platform, and not just a means to an end. There are plenty of easily farmable projects out there, building in the Orange Dynasty is for serious builders only.</p>
      <p>Stay tuned on our official community account <a href="https://x.com/Sign" style={linkStyle} target="_blank" rel="noopener noreferrer">@Sign</a>, we will be posting many ways to help you make connections and boost your platform.</p>
      <p>Coming up next:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Member spotlights, where our community shines a spotlight on bullish community members and your niche in our Dynasty</li>
        <li style={listItemStyle}>Buildable Orange Dynasty ecosystem, where you can build your own sub-community and grow your inner circle</li>
        <li style={listItemStyle}>Recurring newsletters, where we organize and post schedules of all official and community-run Sign events</li>
        <li style={listItemStyle}>Feedback orange box, where you can anonymously submit your thoughts, questions, and ideas directly to our team</li>
      </ul>
      <p>We are building a forever home at our Orange Dynasty, and we are building it brick by brick. Are you with us?</p>
      <p>-xoxo, Sign intern :3</p>
    </>
  );

  const content2 = (
    <>
      <p><strong>The OrangePrint</strong></p>
      <p>This is a comprehensive guide to Sign’s community and how to participate.</p>
      <p>If you’re reading this, it’s a Sign. 👀🧡🐉</p>
      <p>Here’s what you’ll find:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>WTF is Sign</li>
        <li style={listItemStyle}>WTF is the Orange Dynasty</li>
        <li style={listItemStyle}>How to “farm” Sign</li>
        <li style={listItemStyle}>How to position yourself</li>
        <li style={listItemStyle}>The OrangePrint</li>
      </ul>
      <p>Do you see the Sign?</p>
      <p><strong>WTF is Sign</strong></p>
      <p>Sign is a very cool company that builds Money, Freedom, and Integrity.</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>We are the largest token airdrop distribution system in blockchain history</li>
        <li style={listItemStyle}>We’ve onboarded countries to connect real-world credentials onchain</li>
        <li style={listItemStyle}>We’ve made human trust programmable and are reaching human-AI super alignment</li>
      </ul>
      <p>Some fun facts about Sign:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>We’re on the same level as SpaceX: the same VC man who handed Elon Musk the check for SpaceX has handed Sign’s CEO Xin the check for Sign</li>
        <li style={listItemStyle}>CZ is Signed: Sign is CZ’s first and biggest investment ($16 million) in 2025. He sees the Signs.</li>
        <li style={listItemStyle}>Sign’s community, the Orange Dynasty, is a very lovely community</li>
      </ul>
      <p><strong>WTF is the Orange Dynasty</strong></p>
      <p>The Orange Dynasty is Sign’s official community. Our story is actually pretty cool.</p>
      <p>Once upon a time, an intern at Sign (me!!!) decided to acquire the handle <a href="https://x.com/sign" style={linkStyle} target="_blank" rel="noopener noreferrer">@sign</a> and started posting silly memes and vibey content. My vision at the time was to create a safe space for people to bring some fun back onto the timeline and create a real community with real humans.</p>
      <p>I was Seeing Signs of great success in our future, and Sign’s CM (community mod aka cutest mod) made the first pair of SignGlasses and changed the course of history.</p>
      <p>As the Sign intern, I used the @sign account to vibe and chat with everyone who was seeing the Signs, regardless of their project affiliation, follower count, or any traditional project marketing metrics – I was a real human, and in turn made some of the most amazing real friends.</p>
      <p>This vibe started catching on, and it turns out that people indeed feel and reciprocate the love! Notifications started blowing up, people tapped into their creativity and craft, and we ended up on the X trending page twice!</p>
      <p>Then the fun part started: I started hopping onto Twitter Spaces and doubled down on fueling the community account with vibes (shoutout Sign daddy <a href="https://x.com/realyanxin" style={linkStyle} target="_blank" rel="noopener noreferrer">@realyanxin</a> for being the only CEO in the world who lets their intern get this silly with the company verified Twitter account) and started spilling 4 years worth of alphas of everything Sign has built.</p>
      <p>In less than 5 months, Sign’s meme account turned into a home for over 27,000 (real!!!) people, with a lovely culture of mutual support, creativity, personal growth, and laughter. 100% organic, 0% bots, 100% human.</p>
      <p><strong>How to “Farm” Sign</strong></p>
      <p>Please forget about everything you’ve learned about the culture of web3 communities as you read this with a fresh perspective:</p>
      <p><em>Problem with current farming culture:</em> Projects abuse users’ platforms, small accounts are overlooked, big accounts get all the blame, people only come together to shill but don’t make real connections, everything ends at TGE.</p>
      <p><em>Sign’s approach:</em> We want you to build your platform, we treat all accounts equally, we want you to imagine what you want to do with your platform, strive towards your creative goal, and we support and boost your platform. We will also connect you with like-minded people and potential collaborators.</p>
      <p><em>Problem with community-project distrust:</em> It’s sad that there’s a norm that projects lie to community members. Projects hype up upcoming products and promise an uncertain amount of money for an uncertain outcome of a project, and in turn take the community members’ numbers to capitalize off of it. The people who shill that project are the ones getting burnt.</p>
      <p><em>Sign’s approach:</em> Our products are already running very successfully, we’ve already secured good funding, we are already profitable ($15 million revenue in 2024 alone), we don’t need nor want to profit off of community member’s work. The way we run the community is from a place of love - Sign intern’s personal mission to “be the change you want to see in the world” - no ulterior motives, high levels of resources, and all the time in the world. We’re building a legacy. A dynasty. The Orange Dynasty.</p>
      <p><em>Bad news:</em> Sign is not farmable.</p>
      <p><em>Good news:</em> Sign is here to stay; we are building an empire together, and we will take good care of everyone in our Orange Dynasty.</p>
      <p><strong>How to Position Yourself</strong></p>
      <p><em>Set your expectations:</em> Don’t think “what can I do for Sign”, think “how can Sign help me the most”. Think about what direction you want to grow your platform in (graphics, threads, spaces, etc) and go for it. Our Orange Dynasty will support you and shine spotlights on you.</p>
      <p><em>Be the best version of yourself:</em> Create the content that you want to be known for (for the sake of perfecting your own craft and building your own platform). All powerful creators start from this angle, and here at Sign, you’ll have a solid support system.</p>
      <p><em>Positioning socially:</em> Sign is still at a very very very early stage right now. The mere social flex that you saw the Sign early could land you some clout points as an alpha caller.</p>
      <p><strong>SBT:</strong> Soul-Bound Tokens, (aka Sign-Bound Tokens) are badges of honor to represent outstanding contributions to our Orange Dynasty. There are 4 types of SBTs and multiple rounds of distributions. Each SBT will be a target of $Sign airdrop at TGE. Everyone has an equal chance at every round, regardless of time of entry.</p>
      <p><em>Types of SBTs:</em></p>
      <ul style={listStyle}>
        <li style={listItemStyle}><strong>Support Warrior:</strong> For those who show avid support to fellow Orange Dynasty members in supporting and giving genuine feedback to their posts and participating in <a href="https://x.com/Sign" style={linkStyle} target="_blank" rel="noopener noreferrer">@Sign</a>’s post activities on X.</li>
        <li style={listItemStyle}><strong>Orange in the Veins:</strong> For those who actively participate in community events hosted by community mod <a href="https://x.com/0xzoe_im" style={linkStyle} target="_blank" rel="noopener noreferrer">@0xzoe_im</a>, attend TwitterSpaces, and are active in our Telegram group chat.</li>
        <li style={listItemStyle}><strong>Outstanding Content Creation:</strong> For those who are consistently making an effort to explore and improve their craft in content creation, not limited to any format or style.</li>
        <li style={listItemStyle}><strong>Serious Builders:</strong> For those who go way above and beyond in their own way.</li>
      </ul>
      <p><em>Measures of eligibility:</em> We have qualitative and quantitative ways to measure the eligibility of these SBTs; all Twitter posts are a snapshot of its own, and we have another scoreboard partnership that will be announced soon. The rest will be determined by our community team and community mod, who will distinguish the difference between genuine human interactions that show one’s own devotion to their growth and “good project lfg”-esque comments.</p>
      <p><em>Timing and format:</em> SBTs will be distributed in time intervals leading up to TGE (and very likely continue after TGE), our cutest mod (<a href="https://x.com/0xzoe_im" style={linkStyle} target="_blank" rel="noopener noreferrer">@0xzoe_im</a>) will reach out to you via Twitter DM to ask for your TON address.</p>
      <p><em>Positioning financially:</em> We understand that not everyone has the time or energy or desire to build their own platform; we want to give everyone who sees the Sign an opportunity to position themselves, hence we have come out with a purchasable and tradable version of SignBound Tokens in the form of an NFT.</p>
      <p>The Seeing Signs NFTs will have the same functions as the SBTs; while they were minted out in 23 minutes, it is available in secondary markets such as <a href="https://opensea.io/collection/seeing-signs" style={linkStyle} target="_blank" rel="noopener noreferrer">OpenSea</a> and <a href="https://blur.io/eth/collection/seeing-signs" style={linkStyle} target="_blank" rel="noopener noreferrer">Blur</a>.</p>
      <p><em>Positioning yourself career-wise:</em> The best way to make your resume stand out is to demonstrate it in real life. If you are seeking a job in web3, demonstrate the role you want to come alive in your resume and Sign will endorse and promote it.</p>
      <p><strong>The OrangePrint</strong></p>
      <p>We are defying the norms of web3 culture, creating a new meta, and setting a new standard for other projects. The success of our Orange Dynasty will inspire (or even “force”) other projects to show the same level of respect towards community members, our creative content will brighten the timeline and propel the culture of web3 being real and fun, and our genuine support and connection will bring love and warmth to what was once an emotionally barren land of farming. We lead with love.</p>
      <p>Platform = power. We want all of you to become the person you want to be in the space. The next wave of mass onboarding is coming, and when they do, they’ll need leaders to look up to, leaders who are not only knowledgeable and have great content, but also full of love and kindness and support, and that’s you.</p>
      <p>We truly want you to be the best version of yourself. We want to see you grow and reward you for your own growth. We don’t want to waste your time with external tasks that don’t align with this goal. Here comes a cheesy metaphor: instead of only giving you a fish, we give you a fish and the tools to build a fishing pole, and we teach you to fish. Instead of rewarding you for a random task, we actively help you build your platform and reward you for the way you build. You’re not creating for us, you’re creating for yourself and you have our help.</p>
      <p><em>How to make the best of your experience at our Orange Dynasty:</em></p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Create what you wish existed in the world - whether it’s a sentiment, artistic expression, idea or movement, this is your Sign to light up the timeline with your presence :)</li>
        <li style={listItemStyle}>Above everything, be yourself, a real human - while AI help is convenient, what truly speaks to souls is genuine human voice. It’s more impactful to be real and flawed than artificial and polished.</li>
        <li style={listItemStyle}>Support others the way you want to be supported - true love is shared and reciprocated here in our Orange Dynasty. Let the world know you’re one of us by repping our orange, and your support for others will be seen and reciprocated by our family.</li>
        <li style={listItemStyle}>Understand that good things take time - since this is the real world, there is never 100% guarantee for any certain action (or else the trajectory will follow that of the late tap tap meta and the more people who enter with certainty will equate to everyone getting a smaller slice of the pie until it becomes dust). It’s up to you to build fiercely and strategically; since we have a team and community devoted to your growth, you will receive more support than if you were flying solo in the space.</li>
      </ul>
      <p><em>Sign intern’s lore:</em> In addition to many members who saw and posted Sign early who are now actual KOLs with following and much respect, the Sign intern (myself!!) actually started out as a community member of a legendary memecoin (shoutout to #harrypotterobamasonic10inu) and made memes with 0 followers and gained not only a platform and friends, but also the attention of Sign Daddy (Sign CEO) and Sign General, and now I’m living my dream life at my dream job with the dream team. This has been the primary inspiration behind my serious building for our Orange Community, giving everyone a chance to reach their highest potential with solid and genuine support.</p>
      <p><strong>Bullish Resources</strong></p>
      <ul style={listStyle}>
        <li style={listItemStyle}>X: <a href="https://x.com/Sign" style={linkStyle} target="_blank" rel="noopener noreferrer">@Sign</a> (Orange Dynasty) and <a href="https://x.com/ethsign" style={linkStyle} target="_blank" rel="noopener noreferrer">@ethsign</a> (Sign Products)</li>
        <li style={listItemStyle}>Telegram: <a href="https://t.me/orangedynasty" style={linkStyle} target="_blank" rel="noopener noreferrer">https://t.me/orangedynasty</a></li>
        <li style={listItemStyle}>Discord: <a href="https://discord.com/invite/skA5fkqVwT" style={linkStyle} target="_blank" rel="noopener noreferrer">https://discord.com/invite/skA5fkqVwT</a></li>
        <li style={listItemStyle}>Content examples: [coming soon]</li>
        <li style={listItemStyle}>Memes and mantras: [coming soon]</li>
      </ul>
      <p>If you read this whole thing you’re a real one 🫵🧡</p>
      <p>-xoxo, Sign intern :3</p>
    </>
  );

  const content3 = (
    <>
      <p><strong>$SIGN Airdrop Philosophy: For the Orange Dynasty</strong></p>
      <p>The $SIGN airdrop is our love language in showing appreciation for the ones who’ve been with us through the ups, downs, builds, bugs, and breakthroughs.</p>
      <p>We are hilariously early, socially and financially. As we continue building Money, Freedom, and Integrity in the form of a genuine community of our Orange Dynasty, we want to show a steady stream of genuine appreciation.</p>
      <p><strong>Our Philosophy Is Rooted in Two Core Principles</strong></p>
      <ol style={listStyle}>
        <li style={listItemStyle}>
          <strong>The Dynasty Belongs to Its Builders</strong>
          <p>In a space where tokens are launched every day, it’s important to stick to our values that community comes first, then comes the currency. We’re not following any project’s existing roadmap or blueprint, we’re writing our own Orange Print. We also appreciate your patience with us as we are navigating a new social infrastructure that’s never existed before.</p>
          <p>If you’ve shown up as a serious builder, content creator, support warrior, or someone with orange in your veins, you deserve to be recognized.</p>
        </li>
        <li style={listItemStyle}>
          <strong>We Experiment Together</strong>
          <p>We deeply value utility, even when our products weren’t perfect (and let’s be honest—they weren’t at the beginning). Still, many of you chose to integrate Sign into your actual workflows, not for hype but for utility. This means the world to us.</p>
          <p>This airdrop is our way of saying: thank you for using what we built, even when we were still figuring it out. We’re here to reward the humans, not the bots. Those who adopted our tools in real use cases and became part of our product evolution. That means we have tried our best to filter out the bots and fake usage in products.</p>
        </li>
      </ol>
      <p><strong>What We Evaluated</strong></p>
      <p><em>Real Product Usage</em></p>
      <ul style={listStyle}>
        <li style={listItemStyle}>EthSign OG users for V3, V4, and V5: Signed multiple valid contracts with valid signers per contract</li>
        <li style={listItemStyle}>Sign Protocol Schema Creators: Created schemas with valid and meaningful attestation records</li>
        <li style={listItemStyle}>Sign Onchain Asset Holders</li>
        <li style={listItemStyle}>Seeing Signs NFT Holders, SignPass NFT Holders, SignPass Sierra Leone PR card holders</li>
      </ul>
      <p><em>Past Participation (Onchain Behavior)</em></p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Sign Fren - X, Participated in the SignX 6-week campaign with onchain attestations</li>
        <li style={listItemStyle}>Orange Dynasty Badge of Honor SBT holders</li>
        <li style={listItemStyle}>Support Warrior: Genuine supporters of Sign and Orange Dynasty community members</li>
        <li style={listItemStyle}>Orange in the Veins: Avid representation of your participation in the Orange Dynasty</li>
        <li style={listItemStyle}>Outstanding Content Creation: Active and avid creation and exploration of content</li>
        <li style={listItemStyle}>Serious Builder: Those who go way above and beyond in building our Orange Dynasty</li>
        <li style={listItemStyle}>Active community contributors who didn’t get an SBT</li>
        <li style={listItemStyle}>People who have contributed greatly to the Orange Dynasty socially; you will be Seen.</li>
      </ul>
      <p><strong>If You’re Just Beginning to See the $SIGN</strong></p>
      <p>Congratulations on still being early. In the context of what Sign and our Orange Dynasty is capable of and planning to do, you are perfectly positioned for our future SBT rounds and Sign SuperApp.</p>
      <p>If you’ve Seen the Sign and Sign saw you, congratufreakinglations.</p>
      <p>If you’ve Seen the Sign and Sign is yet to see you, it’s on its way.</p>
      <p>If you haven’t Seen the Sign, well now you do {'>'}:)</p>
      <p>This is indeed the $SIGN you’ve been looking for. 🧡</p>
    </>
  );

  // Extract text for truncation
  const content1Text = extractText(content1);
  const content2Text = extractText(content2);
  const content3Text = extractText(content3);

  return (
    <BackgroundWrapper>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        a:hover {
          color: #ff9933;
        }
      `}</style>
      <div style={pageStyle}>
        <div style={containerStyle}>
          {/* Page Title */}
          <h1 style={titleStyle}>Articles</h1>

          {/* First Content Container */}
          <div ref={container1Ref} style={contentContainerStyle}>
            <h2 style={headingStyle}>1st Article</h2>
            <img src="/NG1.jpg" alt="First Article Image" style={imageStyle} />
            <div style={contentTextStyle}>
              {showMore.container1 ? (
                content1
              ) : (
                truncateText(content1Text, charLimit)
              )}
            </div>
            {!showMore.container1 && content1Text.length > charLimit && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton1 === 'showMore1' ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton1('showMore1')}
                onMouseLeave={() => setHoveredButton1(null)}
                onClick={() => toggleShowMore('container1')}
              >
                Show More
              </button>
            )}
            {showMore.container1 && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton1 === 'showLess1' ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton1('showLess1')}
                onMouseLeave={() => setHoveredButton1(null)}
                onClick={() => toggleShowMore('container1')}
              >
                Show Less
              </button>
            )}
            <div
              style={{
                ...decorativeCircleStyle,
                top: '-40px',
                right: '-40px',
                width: 'clamp(80px, 10vw, 128px)',
                height: 'clamp(80px, 10vw, 128px)',
              }}
            />
            <div
              style={{
                ...decorativeCircleStyle,
                bottom: '-40px',
                left: '-40px',
                width: 'clamp(64px, 8vw, 96px)',
                height: 'clamp(64px, 8vw, 96px)',
              }}
            />
          </div>

          {/* Second Content Container */}
          <div ref={container2Ref} style={contentContainerStyle}>
            <h2 style={headingStyle}>2nd Article</h2>
            <img src="/NG2.jpg" alt="Second Article Image" style={imageStyle} />
            <div style={contentTextStyle}>
              {showMore.container2 ? (
                content2
              ) : (
                truncateText(content2Text, charLimit)
              )}
            </div>
            {!showMore.container2 && content2Text.length > charLimit && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton2 === 'showMore2' ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton2('showMore2')}
                onMouseLeave={() => setHoveredButton2(null)}
                onClick={() => toggleShowMore('container2')}
              >
                Show More
              </button>
            )}
            {showMore.container2 && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton2 === 'showLess2' ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton2('showLess2')}
                onMouseLeave={() => setHoveredButton2(null)}
                onClick={() => toggleShowMore('container2')}
              >
                Show Less
              </button>
            )}
            <div
              style={{
                ...decorativeCircleStyle,
                top: '-40px',
                right: '-40px',
                width: 'clamp(80px, 10vw, 128px)',
                height: 'clamp(80px, 10vw, 128px)',
              }}
            />
            <div
              style={{
                ...decorativeCircleStyle,
                bottom: '-40px',
                left: '-40px',
                width: 'clamp(64px, 8vw, 96px)',
                height: 'clamp(64px, 8vw, 96px)',
              }}
            />
          </div>

          {/* Third Content Container */}
          <div ref={container3Ref} style={contentContainerStyle}>
            <h2 style={headingStyle}>3rd Article</h2>
            <img src="/NG3.jpg" alt="Third Article Image" style={imageStyle} />
            <div style={contentTextStyle}>
              {showMore.container3 ? (
                content3
              ) : (
                truncateText(content3Text, charLimit)
              )}
            </div>
            {!showMore.container3 && content3Text.length > charLimit && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton3 === 'showMore3' ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton3('showMore3')}
                onMouseLeave={() => setHoveredButton3(null)}
                onClick={() => toggleShowMore('container3')}
              >
                Show More
              </button>
            )}
            {showMore.container3 && (
              <button
                style={{
                  ...showMoreButtonStyle,
                  ...(hoveredButton3 === 'showLess3' ? showMoreButtonHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredButton3('showLess3')}
                onMouseLeave={() => setHoveredButton3(null)}
                onClick={() => toggleShowMore('container3')}
              >
                Show Less
              </button>
            )}
            <div
              style={{
                ...decorativeCircleStyle,
                top: '-40px',
                right: '-40px',
                width: 'clamp(80px, 10vw, 128px)',
                height: 'clamp(80px, 10vw, 128px)',
              }}
            />
            <div
              style={{
                ...decorativeCircleStyle,
                bottom: '-40px',
                left: '-40px',
                width: 'clamp(64px, 8vw, 96px)',
                height: 'clamp(64px, 8vw, 96px)',
              }}
            />
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default Article;