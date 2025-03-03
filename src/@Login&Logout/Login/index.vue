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
import { useProfileStore } from "@/Stores/profile";
import NavigationRoutes from "@/Layout/Sidebar/NavigationRoutes";
interface LoginForm {
  username: string;
  password: string;
  rememberMe: boolean;
}

const form = ref<LoginForm>({ username: "", password: "", rememberMe: false });
const authStore = useAuthStore();
const profileStore = useProfileStore();
const router = useRouter();
const usernameRules = [
  { required: true, message: "Please input your username", trigger: "blur" },
];

const passwordRules = [
  { required: true, message: "Please input your password", trigger: "blur" },
];

// Xử lý đăng nhập
// Khi trang đăng nhập được mở, tự động điền thông tin đăng nhập nếu có
form.value.username = authStore.AuthState.username
  ? authStore.AuthState.username
  : "";
form.value.password = authStore.AuthState.password
  ? authStore.AuthState.password
  : "";
form.value.rememberMe = authStore.AuthState.rememberMe == "1" ? false : true;
const handleLogin = async () => {
  try {
    if (form.value.username == "admin" && form.value.password == "12345") {
      await authStore.login(
        form.value.username,
        form.value.password,
        form.value.rememberMe == false ? "1" : "2",
        data
      );
      authStore.setMenu(data);
      profileStore.setProfile({
        name: "admin",
        avatar:
          "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",
      });
      router.push({ name: "home" });
    } else {
      await authStore.login(
        form.value.username,
        form.value.password,
        form.value.rememberMe == false ? "1" : "2",
        data1
      );
      authStore.setMenu(data1.value);
      profileStore.setProfile({
        name: "user",
        avatar:
          "https://tiki.vn/blog/wp-content/uploads/2023/01/oLkoHpw9cqRtLPTbg67bgtUvUdV1BnXRnAqqBZOVkEtPgf-_Ct3ADFJYXIjfDd0fTyECLEsWq5yZ2CCOEGxIsuHSmNNNUZQcnQT5-Ld6yoK19Q_Sphb0MmX64ga-O_TIPjItNkTL5ns4zqP1Z0OBzsIoeYKtcewnrjnVsw8vfG8uYwwCDkXaoozCrmH1kA.jpg",
      });
      router.push({ name: "home" });
    }
  } catch (error) {
    alert(error);
  }
};
const data = NavigationRoutes.routes
const data1 = ref([
  {
    name: "/dashboard",
    displayName: "Trang chủ",
    show: true,
  },
  {
    name: "/setting-profile",
    displayName: "Thông tin cá nhân",
    show: false,
  },
  {
    name: "report-capital",
    displayName: "Báo cáo nguồn vốn",
    show: true,
    children: [
      {
        name: "/capital-figures",
        displayName: "Số liệu nguồn vốn",
        show: false,
      },
      {
        name: "/capital-chart",
        displayName: "Báo cáo nguồn vốn",
        show: true,
      },
    ],
  },
  {
    name: "report-asset",
    displayName: "Báo cáo tài sản",
    show: true,
    children: [
      {
        name: "/asset-figures",
        displayName: "Số liệu tài sản",
        show: false,
      },
      {
        name: "/asset-chart",
        displayName: "Báo cáo tài sản",
        show: true,
      },
    ],
  },
  {
    name: "relatioship",
    displayName: "Tương quan tài sản & vốn",
    show: true,
    children: [
      {
        name: "/relatioship-figures",
        displayName: "Số liệu tương quan",
        show: false,
      },
      {
        name: "/relatioship-chart",
        displayName: "Báo cáo tương quan",
        show: true,
      },
    ],
  },
  {
    name: "managemnet-2",
    displayName: "Quản lý hệ thống",
    show: false,
    children: [
      {
        name: "/managemnet-company",
        displayName: "Quản lý công ty",
        show: true,
      },
      {
        name: "/managemnet-account",
        displayName: "Quản lý tài khoản",
        show: true,
      },
      {
        name: "/managemnet-control",
        displayName: "Quản lý quyền",
        show: true,
      },
      {
        name: "/managemnet-account-authorization",
        displayName: "Quản lý quyền tài khoản",
        show: true,
      },
    ],
  },
]);
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
