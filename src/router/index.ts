import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/Home",
    name: "tasks",
    component: () => import("../views/HomeView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;