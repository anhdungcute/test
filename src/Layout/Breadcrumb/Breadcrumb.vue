<!-- src/components/Breadcrumb.vue -->
<template>
  <div class="py-2">
    <el-breadcrumb>
      <el-breadcrumb-item
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        :to="breadcrumb.path"
      >
        {{ breadcrumb.label }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useBreadcrumbStore } from "@/Stores/breadcrumbStore";

export default defineComponent({
  name: "Breadcrumb",
  setup() {
    // Lấy dữ liệu breadcrumb từ Pinia store
    const breadcrumbStore = useBreadcrumbStore();

    // Sử dụng computed để theo dõi sự thay đổi của breadcrumbs
    const breadcrumbs = computed(() => breadcrumbStore.breadcrumbs);

    return {
      breadcrumbs,
    };
  },
});
</script>

<style scoped>
/* Các style tùy chỉnh cho breadcrumb */
</style>
