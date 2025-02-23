import * as vR from "vue-router";
import DashboardVue from "@/views/Dashboard/index.vue";
import Management from "@components/Managenment/index.vue";
import Pnf from "@pages/NotFoundPage.vue";
import { useAuthStore } from "@/Stores/auth";

//Create a router and then export it

const _routes: Array<vR.RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("@Login&Logout/Login/index.vue"),
    name: "login",
    meta: { requiresAuth: false }, // Trang login không cần xác thực
  },
  {
    path: "/",
    name: "home",
    component: DashboardVue,
    redirect: { path: "/capital-figures" },
    meta: {
      requiresAuth: true, // Trang dash  cần xác thực
    },
    children: [
      {
        path: "/report-capital",
        name: "Báo cáo nguồn vốn",
        children: [
          {
            path: "/capital-figures",
            component: () =>
              import("@components/Report/ReportCapital/index.vue"),
            name: "Số liệu nguồn vốn",
          },
          {
            path: "/capital-chart",
            component: () =>
              import(
                "@components/Report/ReportCapital/ReportCapitalChart/index.vue"
              ),
            name: "Báo cáo nguồn vốn",
          },
        ],
      },
      {
        path: "/report-asset",
        name: "Báo cáo tài sản",
        children: [
          {
            path: "/asset-figures",
            component: () => import("@components/Report/ReportAsset/index.vue"),
            name: "Số liệu tài sản",
          },
          {
            path: "/asset-chart",
            component: () =>
              import(
                "@components/Report/ReportAsset/ReportAssetChart/index.vue"
              ),
            name: "Báo cáo tài sản",
          },
        ],
      },
      {
        path: "/relatioship",
        name: "Tương quan tài sản và nguồn vốn",
        children: [
          {
            path: "/relatioship-figures",
            component: () => import("@components/Report/Relatioship/index.vue"),
            name: "Số liệu tương quan",
          },
          {
            path: "/relatioship-chart",
            component: () =>
              import(
                "@components/Report/Relatioship/RelatioshipChart/index.vue"
              ),
            name: "Báo cáo tương quan",
          },
        ],
      },
      {
        path: "/managemnet",
        name: "Quản lý hệ thống",
        component: Management,
        children: [
          {
            path: "/managemnet-company",
            component: () =>
              import("@components/Managenment/ManagementCompany/index.vue"),
            name: "Quản lý công ty",
          },
          {
            path: "/managemnet-account",
            component: () =>
              import("@components/Managenment/ManagenmentAccount/index.vue"),
            name: "Quản lý tài khoản",
          },
          {
            path: "/managemnet-control",
            component: () =>
              import("@components/Managenment/ManagementControl/index.vue"),
            name: "Quản lý quyền",
          },
          {
            path: "/managemnet-account-authorization",
            component: () =>
              import(
                "@components/Managenment/ManagenmentAccountAuthorization/index.vue"
              ),
            name: "Quản lý quyền tài khoản",
          },
          {
            path: "/managemnet-chart",
            component: () =>
              import(
                "@components/Managenment/ManagenmentAccountAuthorization/testChart.vue"
              ),
            name: "màn test chart",
          },
        ],
      },
      {
        path: "/setting-profile",
        component: () => import("../Layout/Header/Profile.vue"),
        name: "Thông tin cá nhân",
      },
    ],
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

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
