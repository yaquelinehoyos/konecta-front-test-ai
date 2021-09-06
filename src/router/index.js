import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:page?",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/Index.vue"),
  },
  {
    path: "/",
    name: "Character",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Character/Index.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
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
