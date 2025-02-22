<template>
  <el-card>
    <div class="mb-5 flex justify-between">
      <div><h3 class="font-bold">Quản lý quyền tài khoản</h3></div>
      <div>
        <el-button type="primary" size="small"> Lưu</el-button>
      </div>
    </div>
    <div class="flex">
      <div class="m-4">
        <p>Công ty phân quyền</p>
        <el-select
          v-model="dataSelect"
          placeholder="Chọn công ty..."
          style="width: 240px"
          @change="handleChangeSelect()"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="m-4" v-if="dataAccount.length > 1">
        <p>Tài khoản phân quyền</p>
        <el-select
          multiple
          placeholder="Chọn công ty..."
          style="width: 240px"
          @change="handleChangeAccount()"
        >
          <el-option
            v-for="item in dataAccount"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
      >
        <el-table-column label="Tên chức năng">
          <template #default="scope">
            <div>
              {{ scope.row.name }}
            </div>
            <div class="flex">
              <div class="mr-5" v-for="i in optionsCheckbox">
                <el-checkbox
                  v-model="checked"
                  :label="i.label"
                  size="large"
                  border
                />
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import router from "@/routes/router";
import { v4 as uuidv4 } from "uuid";

const dataSelect = ref("");
const treeProps = reactive({
  checkStrictly: false,
});
const tableData = router.options.routes[1].children?.map((item) => {
  return {
    id: uuidv4(),
    ...item,
  };
});
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
const optionsCheckbox = ref([
  {
    value: "read",
    label: "Xem",
  },
  {
    value: "edit",
    label: "Sửa",
  },
  {
    value: "delete",
    label: "Xóa",
  },
  {
    value: "all",
    label: "Tất cả",
  },
]);
const checked = ref();
const handleChangeSelect = () => {
  dataAccount.value = options;
  console.log("router", router.options.routes[1].children);
};
const dataAccount = ref([
  {
    value: "Option5",
    label: "Option5",
  },
]);
const handleChangeAccount = () => {};
</script>
