import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Link from "next/link";
import ItemInCart from "../ItemIncart/ItemInCart";
import { DrawerWrapper } from "./CartDrawerStyle";

export default function CartDrawer({ isOpen, toggleDrawer }: any) {
  const cartDetails = useSelector(
    (state: any) => state.appState.cartInformation
  );

  const DrawerList = (
    <DrawerWrapper>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Shopping Cart</Typography>{" "}
        <span style={{ cursor: "pointer" }} onClick={toggleDrawer(false)}>
          X
        </span>
      </header>
      <Divider />
      <div className="contentArea">
        
        {cartDetails && cartDetails.length === 0 ? (
          <>No products in the cart.</>
        ) : (
          cartDetails.map((ele: any) => {
            return <ItemInCart cartList={ele} />;
          })
        )}
      </div>
      <div className="footerArea">
        <Link href={"/cart"}>
          <Button
            variant="contained"
            disableElevation
            sx={{ display: "flex", justifyContent: "center" }}
            fullWidth
          >
            View in Cart
          </Button>
        </Link>
        <Link href={"/checkout"}>
          <Button
            variant="contained"
            disableElevation
            sx={{ display: "flex", justifyContent: "center" }}
            fullWidth
          >
            Checkout
          </Button>
        </Link>
      </div>
    </DrawerWrapper>
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
