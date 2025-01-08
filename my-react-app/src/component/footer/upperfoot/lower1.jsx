import React from "react";
import { Box, styled, Typography, Link } from "@mui/material";

// Styled components
const StyledSection = styled(Box)(({ theme }) => ({
  marginbottom:"100px",
}));

const Gfg=styled(Box)`
    background:black;
`

const Kgf=styled(Box)`
    gap:80px;
    display:flex;
    flexDirection:row;
`

const StyledFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection:"row",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(10),
  margin: "0 20%",
  paddingTop: theme.spacing(5),
  color: "black",
  textAlign:"left",
}));

const FooterColumn = styled(Box)(({ theme }) => ({
    maxWidth:"150px",
  "& h5": {
    marginBottom: theme.spacing(2),
    color: "white",
  },
  "& a": {
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    marginBottom: theme.spacing(1),
    display: "block",
    "&:hover": {
      color: "yellow",
    },
  },
}));

const Lower1 = () => {
  return (
    <Gfg>
        <StyledSection id="contact">
      <Box className="container">
        <StyledFooter>
          {/* Footer Column 1 */}
          <FooterColumn>
            <img src="https://mccdn.me/martech/next-lp//_next/static/media/logo-white.93c1c234.svg" width="50" height="50"></img>
          </FooterColumn>

          {/* Footer Column 2 */}
          <Kgf>
          <FooterColumn>
            <Typography variant="h5">Manychat</Typography>
            <Link href="#">About</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Privacy & Security</Link>
          </FooterColumn>

          {/* Footer Column 3 */}
          <FooterColumn>
            <Typography variant="h5">Agencies</Typography>
            <Link href="#">Hire on Agency</Link>
            <Link href="#">Join the Affiliates Program</Link>
          </FooterColumn>

          {/* Footer Column 4 */}
          <FooterColumn>
            <Typography variant="h5">Product</Typography>
            <Link href="#">Messenger</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Manychat AI</Link>
            <Link href="#">SMS Marketing</Link>
            <Link href="#">Integrations</Link>
            <Link href="#">For eCommerce</Link>
            <Link href="#">Changelog</Link>
            <Link href="#">Pricing</Link>
          </FooterColumn>

          <FooterColumn>
            <Typography variant="h5">Resources</Typography>
            <Link href="#">Status Page</Link>
            <Link href="#">Help Center</Link>
            <Link href="#">Community</Link>
            <Link href="#">Video Course</Link>
            <Link href="#">How To</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Privacy Settings</Link>
          </FooterColumn>
          </Kgf>
        </StyledFooter>
      </Box>
    </StyledSection>
    </Gfg>
    
  );
};

export default Lower1;
