<script setup lang="ts">
import { ref, inject } from "vue";
import { useWindowSize } from "@vueuse/core";
import { layoutScreen } from "@/utils/breakpoints";
import Sidebar from "@/layouts/MainLayoutSidebar.vue";
import NavbarDesktop from "@/layouts/MainLayoutNavbar.vue";
import NavbarMobile from "@/layouts/MainLayoutNavbarMobile.vue";
import NavbarMobileContent from "@/layouts/MainLayoutNavbarMobileContent.vue";
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
    <!-- Desktop -->
    <div v-if="width > layoutScreen.laptop" class="flex">
      <Sidebar />
      <div class="w-full">
        <div
          class="h-[75px] w-full flex px-10 gap-x-4 justify-between items-center border-b border-gray-500 border-opacity-20 sticky top-0 z-50 bg-white"
        >
          <NavbarDesktop
            :currentUser="currentUser"
            @searchState="changeSearchState"
            @searchInput="searchInput"
          />
        </div>
        <slot />
      </div>
    </div>

    <!-- Mobile -->
    <div v-else class="px-4 tablet:px-6 py-4">
      <NavbarMobile
        :isSearching="isSearching"
        :isMobileNavOpen="mobileNavOpen"
        @searchState="changeSearchState"
        @searchInput="searchInput"
        @menuClick="mobileNavOpen = !mobileNavOpen"
      />
      <slot v-if="width < layoutScreen.laptop" />
    </div>

    <Modal :open="mobileNavOpen">
      <Content>
        <NavbarMobileContent :currentUser="currentUser" />
      </Content>
    </Modal>
  </div>
</template>
