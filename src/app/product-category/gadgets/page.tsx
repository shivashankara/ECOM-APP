"use client";
import { response } from "@/Mock/response";
import ProductPageTemplate from "../template-old";

export default function Page() {
  const { gadget } = response;
  return (
    <>
      <ProductPageTemplate
        heading={"Gadgets"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet nam earum consectetur at animi voluptates repellat perspiciatis eaque, nihil dolores soluta iure fuga saepe incidunt quia asperiores quae fugit."
        }
        resultCount={5}
        productList={gadget}
        category={"gadget"}
        children
      ></ProductPageTemplate>
    </>
  );
}
