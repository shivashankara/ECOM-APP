"use client";

import Slider from "@mui/material/Slider";
import { useState } from "react";
function valuetext(value: number) {
  return `${value}`;
}

export default function PriceSlider() {
  const [value, setValue] = useState<number[]>([5000, 20000]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <Slider
      getAriaLabel={() => "Temperature range"}
      value={value}
      min={10}
      max={20000}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
    />
  );
}
