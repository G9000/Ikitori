import { defineStore } from "pinia";

type userType = {
  name: string;
  avatar: string;
};

export const useCurrentUserState = defineStore("currentUserState", {
  state: () => ({
    currentUser: undefined as userType | undefined,
  }),
  actions: {
    setCurrentUser(userData: userType) {
      this.currentUser = userData;
    },
    removeCurrentUser() {
      this.currentUser = undefined;
    },
  },
  getters: {
    getCurrentUser: (state) => state.currentUser,
  },
});
