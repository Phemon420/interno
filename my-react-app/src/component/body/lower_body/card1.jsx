import { React, useState, useRef,useEffect } from "react";
import { Box, styled } from "@mui/material";
import first from "../../../assets/blog-story_nike-football.avif";
import second from "../../../assets/blog-story_mindvalley.avif";
import third from "../../../assets/kinarewala.png";
import { useInViewport } from "react-in-viewport";
import first1 from "../../../assets/football.png";
import second1 from "../../../assets/automation.png";
import third1 from "../../../assets/growth.jpg";

const CardContainer = styled(Box)`
  background: #edf2ed;
  color: black;
  overflow: hidden;
  width: 360px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0;
  cursor: pointer;
  margin: 0;
  display: flex;
  flex-direction: column; /* Ensures equal height cards with flex */
  height: 100%; /* Ensures all containers fill the parent container's height */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Moves the card slightly up */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Increases the shadow on hover */
  }
`;

const Cde = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch; /* Stretch children to equal height */
  margin-top: 150px;
  padding: 0;
  gap: 10px;
  margin-left: 16%;
  margin-right: 14%;

  opacity: 0; /* Initially hidden */
    transform: scale(0.5); /* Initially scaled down */
    transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* Smooth transition */

    &.visible {
      opacity: 1; /* Make visible */
      transform: scale(1); /* Restore to original size */
    }
`;

const Ere=styled("div")`
  background: #edf2ed;
`

const ImageContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
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
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  display: inline-block;
  padding: 0;
  color: black;
  border: 1px solid #edf2ed;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: white;
`;

const Abc = styled("h4")`
  font-size: 1.2rem; /* Increased font size */
  line-height: 1.5;
  margin-top: 0.8rem;
  font-weight: 700;
  align-items: center;
  text-align: left;
  color: black;
  margin-bottom: 2%;
  padding: 1.4rem 1.4rem;
`;

const Card1 = () => {
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
    <Cde ref={wrapperRef} className={hasEntered ? "visible" : ""}>
      <Box>
        <CardContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isHovered={isHovered}
        >
          <Lol>
            <ImageContainer>
              <img src={first1} loading="lazy" width="100%" height="50%" />
            </ImageContainer>
            <TextContainer>
              <Abc>
                How Nike Football leveraged Buzz Buddy to bring the Engage Mbappé Mode campaign to life
              </Abc>
            </TextContainer>
          </Lol>
        </CardContainer>
      </Box>
      <Ere>
        <CardContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isHovered={isHovered}
        >
          <Lol>
            <ImageContainer>
              <img src={second1} loading="lazy" width="100%" height="50%" />
            </ImageContainer>
            <TextContainer>
              <Abc>
                How buzz buddy Achieved A 522% Increase in Masterclass Sign-Ups Using Instagram Automation
              </Abc>
            </TextContainer>
          </Lol>
        </CardContainer>
      </Ere>
      <Box>
        <CardContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isHovered={isHovered}
        >
          <Lol>
            <ImageContainer>
              <img src={third1} loading="lazy" width="100%" height="50%" />
            </ImageContainer>
            <TextContainer>
              <Abc>
                How Frazer Brookes leveraged Instagram to land 2,029 subscribers in 14 days
              </Abc>
            </TextContainer>
          </Lol>
        </CardContainer>
      </Box>
    </Cde>
  );
};

export default Card1;