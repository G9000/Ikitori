<script setup lang="ts">
import { ExclamationIcon } from "@heroicons/vue/solid";

interface propsType {
  error?: string;
}
const props = defineProps<propsType>();
</script>

<template>
  <template v-for="idx in 15" :key="idx">
    <div class="flex flex-col group animate-pulse">
      <div class="relative">
        <div
          class="w-full h-[180px] object-cover object-center bg-gray-100 flex flex-col items-center justify-center gap-y-4"
        >
          <ExclamationIcon class="h-6" />
          <span class="text-sm text-gray-400">{{
            props.error ? props.error : "Something went wrong"
          }}</span>
        </div>
      </div>
      <span class="bg-gray-100 mt-2 h-4" />
    </div>
  </template>
</template>
