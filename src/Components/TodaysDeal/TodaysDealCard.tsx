"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicRating from "../Common/Rating";

import Link from "next/link";
import { CardWrapper } from "./styles";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux/Slices/slice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function TodaysDealCard({ dealOftheDay, category }: any) {
  const [ishoverd, setIshoverd] = React.useState(false);
  const getCategoryType = (param: string) => {
    switch (param) {
      case "bestDeal":
        return "TodaysDeal";
        break;
      case "audio_vedio":
        return "audioAndvedio";
        break;
      case "home_appliances":
        return "home_appliances";
        break;
      case "a_c":
        return "a_c";
        break;
      case "refrigerator":
        return "refrigerator";
        break;
      case "pc_laptop":
        return "pc_laptop";
        break;
      case "gadget":
        return "gadget";
        break;

      default:
        return;
        break;
    }
  };

  const pathname = usePathname();
  const dispatch = useDispatch();

  const addItem = (e: any, item: any) => {
    e.preventDefault();
    dispatch(addToCart(item));
  };

  return (
    <CardWrapper>
      <Link
        href={`${pathname === "/" ? "/product-category/product/" : "product/"}${
          dealOftheDay.productName
        }`}
      >
        <Card
          onMouseEnter={() => setIshoverd(true)}
          onMouseLeave={() => setIshoverd(false)}
          sx={{ position: "relative" }}
        >
          {ishoverd && (
            <ShoppingCartIcon
              fontSize="large"
              onClick={(e) => {
                addItem(e, dealOftheDay);
              }}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "black",
                backgroundColor: "white",
                border: "0.01rem solid grey",
                boxShadow: "1px 2px 2px 4px #00000",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          )}
          <CardMedia
            sx={{ height: 120 }}
            image={`/${getCategoryType(category)}/${
              dealOftheDay.productImg
            }.jpg`}
            title="image"
          />
          <CardContent>
            <BasicRating count={dealOftheDay.rating} mode={"readOnly"} />
            <Typography variant="body2" color="text.secondary">
              {dealOftheDay.description}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <s>$ {dealOftheDay.actualPrice} </s> &nbsp;
              <strong>${dealOftheDay.offerPrice} </strong>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </CardWrapper>
  );
}
