// import { FaBars } from "react-icons/fa";
// import { NavLink as Link } from "react-router-dom";
// import styled from "styled-components";

// export const Nav = styled.nav`
//   background: white;
//   height: 85px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
//   z-index: 999;
//   width: 100%;
//   position: sticky;
//   top: 0;
//   border-radius: 0;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   @media screen and (max-width: 768px) {
//     padding: 0 10px;
//   }
//   padding:0;
// `;

// export const NavLogo = styled(Link)`
//   cursor: pointer;
//   color: #fff;
//   font-size: 2rem;
//   text-decoration: none;
//   margin-left:2%;
//   padding:0;
//   border:none;
// `;


// export const NavLink = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0;
//   height: 100%;
//   cursor: pointer;
//   position: relative;

//   &:hover {
//     color: black;
//   }

//   &::before {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     height: 1px;
//     width: 0;
//     background-color: black;
//     z-index: 1;
//     transition: width 0.2s linear;
//   }

//   &:hover::before {
//     width: 100%; 
//   }
// `;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #fff;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 50%;
//     right: 20px;
//     transform: translateY(-50%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.div`
//   justify-content: space-between;
//   display: flex;
//   align-items: center;
//   margin-left:12%;
//   margin-right: 12%;
//   font-family: CoFo Sans Mono, sans-serif;
//   font-weight: 400;
//   font-size: 0.85rem;
//   letter-spacing: .01em;
//   gap: 40px;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   ${'' /* margin-left: 5%; */}
//   margin-right:2%;
//   font-family: CoFo Sans Mono, sans-serif;
//   font-weight: 400;
//   font-size: 0.85rem;
//   letter-spacing: .01em;
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// // export const NavBtnLink = styled(Link)`
// //   border-radius: 4px;
// //   background: transparent;
// //   padding: 10px 22px;
// //   color: #fff;
// //   border: 1px solid #3b42c4;
// //   cursor: pointer;
// //   transition: all 0.2s ease-in-out;
// //   text-decoration: none;
// //   border-radius: 25px;
// //   /*background: #fff;*/
// //   transition: border-color .3s ease, background .3s ease, transform .3s ease;
// //   transform: translateZ(0);
// //   background: inherit;
// //   &:hover {
// //     transition: all 0.2s ease-in-out;
// //     background: #fff;
// //     color:rgb(205, 44, 44);
// //   }
// // `;

// export const LanguageDropdownContainer = styled.div`
//   margin-right:5%;
//   margin-left:-3%;
// `;


// export const NavLink1 = styled(Link)`
//   margin-left:20px;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0;
//   height: 100%;
//   cursor: pointer;
//   position: relative;
//   gap:20px;
//   &:hover {
//     color: black;
//   }

//   &::before {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     height: 1px;
//     width: 0;
//     background-color: black;
//     z-index: 1;
//     transition: width 0.2s linear;
//   }

//   &:hover::before {
//     width: 100%; 
//   }
// `;










import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: white;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 999;
  width: 100%;
  position: sticky;
  top: 0;
  border-radius: 0;
  box-shadow: ${(props) => (props.scrollShadow ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none")}; 
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
  padding: 0;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  margin-left: 2%;
  padding: 0;
  border: none;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
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
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-left: 12%;
  margin-right: 12%;
  font-family: CoFo Sans Mono, sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.01em;
  gap: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 2%;
  font-family: CoFo Sans Mono, sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: 0.01em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LanguageDropdownContainer = styled.div`
  margin-right: 5%;
  margin-left: -3%;
`;

export const NavLink1 = styled(Link)`
  margin-left: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 100%;
  cursor: pointer;
  position: relative;
  gap: 20px;

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
`;