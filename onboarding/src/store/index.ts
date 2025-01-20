import { createStore } from 'vuex';
import type { State } from '../interfaces/interfaces';
import type { User } from '../interfaces/interfaces';

export default createStore<State>({
    state: {
        isAuthenticated: false,
        user: null as User | null, // Tilføj brugerdata
      },
      mutations: {
        setUser(state, user: User) {
          state.user = user;
        },
        clearUser(state) {
          state.user = null;
        },
      },
      actions: {
        async login({ commit }, user: User) {
          commit('setUser', user);
          commit('login');
        },
        logout({ commit }) {
          commit('clearUser');
          commit('logout');
        },
      },
      getters: {
        user: (state) => state.user,
      },
});