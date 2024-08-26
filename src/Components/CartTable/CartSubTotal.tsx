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


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const applyCoupon = () => {};

export default function CartSubTotal() {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: "600" }}>
          Cart totals
        </Typography>
        <Divider />
        <strong>Subtotal :</strong> $5,315.00
        <Divider />
        <strong>Total :</strong> $5,315.00
        <Divider />
        <Box sx={{display:'flex', justifyContent:'space-between', marginTop:'20px'}}>
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
      <CardActions sx={{justifyContent:'center'}}>
        <Link href="/checkout" >
        <Button size="large" variant="contained" color="primary" >
          Proceced to checkout
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
