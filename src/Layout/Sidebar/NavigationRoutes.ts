export interface INavigationRoute {
  name: string;
  displayName: string;
  children?: INavigationRoute[];
  show: boolean;
}

export default {
  root: {
    name: "/",
    displayName: "navigationRoutes.home",
  },
  routes: [
    {
      name: "/dashboard",
      displayName: "Trang chủ",
      show: true,
    },
    {
      name: "/setting-profile",
      displayName: "Thông tin cá nhân",
      show: false,
    },
    {
      name: "report-capital",
      displayName: "Báo cáo nguồn vốn",
      show: true,
      children: [
        {
          name: "/capital-figures",
          displayName: "Số liệu nguồn vốn",
          show: true,
        },
        {
          name: "/capital-chart",
          displayName: "Báo cáo nguồn vốn",
          show: true,
        },
      ],
    },
    {
      name: "report-asset",
      displayName: "Báo cáo tài sản",
      show: true,
      children: [
        {
          name: "/asset-figures",
          displayName: "Số liệu tài sản",
          show: true,
        },
        {
          name: "/asset-chart",
          displayName: "Báo cáo tài sản",
          show: true,
        },
      ],
    },
    {
      name: "relatioship",
      displayName: "Tương quan tài sản & vốn",
      show: true,
      children: [
        {
          name: "/relatioship-figures",
          displayName: "Số liệu tương quan",
          show: true,
        },
        {
          name: "/relatioship-chart",
          displayName: "Báo cáo tương quan",
          show: true,
        },
      ],
    },
    {
      name: "business-results",
      displayName: "Kết quả kinh doanh",
      show: true,
      children: [
        {
          name: "/business-results-figures",
          displayName: "Số liệu kết quả kinh doanh",
          show: true,
        },
        {
          name: "/business-results-chart",
          displayName: "Báo cáo kết quả kinh doanh",
          show: true,
        },
      ],
    },
    {
      name: "EBIT&EBITDA",
      displayName: "Báo cáo EBIT&EBITDA",
      show: true,
      children: [
        {
          name: "/EBIT&EBITDA-figures",
          displayName: "Số liệu EBIT&EBITDA",
          show: true,
        },
        {
          name: "/EBIT&EBITDA-chart",
          displayName: "Báo cáo EBIT&EBITDA",
          show: true,
        },
      ],
    },
    {
      name: "total-asset-growth",
      displayName: "Báo cáo tăng trưởng",
      show: true,
      children: [
        {
          name: "/total-asset-growth-figures",
          displayName: "Số liệu tăng trưởng",
          show: true,
        },
        {
          name: "/total-asset-growth-chart",
          displayName: "Báo cáo tăng trưởng",
          show: true,
        },
      ],
    },
    {
      name: "cost-analysis",
      displayName: "Phân tích chi phí",
      show: true,
      children: [
        {
          name: "/cost-analysis-figures",
          displayName: "Số liệu phân tích chi phí",
          show: true,
        },
        {
          name: "/cost-analysis-chart",
          displayName: "Báo cáo phân tích chi phí",
          show: true,
        },
      ],
    },
    {
      name: "cash-flow",
      displayName: "Dòng tiền",
      show: true,
      children: [
        {
          name: "/cash-flow-figures",
          displayName: "Số liệu dòng tiền",
          show: true,
        },
        {
          name: "/cash-flow-chart",
          displayName: "Báo cáo dòng tiền",
          show: true,
        },
      ],
    },
    {
      name: "managemnet-2",
      displayName: "Quản lý hệ thống",
      show: true,
      children: [
        {
          name: "/managemnet-company",
          displayName: "Quản lý công ty",
          show: true,
        },
        {
          name: "/managemnet-account",
          displayName: "Quản lý tài khoản",
          show: true,
        },
        {
          name: "/managemnet-control",
          displayName: "Quản lý quyền",
          show: true,
        },
        {
          name: "/managemnet-account-authorization",
          displayName: "Quản lý quyền tài khoản",
          show: true,
        },
        // {
        //   name: "/managemnet-chart",
        //   displayName: "test chart",
        // },
      ],
    },
  ] as INavigationRoute[],
};
