import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function SimpleBadge() {
  const handleDrawerToggle = () => {};
  return (
    <Badge badgeContent={4} color="primary">
      <ShoppingCartIcon color="action" onClick={handleDrawerToggle} />
    </Badge>
  );
}
