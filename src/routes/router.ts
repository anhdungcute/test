import * as vR from "vue-router";
import DashboardVue from "@/views/Dashboard/index.vue";
import Management from "@components/Managenment/index.vue";
import Pnf from "@pages/NotFoundPage.vue";

//Create a router and then export it

const _routes: Array<vR.RouteRecordRaw> = [
  //Path & Component are mandatory.
  {
    path: "/",
    component: DashboardVue,
    children: [
      {
        name: "management1",
        path: "managemnet-1",
        component: () => import("@components/Report/index.vue"),
      },
      {
        name: "managemnet2",
        path: "managemnet-2",
        component: () => import("@components/Report/index1.vue"),
      },
      {
        path: "/managemnet",
        name: "Quản lý hệ thống",
        component: Management,
        children: [
          {
            path: "/managemnet-system",
            component: () =>
              import("@components/Managenment/ManagementSystem/index.vue"),
            name: "managemnet-system",
          },
          {
            path: "/managemnet-account",
            component: () =>
              import("@components/Managenment/ManagenmentAccount/index.vue"),
            name: "managemnet-account",
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@Login&Admin/Login/index.vue"),
    name: "login",
  },
  {
    path: "/nf", //Need to change with regex to catch all non-defined
    component: Pnf,
    name: "none",
  },
];

const router = vR.createRouter({
  history: vR.createWebHistory(), //WebHash history will add hash before every route
  routes: _routes, //Send the routes here.
});

export default router;
