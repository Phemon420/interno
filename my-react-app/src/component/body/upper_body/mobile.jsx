import {React} from "react";
import { colors, styled } from "@mui/material";
import mobile from "../../../assets/mobile.png"
import { Box } from "@mui/material";

const Holi=styled('img')`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    margin: 0;
    display: block;
`

const Mobi= () => {
    return (
        <>
        <Box>
            <Holi src={mobile}></Holi>
        </Box>
        </>
    );
};

export default Mobi;