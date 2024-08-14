import { response } from "@/Mock/response";

export const getProduct = (productId: any) => {
  for (const key in response) {
    if (Array.isArray(response[key])) {
      for (const item of response[key]) {
        if (item.productName === productId) {
          return item;
        }
      }
    }
  }
  return null;
};
