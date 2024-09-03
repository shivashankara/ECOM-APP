"use client";

import { Typography } from "@mui/material";
import { Fragment } from "react";
import { Wrapper } from "./ItemInCartStyle";
import CartButton from "../CartButton/CartButton";

export default function ItemInCart({ cartList }: any) {
  const { id, buyQuantity, productTittle, offerPrice, productImg } = cartList;

  return (
    <>
      {cartList && (
        <Fragment key={id}>
          <Wrapper>
            <ul>
              <li>
                <img
                  src={`/audioAndvedio/${productImg}.jpg`}
                  alt=""
                  height={100}
                  width={100}
                />
                <div className="content">
                  <Typography
                    variant="h5"
                    component="h5"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    {productTittle}
                  </Typography>
                  <div className="footer">
                    <span>
                      <CartButton buyQty={buyQuantity} id={id} />
                    </span>
                    <span> ${buyQuantity * offerPrice}</span>
                  </div>
                </div>
              </li>
            </ul>
          </Wrapper>
        </Fragment>
      )}
    </>
  );
}
