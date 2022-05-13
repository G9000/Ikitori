<script setup lang="ts">
import AvatarWithDropdownVue from "@/components/AvatarWithDropdown.vue";
import Button from "@/components/primitives/Button.vue";

type userType = {
  name: string;
  avatar?: string;
};

interface propsType {
  currentUser?: userType | null;
}

defineProps<propsType>();
</script>

<template>
  <div>
    <div v-if="currentUser" class="flex gap-x-4 items-center rounded-full">
      <AvatarWithDropdownVue :imgSrc="currentUser?.avatar" />
      <span class="text-gray-500 font-semibold">
        {{ currentUser?.name }}
      </span>
    </div>

    <Button v-else type="solid" size="base">Sign in</Button>
  </div>
</template>
