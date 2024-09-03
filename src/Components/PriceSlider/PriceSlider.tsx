"use client";

import { updateFilterRange } from "@/Redux/Slices/slice";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function valuetext(value: number) {
  return `${value}`;
}

export default function PriceSlider() {
  const [value, setValue] = useState<number[]>([10, 3000]);
  const dispatch = useDispatch();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    dispatch(updateFilterRange(newValue as number[]))
  };
  return (
    <>    
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        min={10}
        max={3000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </>
  );
}
