<script setup lang="ts">
import ProductCardSkeleton from "@/components/ProductCardSkeleton.vue";
</script>

<template>
  <div
    class="grid grid-cols-1 mobilePro:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 modernDesktop:grid-cols-5 gap-6 mt-8"
  >
    <ProductCardSkeleton />
  </div>
</template>
