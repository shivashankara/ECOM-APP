"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BasicRating from "../Common/Rating";
export default function Testimonial({testimony}:any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
        ".MuiPaper-root": {
          padding: "20px",
            },
      }}
    >
      <Paper>
        <BasicRating count ={testimony.rating} />
        <p>
          {testimony?.description}
        </p>
        <Box sx={{display:'flex', alignItems:'center', gap:'20px'}}>
            <img src="/profile.jpg" alt="" style={{borderRadius:'50%'}} />
            <strong> Olive Borer</strong>
        </Box>
      </Paper>
    </Box>
  );
}
