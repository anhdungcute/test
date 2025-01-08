export interface INavigationRoute {
  name: string;
  displayName: string;
  children?: INavigationRoute[];
}

export default {
  root: {
    name: "/",
    displayName: "navigationRoutes.home",
  },
  routes: [
    {
      name: "/managemnet-1",
      displayName: "Quản lý tài nguyên",
    },
    {
      name: "/managemnet-2",
      displayName: "Quản lý báo cáo",
    },
    {
      name: "managemnet-2",
      displayName: "Quản lý hệ thống",
      children: [
        {
          name: "/managemnet-system",
          displayName: "Quản lý hệ thống",
        },
        {
          name: "/managemnet-account",
          displayName: "Quản lý tài khoản",
        },
      ],
    },
  ] as INavigationRoute[],
};
