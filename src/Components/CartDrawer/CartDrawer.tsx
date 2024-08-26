import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function CartDrawer({ isOpen, toggleDrawer }: any) {
  const cartDetails = useSelector(
    (state: any) => state.appState.cartInformation
  );

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography variant="h6">Shopping Cart</Typography> <span>X</span>
      <Divider />
      {cartDetails && cartDetails.length === 0 ? (
        <>No products in the cart.</>
      ) : (
        cartDetails.map((ele: any) => {
          return <div>{ele.productName}</div>;
        })
      )}
       <Link href={"/cart"}>View in cart</Link>
      <Button
        variant="contained"
        disableElevation
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Continue Shopping
      </Button>
    </Box>
  );

  return (
    <div>
      <Drawer
        open={isOpen}
        anchor={"right"}
        onClose={() => toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
