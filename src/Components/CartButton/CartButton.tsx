'use client'
import React, { useState } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AddtoCartWrapper } from "./CartButtonStyle";

export default function CartButton() {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <AddtoCartWrapper>
      <Button
        sx={{ padding: 0 }}
        variant="outlined"
        startIcon={<RemoveIcon />}
        onClick={handleDecrease}
        disabled={count === 1}
      ></Button>

      <Typography variant="h6" style={{ margin: "0 10px" }}>
        {count}
      </Typography>

      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleIncrease}
      ></Button>
    </AddtoCartWrapper>
  );
}
