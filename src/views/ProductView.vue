<script setup lang="ts">
import ProductsGridSekeleton from "@/components/ProductsGridSekeleton.vue";
import ProductsGrid from "@/components/ProductsGrid.vue";
</script>

<template>
  <head>
    <title>Homepage</title>
    <meta name="description" content="This is the homepage." />
    <meta name="meta" content="website" />
  </head>

  <main
    role="main"
    aria-labelledby="product-section"
    class="px-2 laptop:px-10 pt-4 pb-20"
  >
    <div class="text-2xl text-gray-500 divide-y">Products</div>
    <div class="w-full border-t border-gray-300 mt-2 border-opacity-60"></div>

    <Suspense>
      <template #default>
        <ProductsGrid />
      </template>
      <template #fallback>
        <ProductsGridSekeleton />
      </template>
    </Suspense>
  </main>
</template>
