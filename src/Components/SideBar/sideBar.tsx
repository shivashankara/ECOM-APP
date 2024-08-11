'use client'
import { Typography } from "@mui/material";
import { SidebarMain } from "./sideBarStyle";
import { useState } from "react";
import Link from "next/link";

export default function SideBar() {
  const [catList, setCatList] = useState<any>([
    {
      id: "001",
      productName: "Air conditioner",
      url: "air-conditioner",
    },
    {
      id: "001",
      productName: "Audio & video",
      url: "audio-video",
    },
    {
      id: "001",
      productName: "Gadgets",
      url: "gadgets",
    },
    {
      id: "001",
      productName: "Home appliances",
      url: "home-appliances",
    },
    {
      id: "002",
      productName: "Kitchen appliances",
      url: "kitchen-appliances",
    },
    {
      id: "003",
      productName: "Refrigerator",
      url: "refrigerator",
    },
    {
      id: "004",
      productName: "Smart home",
      url: "smart-home",
    },
    {
      id: "005",
      productName: "PCs & laptop",
      url: "pcs-laptop",
    },
  ]);

  

  return (
    <SidebarMain>
      <Typography variant="h5">Categories</Typography>
      {catList &&
        catList.map((cat: any) => {
          return (
            <>
              <Link href={`${cat.url}`}>{cat.productName}</Link> <br />
            </>
          );
        })}
    </SidebarMain>
  );
}
