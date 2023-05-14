import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/site/home"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/site/about"),
      },
      {
        path: "/news",
        name: "news",
        component: () => import("../views/site/News/news.vue"),
      },
      {
        path: "/news/:newsId",
        name: "detailed-news",
        component: () => import("../views/site/News/detailed-news.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
