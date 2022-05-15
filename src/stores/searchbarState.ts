import { defineStore } from "pinia";

export const useSearchbarState = defineStore("searchbarState", {
  state: () => ({
    isSearchbarActive: false,
    searchInputValue: "",
  }),
  actions: {
    setSearchbarState(value: boolean) {
      this.isSearchbarActive = value;
    },
    setInputValue(value: string) {
      this.searchInputValue = value;
    },
  },
  getters: {
    getIsActive: (state) => state.isSearchbarActive,
    getInputValue: (state) => state.searchInputValue,
  },
});
