'use client'
import Image from "next/image";
import BannerAdd from "./BannerAdd";
import AvailableServices from "./AvailableService";
import { Container, Grid } from "@mui/material";

export default function Banner() {
  return (
    <div style={{ position: "relative", width: "100%", height: "672px" }}>
      <Image
        src="/electronic-store-hero-image.jpg"
        layout="fill" 
        objectFit="cover" 
        alt="banner"
      />
      <Container disableGutters={true} maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BannerAdd />  
            <AvailableServices />         
          </Grid>
          </Grid>
      </Container>
    </div>
  );
}
