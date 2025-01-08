import {React,useRef, useEffect, useState} from "react";
import { colors, styled } from "@mui/material";
import { Box } from "@mui/material";
import { useInViewport } from "react-in-viewport";

const Texto=styled("h1")`
    color:black;
    font-size:5rem;
    font-weight:900;
    font-family: ManyChatGravity, sans-serif;
    font-feature-settings: "ss02" 0;
    line-height:0.9;
`

const Real=styled(Box)`
    margin-left:15%;
    margin-right:15%;
    padding-top:0;
    padding-bottom:0;
    opacity: 0; /* Initially hidden */
    transform: scale(0.5); /* Initially scaled down */
    transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* Smooth transition */

    &.visible {
      opacity: 1; /* Make visible */
      transform: scale(1); /* Restore to original size */
    }
`

const Text1= () => {
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

    return (
        <Real ref={wrapperRef} className={hasEntered ? "visible" : ""}>
            <Texto>
                Use Chat Marketing to drive more sales on autopilot
            </Texto>
        </Real>
    );
};

export default Text1;