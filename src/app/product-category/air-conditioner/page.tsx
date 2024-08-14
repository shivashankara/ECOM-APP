"use client";

import { response } from "@/Mock/response";

import ProductPageTemplate from "../template-old";

export default function Page() {
  const { a_c } = response;
  return (
    <>
      <ProductPageTemplate
        heading={"Air conditioner"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet nam earum consectetur at animi voluptates repellat perspiciatis eaque, nihil dolores soluta iure fuga saepe incidunt quia asperiores quae fugit."
        }
        resultCount={5}
        productList={a_c}
        category={"a_c"}
      ></ProductPageTemplate>
    </>
  );
}
