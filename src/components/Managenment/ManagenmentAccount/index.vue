<template>
  <el-card>
    <div class="user-management">
      <div class="mb-5 flex justify-between">
        <div><h3 class="font-bold">Quản lý tài khoản</h3></div>
        <div>
          <el-button type="primary" @click="openAddDialog" size="small"
            ><div class="mr-1"><i class="fa-solid fa-plus"></i></div>
            Thêm tài khoản</el-button
          >
        </div>
      </div>
      <el-table :data="users" style="width: 100%" stripe>
        <el-table-column type="index" width="50" />
        <el-table-column
          prop="type"
          label="Loại tài khoản"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="username"
          label="Tên người dùng"
        ></el-table-column>
        <el-table-column prop="email" label="Email"></el-table-column>
        <el-table-column
          prop="nameaccount"
          label="Tên tài khoản"
        ></el-table-column>
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
      <el-dialog v-model="dialogVisible"  :title="isEditing ? 'Chỉnh sửa tài khoản' : 'Thêm mới tài khoản'">
        <el-form :model="currentUser" ref="formRef" label-width="120px">
          <el-form-item label="Công ty">
            <el-select v-model="currentUser.type" placeholder="Chọn công ty">
              <el-option label="CFC Việt nam" value="Admin"></el-option>
              <el-option label="ITEKO" value="User"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Họ và tên">
            <el-input
              v-model="currentUser.username"
              placeholder="Nhập họ và tên..."
            ></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input
              v-model="currentUser.email"
              placeholder="Nhập email..."
            ></el-input>
          </el-form-item>
          <el-form-item label="Tên tài khoản">
            <el-input
              v-model="currentUser.nameaccount"
              placeholder="Nhập tên tài khoản..."
            ></el-input>
          </el-form-item>
          <el-form-item label="Mật khẩu">
            <el-input
              v-model="currentUser.password"
              placeholder="Nhập mật khẩu..."
            ></el-input>
          </el-form-item>
          <el-form-item label="Loại tài khoản">
            <el-select v-model="currentUser.type" placeholder="Nhập mật khẩu ">
              <el-option label="Admin" value="Admin"></el-option>
              <el-option label="User" value="User"></el-option>
            </el-select>
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
        username: "admin",
        nameaccount: "Dũng Đào",
        email: "dungdao@gmail.com",
        password: "Admin",
        type: "Admin",
      },
      {
        id: "2",
        username: "user",
        nameaccount: "Hiếu Đào",
        email: "hieudao@gmail.com",
        password: "User",
        type: "User",
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
