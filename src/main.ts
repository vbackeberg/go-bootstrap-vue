import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Assignments from "@/components/Assignments.vue";
import Boids from "@/components/Boids.vue";

const routes = [
  { path: "/", component: Assignments },
  { path: "/assignments", component: Assignments },
  { path: "/boids", component: Boids }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount("#app");
