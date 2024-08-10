"use client";
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import dynamic from "next/dynamic";
import { Container, Grid, CardMedia, Typography } from "@mui/material";
import { BoxWrapper } from "@/Components/Common/Styles";
import { PrimaryContentArea, SidebarMain } from "./layout.style";
import { getCategory } from "@/Services/Category/category-service";
import Link from "next/link";

const Footer = dynamic(() => import("@/Layout/Partials/Footer"), {
  ssr: false,
});
const Header = dynamic(() => import("@/Layout/Partials/Header"), {
  ssr: false,
});
const TemplateProductList = dynamic(() => import("./template"), {
  ssr: false,
});

export default function Page() {
  const [catList, setCatList] = useState<any>();
  const fetchData = async () => {
    const res = await getCategory();
    setCatList(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [catList]);
  return (
    <>
      <CssBaseline />
      <Header />

      <Container disableGutters={true}>
        <Grid container mt={4}>
          <Grid item xs={4}>
            <SidebarMain>
              <Typography variant="h5">Categories</Typography>
              {catList &&
                catList.map((cat: any) => {
                  return (
                    <>
                      <a href={cat.url}>{cat.productName}</a> <br />
                    </>
                  );
                })}
            </SidebarMain>
          </Grid>
          <Grid item xs={8}>
            <TemplateProductList>
              <PrimaryContentArea>Product List</PrimaryContentArea>
            </TemplateProductList>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
