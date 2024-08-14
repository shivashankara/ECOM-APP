"use client";

import CartButton from "@/Components/CartButton/CartButton";
import ProductImageGallery from "@/Components/ProductImageGallery/productImageGallery";
import { getProduct } from "@/helper/productDetailsHelper";
import { Grid, Container, Typography, Button } from "@mui/material";

import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<any>(null);
  useEffect(() => {
    const res = getProduct(params.slug);
    if (res !== null) {
      setProduct(res);
    }
  }, [product]);

  return (
    <>
      {product && (
        // <Container disableGutters >
        <Grid container spacing={2} pt={2}>
          <Grid item sm={6}>
            <ProductImageGallery />
          </Grid>

          <Grid item sm={6}>
            <strong style={{ fontWeight: "800", fontSize: "24px" }}>
              {product?.productTittle}
            </strong>
            <s>${product.actualPrice}</s> <span>${product.offerPrice}</span>
            <b>Key features</b>
            <ul>
              {product.keyFeatures.map((feat: string, index: number) => {
                return <li key={index}>{feat}</li>;
              })}
            </ul>
            <div style={{display:'flex', gap:'15px'}}>
              <CartButton />
              <Button variant="contained" >Add to cart</Button>
            </div>
            <hr />
            <Typography variant="body1"> Category: Home appliances</Typography>
          </Grid>
        </Grid>
        // </Container>
      )}
    </>
  );
}
