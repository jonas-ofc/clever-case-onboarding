<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    validateForm() {
      this.errors = { email: '', password: '' };
      if (!this.email) {
        this.errors.email = 'E-mail is required';
      }
      if (!this.password) {
        this.errors.password = 'Password is required';
      }
      return !this.errors.email && !this.errors.password;
    },
    login() {
      if (this.validateForm()) {
        const router = useRouter();
        router.push('/dashboard');
      }
    }
  }
});
</script>


<template>

<div>
  <form name="login-form" @submit.prevent="login">
    <div class="form-group">
      <label for="email">E-mail</label>
      <input v-model="email" id="email" type="email" />
      <div class="error">{{ errors.email }}</div>  
    </div>

    <div class="form-group">
      <label for="password">Adgangskode</label>
      <input v-model="password" id="password" type="password"/>
      <div class="error">{{ errors.password }}</div>
    </div>

    <button type="submit">Log ind</button>
    <a href="#" class="forgot-password">Glemt adgangskode?</a>
  </form>

</div>

</template>


<style scoped>
</style>