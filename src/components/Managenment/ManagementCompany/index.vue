<template>
  <el-card>
    <div class="user-management">
      <div class="mb-5 flex justify-between">
        <div><h3 class="font-bold">Quản lý công ty</h3></div>
        <div>
          <el-button type="primary" @click="openAddDialog" size="small"
            ><div class="mr-1"><i class="fa-solid fa-plus"></i></div>
            Thêm công ty</el-button
          >
        </div>
      </div>
      <el-table :data="users" style="width: 100%" stripe>
        <el-table-column type="index" width="50" />
        <el-table-column
          prop="namecompany"
          label="Tên công ty"
        ></el-table-column>
        <el-table-column prop="email" label="Email"></el-table-column>
        <el-table-column prop="adress" label="Địa chỉ"></el-table-column>
        <el-table-column label="Hành động">
          <template #default="{ row }">
            <el-button @click="openEditDialog(row)" type="primary" size="small"
              >Sửa</el-button
            >
            <el-popconfirm title="Bạn chắc chắn muốn xóa?" @confirm="deleteUser(row.id)">
              <template #reference>
                <el-button
                  type="danger"
                  size="small"
                  >Xóa</el-button
                >
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <!-- Add/Edit User Dialog -->
      <el-dialog
        v-model="dialogVisible"
        :title="isEditing ? 'Chỉnh sửa công ty' : 'Thêm mới công ty'"
      >
        <el-form :model="currentUser" ref="formRef" label-width="120px">
          <el-form-item label="Tên công ty">
            <el-input
              v-model="currentUser.namecompany"
              placeholder="Nhập tên công ty..."
            ></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input
              v-model="currentUser.email"
              placeholder="Nhập email..."
            ></el-input>
          </el-form-item>
          <el-form-item label="Địa chỉ cty">
            <el-input
              v-model="currentUser.adress"
              placeholder="Nhập địa chỉ công ty..."
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
import { ElNotification } from "element-plus";

interface User {
  id: string;
  namecompany: string;
  adress: string;
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
        namecompany: "CFC Việt nam",
        adress: "Phạm Hùng",
        email: "cfccietnam@gmail.com",
        password: "Admin",
        type: "Admin",
      },
      {
        id: "2",
        namecompany: "ITEKO",
        adress: "Đại mỗ",
        email: "iteko@gmail.com",
        password: "User",
        type: "User",
      },
    ]);
    const dialogVisible = ref(false);
    const currentUser = ref<User>({
      id: "0",
      namecompany: "",
      adress: "",
      email: "",
      password: "",
      type: "",
    });
    const isEditing = ref(false);

    // Mở dialog thêm người dùng
    const openAddDialog = () => {
      currentUser.value = {
        id: uuidv4(),
        namecompany: "",
        email: "",
        adress: "",
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
        ElNotification({
          title: "Thành công",
          message: "Chỉnh sửa thành công",
          type: "success",
        });
      } else {
        // Thêm người dùng mới
        currentUser.value.id = uuidv4(); // Tạo ID ngẫu nhiên (sử dụng thời gian hiện tại)
        users.value.push({ ...currentUser.value });
        ElNotification({
          title: "Thành công",
          message: "Thêm mới thành công",
          type: "success",
        });
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
