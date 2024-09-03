'use client'
import React, { useEffect, useState } from "react";
import { Button,  Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AddtoCartWrapper } from "./CartButtonStyle";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity } from "@/Redux/Slices/slice";

type CardButtonProps={
  buyQty:number, 
  id?:string
}

export default function CartButton({buyQty, id}:CardButtonProps) {
  const cartQty =useSelector((state:any)=>state.appState.cartInformation)
  const [count, setCount] = useState(buyQty);
 const dispatch = useDispatch()
 
  const handleIncrease = () => {
    const newCount = count +1;
    setCount(newCount);
    dispatch(updateCartQuantity({id, newCount}))
  };

  const handleDecrease = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      dispatch(updateCartQuantity({id, newCount})); 
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
