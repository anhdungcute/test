<template>
  <el-card>
    <div>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="Thông tin cá nhân" name="profile">
          <div>
            <el-form class="grid grid-cols-2 gap-4">
              <el-form-item label="Họ và tên">
                <el-input
                  v-model="ruleForm.name"
                  placeholder="Nhập học và tên..."
                />
              </el-form-item>
              <el-form-item label="Email">
                <el-input v-model="ruleForm.email" placeholder="Nhập email..." />
              </el-form-item>
              <el-form-item label="Ảnh đại diện" class="av">
                <el-upload
                  class="avatar-uploader"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <el-icon v-else class="avatar-uploader-icon"
                    ><Plus
                  /></el-icon>
                </el-upload>
              </el-form-item>
            </el-form>
            <div align="right" class="mt-5">
                <el-button type="primary">Lưu thông tin</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Thay đổi mật khẩu" name="passwword">
          <el-form class="grid grid-cols-2 gap-4">
            <el-form-item label="Mật khẩu cũ">
              <el-input v-model="formPassword.old" placeholder="Nhập mật khẩu cũ..." />
            </el-form-item>
            <el-form-item label="Mật khẩu mới">
              <el-input v-model="formPassword.new" placeholder="Nhập mật khẩu mới..." />
            </el-form-item>
          </el-form>
          <div align="right" class="mt-5">
                <el-button type="primary">Lưu mật khẩu</el-button>
            </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
const imageUrl = ref("");
const activeName = ref("profile");
const ruleForm = ref({
  name: "",
  email: "",
});
const formPassword = ref({
  old: "",
  new: "",
});
const handleAvatarSuccess = () => {
  console.log("xong ảnh");
};
const beforeAvatarUpload = () => {
  console.log("trước khi up ảnh");
};
</script>
<style>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed rgb(163, 163, 156);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: rgb(36, 123, 238);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
