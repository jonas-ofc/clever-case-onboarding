import { defineStore } from 'pinia';
import type { User } from '../interfaces/interfaces';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    login(user: User) {
      this.user = user;
    },
    logout() {
      this.user = null;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  persist: {
    key: 'user-store',
    storage: sessionStorage, 
  },
});
