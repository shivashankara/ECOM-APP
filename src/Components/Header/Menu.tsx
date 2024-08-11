"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuWrapper } from "./MenuStyle";

const menuList = [
  { menuName: "AirConditioner", url: "/product-category/air-conditioner" },
  { menuName: "Kitchen Appliances", url: "/product-category/kitchen-appliances" },
  { menuName: "Gadgets", url: "/product-category/gadgets" },
  { menuName: "New arrivals", url: "#" },
  { menuName: "Today's deal", url: "#" },
];
export default function AppMenu() {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <MenuWrapper>
        {menuList.map((menu) => {
          return (
            <Link
              className={`link ${pathname === menu.menuName} ? "active" : ""}`}
              href={menu.url}
            >
              {menu.menuName}
            </Link>
          );
        })}
      </MenuWrapper>
    </React.Fragment>
  );
}
