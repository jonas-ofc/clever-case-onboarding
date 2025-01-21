<script lang="ts">
import LoginView from './views/LoginView.vue'
import DashboardView from './views/DashboardView.vue'

export default {
  name: 'App',
  components: {
    DashboardView,
    LoginView,
  }
}

</script>

<template>
  <div class="App">
    <router-view />
  </div>
</template>

<style scoped>
.App {
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>
