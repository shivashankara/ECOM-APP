"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import dynamic from "next/dynamic";
import { Container, Grid, CardMedia } from "@mui/material";
import { BoxWrapper } from "@/Components/Common/Styles";

const Footer = dynamic(() => import("@/Layout/Partials/Footer"), {
  ssr: false,
});
const Header = dynamic(() => import("@/Layout/Partials/Header"), {
  ssr: false,
});
const Banner = dynamic(
  () => import("@/Components/Header/HeaderBanner/Banner"),
  { ssr: false }
);
const ProductList = dynamic(
  () => import("@/Components/ProductList/ProdcutList"),
  { ssr: false }
);
const AvailableServices = dynamic(
  () => import("@/Components/Header/HeaderBanner/AvailableService"),
  { ssr: false }
);

import { Provider } from "react-redux";
import store from "@/Redux/store";

// console.log("state",window.store)
export default function Home() {
  const productListArray = Array.from({ length: 3 });
  return (
    <>
      <React.Fragment>
        <Provider store={store}>
          <CssBaseline />

          <Header />
          <Banner />

          <Container disableGutters={true}>
            <Grid container mt={4}>
              <BoxWrapper style={{ width: "100%", display: "flex" }} mb={4}>
                <Grid item xs={3}>
                  <img
                    src="https://picsum.photos/200/300"
                    alt=""
                    height={"200px"}
                    width={"250px"}
                  />
                  <div>Description</div>
                </Grid>
                <Grid item xs={3}>
                  <img
                    src="https://picsum.photos/200/300"
                    alt=""
                    height={"200px"}
                    width={"250px"}
                  />
                  <div>Description</div>
                </Grid>
                <Grid item xs={3}>
                  <img
                    src="https://picsum.photos/200/300"
                    alt=""
                    height={"200px"}
                    width={"250px"}
                  />
                  <div>Description</div>
                </Grid>
                <Grid item xs={3}>
                  <img
                    src="https://picsum.photos/200/300"
                    alt=""
                    height={"200px"}
                    width={"250px"}
                  />
                  <div>Description</div>
                </Grid>
              </BoxWrapper>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                <img src="./Offer1.jpg" alt="" />
              </Grid>
              <Grid item xs={6}>
                <img src="./Offer2.jpg" alt="" />
              </Grid>
            </Grid>

            <BoxWrapper style={{ display: "flex", marginTop: "16px" }}>
              <Grid container pt={1}>
                <Grid item xs={12}>
                  <div>New Arrivals</div>
                </Grid>
                {productListArray.map((_, index) => (
                  <Grid item xs={4}>
                    <ProductList key={index} />
                  </Grid>
                ))}
              </Grid>
            </BoxWrapper>

            <BoxWrapper style={{ width: "100%", marginTop: "16px" }}>
              <Grid container pt={1}>
                {productListArray.map((_, index) => (
                  <Grid item xs={3}>
                    <ProductList key={index} />
                  </Grid>
                ))}
              </Grid>
            </BoxWrapper>

            <BoxWrapper style={{ display: "flex", marginTop: "16px" }}>
              <Grid container pt={1}>
                <Grid item xs={12}>
                  <div>Audio and Video</div>
                </Grid>
                {productListArray.map((_, index) => (
                  <Grid item xs={4}>
                    <ProductList key={index} />
                  </Grid>
                ))}
              </Grid>
            </BoxWrapper>

            <BoxWrapper style={{ display: "flex", marginTop: "16px" }}>
              <Grid container pt={1}>
                <Grid item xs={12}>
                  <div>Home appliances See more</div>
                </Grid>
                {productListArray.map((_, index) => (
                  <Grid item xs={4}>
                    <ProductList key={index} />
                  </Grid>
                ))}
              </Grid>
            </BoxWrapper>

            <BoxWrapper style={{ display: "flex", marginTop: "16px" }}>
              <Grid container pt={1}>
                <Grid item xs={12}>
                  <div>Air conditioner See more</div>
                </Grid>
                {productListArray.map((_, index) => (
                  <Grid item xs={4}>
                    <ProductList key={index} />
                  </Grid>
                ))}
              </Grid>
            </BoxWrapper>

            <Grid container pt={1}>
              <Grid item xs={12}>
                <img src="./" alt="" />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                Brand Deal
              </Grid>
              <Grid item xs={6}>
                <img src="./Offer2.jpg" alt="" />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                Top brands
              </Grid>
              <Grid item xs={2}>
                image1
              </Grid>
              <Grid item xs={2}>
                image1
              </Grid>
              <Grid item xs={2}>
                image1
              </Grid>
              <Grid item xs={2}>
                image1
              </Grid>
              <Grid item xs={2}>
                image1
              </Grid>
              <Grid item xs={2}>
                image1
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                What is everyone saying?
              </Grid>
              <Grid item xs={4}>
                5/5 Dolores porro laboriosam molestias est quo. Et et eos.
                Ab error modi labore sed eaque est. Quaerat aut est fugiat.
                Rafael Stokes
              </Grid>
              <Grid item xs={4}>
                5/5 Dolores porro laboriosam molestias est quo. Et et eos.
                Ab error modi labore sed eaque est. Quaerat aut est fugiat.
                Rafael Stokes
              </Grid>
              <Grid item xs={4}>
                5/5 Dolores porro laboriosam molestias est quo. Et et eos.
                Ab error modi labore sed eaque est. Quaerat aut est fugiat.
                Rafael Stokes
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
          </Container>

          <Footer />
        </Provider>
      </React.Fragment>
    </>
  );
}
