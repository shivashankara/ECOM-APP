import TodaysDealCard from "@/Components/TodaysDeal/TodaysDealCard";
import { response } from "@/Mock/response";

import ProductPageTemplate from "../template";

export default function Page() {
  const {audio_vedio}= response;
  return (
    <>      
      <ProductPageTemplate
        heading={'Audio and Vedio'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet nam earum consectetur at animi voluptates repellat perspiciatis eaque, nihil dolores soluta iure fuga saepe incidunt quia asperiores quae fugit.'}
        resultCount={5}
        productList={audio_vedio}
        category={'audio_vedio'}
        children
      ></ProductPageTemplate>
    </>
  );
}
