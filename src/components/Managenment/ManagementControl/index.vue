<template>
  <el-card>
    <div class="user-management">
      <div class="mb-5 flex justify-between">
        <div><h3 class="font-bold">Quản lý quyền</h3></div>
        <div>
          <el-button type="primary" @click="openAddDialog" size="small"
            ><div class="mr-1"><i class="fa-solid fa-plus"></i></div>
            Thêm quyền</el-button
          >
        </div>
      </div>
      <el-table :data="users" style="width: 100%" stripe>
        <el-table-column type="index" width="50" />
        <el-table-column
          prop="username"
          label="Tên quyền"
        ></el-table-column>
        <!-- <el-table-column prop="email" label="Mô tả"></el-table-column> -->
        <el-table-column label="Hành động">
          <template #default="{ row }">
            <el-button @click="openEditDialog(row)" type="primary" size="small"
              >Sửa</el-button
            >
            <el-button @click="deleteUser(row.id)" type="danger" size="small"
              >Xóa</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <!-- Add/Edit User Dialog -->
      <el-dialog v-model="dialogVisible" :title="isEditing ? 'Chỉnh sửa quyền' :'Thêm mới quyền'">
        <el-form :model="currentUser" ref="formRef" label-width="100px">
          <el-form-item label="Tên quyền">
            <el-input
              v-model="currentUser.username"
              placeholder="Nhập tên quyền..."
            ></el-input>
          </el-form-item>
          <el-form-item label="Mô tả">
            <el-input
              v-model="currentUser.email"
              placeholder="Nhập mô tả..."
            ></el-input>
          </el-form-item>
  
        </el-form>
        <div align="right" class="pt-5">
          <span slot="footer" class="dialog-footer">
            <el-button size="small" type="primary" @click="saveUser"
              >Lưu</el-button
            >
            <el-button size="small" type="danger" @click="closeDialog"
              >Đóng</el-button
            >
          </span>
        </div>
      </el-dialog>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { v4 as uuidv4 } from "uuid";

interface User {
  id: string;
  username: string;
  nameaccount: string;
  email: string;
  password: string;
  type: string;
}

export default defineComponent({
  name: "UserManagement",
  setup() {
    const users = ref<User[]>([
      {
        id: "1",
        username: "Thêm ",
        nameaccount: "tony",
        email: "john@example.com",
        password: "Admin",
        type: "Admin",
      },

      {
        id: "2",
        username: "Sửa",
        nameaccount: "helo",
        email: "jane@example.com",
        password: "User",
        type: "User",
      },
      {
        id: "3",
        username: "Xóa ",
        nameaccount: "tony",
        email: "john@example.com",
        password: "Admin",
        type: "Admin",
      },
      {
        id: "4",
        username: "Xem ",
        nameaccount: "tony",
        email: "john@example.com",
        password: "Admin",
        type: "Admin",
      },
    ]);
    const dialogVisible = ref(false);
    const currentUser = ref<User>({
      id: "0",
      username: "",
      nameaccount: "",
      email: "",
      password: "",
      type: "",
    });
    const isEditing = ref(false);

    // Mở dialog thêm người dùng
    const openAddDialog = () => {
      currentUser.value = {
        id: uuidv4(),
        username: "",
        email: "",
        nameaccount: "",
        password: "",
        type: "",
      }; // Reset form
      isEditing.value = false;
      dialogVisible.value = !dialogVisible.value;
      console.log("check uuid", uuidv4());
    };

    // Mở dialog sửa người dùng
    const openEditDialog = (user: User) => {
      currentUser.value = { ...user }; // Copy dữ liệu người dùng để chỉnh sửa
      isEditing.value = true;
      dialogVisible.value = true;
    };

    // Đóng dialog
    const closeDialog = () => {
      dialogVisible.value = false;
    };

    // Lưu người dùng (Thêm hoặc sửa)
    const saveUser = () => {
      if (isEditing.value) {
        // Cập nhật thông tin người dùng
        const index = users.value.findIndex(
          (user) => user.id === currentUser.value.id
        );
        if (index !== -1) {
          users.value[index] = { ...currentUser.value };
        }
      } else {
        // Thêm người dùng mới
        currentUser.value.id = uuidv4(); // Tạo ID ngẫu nhiên (sử dụng thời gian hiện tại)
        users.value.push({ ...currentUser.value });
      }
      closeDialog();
    };

    // Xóa người dùng
    const deleteUser = (id: string) => {
      users.value = users.value.filter((user) => user.id !== id);
    };

    return {
      users,
      dialogVisible,
      currentUser,
      isEditing,
      openAddDialog,
      openEditDialog,
      closeDialog,
      saveUser,
      deleteUser,
    };
  },
});
</script>

<style scoped></style>
