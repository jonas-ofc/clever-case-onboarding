import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import { useUserStore } from "../stores/user";


const routes = [
  { path: "/", name: "Login", component: LoginView },
  { path: "/dashboard", name: "Dashboard", component: DashboardView, meta: {requiresAuth: true} },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, _from, next) => {
  const userStore = useUserStore(); 
  if (to.meta.requiresAuth) {
    if (userStore.isAuthenticated) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;