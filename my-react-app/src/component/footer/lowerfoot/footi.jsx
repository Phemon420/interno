import React from "react";
//import Logo from '../../assets/logo.svg'
import { colors,Box,styled } from "@mui/material";

const Duck=styled(Box)`
    padding:2.4rem 1.4rem;
    margin:0;
    background-color:black;
    padding-bottom:100px;
    margin-top:100px;
`

const Texto=styled("h1")`
    color:white;
    font-size:3.5rem;
    font-weight:900;
    font-family: ManyChatGravity, sans-serif;
    font-feature-settings: "ss02" 0;
    line-height:0.9;
`

const Lol = styled("h3")`
  margin-top: 2px;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 1.1;
  color: white;
  margin-bottom: 0;
  margin-left:;
`;

const Xyz=styled(Box)`
    margin-left:28%;
    margin-right:25%;
    max-width:45%;
    margin-bottom:40px;
`


const Btn = styled('a')({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '999em',
    color: 'rgb(0, 0, 0)',
    fontFamily: 'CoFo Sans Mono, sans-serif',
    fontWeight: 400,
    fontSize: '0.9rem',
    letterSpacing: '0.01em',
    textDecoration: 'none',
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid #3b42c4',
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
    padding: '1.4rem 5rem',
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
      padding: '10px 20px',
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
    background: '#fdf150',
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


const Upperfoot = () => {
    return (
        <>
           <Duck>
                <Xyz>
                    <Texto>Try BuzzBuddy for free</Texto>
                    <Lol>Transform more conversations into sales, leads,<br/> and conversions today</Lol>
                </Xyz>
                <Btn href="https://incredibles.dev" target="_blank">
                    <BtnInner>
                        <BtnHoverStyles data-label="Get Started" data-hover="Get Started">
                            <BtnLabelBackground />
                        </BtnHoverStyles>
                    </BtnInner>
                    <BtnBackground />
                </Btn>
           </Duck>
        </>
    );
};

export default Upperfoot;