"use client";
import TodaysDealCard from "@/Components/TodaysDeal/TodaysDealCard";
import { Grid, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

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
  const range = useSelector((state: any) => state.appState.filterRange);
  const productInfo = useSelector((state: any) => state.appState);

  const getFilteredProduct = () => {
    const response = productList?.filter((ele: any) => {
      return ele.offerPrice > range.start && ele.offerPrice < range.end ;
    });
    return response;
  };

  return (
    <>
    
      {!isProductDetailsPage ? (
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
          <Grid container pt={1} spacing={2}>
            <main>{children}</main>
            {/* .slice(0, 5) */}
            {getFilteredProduct()?.map((deal: any) => {
              return (
                <Grid item xs={4} mb={2}>
                  <TodaysDealCard dealOftheDay={deal} category={category} />
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <main>{children}</main>
      )}
    </>
  );
}
