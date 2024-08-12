"use client";
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import dynamic from "next/dynamic";
import { Container, Grid, CardMedia, Typography } from "@mui/material";
import { BoxWrapper } from "@/Components/Common/Styles";
import { PrimaryContentArea } from "./layout.style";
import { getCategory } from "@/Services/Category/category-service";
import Link from "next/link";

const Footer = dynamic(() => import("@/Layout/Partials/Footer"), {
  ssr: false,
});
const Header = dynamic(() => import("@/Layout/Partials/Header"), {
  ssr: false,
});

export default function Page() {

  return (
    <>
      <Container disableGutters={true}>
      
            <PrimaryContentArea>Product List</PrimaryContentArea>
         
      </Container>
      {/* <Footer /> */}
    </>
  );
}
