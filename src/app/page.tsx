"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import dynamic from "next/dynamic";
import { Container, Grid } from "@mui/material";
import { BoxWrapper } from "@/Components/Common/Styles";
import Image from "next/image";

// Shared loading component for dynamic imports
const LoadingFallback = () => <div>Loading...</div>;

const Footer = dynamic(() => import("@/Layout/Partials/Footer"), {
  ssr: false,
  loading: LoadingFallback,
});
const Header = dynamic(() => import("@/Layout/Partials/Header"), {
  ssr: false,
  loading: LoadingFallback,
});
const Banner = dynamic(
  () => import("@/Components/Header/HeaderBanner/Banner"),
  {
    ssr: false,
    loading: LoadingFallback,
  },
);
const ProductList = dynamic(
  () => import("@/Components/ProductList/ProdcutList"),
  {
    ssr: false,
    loading: LoadingFallback,
  },
);

import Category from "@/Components/Category/category";
import { response } from "@/Mock/response";
import Typography from "@mui/material/Typography";
import TodaysDealCard from "@/Components/TodaysDeal/TodaysDealCard";
import BrandLogo from "@/Components/BrandLogo/BrandLogo";
import Testimonial from "@/Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Banner />

      <Container disableGutters={true}>
        <Grid container mt={4}>
          <BoxWrapper mb={4}>
            {response.category.map((cat) => {
              return (
                <Grid item xs={3} key={cat.id}>
                  <Category category={cat} />
                </Grid>
              );
            })}
          </BoxWrapper>
        </Grid>

        <Grid container>
          <Grid item xs={6}>
            <Image
              src="/Offer1.jpg"
              alt="Offer 1"
              width={500}
              height={300}
              fetchpriority="high"
            />
          </Grid>
          <Grid item xs={6}>
            <Image
              src="/Offer2.jpg"
              alt="Offer 2"
              width={500}
              height={300}
              fetchpriority="high"
            />
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
            <Grid container spacing={2}>
              {response.bestDeal.map((deal) => {
                return (
                  <Grid item xs={3} mb={2} key={deal.id}>
                    <TodaysDealCard dealOftheDay={deal} category={"bestDeal"} />
                  </Grid>
                );
              })}
            </Grid>
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
            <Grid container spacing={2}>
              {response?.audio_vedio?.map((aAndv) => {
                return (
                  <Grid item xs={3} mb={2} key={aAndv.id}>
                    <TodaysDealCard
                      dealOftheDay={aAndv}
                      category={"audio_vedio"}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </BoxWrapper>
        </Grid>

        <BoxWrapper>
          <Grid item xs={12}>
            <div>New Arrivals</div>
          </Grid>
          <Grid container spacing={2}>
            {[0, 1, 2, 3].map((index) => (
              <Grid item xs={3} key={`product-${index}`}>
                <ProductList />
              </Grid>
            ))}
          </Grid>
        </BoxWrapper>

        <Grid container pt={1}>
          <Grid item xs={12}>
            {/* <Image src="" alt="" /> */}
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
            <Image
              src="/Offer2.jpg"
              alt="Samsung washing machine offer"
              width={500}
              height={300}
              fetchpriority="high"
            />
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
              <Grid item xs={2} key={logo.id}>
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
              <Grid item xs={4} gap={"2px"} key={list.id}>
                <Testimonial testimony={list} />
              </Grid>
            );
          })}
        </Grid>
        <br />
        <br />
        <br />
      </Container>

      <Footer />
    </>
  );
}
