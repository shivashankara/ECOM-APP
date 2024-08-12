import { Box } from "@mui/material";

export default function BrandLogo({ logo }: any) {
  return (
    <Box
      sx={{
        border: "1px solid #dce3e5",
        minHeight: "5rem",
        justifyContent: "center",
        display:'flex',
        flexGrow:'2',
      }}
    >
      <img
        src={`topBrand/${logo.logPath}.svg`}
        alt={`logo-${logo.id}`}        
      />
    </Box>
  );
}
