<script setup lang="ts">
import { ref, watch } from "vue";
import { SearchIcon, XIcon } from "@heroicons/vue/solid";
import { onClickOutside, useEventListener, useDebounceFn } from "@vueuse/core";
import { storeToRefs } from "pinia";
import SearchResultPlaceholder from "@/components/SearchbarResultPlaceholder.vue";
import { useSearchbarState } from "@/stores/searchbarState";

const searchInput = ref<string>("");
const searchbarStore = useSearchbarState();
const { isSearchbarActive, searchInputValue } = storeToRefs(searchbarStore);

function clearInput() {
  searchInput.value = "";
}

watch(searchInput, (value: string) => {
  debouncedFn(value);
});

const debouncedFn = useDebounceFn((value: string) => {
  searchbarStore.setInputValue(value);
}, 1000);

const input = ref<HTMLDivElement>();
const searchResultRef = ref(null);

onClickOutside(searchResultRef, () => {
  clearInput();
  searchbarStore.setSearchbarState(false);
});

useEventListener(input, "keydown", (e: KeyboardEvent): void => {
  if (e.key === "Escape") {
    clearInput();
    searchbarStore.setSearchbarState(false);
  }
});

function setSearching() {
  if (isSearchbarActive.value) {
    searchbarStore.setSearchbarState(false);
  } else searchbarStore.setSearchbarState(true);
}
</script>

<template>
  <div class="relative w-full">
    <div class="w-full">
      <div
        class="w-full outline-none focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-25 relative border border-gray-200 z-30 rounded-md"
        :class="{ 'rounded-b-none': isSearchbarActive }"
      >
        <button
          class="z-40 bg-gray-300 text-gray-500 p-1 rounded-full absolute top-1/2 transform -translate-y-1/2 ml-4 hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25"
        >
          <XIcon v-if="searchInputValue || isSearchbarActive" class="h-4" />
          <SearchIcon v-else class="h-4" />
        </button>

        <input
          ref="input"
          v-model="searchInput"
          @click="setSearching()"
          name="search"
          type="text"
          class="bg-gray-100 py-2 pl-16 w-full rounded-md text-gray-600 outline-none"
          :class="{ 'rounded-b-none': isSearchbarActive }"
          placeholder="search a product"
          aria-label="seachbar"
        />
      </div>

      <div
        ref="searchResultRef"
        v-if="isSearchbarActive"
        class="absolute bg-white px-6 w-full md:h-auto py-10 top-0 left-0 pt-20 md:pt-20 text-gray-800 shadow-lg z-20"
      >
        <div v-if="searchInputValue">searching . . .</div>
        <SearchResultPlaceholder v-else />
      </div>
    </div>
  </div>
</template>
