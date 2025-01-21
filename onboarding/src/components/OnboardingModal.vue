<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OnboardingModal",
});

</script>
<template>
  <div class="onboarding-modal">
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <h1>Welcome to the Clever User Dashboard!</h1>
      <p>
        We're excited to have you on board. To get started, please log in or create an account.
      </p>
    </div>        
  </div>      
</template>