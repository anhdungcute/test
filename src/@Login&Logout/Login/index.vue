<template>
  <div class="form m-0 h-full w-full p-0">
    <div class="bg m-0 h-full w-full p-0">
      <div class="over-lay"></div>
      <div class="container-login">
        <div>
          <!-- From -->
          <div class="content">
            <div class="form">
              <div class="content-form-re">
                <div class="content-form-ab rounded-xl">
                  <div class="my-5 text-center text-2xl font-bold text-white">
                    ĐĂNG NHẬP
                  </div>
                  <div>
                    <el-form
                      status-icon
                      ref="ruleForm"
                      label-width="120px"
                      class="demo-ruleForm"
                      label-position="top"
                    >
                      <el-form-item
                        class="change-color"
                        label="Username"
                        :rules="usernameRules"
                      >
                        <el-input
                          v-model="form.username"
                          placeholder="Enter username"
                        ></el-input>
                      </el-form-item>

                      <el-form-item
                        class="change-color"
                        label="Password"
                        :rules="passwordRules"
                      >
                        <el-input
                          v-model="form.password"
                          type="password"
                          placeholder="Enter password"
                        ></el-input>
                      </el-form-item>
                      <div>
                        <el-checkbox
                          class="change-color"
                          v-model="form.rememberMe"
                          >Nhớ đăng nhập</el-checkbox
                        >
                      </div>
                    </el-form>
                    <div class="mt-5" align="center">
                      <el-button type="primary" @click="handleLogin"
                        >Đăng nhập</el-button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- From -->
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/Stores/auth";
interface LoginForm {
  username: string;
  password: string;
  rememberMe: boolean;
}

const form = ref<LoginForm>({ username: "", password: "", rememberMe: false });
const authStore = useAuthStore();
const router = useRouter();
const usernameRules = [
  { required: true, message: "Please input your username", trigger: "blur" },
];

const passwordRules = [
  { required: true, message: "Please input your password", trigger: "blur" },
];

// Xử lý đăng nhập
// Khi trang đăng nhập được mở, tự động điền thông tin đăng nhập nếu có
form.value.username = authStore.username ? authStore.username : "";
form.value.password = authStore.password ? authStore.password : "";
form.value.rememberMe = authStore.rememberMe == "1" ? false : true;
const handleLogin = async () => {
  try {
    await authStore.login(
      form.value.username,
      form.value.password,
      form.value.rememberMe == false ? "1" : "2"
    );
    router.push({ name: "home" });
  } catch (error) {
    alert(error);
  }
};
</script>
<style>
.bg {
  position: relative;
}
.img-bg {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-size: cover;
  background: center;
}
.container-login {
  position: absolute;
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* background: transparent; */
  width: 30%;
  height: 60%;
}
.content {
  position: relative;
}
.over-lay {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/bg-login.jpg") no-repeat center center;
  background-size: cover;
  /* filter: blur(8px); */
  /* opacity: 1; */
}
.content-form-re {
  position: relative !important;
}
.content-form-ab {
  position: absolute;
  top: 10%;
  width: 100%;
  box-sizing: border-box;
  padding: 5% 15%;
  background: rgb(0 0 0 / 54%);
}
.change-color .el-form-item__label {
  color: #fff !important;
}
.change-color .el-checkbox__label {
  color: #fff !important;
}
</style>
