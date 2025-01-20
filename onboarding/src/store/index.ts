import { createStore } from 'vuex';
import type { State } from '../interfaces/interfaces';

export default createStore<State>({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
  actions: {
    login({ commit }) {
      commit('login');
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  },
});