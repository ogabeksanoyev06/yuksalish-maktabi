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
        path: "/works",
        name: "works",
        component: () => import("../views/site/pupils"),
      },
      {
        path: "/news/:newsId",
        name: "detailed-news",
        component: () => import("../views/site/News/detailed-news.vue"),
      },
      {
        path: "/test",
        name: "test",
        component: () => import("../views/site/test"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("../views/site/contact"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
