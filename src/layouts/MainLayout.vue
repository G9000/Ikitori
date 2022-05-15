<script setup lang="ts">
import { inject, watchEffect, ref, computed, watch } from "vue";
import { useWindowSize } from "@vueuse/core";
import { layoutScreen } from "@/composables/useBreakpoints";
import Sidebar from "@/layouts/MainLayoutSidebar.vue";
import NavbarDesktop from "@/layouts/MainLayoutNavbar.vue";
import NavbarMobile from "@/layouts/MainLayoutNavbarMobile.vue";
import NavbarMobileContent from "@/layouts/MainLayoutNavbarMobileContent.vue";
import { Dialog as Modal, DialogPanel as Content } from "@headlessui/vue";
import { storeToRefs } from "pinia";
import { useMobileNavMenuState } from "@/stores/mobileNavMenuState";
import { useCurrentUserState } from "@/stores/currentUserState";

const { width } = useWindowSize();
const mobileMenuNavStore = useMobileNavMenuState();
const { isMobileMenuOpen } = storeToRefs(mobileMenuNavStore);

type mockUser = {
  name: string;
  avatar: string;
};
const currentUserStore = useCurrentUserState();
const { currentUser } = storeToRefs(currentUserStore);
const mockUser = inject<mockUser>("mockUser");

function signin() {
  currentUserStore.setCurrentUser(mockUser);
}

function logout() {
  currentUserStore.removeCurrentUser();
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
            @signIn="signin()"
            @logout="logout()"
          />
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
        <NavbarMobileContent
          :currentUser="currentUser"
          @signIn="signin()"
          @logout="logout()"
        />
      </Content>
    </Modal>
  </div>
</template>
