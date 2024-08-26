'use client'
import CheckOutForm from "@/Components/Checkout/CheckOutForm";
import { Container, Grid, Typography } from "@mui/material";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import { Wrapper } from "./checkoutStyle";
import OrderDetails from "@/Components/OrderDetails/OrderDetails";


export default function Page() {
  return (
    <Wrapper>
      <Container disableGutters>
        <Grid container spacing={2} mt={3}>
          <Grid item xs={6}>
            <Typography variant="h6" >Customer information</Typography>
            <CheckOutForm />
          </Grid>
          <Grid item xs={6}>
          <Typography variant="h6" >Your order</Typography>
          <OrderDetails />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
