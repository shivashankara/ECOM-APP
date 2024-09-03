'use client'
import { response } from "@/Mock/response";
import ProductPageTemplate from "../template";
import { useSelector } from "react-redux";

export default function Page() {
  const {home_appliances}= response;
  const range = useSelector((state: any) => state.appState.filterRange);
  
  return (
    <>    
      <ProductPageTemplate
        heading={'Home appliances'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet nam earum consectetur at animi voluptates repellat perspiciatis eaque, nihil dolores soluta iure fuga saepe incidunt quia asperiores quae fugit.'}
        resultCount={5}
        productList={home_appliances}
        category={'home_appliances'}
        children
      ></ProductPageTemplate>
    </>
  );
}