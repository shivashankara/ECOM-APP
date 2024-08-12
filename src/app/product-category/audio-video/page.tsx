import TodaysDealCard from "@/Components/TodaysDeal/TodaysDealCard";
import { response } from "@/Mock/response";
import { Grid, Typography } from "@mui/material";

export default function Page() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ color: "#0573f0", fontWeight: "600" }}
        m={"30px 30px"}
      >
        Audio and Vedio
      </Typography>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis
        velit, iaculis vel risus non, convallis rhoncus ligula. Vestibulum ut
        lorem posuere, malesuada neque et, placerat quam. In hac habitasse
        platea dictumst. Sed bibendum porttitor sem, at sollicitudin orci
        placerat nec.
      </p>
      <p>Showing all 5 results </p>
      <Grid container pt={1}>
      
       {[...response.bestDeal.slice(0, 5)].map((deal) => {
          return (
            <Grid item xs={4} mb={2}>
              <TodaysDealCard dealOftheDay={deal} category={"bestDeal"} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
