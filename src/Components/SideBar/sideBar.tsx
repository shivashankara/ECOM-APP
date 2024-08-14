"use client";
import { Typography } from "@mui/material";
import { SidebarMain } from "./sideBarStyle";
import { useState } from "react";
import Link from "next/link";
import { response } from "@/Mock/response";
import PriceSlider from "../PriceSlider/PriceSlider";

export default function SideBar() {
  const [catList, setCatList] = useState<any>(response);
  return (
    <SidebarMain>
      <Typography
        variant="h5"
        sx={{ marginBottom: "50px", fontWeight: "bold" }}
      >
        Categories
      </Typography>
      {catList &&
        catList?.category.map((cat: any) => {
          return (
            <>
              <Link href={`${cat.navUrl}`}>{cat.categoryName}</Link> <br />
            </>
          );
        })}

      <Typography
        variant="h5"
        sx={{ marginBottom: "50px", fontWeight: "bold" }}
      >
        Filter by price
        <PriceSlider />
      </Typography>
      <Typography
        variant="h5"
        sx={{ marginBottom: "50px", fontWeight: "bold" }}
      >
        Average rating
      </Typography>
    </SidebarMain>
  );
}
