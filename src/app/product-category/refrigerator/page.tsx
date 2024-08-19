'use client'
import { response } from "@/Mock/response";
import ProductPageTemplate from "../template";

export default function Page() {
  const {refrigerator}= response;
  return (
    <>      
      <ProductPageTemplate
        heading={'Refrigerator'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet nam earum consectetur at animi voluptates repellat perspiciatis eaque, nihil dolores soluta iure fuga saepe incidunt quia asperiores quae fugit.'}
        resultCount={5}
        productList={refrigerator}
        category={'refrigerator'}
        children
      ></ProductPageTemplate>
    </>
  );
}