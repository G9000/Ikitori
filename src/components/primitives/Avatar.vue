<script setup lang="ts">
import noImage from "@/assets/no-avatar.png";

interface propsType {
  imgSrc?: string;
}

const props = defineProps<propsType>();
</script>

<template>
  <img
    :src="props.imgSrc ? props.imgSrc : noImage"
    alt="Avatar"
    class="h-[39px] w-[39px] rounded-full border-2 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25"
  />
</template>
