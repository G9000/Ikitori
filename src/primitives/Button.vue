<script setup lang="ts">
import { computed } from "vue";
interface propsType {
  type?: "solid" | "ghost";
  color?: "primary" | "secondary" | "default";
  href?: string | null;
  size?: "xs" | "sm" | "base" | "lg";
}

const props = withDefaults(defineProps<propsType>(), {
  type: "solid",
  color: "default",
  href: null,
  size: "base",
});

const emit = defineEmits(["click"]);

const btnSize = computed(() => {
  switch (props.size) {
    case "xs":
      return "text-[12px]";
    case "sm":
      return "text-sm";
    case "base":
      return "text-base";
    case "lg":
      return "text-2xl";
  }
});

const btnType = computed(() => {
  if (props.color === "primary") {
    switch (props.type) {
      case "solid":
        return "bg-teal-800 text-white hover:bg-teal-900 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25";
      case "ghost":
        return "bg-transparent text-teal-800 hover:border-teal-900 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25";
      default:
        return "bg-teal-800 text-white hover:bg-teal-900 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25";
    }
  }

  if (props.color === "secondary") {
    switch (props.type) {
      case "solid":
        return "bg-purple-800 text-white hover:bg-purple-900 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25";
      case "ghost":
        return "bg-transparent text-purple-800 hover:border-purple-900 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25";
      default:
        return "bg-purple-800 text-white hover:bg-purple-900 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25";
    }
  }

  switch (props.type) {
    case "solid":
      return "bg-teal-800 text-white hover:bg-teal-900 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25";
    case "ghost":
      return "bg-white text-gray-500 hover:bg-gray-50 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25";
  }
});

const btnStyle = computed(() => {
  return `flex shrink-0 gap-x-4 items-center border rounded-md font-semibold py-2 px-4 ${btnSize.value} ${btnType.value}`;
});
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="btnStyle"
    @click="emit('click')"
  >
    <slot name="prepend" />
    <slot name="default" />
    <slot name="append" />
  </component>
</template>
