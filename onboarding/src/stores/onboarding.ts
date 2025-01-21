import { defineStore } from "pinia";

export const useOnboardingStore = defineStore("onboarding", {
  state: () => ({
    onboardingSeen: false,
  }),
  actions: {
    setOnboardingSeen(seen: boolean) {
      this.onboardingSeen = seen;
    },
  },
  persist: true
});
