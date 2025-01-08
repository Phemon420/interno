import React from "react";
//import Logo from '../../assets/logo.svg'
import { colors } from "@mui/material";
import ImageCarousel from "./carousel";
import Card1 from "./card1";
import Card2 from "./card2";

const Lowerbody = () => {
    return (
        <>
           <ImageCarousel/>
           <Card1/>
           <Card2/>
        </>
    );
};

export default Lowerbody;