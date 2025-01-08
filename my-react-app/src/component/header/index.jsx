import React, { useState, useEffect } from "react";
import {Nav,NavLogo,NavLink,Bars,NavMenu,NavBtn,LanguageDropdownContainer,NavLink1} from './NavbarElements';
import Logo from '../../assets/logo.svg'
import LanguageSelectDropdown from './LanguageSelectDropdown'
import { colors } from "@mui/material";
import "./index.css"

const Navbar = () => {
    const [scrollShadow, setScrollShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrollShadow(true);
    } else {
      setScrollShadow(false);
    }

    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
        btn.classList.add('scrollShadow');
    } else {
        btn.classList.remove('scrollShadow');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <>
           <Nav scrollShadow={scrollShadow}>
            <NavLogo to="/">
                <img src={Logo}/>
            </NavLogo>
            <LanguageDropdownContainer>
                <LanguageSelectDropdown />
            </LanguageDropdownContainer>
            <Bars/>
            <NavMenu>
                <NavLink to="/" style={{color:"black"}}>PRODUCT</NavLink>
                <NavLink style={{color:"black"}}>SOLUTIONS</NavLink>
                <NavLink style={{color:"black"}}>AGENCIES</NavLink>
                <NavLink style={{color:"black"}}>PRICING</NavLink>
                <NavLink style={{color:"black"}}>RESOURCES</NavLink>
            </NavMenu>
            <NavBtn >
                <a href="https://incredibles.dev" class="btn " target="_blank" >
                    <span class="btn__inner">
                        <span class="btn__label" data-label="Get Started" data-hover="Get Started">
                            Get Started
                        <span class="btn__label__background"></span>
                        </span>
                    </span>
                    <span class="btn__background"></span>
                </a>
                    <NavLink1 to="/" style={{color:"black"}}>SIGN IN</NavLink1>
            </NavBtn>
           </Nav> 
        </>
    );
};

export default Navbar;