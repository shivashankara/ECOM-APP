import { Box, styled } from "@mui/material";

export const DrawerWrapper = styled(Box)`
  width: 450px;
  padding: 20px;
  
  .contentArea{
    max-height: 400px;
    overflow-x: unset;
    overflow-y:scroll
  }
  .footerArea{
    display: flex;
    width: auto;
    margin-top: 5px;
    flex-direction: column;
    gap: 12px;  
    bottom: 0px;
  }
`;
