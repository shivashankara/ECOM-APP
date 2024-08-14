import { styled } from "@mui/material/styles";

export const HeaderStyle = styled("div")`
  color: #f5f5f5;
`;
export const LoginButtonBox = styled("div")`
  ul {
    display: flex;
    li{
      list-style-type: none;
      cursor: pointer;
      svg{
        color: #f5f5f5;
      }
      .MuiBadge-badge{
        background: #f5f5f5;
        color: #0769da;
        font-weight: 600;
      }
      a{
        text-decoration: none;
      }
    }
  }
 
`;
