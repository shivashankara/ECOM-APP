import { Box, styled } from "@mui/material";

export const TableWrapper = styled(Box)`
  .cartItemList {
    td {
      justify-content: space-between;
      display: flex;
    }
  }
`;

export const CustomCard = styled(Box)`
  border-radius: 4px;
  border: 0.02rem solid #dddddd;
  box-shadow: #dddddd;
  margin-top: 15px;
`;
export const CustomCardHeader = styled("div")`
  display: flex;
  border-bottom: 1px solid #dddddd;
  justify-content: space-between;
  padding: 10px;
`;
export const CardContent = styled("div")`
  min-height: 200px;
  
  padding: 10px;
  .list{
    display: flex;
    margin-bottom: 10px;
    border-bottom: 1px solid #dddddd;
    justify-content: space-between;
  }
`;
export const CardFooter = styled("div")`
  padding: 10px;
  border-top: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;  
`;
