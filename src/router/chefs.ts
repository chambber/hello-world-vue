import { RouteConfig } from "vue-router";

const routes: Array<RouteConfig> = [
  {
    path: "/chefs",
    name: "About",
    component: () => import(/* webpackChunkName: "chef" */ "../views/Chef.vue")
  },
  {
    path: "/chefs/:chef/receipts",
    name: "ChefReceipts",
    component: () =>
      import(
        /* webpackChunkName: "chef-receipts" */ "../views/ChefReceipts.vue"
      ),
    redirect: "/chefs/:chef/receipts/ingredients",
    children: [
      {
        path: "ingredients",
        name: "ChefReceiptIngredientes",
        component: () =>
          import(
            /* webpackChunkName: "ingredientes" */ "../views/Ingredientes.vue"
          )
      },
      {
        path: "preparo",
        name: "ChefReceiptPreparo",
        component: () =>
          import(/* webpackChunkName: "preparo" */ "../views/Preparo.vue")
      }
    ]
  }
];

export default routes;
