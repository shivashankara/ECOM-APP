'use client'
import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

export default function SimpleBadge() {

  const cartCount = useSelector((state: any) => state.appState.cartInformation); 
   
  const handleDrawerToggle = () => {};
  return (
    <Badge badgeContent={cartCount?.length} color="primary">
      <ShoppingCartIcon color="action" onClick={handleDrawerToggle} />
    </Badge>
  );
}

