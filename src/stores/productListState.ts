import { defineStore } from "pinia";

type productType = {
  id: number;
  name: string;
  descriptio: string;
  img_src: string;
};

type productListType = {
  error: string;
  response: productType[];
};

export const useProductListState = defineStore("productListState", {
  state: () => ({
    productList: undefined as productListType | undefined,
  }),
  actions: {
    setProductList(list: productListType) {
      this.productList = list;
    },
  },
  getters: {
    getProductList: (state) => state.productList,
  },
});
