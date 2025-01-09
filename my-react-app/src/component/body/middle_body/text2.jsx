import {React,useRef, useEffect, useState} from "react";
import { colors, styled } from "@mui/material";
import { Box } from "@mui/material";
import "./bidi.css";
import { useInViewport } from "react-in-viewport";

const Texto=styled("h1")`
    color:black;
    font-size:5rem;
    font-weight:1000;
    font-family: "ManyChatGravity", sans-serif;
    font-type:bold;
    font-feature-settings: "ss02" 0;
    line-height:0.9;
    letter-spacing: 0.2px;
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

const Text2= () => {
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
                Discover why 1M+ brands trust Buzz buddy
            </Texto>
            <div class="gfg">
                <div class="flex flex_fdc">
                    <span class="h2 text_cobalt">1M+</span>
                    <span class="h4 m_t-xs">Businesses</span>
                    <span class="abg">chose Buzzbuddy to grow</span>
                </div>
                <div class="flex flex_fdc">
                    <span class="h2 text_cobalt">4B+</span>
                    <span class="h4 m_t-xs">Conversations</span>
                    <span class="abg">powered by Buzzbuddy </span>
                </div>
                <div class="flex flex_fdc">
                    <span class="h2 text_cobalt">170+</span>
                    <span class="h4 m_t-xs">Countries</span>
                    <span class="abg">use Buzzbuddy across the world</span>
                </div>
                <div class="flex flex_fdc">
                    <span class="h2 text_cobalt">#1</span>
                    <span class="h4 m_t-xs">Platform</span>
                    <span class="abg">Buzzbuddy is the leading marketing tool</span>
                </div>
            </div>
        </Real>
    );
};

export default Text2;