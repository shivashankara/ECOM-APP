'use client'
import { Typography } from "@mui/material";
import { SidebarMain } from "./sideBarStyle";
import { useState } from "react";
import Link from "next/link";
import { response } from "@/Mock/response";

export default function SideBar() {
  const [catList, setCatList] = useState<any>(response);
  

  return (
    <SidebarMain>
      <Typography variant="h5">Categories</Typography>
      {catList &&
        catList?.category.map((cat: any) => {
          return (
            <>
              <Link href={`${cat.url}`}>{cat.categoryName}</Link> <br />
            </>
          );
        })}
    </SidebarMain>
  );
}
