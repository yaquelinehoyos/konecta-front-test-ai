import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    // with ':page?' we are using dynamic routes and '?' is to tell the route that it is not always necessary
    path: "/:page?",
    name: "Home",
    // It is more efficient if we can split each route's components into a separate chunk, and only load them when the route is visited.
    component: () => import("../views/Home/Index.vue"),
  },
  {
    path: "/character/:name?",
    name: "Character",
    // It is more efficient if we can split each route's components into a separate chunk, and only load them when the route is visited.
    component: () => import("../views/Character/Index.vue"),
  },
  {
    path: "/not-found/404",
    name: "NotFound",
    // It is more efficient if we can split each route's components into a separate chunk, and only load them when the route is visited.
    component: () => import(`@/views/NotFound/Index.vue`),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
