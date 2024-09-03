"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider, TextField } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";

const applyCoupon = () => {};

export default function CartSubTotal() {
  const cartProduct = useSelector(
    (state: any) => state.appState.cartInformation
  );

  const subTotal = () => {
    const total = cartProduct.map((item: any) => {
      return item.offerPrice * item.buyQuantity;
    });

    const allTotal = total.reduce((acc: number, item: number) => {
      return acc + item;
    });
    return allTotal;
  };

  return (
    <Card sx={{ minWidth: 275 }}>
     
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: "600" }}>
          Cart totals
        </Typography>
        <Divider />
        <strong>Subtotal :</strong> ${cartProduct.length > 0 ? subTotal() : ""};
        <Divider />
        <strong>Total :</strong> $ {cartProduct.length > 0 ? subTotal() : ""};
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Have a coupon?"
            variant="outlined"
          />
          <Button variant="contained" color="primary" onClick={applyCoupon}>
            Apply
          </Button>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link href="/checkout">
          <Button size="large" variant="contained" color="primary">
            Proceced to checkout
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
