<script setup lang="ts">
import {
  ShoppingBagIcon,
  HomeIcon,
  TagIcon,
  GiftIcon,
} from "@heroicons/vue/solid";
import { useRouter } from "vue-router";
import Icon from "@/primitives/Icon.vue";
import IkitoriIcon from "@/icons/IconIkitori.vue";

const router = useRouter();
</script>

<template>
  <div
    class="h-screen w-[250px] flex flex-col border-r border-gray-500 border-opacity-20 bg-teal-100 bg-opacity-10 sticky left-0 top-0"
  >
    <div
      class="h-[75px] gap-x-4 item-center text-white bg-teal-900 text-4xl font-bold flex px-6 items-center border-b border-gray-500 border-opacity-20"
    >
      <a href="/"> Ikitori</a>
      <Icon slot="append" :width="32" :height="32" icon-name="ikitori-icon">
        <IkitoriIcon />
      </Icon>
    </div>

    <ul class="flex flex-col gap-y-4 text-gray-500 mt-10">
      <a @click="router.push('/')" class="navlink group">
        <ShoppingBagIcon class="h-6 group-hover:text-teal-800" />
        <span class="tracking-wide">Pots & plants</span>
      </a>
      <a @click="router.push('/')" class="navlink group">
        <HomeIcon class="h-6 group-hover:text-teal-800" />
        <span class="tracking-wide">Home decor</span>
      </a>
      <a @click="router.push('/')" class="navlink group">
        <TagIcon class="h-6 group-hover:text-teal-800" />
        <span class="tracking-wide">Deals</span>
      </a>
      <a @click="router.push('/')" class="navlink group">
        <GiftIcon class="h-6 group-hover:text-teal-800" />
        <span class="tracking-wide">Summers collection</span>
      </a>
    </ul>

    <div class="p-6 mt-auto text-[12px] text-gray-500">© Ikitori 2021-2022</div>
  </div>
</template>

<style scoped>
.navlink {
  @apply w-full px-6 py-2 flex gap-x-4 items-center hover:underline cursor-pointer;
}
</style>
