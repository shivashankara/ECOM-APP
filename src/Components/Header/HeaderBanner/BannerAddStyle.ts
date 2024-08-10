"use client";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const BannerAddStyle = styled(Box)`
  max-width: 25rem;
  max-height: 20rem;
  margin-top: -42px;
  word-wrap: wrap;
  position: absolute;
  top: 10rem;
  right: 2rem;
`;

export const ServiceList = styled("div")`
  ul {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    li {
      list-style-type: none;
      display: flex;
      img {
        color: transparent;
        flex: auto;
      }
    }
  }
`;
export const ServiceListWrapper = styled("div")`
  position: absolute;
  bottom: -20px;
  background: white;
  width: 95%;
  margin-bottom: 10px;
  border: 1px solid #c3c3c3;
`;
