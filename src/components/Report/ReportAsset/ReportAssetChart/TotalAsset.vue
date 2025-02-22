<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>Tài sản</span>
      </div>
    </template>
    <div class="grid grid-cols-1 gap-2">
      <div class="nv">
        <div class="text-content m-3">
          <div>Tổng tài sản</div>
          <div>494.017.977.897</div>
        </div>
      </div>
      <div class="npt">
        <div class="text-content m-3">
          <div>Tài sản ngắn hạn</div>
          <div>301.323.700.748</div>
        </div>
      </div>
      <div class="nptnv">
        <div class="text-content m-3">
          <div>Tài sản ngắn hạn / Tài sản</div>
          <div>60,99%</div>
        </div>
      </div>
      <div class="vcsh">
        <div class="text-content m-3">
          <div>Tài sản ngắn hạn</div>
          <div>192.694.277.149</div>
        </div>
      </div>
      <div class="vcshnv">
        <div class="text-content m-3">
          <div>Tài sản dài hạn / Tài sản </div>
          <div>39.01%</div>
        </div>
      </div>
    </div></el-card
  >
</template>
<script setup lang="ts"></script>
<style scoped>
.nv {
  background: rgb(34, 193, 195);
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.npt {
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(79, 45, 253, 1) 0%
  );
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.nptnv {
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 45, 182, 1) 0%
  );
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.vcsh {
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 83, 45, 1) 0%
  );
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.vcshnv {
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 45, 81, 1) 0%
  );
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.text-content {
  font-size: 15px;
  color: #fff;
}
</style>
