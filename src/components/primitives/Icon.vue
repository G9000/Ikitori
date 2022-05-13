<script setup lang="ts">
interface propsType {
  iconName: string;
  width: number;
  height: number;
  iconColor: string;
}

withDefaults(defineProps<propsType>(), {
  iconName: "box",
  width: 24,
  height: 24,
  iconColor: "currentColor",
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="presentation"
    aria-hidden="true"
    class="inline-block items-baseline mb-[-2px]"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
