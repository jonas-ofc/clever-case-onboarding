<script lang="ts">
import { defineComponent, ref } from "vue";
import OnboardingModal from "../components/OnboardingModal.vue";

export default defineComponent({
  name: "DashboardView",
  components: {
    OnboardingModal,
  },
  setup() {
    const showModal = ref(true);
    return {
      showModal,
    };
  },
});
</script>

<template>

<img alt="Dashboard" src="../assets/images/clever-user-dashboard.png" class="static-background" />

<OnboardingModal v-if="showModal" />

</template>

<style scoped>
.static-background {
  width: 100vw;
  
}
</style>
