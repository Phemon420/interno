import {React} from "react";
import { colors, styled } from "@mui/material";
import { Box } from "@mui/material";
import L2 from "./l2.jsx";
import L4 from "./l4.jsx";
import R1 from "./r1.jsx";
import R3 from "./r3.jsx";
import R5 from "./r5.jsx";
import Text1 from "./text1.jsx";
import Text2 from "./text2.jsx";

const Fufi=styled(Box)`
    margin-top:30px;
    align-items:center;
    display:flex;
    justify-content:center;
    flex-direction:column;
`
const Middlebody= () => {
    return (
        <>
            <Fufi>
                <Text1/>
                <R1/>
                <L2/>
                <R3/>
                <L4/>
                <R5/>
                <Text2/>
            </Fufi>
        </>
    );
};

export default Middlebody;