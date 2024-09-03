"use client";
import * as React from "react";

import { useSelector } from "react-redux";
import {
  CardFooter,
  CustomCard,
  CustomCardHeader,
  TableWrapper,
  CardContent,
} from "./OrderDetailsStyle";

export default function OrderDetails() {
  const cartDetails = useSelector(
    (state: any) => state.appState.cartInformation
  );
  const getSubtotal = () => {
    const subtotal = cartDetails
      .map((price: any) => {
        return price.offerPrice * price.buyQuantity;
      })
      .reduce((prev: any, next: any) => {
        return prev + next;
      });
    return subtotal;
  };

  return (
    <CustomCard>
      <CustomCardHeader>
        <div> Product</div>
        <div>Subtotal</div>
      </CustomCardHeader>
      <CardContent>
        {cartDetails.map((ele: any) => {
          return (
            <div className="list">
              <img
                src={`${ele.productImg}.jpg`}
                width={50}
                height={70}
                alt=""
              />
              <div> {ele.productName}</div>
              <div>{ele.buyQuantity} X </div>
              <div>{ele.buyQuantity * ele.offerPrice }</div>
            </div>
          );
        })}
      </CardContent>
      <CardFooter>
        <div className="headding">
          <div>Subtotal</div>
          <div>Total</div>
        </div>
        <div className="subtotal">
          <div>$ {getSubtotal()}</div>
          <div><strong> $ {getSubtotal()}</strong></div>
        </div>
      </CardFooter>
    </CustomCard>
   
  );
}
