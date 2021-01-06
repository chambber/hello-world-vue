import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AppTemplate from '../components/AppTemplate.vue';
import Home from "../views/Home.vue";

import routesChef from "./chefs";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Application",
    component: AppTemplate,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      ...routesChef
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
