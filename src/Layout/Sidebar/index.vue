<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo h-full w-full"
      :collapse="isCollapse"
      :router="true"
    >
      <div class="grid grid-cols-5 gap-1 py-5">
        <div
          v-if="!isCollapse"
          class="... col-span-4 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--logos"
            width="31.88"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 257"
          >
            <defs>
              <linearGradient
                id="IconifyId1813088fe1fbc01fb466"
                x1="-.828%"
                x2="57.636%"
                y1="7.652%"
                y2="78.411%"
              >
                <stop offset="0%" stop-color="#41D1FF"></stop>
                <stop offset="100%" stop-color="#BD34FE"></stop>
              </linearGradient>
              <linearGradient
                id="IconifyId1813088fe1fbc01fb467"
                x1="43.376%"
                x2="50.316%"
                y1="2.242%"
                y2="89.03%"
              >
                <stop offset="0%" stop-color="#FFEA83"></stop>
                <stop offset="8.333%" stop-color="#FFDD35"></stop>
                <stop offset="100%" stop-color="#FFA800"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#IconifyId1813088fe1fbc01fb466)"
              d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
            ></path>
            <path
              fill="url(#IconifyId1813088fe1fbc01fb467)"
              d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
            ></path>
          </svg>
        </div>
        <div
          v-else="isCollapse"
          class="col-span-5 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--logos"
            width="31.88"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 257"
          >
            <defs>
              <linearGradient
                id="IconifyId1813088fe1fbc01fb466"
                x1="-.828%"
                x2="57.636%"
                y1="7.652%"
                y2="78.411%"
              >
                <stop offset="0%" stop-color="#41D1FF"></stop>
                <stop offset="100%" stop-color="#BD34FE"></stop>
              </linearGradient>
              <linearGradient
                id="IconifyId1813088fe1fbc01fb467"
                x1="43.376%"
                x2="50.316%"
                y1="2.242%"
                y2="89.03%"
              >
                <stop offset="0%" stop-color="#FFEA83"></stop>
                <stop offset="8.333%" stop-color="#FFDD35"></stop>
                <stop offset="100%" stop-color="#FFA800"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#IconifyId1813088fe1fbc01fb466)"
              d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
            ></path>
            <path
              fill="url(#IconifyId1813088fe1fbc01fb467)"
              d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
            ></path>
          </svg>
        </div>
        <div
          class="... col-span-1 flex cursor-pointer items-center justify-center"
        >
          <el-icon v-if="!isCollapse" @click="handleChangeCollapse"
            ><Fold
          /></el-icon>
        </div>
        <div
          class="... col-span-5 flex cursor-pointer items-center justify-center"
        >
          <el-icon v-if="isCollapse" @click="handleChangeCollapse"
            ><Expand
          /></el-icon>
        </div>
      </div>
      <template v-for="(i, index) in navigationRoutes.routes">
        <el-menu-item
          v-if="!i.children"
          :index="(index + 1).toString()"
          :route="i.name"
        >
          <el-icon><icon-menu /></el-icon>
          <span>
            {{ i.displayName }}
          </span>
        </el-menu-item>
        <el-sub-menu v-else :index="(index + 1).toString()">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ i.displayName }}</span>
          </template>
          <el-menu-item
            v-for="(k, idx) in i.children"
            :index="(index + 1 + '-' + idx).toString()"
            :route="k.name"
          >
            {{ k.displayName }}
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Router from "@/routes/router";
import navigationRoutes, { type INavigationRoute } from './NavigationRoutes'
import {
  Document,
  Fold,
  Expand,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);
let arrRouter = ref(Router);
const handleChangeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>
