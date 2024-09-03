import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  border-bottom: 1px solid grey;
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 2;
    li {
        display: flex;
        gap: 15px;
      .content {
       
      }
    }
    .footer {
        display: flex;
        justify-content: space-between;
    }
  }
`;
