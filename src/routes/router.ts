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
    redirect: { path: "/dashboard" },
    meta: {
      requiresAuth: true, // Trang dash  cần xác thực
    },
    children: [
      {
        path: "/dashboard",
        component: () => import("@components/Dashboard/index.vue"),
        name: "Trang chủ",
      },
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
        path: "/EBIT&EBITDA",
        name: "Báo cáo EBIT&EBITDA",
        children: [
          {
            path: "/EBIT&EBITDA-figures",
            component: () => import("@components/Report/EBIT&EBITDA/index.vue"),
            name: "Số liệu EBIT&EBITDA",
          },
          {
            path: "/EBIT&EBITDA-chart",
            component: () =>
              import(
                "@components/Report/EBIT&EBITDA/EBIT&EBITDAChart/index.vue"
              ),
            name: "Báo cáo EBIT&EBITDA",
          },
        ],
      },
      {
        path: "/total-asset-growth",
        name: "Báo cáo Tăng trưởng",
        children: [
          {
            path: "/total-asset-growth-figures",
            component: () => import("@components/Report/Growth/index.vue"),
            name: "Số liệu Tăng trưởng",
          },
          {
            path: "/total-asset-growth-chart",
            component: () =>
              import(
                "@components/Report/Growth/GrowthChart/index.vue"
              ),
            name: "Báo cáo Tăng trưởng",
          },
        ],
      },
      {
        path: "/cost-analysis",
        name: "Phân tích chi phí",
        children: [
          {
            path: "/cost-analysis-figures",
            component: () => import("@components/Report/CostAnalysis/index.vue"),
            name: "Số liệu phân tích chi phí",
          },
          {
            path: "/cost-analysis-chart",
            component: () =>
              import(
                "@components/Report/CostAnalysis/CostAnalysisChart/index.vue"
              ),
            name: "Báo cáo phân tích chi phí",
          },
        ],
      },
      {
        path: "/cash-flow",
        name: "Dòng tiền",
        children: [
          {
            path: "/cash-flow-figures",
            component: () => import("@components/Report/CashFlow/index.vue"),
            name: "Số liệu dòng tiền",
          },
          {
            path: "/cash-flow-chart",
            component: () =>
              import(
                "@components/Report/CashFlow/CashFlowChart/index.vue"
              ),
            name: "Báo cáo dòng tiền",
          },
        ],
      },
      {
        path: "/business-results",
        name: "Báo cáo kết quả kinh doanh",
        children: [
          {
            path: "/business-results-figures",
            component: () =>
              import("@components/Report/BusinessResults/index.vue"),
            name: "Số liệu kết quả kinh doanh",
          },
          {
            path: "/business-results-chart",
            component: () =>
              import(
                "@components/Report/BusinessResults/BusinessResultsChart/index.vue"
              ),
            name: "Báo cáo kết quả kinh doanh",
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
  if (to.meta.requiresAuth && !authStore.AuthState.isAuthenticated) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
