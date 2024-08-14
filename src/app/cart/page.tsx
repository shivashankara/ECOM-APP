import CartTable from "@/Components/CartTable/CartTable";
import { Grid, Typography, Container } from "@mui/material";

export default function Page() {
  return (
    <>
      <Container disableGutters>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Typography variant="h4" sx={{fontWeight:'600', padding:'15px 0px'}}>Cart</Typography>
          </Grid>
          <Grid item sm={8}>
          <CartTable />
          </Grid>
          <Grid item sm={4}>
            
          </Grid>
          
        </Grid>
      </Container>
    </>
  );
}
