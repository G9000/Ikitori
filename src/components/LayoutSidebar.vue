<script setup lang="ts">
import {
  ShoppingBagIcon,
  HomeIcon,
  TagIcon,
  GiftIcon,
} from "@heroicons/vue/solid";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
</script>

<template>
  <div>
    <div
      v-if="width > 768"
      class="h-screen w-[250px] flex flex-col border-r border-gray-500 border-opacity-20 bg-teal-100 bg-opacity-10 sticky left-0 top-0"
    >
      <div
        class="h-[75px] text-white bg-teal-900 text-4xl font-bold flex px-6 items-center border-b border-gray-500 border-opacity-20"
      >
        Ikitori
      </div>
      <div class="mt-10">
        <ul class="flex flex-col gap-y-4 text-gray-500">
          <a
            href=""
            class="w-full px-6 py-2 flex gap-x-4 items-center group hover:underline"
          >
            <ShoppingBagIcon class="h-6 group-hover:text-teal-800" />
            <span class="tracking-wide">Pots & plants</span>
          </a>
          <a
            href=""
            class="w-full px-6 py-2 flex gap-x-4 items-center group hover:underline"
          >
            <HomeIcon class="h-6 group-hover:text-teal-800" />
            <span class="tracking-wide">Home decor</span>
          </a>
          <a
            href=""
            class="w-full px-6 py-2 flex gap-x-4 items-center group hover:underline"
          >
            <TagIcon class="h-6 group-hover:text-teal-800" />
            <span class="tracking-wide">Deals</span>
          </a>
          <a
            href=""
            class="w-full px-6 py-2 flex gap-x-4 items-center group hover:underline"
          >
            <GiftIcon class="h-6 group-hover:text-teal-800" />
            <span class="tracking-wide">Summers collection</span>
          </a>
        </ul>
      </div>

      <div class="p-6 mt-auto text-[12px] text-gray-500">
        © Ikitori 2021-2022
      </div>
    </div>
  </div>
</template>
