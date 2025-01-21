<script lang="ts">
import { defineComponent } from "vue";
import { useOnboardingStore } from "../stores/onboarding";
import OnboardingModal from "../components/OnboardingModal.vue";

export default defineComponent({
  name: "DashboardView",
  components: {
    OnboardingModal,
  },
  setup() {
    const store = useOnboardingStore();
    return {
      store,
    };
  },
});
</script>

<template>
  <img alt="Dashboard" src="../assets/images/clever-user-dashboard.png" class="static-background" />
  <OnboardingModal v-if="!store.onboardingSeen" />
</template>

<style scoped>
.static-background {
  width: 100vw;
}
</style>
