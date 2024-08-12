import { response } from "@/Mock/response";
import { CardWrapper } from "./categoryStyel";

export default function Category({ category }: any) {
  return (
    <>
      <CardWrapper>
        <a href={`product-category/${category.navUrl}`}>
        <img
          src={`productCategory/${category.imageurl}.jpg`}
          alt={`category-${category.imageurl}`}
        />
        <strong>{category.categoryName}</strong>
        <div>{category.items.length} Products</div>
        </a>
      </CardWrapper>
    </>
  );
}
