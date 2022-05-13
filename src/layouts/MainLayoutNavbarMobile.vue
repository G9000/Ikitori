<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { layoutScreen } from "@/utils/breakpoints";
import Searchbar from "@/components/Searchbar.vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";

const emit = defineEmits(["menuClick", "changeSearchState", "searchInput"]);
defineProps<{
  isSearching: boolean;
  isMobileNavOpen: boolean;
}>();

const { width } = useWindowSize();
</script>

<template>
  <div>
    <div class="flex justify-between gap-x-6">
      <a href="/" class="z-50 text-teal-800 text-3xl font-bold">Ikitori</a>
      <Searchbar
        v-if="width > layoutScreen.mobilePro"
        @searchState="emit('changeSearchState')"
        @searchInput="emit('searchInput')"
      />

      <HamburgerMenu
        v-if="!isSearching"
        :toggled="isMobileNavOpen"
        @click="emit('menuClick')"
      />
      <div v-else class="h-[40px] flex items-center gap-x-4">
        <div class="animate-ping h-[10px] w-[10px] bg-teal-800"></div>
      </div>
    </div>
    <Searchbar
      v-if="width < layoutScreen.mobilePro"
      @searchState="emit('changeSearchState')"
      @searchInput="emit('searchInput')"
      class="mt-4"
    />
  </div>
</template>
