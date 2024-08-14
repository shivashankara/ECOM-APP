"use client";
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <TextField
        sx={{ borderRadius: "4px", background: "#ffffff" }}
        variant="outlined"
        placeholder="Search Product..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="end" sx={{ color: "#0573f0" }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
