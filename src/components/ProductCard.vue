<script setup lang="ts">
type productType = {
  id: number;
  name: string;
  description: string;
  img_src: string;
  url: string;
};

interface propsType {
  products?: productType[];
}
defineProps<propsType>();
</script>

<template>
  <template v-for="product in products" :key="product.id">
    <a role="link" :href="product.url" class="flex flex-col group">
      <div class="relative">
        <img
          :src="product.img_src"
          height="180px"
          width="100%"
          class="w-full h-[180px] object-cover object-center"
        />
        <span
          class="font-bold text-gray-700 absolute bottom-0 left-0 p-4 bg-slate-100 group-hover:bg-teal-800 group-hover:text-slate-100"
        >
          {{ product.name }}
        </span>
      </div>
      <span class="text-sm text-gray-400 mt-2">{{ product.description }}</span>
    </a>
  </template>
</template>
