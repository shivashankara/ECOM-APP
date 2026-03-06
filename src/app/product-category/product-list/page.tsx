import ProductPageTemplate from "../template";

const getProduct = async () => {
  const result = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });
  const product = await result.json();
  return product;
};

async function Page() {
  const productList = await getProduct();
  return (
    <ProductPageTemplate>
      <div>Product List Page</div>
      {productList.products?.map((product) => {
        return <div key={product.id}>{product.title}</div>;
      })}
    </ProductPageTemplate>
  );
}
export default Page;
