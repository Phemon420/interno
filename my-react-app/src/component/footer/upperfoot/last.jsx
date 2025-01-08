import React from "react";
import { Box, styled } from "@mui/material";
import Lower1 from "./lower1";
import Lower2 from "./lower2";

const Kgf=styled(Box)`
    padding:0;
    margin:0;
    background:black;
`
const Last = () => {
    return (
        <Kgf>
           <Lower1/>
           <Lower2/>
        </Kgf>
    );
};

export default Last;