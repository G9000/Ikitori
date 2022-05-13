<script setup lang="ts">
import { MenuAlt4Icon, XIcon } from "@heroicons/vue/solid";

const emit = defineEmits(["click"]);
defineProps<{
  toggled: boolean;
}>();
</script>

<template>
  <button
    class="z-50 p-2 bg-teal-900 text-zinc-50 rounded-md font-bold hover:ring-4 hover:ring-teal-400 hover:ring-opacity-25 h-[40px]"
    @click="emit('click')"
  >
    <MenuAlt4Icon v-if="toggled == false" class="h-6" />
    <XIcon v-else class="h-6" />
  </button>
</template>
