"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicRating from "../Common/Rating";
import { getCategory } from "./../../Services/Category/category-service";
import Link from "next/link";
import { CardWrapper } from "./styles";
import { usePathname } from "next/navigation";

export default function TodaysDealCard({ dealOftheDay, category }: any) {
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

  return (
    <CardWrapper>
      <Link
        href={`${pathname === "/" ? "/product-category/product/" : "product/"}${
          dealOftheDay.productName
        }`}
      >
        <Card>
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
