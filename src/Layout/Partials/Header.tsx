"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import CustomerSupport from "../../Components/Header/CustomerSupport";
import ShipAndReturn from "../../Components/Header/ShipAndReturn";
import { HeaderStyle, LoginButtonBox } from "./Header.style";
import SearchInput from "@/Components/Header/SearchComponent";
import AppMenu from "@/Components/Header/Menu";
import Image from "next/image";
import SimpleBadge from "@/Components/Badge/badge";



export default function Header() {
  return (
    <Box sx={{ bgcolor: "#0769da" }}>
      <Container disableGutters={true} maxWidth="lg">
        <HeaderStyle>
          {/* Top */}
          <Grid container spacing={2} pt={1}>
            <Grid item xs={6}>
              <CustomerSupport />
            </Grid>
            <Grid item xs={6}>
              <ShipAndReturn />
            </Grid>
          </Grid>
          {/* center */}

          <Grid container spacing={2} pt={2}>
            <Grid item xs={6}>
              <Link
                href="/"
                style={{ color: "white", fontWeight: "800", fontSize: "20px" }}
              >
                <Image
                  src="/electronic-store-logo.svg"
                  alt="logo"
                  height={30}
                  width={120}
                />
              </Link>
            </Grid>
            <Grid item xs={6}>
              <SearchInput />
            </Grid>
          </Grid>

          {/* header Menu */}
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <AppMenu />
            </Grid>
            <Grid item xs={2}>
              <LoginButtonBox>
              <ul>
                <li>
                  <SimpleBadge />
                </li>
                <li>
                  <Link
                    href="/login"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginLeft: "20px",
                    }}
                  >
                    Login
                  </Link>
                </li>
              </ul>
              </LoginButtonBox>
            </Grid>
          </Grid>
        </HeaderStyle>
      </Container>
    </Box>
  );
}
