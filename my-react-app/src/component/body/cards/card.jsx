import React from "react";
import { Box, styled } from "@mui/material";
import Face from "./face_card";
import Insta from "./insta_card";
import What from "./what_card";

const Cde = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding: 0;
    gap: 10px;
    margin-left: 16%;
    margin-right: 14%; 

    & > div {
        flex-grow: 1;
        transition: transform 0.3s ease;
    }

    & > div:hover {
        transform: scale(1.05);
    }

    & > div:hover ~ div {
        transform: translateX(20px);
    }

    & > div:not(:hover) {
        transform: translateX(-20px);
    }
`;

const Card = () => {
    return (
        <Cde>
           <Box><Insta /></Box>
           <Box><What /></Box>
           <Box><Face /></Box>
        </Cde>
    );
};

export default Card;
