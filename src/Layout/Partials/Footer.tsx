"use client";
import { Box, Container, Grid } from "@mui/material";
import { FooterStyle } from "./Footer.style";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <>
      <FooterMenu />
      <FooterStyle>
        <Container disableGutters={true} maxWidth="lg">
          {/* Top */}
          <Grid container spacing={2} pt={1}>
            <Grid item xs={6}>
              <div className="copy-right">
                {" "}
                © 2024 Electronic Store. Powered by Electronic Store
              </div>
            </Grid>
            <Grid item xs={6}>
              <ul className="cardIcon">
                <li>Card 1</li>
                <li>Card 2</li>
                <li>Card 3</li>
                <li>Card 4</li>
              </ul>
            </Grid>
          </Grid>
          {/* center */}
        </Container>
      </FooterStyle>
    </>
  );
}
