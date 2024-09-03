"use client";

import CartButton from "@/Components/CartButton/CartButton";
import ProductImageGallery from "@/Components/ProductImageGallery/productImageGallery";
import { getProduct } from "@/helper/productDetailsHelper";
import { addToCart } from "@/Redux/Slices/slice";
import { Grid, Container, Typography, Button } from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Page({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<any>(null);
  useEffect(() => {
    const res = getProduct(params.slug);
    if (res !== null) {
      setProduct(res);
    }
  }, [product]);
  const dispatch = useDispatch();
  
  const addItem = (item: any) => {
    console.log("item", item)
    dispatch(addToCart(item))  };

  return (
    <>
      {product && (
        <Container disableGutters maxWidth="xl"  >
        <Grid container spacing={2} pt={2}>
          <Grid item sm={6}>
            <ProductImageGallery />
          </Grid>

          <Grid item sm={6}>
           
            <Typography variant="h5" fontWeight={'400'} style={{overflowWrap:'anywhere'}} >
              {product?.productTittle}
            </Typography>
           
            <s>${product.actualPrice}</s> <span>${product.offerPrice}</span>
            <b>Key features</b>
            <ul>
              {product.keyFeatures.map((feat: string, index: number) => {
                return <li key={index}>{feat}</li>;
              })}
            </ul> 
            <div style={{display:'flex', gap:'15px'}}>
              <CartButton buyQty={product.buyQuantity}   id={product.id}/>
              <Button variant="contained" onClick={()=>addItem(product)} >Add to cart</Button>
            </div>
            <hr />
            <Typography variant="body1"> Category: Home appliances</Typography>
          </Grid>
        </Grid>
        </Container>
      )}
    </>
  );
}
