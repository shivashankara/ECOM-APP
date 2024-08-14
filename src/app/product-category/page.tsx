"use client";
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import dynamic from "next/dynamic";
import { Container, Grid, CardMedia, Typography } from "@mui/material";

import { PrimaryContentArea } from "./layout.style";


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
