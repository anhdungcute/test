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
