import { defineStore } from "pinia";

export const useOnboardingStore = defineStore("onboarding", {
  state: () => ({
    onboardingSeen: false,
    currentStep: 0,
  }),
  actions: {
    setOnboardingSeen(seen: boolean) {
      this.onboardingSeen = seen;
    },
    nextStep() {
      if (this.currentStep < 2) {
        this.currentStep++;
      } else {
        this.setOnboardingSeen(true);
      }
    },
    previousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
  },
  persist: true
});
