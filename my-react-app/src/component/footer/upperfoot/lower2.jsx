import React from "react";
import { Box, styled } from "@mui/material";
import { NavLink as Link } from "react-router-dom";

const Dear = styled(Box)`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  background: black;
  align-item:center;
  justify-content:center;
  margin-top:3%;
  padding-bottom:3%;
`;

const Fcuk = styled("p")`
  font-family: CoFo Sans Mono, sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.01em;
  color: white; /* Ensures text is always white */
`;

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
  cursor: pointer;
  position: relative;

  &:hover {
    color: white;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0; /* Adjust line position */
    left: 0;
    height: 1px;
    width: 0;
    background-color: white; /* White underline */
    z-index: 1;
    transition: width 0.2s linear;
  }

  &:hover::before {
    width: 100%; /* Expands to full width on hover */
  }
`;

const NavMenu = styled("div")`
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-family: CoFo Sans Mono, sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.01em;
  padding:0;
  gap: 20px;
  margin-left:2%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Lower2 = () => {
  return (
    <Dear>
      <Fcuk>©2025, BuzzBuddy, Inc.</Fcuk>
      <NavMenu>
        <NavLink to="#">PRIVACY POLICY</NavLink>
        <NavLink to="#">TERMS OF SERVICE</NavLink>
      </NavMenu>
    </Dear>
  );
};

export default Lower2;
