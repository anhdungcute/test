<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { UserFilled } from "@element-plus/icons-vue";
import { ref } from "vue";
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const target = ref(null);
const dropdownOpen = ref(false);

onClickOutside(target, () => {
  dropdownOpen.value = false;
});
</script>

<template>
  <div class="relative" ref="target">
    <el-dropdown placement="bottom-end" trigger="click">
      <div class="avavtar">
        <el-avatar :icon="UserFilled" />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Đăng xuất </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<style scoped>
.avavtar span {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
