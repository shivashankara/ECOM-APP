'use client'

import Header from "@/Layout/Partials/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Grid, CardMedia, Typography } from "@mui/material";
import { PrimaryContentArea, SidebarMain } from "./layout.style";
import Footer from "@/Layout/Partials/Footer";

export default function TemplateProductList({ children }: { children: React.ReactNode }) {
    
  return (
    <>
      <CssBaseline />
      <Header />
      <Container disableGutters={true}>
        <Grid container mt={4}>
          <Grid item xs={4}>
            <SidebarMain>
              <Typography variant="h5">Categories</Typography>

              {/* {catList &&
                catList.map((cat: any) => {
                  return (
                    <>
                      <a href={cat.url}>{cat.productName}</a> <br />
                    </>
                  );
                })} */}
            </SidebarMain>
          </Grid>
          <Grid item xs={8}>
            <TemplateProductList>
              {/* <PrimaryContentArea>Product List</PrimaryContentArea> */}
              <main>{children}</main>
            </TemplateProductList>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>    
);
}
