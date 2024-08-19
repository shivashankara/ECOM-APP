'use client'
import TodaysDealCard from "@/Components/TodaysDeal/TodaysDealCard";
import { Grid, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

export default function ProductPageTemplate({
  heading,
  description,
  resultCount,
  productList,
  category,
  children,
}: any) {
  const pathname = usePathname();
  const isProductDetailsPage = pathname.includes("/product/");

  return (
    <>     
    {!isProductDetailsPage && (
      <>
      <Typography
        variant="h2"
        sx={{ color: "#0573f0", fontWeight: "600" }}
        m={"30px 30px"}
      >
        {heading}
      </Typography>
      <p>{description}</p>
      <p>{resultCount && `Showing all ${resultCount} results`} </p>
      <Grid container pt={1}>
        <main>{children}</main>
        {productList?.slice(0, 5).map((deal: any) => {
          return (
            <Grid item xs={4} mb={2}>
              <TodaysDealCard dealOftheDay={deal} category={category} />
            </Grid>
          );
        })}
      </Grid>
      </>
    )}
   
    {children} 
    </>
  );
}
