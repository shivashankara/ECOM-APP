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


import Category from "@/Components/Category/category";
import { response } from "@/Mock/response";
import Typography from "@mui/material/Typography";
import TodaysDealCard from "@/Components/TodaysDeal/TodaysDealCard";
import BrandLogo from "@/Components/BrandLogo/BrandLogo";
import Testimonial from "@/Components/Testimonial/Testimonial";

export default function Home() {
  const productListArray = Array.from({ length: 3 });
  return (
    <>
      <React.Fragment>
       
          <CssBaseline />
          <Header />
          <Banner />

          <Container disableGutters={true}>
            <Grid container mt={4}>
              <BoxWrapper mb={4}>
                {response.category.map((cat) => {
                  return (
                    <Grid item xs={3}>
                      <Category category={cat} />
                    </Grid>
                  );
                })}
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

            <Grid container pt={1}>
              <BoxWrapper>
                <Grid xs={12}>
                  <Typography variant="h6" gutterBottom>
                    <strong> Today’s best deal </strong>
                    <a href="#">See more</a>
                  </Typography>
                </Grid>
                {response.bestDeal.map((deal) => {
                  return (
                    <Grid item xs={3} mb={2}>
                      <TodaysDealCard
                        dealOftheDay={deal}
                        category={"bestDeal"}
                      />
                    </Grid>
                  );
                })}
              </BoxWrapper>
            </Grid>

            <Grid container pt={1}>
              <BoxWrapper>
                <Grid xs={12}>
                  <Typography variant="h6" gutterBottom>
                    <strong> Audio & Video</strong>
                    <a href="#">See more</a>
                  </Typography>
                </Grid>
                {response?.audio_vedio?.map((aAndv) => {
                  return (
                    <Grid item xs={3} mb={2}>
                      <TodaysDealCard
                        dealOftheDay={aAndv}
                        category={"audio_vedio"}
                      />
                    </Grid>
                  );
                })}
              </BoxWrapper>
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

            {/* <BoxWrapper style={{ display: "flex", marginTop: "16px" }}>
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
            </BoxWrapper> */}

            {/* <BoxWrapper style={{ display: "flex", marginTop: "16px" }}>
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
            </BoxWrapper> */}

            <Grid container pt={1}>
              <Grid item xs={12}>
                <img src="./" alt="" />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6" color="text.secondary">
                  <strong>Brand’s deal</strong>
                </Typography>
                <Typography variant="h4" component={"h4"}>
                  Save up to $200 on select Samsung washing machine
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img src="./Offer2.jpg" alt="" />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6" component={"h4"} fontWeight={"bold"}>
                  Top brands
                </Typography>
              </Grid>
              {response.brandLogo.map((logo) => {
                return (
                  <Grid item xs={2}>
                    <BrandLogo logo={logo} />
                  </Grid>
                );
              })}
            </Grid>
            <Grid container mt={3}>
              <Grid item xs={12}>
                <Typography variant="h5" component={"h5"} mb={2}>
                  What is everyone saying?
                </Typography>
              </Grid>
              {response.testimony.map((list) => {
                return (
                  <Grid item xs={4}  gap={'2px'}>
                    <Testimonial testimony={list} />
                  </Grid>
                );
              })}
              {/* <Grid item xs={4}>
                
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
              </Grid> */}
            </Grid>
            <br />
            <br />
            <br />
          </Container>

          <Footer />
      
      </React.Fragment>
    </>
  );
}
