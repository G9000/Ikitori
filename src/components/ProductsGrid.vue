<script setup lang="ts">
import { ref, inject } from "vue";
import Button from "@/primitives/Button.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductCardError from "@/components/ProductCardError.vue";
import useFetch from "@/composables/useFetch";
import { storeToRefs } from "pinia";
import { useProductListState } from "@/stores/productListState";

const productListStore = useProductListState();
const { productList } = storeToRefs(productListStore);
const products = ref();
const url = inject("apiUrl") as string;
const apiKey = inject("apiSecretKey") as string;

if (!productList.value) {
  products.value = await useFetch(url, {
    headers: { "secret-key": apiKey },
  });
  productListStore.setProductList(products.value);
} else products.value = productList.value;
</script>

<template>
  <section aria-labelledby="product-grid" class="w-full flex flex-col">
    <div
      class="grid grid-cols-1 mobilePro:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 modernDesktop:grid-cols-5 gap-6 mt-8"
    >
      <ProductCard v-if="products.response" :products="products.response" />
      <ProductCardError v-else :error="products.error" />
    </div>
    <div class="flex justify-center mt-20">
      <Button type="solid" size="base">Load more</Button>
    </div>
  </section>
</template>
