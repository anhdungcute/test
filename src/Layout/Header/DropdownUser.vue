<script setup lang="ts">
import { UserFilled } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useAuthStore } from "@/Stores/auth";
import { useProfileStore } from "@/Stores/profile";
import { useRouter } from "vue-router";

const target = ref(null);
const dialogTableVisible = ref(false);
const router = useRouter();
const authStore = useAuthStore();
const profileStore = useProfileStore();
const logout = () => {
  authStore.logout();
  router.push({ name: "login" });
};
const handleProfile = () => {
  router.push({ path: "setting-profile" });
};
</script>

<template>
  <div class="relative flex items-center justify-center" ref="target">
    <div class="mr-2 text-xs">
      {{ profileStore.profile.name }}
    </div>
    <el-dropdown placement="bottom-end" trigger="click">

      <div class="avavtar">
        <el-avatar  :src-set="profileStore.profile.avatar"/>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleProfile">
            <span class="mr-1 text-xs"> <i class="fa-solid fa-user"></i></span>Thông tin
            cá nhân
          </el-dropdown-item>
          <el-dropdown-item @click="logout">
            <span class="mr-1 mt-1 text-xs"
              ><i
                class="fa-solid fa-right-from-bracket"
                style="padding-bottom: 2px"
              ></i></span
            >Đăng xuất
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <div>
    <el-dialog
      v-model="dialogTableVisible"
      title="Shipping address"
      width="800"
    >
    </el-dialog>
  </div>
</template>
<style scoped>
.avavtar span {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
