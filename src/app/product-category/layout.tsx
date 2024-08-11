"use client";
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import dynamic from "next/dynamic";
import { Container, Grid } from "@mui/material";

const Footer = dynamic(() => import("@/Layout/Partials/Footer"), {
  ssr: false,
});
const Header = dynamic(() => import("@/Layout/Partials/Header"), {
  ssr: false,
});
const SideBar = dynamic(() => import("@/Components/SideBar/sideBar"), {
  ssr: false,
});

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <CssBaseline />
      <Header />
      <Container>
        <Grid container spacing={2} pt={1}>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={9}>
          {children}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </section>
  );
}
