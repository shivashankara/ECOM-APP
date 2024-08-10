'use client';
import { Container, Grid } from "@mui/material";

export default function FooterMenu() {
  return (
    <>
    <hr />
    <Container disableGutters={true} maxWidth="lg" >
      <Grid container spacing={2} pt={3} pb={3} mb={8}>
        <Grid item xs={3}>
          Trader mark logo
        </Grid>
        <Grid item xs={3}>
          Shop
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
          Need help?
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
          Contact
          <address>
            123 Fifth Avenue, New York, NY 10160 contact@info.com 929-242-6868
          </address>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}
