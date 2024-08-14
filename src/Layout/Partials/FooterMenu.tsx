'use client';
import { Container, Grid } from "@mui/material";
import { FooterWrapper } from "./Footer.style";

export default function FooterMenu() {
  return (
    <>
    <hr />
    <Container disableGutters={true} maxWidth="lg" >
      <Grid container spacing={2} pt={3} pb={3} mb={8}>
        <FooterWrapper >
        <Grid item xs={3}>
         <strong> Trader mark logo</strong>
        </Grid>
        <Grid item xs={3}>
         <strong>Shop</strong> 
          <ul>
            <li>
              <a href="#">Hot deals</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#">Rebates</a>
            </li>
            <li>
              <a href="#">Weekly deals</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={3}>
         <strong>Need help?</strong> 
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Order tracking</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Return policy</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={3}>
         <strong>Contact</strong> 
          <address>
            123 Fifth Avenue, New York, NY 10160 contact@info.com 929-242-6868
          </address>
        </Grid>
        </FooterWrapper>
      </Grid>
    </Container>
    </>
  );
}
