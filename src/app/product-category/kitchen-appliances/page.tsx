'use client'
import { response } from "@/Mock/response";
import ProductPageTemplate from "../template-old";

export default function Page() {
  const {kitchen_appliances}= response;
  return (
    <>      
      <ProductPageTemplate
        heading={'Kitchen appliances'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet nam earum consectetur at animi voluptates repellat perspiciatis eaque, nihil dolores soluta iure fuga saepe incidunt quia asperiores quae fugit.'}
        resultCount={5}
        productList={kitchen_appliances}
        category={'kitchen_appliances'}
        children
      ></ProductPageTemplate>
    </>
  );
}