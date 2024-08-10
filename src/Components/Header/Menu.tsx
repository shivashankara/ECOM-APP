'use client';
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { MenuWrapper } from "./MenuStyle";

const menuList = [
  {menuName:"AirConditioner", url:'product-category/gadget'},
  {menuName:"Kitchen Appliances", url:'product-category/gadget'},
  {menuName:"Gadgets", url:'product-category/gadget'},
  {menuName:"New arrivals", url:'product-category/gadget'},
  {menuName:"Today's deal", url:'product-category/gadget'},
];
export default function AppMenu() {
  return (
    <React.Fragment>    
        <MenuWrapper>
        {menuList.map((menu) => {
          return <Link href={menu.url}>{menu.menuName}</Link>
        })}
        </MenuWrapper>
    </React.Fragment>
  );
}
