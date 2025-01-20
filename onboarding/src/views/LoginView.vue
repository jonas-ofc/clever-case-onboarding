<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      email: '',
      password: '',

    };
  },
 
});
</script>


<template>
  <form name="login-form" @submit.prevent="login">
    <div class="form-group">
      <label for="email">E-mail</label>
      <input v-model="email" id="email" type="email" />
     
    </div>

    <div class="form-group">
      <label for="password">Adgangskode</label>
      <input v-model="password" id="password" type="password"/>
     
    </div>

    <button type="submit">Log ind</button>
    <a href="#" class="forgot-password">Glemt adgangskode?</a>
  </form>
</template>

<style scoped></style>