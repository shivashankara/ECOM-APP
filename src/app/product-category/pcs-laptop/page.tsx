'use client'
import { response } from "@/Mock/response";
import ProductPageTemplate from "../template-old";

export default function Page() {
  const {pc_laptop}= response;
  return (
    <>      
      <ProductPageTemplate
        heading={`PC's and laptop`}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet nam earum consectetur at animi voluptates repellat perspiciatis eaque, nihil dolores soluta iure fuga saepe incidunt quia asperiores quae fugit.'}
        resultCount={5}
        productList={pc_laptop}
        category={'pc_laptop'}
        children
      ></ProductPageTemplate>
    </>
  );
}