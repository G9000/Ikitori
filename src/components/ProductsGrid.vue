<script setup lang="ts">
import { ref } from "vue";
import Button from "@/primitives/Button.vue";
import ProductCard from "@/components/ProductCard.vue";
import ProductCardError from "@/components/ProductCardError.vue";
import useFetch from "@/utils/useFetch";

const products = ref();

products.value = await useFetch(import.meta.env.VITE_URL as string, {
  headers: { "secret-key": import.meta.env.VITE_SECRET_KEY as string },
});
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
