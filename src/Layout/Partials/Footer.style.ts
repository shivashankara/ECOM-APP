import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterStyle = styled("div")`
  background: #7a7a7a;
  bottom: 0;
  width: 100%;
  .copy-right {
    margin: 20px 0px;
  }
  ul.cardIcon {
    display: flex;
    margin: 20px 0px;
    justify-content: flex-end;
    padding: 0px;
    gap: 20px;
    li {
      list-style-type: none;
    }
  }
`;

export const FooterWrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: first baseline;
  flex-grow: 1;
  ul {
    padding: 0;
    li{
      list-style-type: none;
      a{
        text-decoration: none;
      }
    }
  }
`;
