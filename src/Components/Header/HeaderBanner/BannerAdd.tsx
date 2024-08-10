'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BannerAddStyle } from "./BannerAddStyle";
import Image from "next/image";

const card = (
  <React.Fragment>
    <CardContent>
      <Image
        src="/electronic-store-brand-logo-00.png"
        height={30}
        width={120}
        alt="advertise-image"
      />

      <Typography
        sx={{
          fontSize: "2.0rem",
          fontWeight: 600,
          lineHeight: "1.3em",
          color: "#27323f",
        }}
        color="text.secondary"
        gutterBottom
      >
        The best home entertainment system is here
      </Typography>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.
      </Typography>
      <Typography variant="body2"></Typography>
    </CardContent>
    <CardActions>
      <Button size="small">
        <strong>Shop Now</strong>
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function BannerAdd() {
  return (
    <BannerAddStyle>
      <Card variant="outlined">{card}</Card>
    </BannerAddStyle>
  );
}
