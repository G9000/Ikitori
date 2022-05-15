import { defineStore } from "pinia";

export const useMobileNavMenuState = defineStore("mobileNavMenu", {
  state: () => {
    return { isMobileMenuOpen: false };
  },
  actions: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
  getters: {
    isOpen: (state) => state.isMobileMenuOpen,
  },
});
