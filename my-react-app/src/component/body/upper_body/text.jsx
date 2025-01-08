import React from "react";
//import Logo from '../../assets/logo.svg'
import { colors } from "@mui/material";
import styled from "styled-components";
import "./text.css";

const Abc=styled('Box')`
    background:white;
    opacity: 1;
    transform: translateZ(0);
    align-items:center;
    justify-content:center;
    display:flex;
    text-align: center;
    flex-direction: column;
    letter-spacing: .01em;
    max-width: 113.6rem;
    margin-top:1%;
    margin-bottom:2px;
`

const Loli=styled('Box')`
    color:black;
    font-size: 5rem;
    font-family: ManyChatGravity, sans-serif;
    font-feature-settings: "ss02" 0;
    font-weight: 900;
    line-height: .9;
    font-type:bold;
    text-shadow: 0.5px 0.5px 0 black, -0.5px -0.5px 0 black;
`

const Holi=styled('Box')`
    color:black;
    font-size: 1.8rem;
    line-height: 1.3;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    unicode-bidi: isolate;
    font-type:bold;
`


const Texti= () => {
    return (
        <>
            <Abc>
                <Loli>Unleash the power <br></br> of chat marketing</Loli>
                <div>
                    <Holi>Drive more sales and conversions on Instagram, WhatsApp,<br></br> and Messenger using automation.</Holi>
                </div>
                <a href="https://incredibles.dev" class="custom-btn" target="_blank">
                    <span class="custom-btn__inner">
                        <span class="custom-btn__label" data-label="Get Started for free" data-hover="Get Started for free">
                            Get Started for free
                        <span class="custom-btn__label__background"></span>
                        </span>
                    </span>
                    <span class="custom-btn__background"></span>
                </a>
            </Abc>
        </>
    );
};

export default Texti;