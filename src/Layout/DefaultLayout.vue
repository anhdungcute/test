<script setup lang="ts">
import { defineComponent, onMounted, watchEffect, ref } from "vue";
import { useBreadcrumbStore } from "@/Stores/breadcrumbStore";
import { useRoute } from "vue-router";
import HeaderArea from "@/Layout/Header/HeaderArea.vue";
import SidebarArea from "@/Layout/Sidebar/index.vue";
import Breadcrumb from "@/Layout/Breadcrumb/Breadcrumb.vue";
import Nav from "./Sidebar/NavigationRoutes";
const breadcrumbStore = useBreadcrumbStore();
const route = useRoute();
interface Route {
  name: string;
  displayName: string;
  children?: Route[];
}
// Hàm cập nhật breadcrumb
const updateBreadcrumbs = () => {
  function findRouteByName(
    routes: Route[],
    targetName: string
  ): Route | undefined {
    for (const route of routes) {
      // Kiểm tra nếu name trùng khớp
      if (route.name === targetName) {
        return route;
      }
      // Nếu không tìm thấy và có children, tiếp tục tìm trong children
      if (route.children) {
        const foundInChildren = findRouteByName(route.children, targetName);
        if (foundInChildren) {
          return foundInChildren;
        }
      }
    }
    return undefined;
  }
  const result = findRouteByName(Nav.routes, route.path);
  const breadcrumbs = [
    { path: "/", label: "Home" },
    {
      path: route.path,
      label: result?.displayName ? result.displayName : ("" as string),
    },
  ];
  breadcrumbStore.setBreadcrumbs(breadcrumbs);
};

// Cập nhật breadcrumb khi component được mounted
onMounted(updateBreadcrumbs);

// Theo dõi sự thay đổi của route để cập nhật breadcrumb
watchEffect(updateBreadcrumbs);
</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex h-screen overflow-hidden">
    <!-- ===== Sidebar Start ===== -->
    <SidebarArea />
    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div
      class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"
    >
      <!-- ===== Header Start ===== -->
      <HeaderArea />
      <!-- ===== Header End ===== -->

      <!-- ===== Main Content Start ===== -->
      <main>
        <div class="mx-auto max-w-screen-2xl p-2">
          <Breadcrumb />

          <RouterView />
        </div>
      </main>
      <!-- ===== Main Content End ===== -->
    </div>
  </div>
  <!-- ===== Page Wrapper End ===== -->
</template>
