import React, { useRef, useEffect, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { styled, Box } from "@mui/material";
import video1 from "../../../assets/feature_generate-qualified-leads.webm";
import "./bidi.css";

const Wrapper = styled("div")`
  display: flex;
  margin-left: 0;
  margin-right: 15%;
  margin-bottom:75px;
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

const R1 = () => {
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
            <Lol>Respond immediately</Lol>
            <Foul>
              {/* Attract and engage with customers where they are when they are
              ready. Capture the email addresses and phone numbers for up to
              80% of your leads, and add them automatically to your databases. */}
              No waiting time for your clients with 24/7 support
            </Foul>
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
          </Box>
        </Rightcontainer>
      </Wrapper>
    </Box>
  );
};

export default R1;