"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuWrapper } from "./MenuStyle";
import { response } from "@/Mock/response";


export default function AppMenu() {
  const pathname = usePathname();
  return (
    <React.Fragment>
      <MenuWrapper>
        {response?.category.map((menu) => {
          return (
            <Link
              className={`link ${pathname === menu.categoryName} ? "active" : ""}`}
              href={`/product-category/${menu.navUrl}`}
            >
              {menu.categoryName}
            </Link>
          );
        })}
      </MenuWrapper>
    </React.Fragment>
  );
}
