"use client";
import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { usePathname } from "next/navigation";

import dynamic from "next/dynamic";
import { Box, Container, Grid } from "@mui/material";

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
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProductDetailsPage = pathname.includes("/product/");

  return (
    <section>
      <CssBaseline />
      <Header />
      <Container disableGutters>
        {!isProductDetailsPage ? (
          <Grid container pt={1}>
            <Grid item xs={3}>
              <SideBar />
            </Grid>
            <Grid item xs={9}>
              <Box pl={8}>{children}</Box>
            </Grid>
          </Grid>
        ):children}
      </Container>
      <Footer />
    </section>
  );
}
