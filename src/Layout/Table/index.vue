<template>
  <div>
    <!-- Bảng dữ liệu -->
    <el-table
      :data="paginatedData"
      :loading="loading"
      style="width: 100%"
      :header-align="'center'"
    >
      <el-table-column type="index"/>
      <slot></slot>
      <!-- Slot để nhận nội dung cột bảng từ bên ngoài -->
    </el-table>

    <!-- Phân trang -->
    <div class="mt-3">
      <el-pagination
        v-if="totalItems > 0"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="totalItems"
        @current-change="handlePageChange"
        layout="prev, pager, next, jumper, ->, total"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import { ElTable, ElPagination } from "element-plus";

export default defineComponent({
  name: "Table",
  components: {
    ElTable,
    ElPagination,
  },
  props: {
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const currentPage = ref(1);
    const paginatedData = ref<any[]>([]);

    // Watch the data and currentPage to update the paginated data
    watch([() => props.data, currentPage], () => {
      updatePaginatedData();
    });

    // Function to update paginated data
    function updatePaginatedData() {
      const startIndex = (currentPage.value - 1) * props.pageSize;
      const endIndex = startIndex + props.pageSize;
      paginatedData.value = props.data.slice(startIndex, endIndex);
    }

    // Handle page change
    function handlePageChange(page: number) {
      currentPage.value = page;
    }

    return {
      currentPage,
      paginatedData,
      handlePageChange,
    };
  },
});
</script>

<style scoped>
/* Customize table style here */
</style>
F
