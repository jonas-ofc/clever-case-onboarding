import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import store from '../store';

const routes = [
  { path: "/", name: "Login", component: LoginView },
  { path: "/dashboard", name: "Dashboard", component: DashboardView, meta: {requiresAuth: true} },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;