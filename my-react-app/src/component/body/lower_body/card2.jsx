import { React, useState, useRef,useEffect } from "react";
import { Box, styled } from "@mui/material";
import first from "../../../assets/steps_01.svg";
import second from "../../../assets/steps_02.svg";
import third from "../../../assets/steps_03.svg";
import { useInViewport } from "react-in-viewport";
import first1 from "../../../assets/puzzle1.png";
import second1 from "../../../assets/chat1.png";
import third1 from "../../../assets/social1.svg";
import first2 from "../../../assets/puzzle2.png";
import second2 from "../../../assets/chat2.png";
import third2 from "../../../assets/social2.svg";

const CardContainer = styled(Box)`
  background-color:#edf2ed;
  color: black;
  overflow: hidden;
  width: 360px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column; /* Ensures equal height cards with flex */
  height: 100%; /* Ensures all containers fill the parent container's height */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const Cde = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch; /* Stretch children to equal height */
  margin-top: 50px;
  padding: 0;
  gap: 10px;
  margin-left: 16%;
  margin-right: 14%;
  margin-bottom:50px;
`;

const ImageContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height:8rem;
  padding:0;
`;

const TextContainer = styled(Box)`
  color: black;
  display: block;
  flex-grow: 1; /* Ensures text takes remaining space */
`;

const Lol = styled("a")`
  outline: 0;
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
  position: relative;
  display: inline-block;
  padding: 1.4rem 1.4rem;
  color: black;
  background-color: #edf2ed;

`;

const Abc = styled("h4")`
  font-size: 1.2rem; /* Increased font size */
  line-height: 1.5;
  margin-top: 0.8rem;
  font-weight: 400;
  align-items: center;
  text-align: left;
  color: black;
`;

const Kgf = styled("h3")`
  font-size: 2.4rem; /* Increased font size */
  line-height: 1.5;
  margin-top: 0.8rem;
  font-weight: 650;
  align-items: center;
  text-align: left;
  color: black;
  margin:0;
`;

const Bs=styled("hr")`
    margin: .5rem 0;
    width: 100%;
    height: 1px;
    border: none;
    background: #000;
`

const Texto=styled("h1")`
    color:black;
    font-size:3 rem;
    font-weight:900;
    font-family: ManyChatGravity, sans-serif;
    font-feature-settings: "ss02" 0;
    line-height:0.9;
    margin-top:50px;
`

const Btn = styled('a')({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '999em',
  color: 'rgb(255, 255, 255)',
  fontFamily: 'CoFo Sans Mono, sans-serif',
  fontWeight: 400,
  fontSize: '0.9rem',
  letterSpacing: '0.01em',
  textDecoration: 'none',
  textTransform: 'uppercase',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid #DC143C',
  padding: 0,
});

const BtnInner = styled('span')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  zIndex: 2,
  overflow: 'hidden',
  borderRadius: 'inherit',
});

const BtnLabel = styled('span')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: '1.4rem 6rem',
  borderRadius: 'inherit',
  color: 'transparent',
  whiteSpace: 'nowrap',
  zIndex: 2,
  lineHeight: 1,
  '&:before, &:after': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    display: 'inline-block',
    color: 'rgb(255, 255, 255)',
    whiteSpace: 'nowrap',
    padding: '10px 30px',
    transition: 'transform 0.3s cubic-bezier(1, 0, 0, 1) 0s',
    textAlign: 'center',
    lineHeight: 1,
  },
  '&:before': {
    content: 'attr(data-label)',
    transform: 'translate(-50%, -50%)',
  },
  '&:after': {
    content: 'attr(data-hover)',
    transform: 'translate(-50%, calc(-50% - 100%))',
  },
});

const BtnLabelBackground = styled('span')({
  position: 'absolute',
  inset: '-100px',
  display: 'inline-block',
  background: '#DC143C',
  backgroundBlendMode: 'overlay',
  animation: 'noise-background 0.5s steps(1) infinite',
  zIndex: 1,
});

const BtnBackground = styled('span')({
  position: 'absolute',
  inset: 0,
});

const BtnHoverStyles = styled(BtnLabel)({
  '&:hover:before': {
    transform: 'translate(-50%, calc(-50% + 100%))',
  },
  '&:hover:after': {
    transform: 'translate(-50%, -50%)',
  },
});

const Emy=styled(Box)`
  opacity: 0; /* Initially hidden */
    transform: scale(0.5); /* Initially scaled down */
    transition: opacity 0.5s ease-in, transform 0.5s ease-in; /* Smooth transition */

    &.visible {
      opacity: 1; /* Make visible */
      transform: scale(1); /* Restore to original size */
    }
`

const Card2 = () => {

  const wrapperRef = useRef(null);
  
      const [hasEntered, setHasEntered] = useState(false);
  
    const { inViewport } = useInViewport(
      wrapperRef,
      { threshold: 0.5 },
      { disconnectOnLeave: false },
      {}
    );
  
    useEffect(() => {
        if (inViewport && !hasEntered) {
          setHasEntered(true);
        }
      }, [inViewport, hasEntered]);
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Emy styled={{marginbottom:100}} ref={wrapperRef} className={hasEntered ? "visible" : ""}>
        <Texto>
            Get started with Buzz Buddy
        </Texto>
        <Cde>
      <Box>
        <CardContainer>
          <Lol>
            <Kgf>step 1.</Kgf>
            <ImageContainer>
              <img src={first1} loading="lazy" width="70%" height="100%" />
            </ImageContainer>
            <Bs/>
            <TextContainer>
              <Abc>
                Join 1 million+ smart brands and sign up for a risk-free trial
              </Abc>
            </TextContainer>
          </Lol>
        </CardContainer>
      </Box>
      <Box>
        <CardContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isHovered={isHovered}
        >
          <Lol>
          <Kgf>step 2.</Kgf>
            <ImageContainer>
              <img src={second2} loading="lazy" width="75%" height="100%" />
            </ImageContainer>
            <Bs/>
            <TextContainer>
              <Abc>
              Use our template gallery to create a customized Chat Marketing campaign in as little as 15 minutes
              </Abc>
            </TextContainer>
          </Lol>
        </CardContainer>
      </Box>
      <Box>
        <CardContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isHovered={isHovered}
        >
          <Lol>
          <Kgf>step 3.</Kgf>
            <ImageContainer>
              <img src={third2} loading="lazy" width="100%" height="100%" />
            </ImageContainer>
            <Bs/>
            <TextContainer>
              <Abc>
                Leverage your social media channels to generate more conversions, sales, and revenue 24/7
              </Abc>
            </TextContainer>
          </Lol>
        </CardContainer>
      </Box>
    </Cde>
    <Btn href="https://incredibles.dev" target="_blank">
                    <BtnInner>
                        <BtnHoverStyles data-label="GET STARTED FREE" data-hover="GET STARTED FREE">
                            <BtnLabelBackground />
                        </BtnHoverStyles>
                    </BtnInner>
                    <BtnBackground />
                </Btn>
    </Emy>
  );
};

export default Card2;