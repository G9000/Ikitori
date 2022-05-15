<script setup lang="ts">
import { inject } from "vue";
import { useWindowSize } from "@vueuse/core";
import { layoutScreen } from "@/composables/useBreakpoints";
import Sidebar from "@/layouts/MainLayoutSidebar.vue";
import NavbarDesktop from "@/layouts/MainLayoutNavbar.vue";
import NavbarMobile from "@/layouts/MainLayoutNavbarMobile.vue";
import NavbarMobileContent from "@/layouts/MainLayoutNavbarMobileContent.vue";
import { Dialog as Modal, DialogPanel as Content } from "@headlessui/vue";
import { storeToRefs } from "pinia";
import { useMobileNavMenuState } from "@/stores/mobileNavMenuState";

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

const mobileMenuNavStore = useMobileNavMenuState();
const { isMobileMenuOpen } = storeToRefs(mobileMenuNavStore);

// async function searchInput(value: string) {
//   console.log("value", value);
//   if (value.length > 0) {
//     searchbarStore.setSearchbarState(true);
//   } else searchbarStore.setSearchbarState(false);
// }
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
          <NavbarDesktop :currentUser="currentUser" />
        </div>
        <slot />
      </div>
    </div>

    <!-- Mobile -->
    <div v-else class="px-4 tablet:px-6 py-4">
      <NavbarMobile />
      <slot v-if="width < layoutScreen.laptop" />
    </div>

    <Modal :open="isMobileMenuOpen">
      <Content>
        <NavbarMobileContent :currentUser="currentUser" />
      </Content>
    </Modal>
  </div>
</template>
