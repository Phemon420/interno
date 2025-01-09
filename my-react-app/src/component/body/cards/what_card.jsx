import {React,useState} from "react";
import { colors, styled } from "@mui/material";
import what from "../../../assets/channels_whatsapp.svg";
import { Box } from "@mui/material";
import appoint from "../../../assets/appointment.png";

const CardContainer = styled(Box)`
  background: #edf2ed;
  color: black;
  overflow: hidden;
  width: 360px;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 35px;
  padding-bottom: 45px;
  cursor: pointer;
  margin:0;
  
  ${({ isHovered }) =>
    isHovered &&
    `
    .navlink {
      color: black;
    }

    .navlink::before {
      width: 100%;
    }

    .arrow-div::before {
      opacity: 0;
      transform: translate3d(120%, 0, 0);
    }

    .arrow-div::after {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `}
`;

const ImageContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
`;

const TextContainer = styled(Box)`
  color: black;
  display: block;
`;

const ButtonContainer = styled(Box)`
  position:relative;
  display:flex;
  text-transform: uppercase;
  align-items: center;
  ${'' /* justify-content: center; */}
    font-family: CoFo Sans Mono, sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: .01em;
    color: black;
`;

const Lol=styled("a")`
    outline: 0;
    color: inherit;
    text-decoration: none;
    transition: color .3s;
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    display: inline-block;
    padding-left:5%;
    color: black;
`

const Gfg=styled("p")`
    font-size: 1.5rem;
    line-height:1.2;
    font-weight:700;
    align-items: center;
    text-align: left; 
    letter-spacing: 1px;
    color: black;
`

const Abc=styled("p")`
    font-size: 1.2 rem;
    line-height:1.5;
    margin-top: 0.8 rem;
    font-weight:500;
    align-items: center;
    text-align: left; 
    color: black;
`

export const NavLink1 = styled("Link")`
  background:transparent;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
  appearance: none;
  outline: none;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  box-shadow: inset 0 -1px 1px -1px black, inset 0 -1px 1px -1px black;
  cursor: pointer;
  position: relative;
  &:hover {
    color: black;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0;
    background-color: black;
    z-index: 1;
    transition: width 0.2s linear;
  }

  &:hover::before {
    width: 100%; 
  }
`

const ArrowDiv = styled("div")`
  position: relative;
  /*left: calc(1% + 1px);*/
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex; /* Use flex to align within its parent container */
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top:50%;
    width: 1.6rem;
    height: 1.6rem;
    margin: -0.8rem;
    background: url("https://mccdn.me/martech/next-lp/_next/static/media/ArrowRight-black.7c561375.svg") no-repeat 50%;
    transition: transform 0.5s cubic-bezier(0.43, 0.195, 0.02, 1), opacity 0.5s cubic-bezier(0.43, 0.195, 0.02, 1);
  }

  /* The arrow after (initially hidden, will slide in on hover) */
  &::after {
    transform: translate3d(-80%, 0, 0);
    opacity: 0;
  }

  /* Hover effect */
  &:hover::before {
    opacity: 0;
    transform: translate3d(120%, 0, 0); /* Move arrow to the right and fade out */
  }

  &:hover::after {
    opacity: 1;
    transform: translate3d(0, 0, 0); /* Arrow appears from the left */
  }
`


const What = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    isHovered={isHovered}>
        <Lol>
            <ImageContainer>
                <img src={appoint} loading="lazy" width="70" height="64"/>
            </ImageContainer>

            <TextContainer>
                <Gfg>Appointment booking</Gfg>
                <Abc>
                  After sales support, could enable trouble shooting step by step
                  Customer service, asking information about order and track locations, inventories, deals
                </Abc>
            </TextContainer>

            <ButtonContainer>
                <NavLink1 className="navlink" to="/" style={{color:"black"}}>Learn More</NavLink1>
                <ArrowDiv className="arrow-div"/>
            </ButtonContainer>
        </Lol>
    </CardContainer>
  );
};

export default What;