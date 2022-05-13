<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { CogIcon, LogoutIcon } from "@heroicons/vue/solid";
import noImage from "@/assets/no-avatar.png";

interface propsType {
  imgSrc?: string;
}

defineProps<propsType>();
</script>

<template>
  <Menu as="div" class="relative inline-flex">
    <MenuButton>
      <img
        :src="imgSrc ? imgSrc : noImage"
        alt="Avatar"
        class="h-[39px] w-[39px] rounded-full border-2 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25"
      />
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-teal-800 text-white' : 'text-gray-500',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
            >
              <CogIcon class="h-6 mr-2" aria-hidden="true" />
              Setting and Privacy
            </button>
          </MenuItem>
        </div>

        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-teal-800 text-white' : 'text-gray-500',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
            >
              <LogoutIcon class="h-6 mr-2" aria-hidden="true" />
              Logout
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
