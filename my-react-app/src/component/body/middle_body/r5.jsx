import React, { useRef, useEffect, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { styled, Box } from "@mui/material";
import video1 from "../../../assets/feature_manychat-ai.webm";
import "./bidi.css";

const Wrapper = styled("div")`
  display: flex;
  margin-left: 0;
  margin-right: 15%;
  margin-bottom:55px;
  padding: 0;
  overflow: hidden;
  opacity: 0; /* Initially hidden */
  transform: scale(0.5); /* Initially scaled down */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* Smooth transition */

  &.visible {
    opacity: 1; /* Make visible */
    transform: scale(1); /* Restore to original size */
  }
`;


const Rrr=styled(Box)`
  display:flex;
  flexDirection:row;
`
const Btn = styled('a')({
  // display: 'flex',
  // flexDirection:'column',
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
  border: '1px solid rgb(255, 255, 255)',
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
  padding: '1.7rem 5rem',
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
    color: 'rgb(0, 0, 0)',
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
  background: '#edf2ed',
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

const Leftcontainer = styled(Box)`
  padding: 0;
`;

const Rightcontainer = styled(Box)`
  max-width: 32rem;
  justify-content: flex-start;
  text-align: left;
  padding: 0;
  margin: 0;
  margin-left: -5%;
  display: flex;
  flex-direction: column;
`;

const Lol = styled("h3")`
  margin-top: 33%;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 1.1;
  color: black;
  margin-bottom: 0;
`;

const Foul = styled("p")`
  color: black;
  line-height: 1.5;
  font-size: 1.2rem;
`;

const R5 = () => {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);

  // Track whether the animation and video have been triggered
  const [hasEntered, setHasEntered] = useState(false);

  const { inViewport } = useInViewport(
    wrapperRef,
    { threshold: 0.5 },
    { disconnectOnLeave: false },
    {}
  );

  useEffect(() => {
    if (inViewport && !hasEntered) {
      setHasEntered(true); // Mark as entered the first time
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  }, [inViewport, hasEntered]);

  return (
    <Box>
      <Wrapper ref={wrapperRef} className={hasEntered ? "visible" : ""}>
        <Leftcontainer>
          <video
            ref={videoRef}
            src={video1}
            width="900"
            height="565"
            muted
            loop
          />
        </Leftcontainer>
        <Rightcontainer>
          <Box>
            {/* <Lol>Manychat AI: A Smarter Way to Chat Automation</Lol> */}
            <Lol>Buzz Buddy AI: A Smarter Way to Chat Automation</Lol>
            <Foul>
            Level up the experiences your followers already love, with the new Manychat AI.
            </Foul>
            <Rrr>
            <a
              href="https://incredibles.dev"
              className="custom-btn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="custom-btn__inner">
                <span
                  className="custom-btn__label"
                  data-label="Get Started"
                  data-hover="Get Started"
                >
                  Get Started
                  <span className="custom-btns__label__background"></span>
                </span>
              </span>
              <span className="custom-btn__background"></span>
            </a>

            <Btn href="https://incredibles.dev" target="_blank">
                    <BtnInner>
                        <BtnHoverStyles data-label="Learn More" data-hover="Learn More">
                            <BtnLabelBackground />
                        </BtnHoverStyles>
                    </BtnInner>
                    <BtnBackground />
                </Btn>
            </Rrr>
          </Box>
        </Rightcontainer>
      </Wrapper>
    </Box>
  );
};

export default R5;