<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from '../stores/user'
import type { User, Errors } from "../interfaces/interfaces";
import { fetchUsers } from "../services/userService";
import CleverLogo from "../assets/svgs/clever-logo.svg";

export default defineComponent({
  name: "LoginView",

  setup() {
    const router = useRouter();
    const state = reactive({
      email: '' as string,
      password: '' as string,
      errors: {
        email: '',
        password: '',
      } as Errors,
      users: [] as User[],
    });

    const loadUsers = async () => {
      state.users = await fetchUsers();
    };

    const validateForm = (): boolean => {
      state.errors = { email: '', password: '' };
      if (!state.email) {
        state.errors.email = 'Ikke en gyldig email';
      }
      if (!state.password) {
        state.errors.password = 'Mangler adgangskode';
      }
      return !state.errors.email && !state.errors.password;
    };

    const login = () => {
      if (validateForm()) {
        const user = state.users.find((user: User) => user.email === state.email && user.password === state.password);
        if (user) {
          const userStore = useUserStore();
          userStore.login(user); 
          router.push("/dashboard"); 
        } else {
          state.errors.password = 'Den e-mail eller adgangskode du har indtastet, er ugyldig. Prøv igen.';
        }
      }
    };

    onMounted(() => {
      loadUsers();
    });

    return {
      state,
      login,
      email: state.email,
      password: state.password,
      errors: state.errors,
      CleverLogo,
    };
  },
});
</script>


<template>
  <div class="flex flex-row">
    <div class="w-1/2 ml-16 mt-12">
      <div class="mb-24">
        <component :is="CleverLogo" class="w-fit" />
      </div>
      <form name="login-form" @submit.prevent="login" class="flex flex-col w-4/5">
        <div>
          <h2 class="font-sans text-5xl font-extralight text-clever-green-100 mb-12">
            Velkommen til <br> Selvbetjening Erhverv
          </h2>
          <p class="text-gray-600 mb-5">
            Log ind med din brugerkonto</p>
        </div>
        <div class="form-group mb-4 ">
          <label for="email"></label>
          <input v-model="state.email" id="email" type="email" placeholder="Email*"
            class="w-full focus:outline-none p-4 border-solid border border-clever-green-60" />
          <div v-if="state.errors.email" class="error">{{ state.errors.email }}</div>
        </div>

        <div class="form-group mb-4 ">
          <label for="password"></label>
          <input v-model="state.password" id="password" type="password" placeholder="Adgangskode*"
            class="w-full focus:outline-none p-4 border-solid border border-clever-green-60" />
          <div v-if="state.errors.password" class="mt-2 text-xs text-red-600">{{ state.errors.password }}</div>
        </div>

        <button type="submit" class="bg-clever-green-100 w-fit mb-2 py-2 px-5 text-clever-white">Log ind</button>
        <a href="#" class="forgot-password underline">Glemt adgangskode?</a>
      </form>
    </div>

    <div class="w-1/2 h-dvh overflow-hidden "><img alt="Clever charger" src="../assets/images/clever-charger.png" class="right-0 bottom-64 relative" /></div>

  </div>

</template>


<style scoped>

</style>