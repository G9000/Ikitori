<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { layoutScreen } from "@/composables/useBreakpoints";
import Searchbar from "@/components/Searchbar.vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";
import { storeToRefs } from "pinia";
import { useMobileNavMenuState } from "@/stores/mobileNavMenuState";
import { useSearchbarState } from "@/stores/searchbarState";

const { width } = useWindowSize();
const mobileMenuNavStore = useMobileNavMenuState();
const { isMobileMenuOpen } = storeToRefs(mobileMenuNavStore);
const searchbarStore = useSearchbarState();
const { isSearchbarActive, searchInputValue } = storeToRefs(searchbarStore);
</script>

<template>
  <div>
    <div class="flex justify-between gap-x-6">
      <a href="/" class="z-50 text-teal-800 text-3xl font-bold">Ikitori</a>
      <Searchbar v-if="width > layoutScreen.mobilePro" />

      <HamburgerMenu
        v-if="!isSearchbarActive || !searchInputValue"
        :toggled="isMobileMenuOpen"
        @click="mobileMenuNavStore.toggleMenu()"
      />
      <div v-else class="h-[40px] flex items-center gap-x-4">
        <div class="animate-ping h-[10px] w-[10px] bg-teal-800"></div>
      </div>
    </div>
    <Searchbar v-if="width < layoutScreen.mobilePro" class="mt-4" />
  </div>
</template>
