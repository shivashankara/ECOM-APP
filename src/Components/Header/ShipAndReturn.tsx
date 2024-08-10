'use client';
import React from "react";
import {ShipAndReturnStyle} from './ShipAndReturn.style'
export default function ShipAndReturn() {
  const trackType = ["Shipping & return", "Track order"];
  return (
    <ShipAndReturnStyle>
    <ul>
      {trackType.map((ele, index) => {
        return <li key={index}>{ele}</li>;
      })}
    </ul>
    </ShipAndReturnStyle>
  );
}
