<script setup lang="ts">
import { ref, inject } from "vue";
import { useWindowSize } from "@vueuse/core";
import { layoutScreen } from "@/utils/breakpoints";
import { MenuAlt4Icon, XIcon } from "@heroicons/vue/solid";
import Searchbar from "@/components/Searchbar.vue";
import Sidebar from "@/components/LayoutSidebar.vue";
import Navbar from "@/components/LayoutNavbar.vue";
import NabarMobile from "@/components/LayoutNavbarMobile.vue";
import { Dialog as Modal, DialogPanel as Content } from "@headlessui/vue";

const currentUser = inject("currentUser");
const { width } = useWindowSize();

type userType = {
  name: string;
  avatar?: string;
};

interface propsType {
  currentUser?: userType | null;
}

defineProps<propsType>();
const mobileNavOpen = ref<boolean>(false);
const isSearching = ref<boolean>(false);

const resultData = ref();
async function searchInput(value: string) {
  if (value.length > 0) {
    isSearching.value = true;
  } else isSearching.value = false;
}

function changeSearchState() {
  isSearching.value = false;
}
</script>

<template>
  <div class="font-notoSans">
    <div v-if="width > layoutScreen.laptop" class="flex">
      <Sidebar />
      <div class="w-full">
        <div
          class="h-[75px] w-full flex px-10 gap-x-4 justify-between items-center border-b border-gray-500 border-opacity-20 sticky top-0 z-50 bg-white"
        >
          <Searchbar
            @searchState="changeSearchState"
            @searchInput="searchInput"
            class="w-[375px]"
          />
          <Navbar :currentUser="currentUser" />
        </div>
        <slot />
      </div>
    </div>

    <div v-else class="px-4 tablet:px-6 py-4">
      <div class="flex justify-between gap-x-6">
        <div class="z-50 text-teal-800 text-3xl font-bold">Ikitori</div>
        <Searchbar
          v-if="width > layoutScreen.mobilePro"
          @searchState="changeSearchState"
          @searchInput="searchInput"
        />
        <button
          v-if="!isSearching"
          class="z-50 p-2 bg-teal-900 text-zinc-50 rounded-md font-bold hover:ring-4 hover:ring-teal-400 hover:ring-opacity-25 h-[40px]"
          @click="mobileNavOpen = !mobileNavOpen"
        >
          <MenuAlt4Icon v-if="mobileNavOpen == false" class="h-6" />
          <XIcon v-else class="h-6" />
        </button>
        <div v-else class="h-[40px] flex items-center gap-x-4">
          <div class="animate-ping h-[10px] w-[10px] bg-teal-800"></div>
        </div>
      </div>

      <Searchbar
        v-if="width < layoutScreen.mobilePro"
        @searchState="changeSearchState"
        @searchInput="searchInput"
        class="mt-4"
      />

      <slot v-if="width < layoutScreen.laptop" />
    </div>

    <Modal :open="mobileNavOpen">
      <Content>
        <NabarMobile :currentUser="currentUser" />
      </Content>
    </Modal>
  </div>
</template>
