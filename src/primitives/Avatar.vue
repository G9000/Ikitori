<script setup lang="ts">
import noImage from "@/assets/no-avatar.png";
defineProps<{
  imgSrc?: string;
}>();
</script>

<template>
  <img
    :src="imgSrc ? imgSrc : noImage"
    alt="Avatar"
    class="h-[39px] w-[39px] rounded-full border-2 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25"
  />
</template>
