<template>
  <div class="relative">
    <div class="changeCollapse" @click="handleChangeCollapse">
      <el-icon v-if="!isCollapse" class="icon-changecollapse"
        ><ArrowLeftBold
      /></el-icon>
      <el-icon v-if="isCollapse" class="icon-changecollapse"
        ><ArrowRightBold
      /></el-icon>
    </div>
    <el-menu
      class="el-menu-vertical-demo h-full w-full"
      :collapse="isCollapse"
      :router="true"
    >
      <div class="mt-5" v-if="!isCollapse">
        <div class="flex items-center justify-center">
          <img
            src="@/assets/imgcfc.png"
            style="width: 5vw"
            class="cursor-pointer"
            alt=""
            @click="hanleBackHome()"
          />
        </div>
      </div>
      <div v-else="isCollapse" class="mt-5 flex items-center justify-center">
        <div class="flex items-center justify-center">
          <img
            src="@/assets/imgcfc.png"
            style="width: 3vw"
            class="cursor-pointer"
            alt=""
            @click="hanleBackHome()"
          />
        </div>
      </div>
      <template v-for="(i, index) in store.menu">
        <el-menu-item
          v-if="!i.children && i.show === true"
          :index="(index + 1).toString()"
          :route="i.name"
        >
          <div class="mr-2 flex">
            <i class="fa-solid fa-house"></i>
          </div>
          <span>
            {{ i.displayName }}
          </span>
        </el-menu-item>
        <el-sub-menu
          v-if="i.children && i.show === true"
          :index="(index + 1).toString()"
        >
          <template #title>
            <div class="mr-2 flex">
              <i class="fa-solid fa-book"></i>
            </div>

            <span>{{ i.displayName }}</span>
          </template>
          <template v-for="(k, idx) in i.children">
            <el-menu-item
              v-if="k.show"
              :index="(index + 1 + '-' + idx).toString()"
              :route="k.name"
            >
              {{ k.displayName }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/Stores/auth";
import navigationRoutes, { type INavigationRoute } from "./NavigationRoutes";
import {
  Document,
  Fold,
  Expand,
  Menu as IconMenu,
  Location,
  ArrowLeftBold,
  ArrowRightBold,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);
let router = useRouter();
const store = useAuthStore();
const handleChangeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
const hanleBackHome = () => {
  router.push({ path: "/" });
};
</script>
<style scoped>
.changeCollapse {
  display: flex;
  padding: 5px 5px;
  border-width: 2px 2px 2px 0px;
  cursor: pointer;
  position: absolute;
  right: -26px;
  top: 5px;
  z-index: 99;
  border-radius: 0 10px 10px 0;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}
.icon-changecollapse {
  font-size: 15px;
}

.relative ul {
  max-height: 100vh;
  overflow: auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
}
.relative ul::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
</style>
