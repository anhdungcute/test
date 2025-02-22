<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>Nguồn vốn</span>
      </div>
    </template>
    <div class="grid grid-cols-2 gap-2">
      <div class="nv">
        <div class="text-content m-3">
          <div>Tổng nguồn vốn</div>
          <div>213412 VND</div>
        </div>
      </div>
      <div class="npt">
        <div class="text-content m-3">
          <div>Nợ phải trả</div>
          <div>213412 VND</div>
        </div>
      </div>
      <div class="nptnv">
        <div class="text-content m-3">
          <div>Nợ phải trả/nguồn vốn</div>
          <div>213412 VND</div>
        </div>
      </div>
      <div class="vcsh">
        <div class="text-content m-3">
          <div>VCSH</div>
          <div>213412 VND</div>
        </div>
      </div>
      <div class="vcshnv">
        <div class="text-content m-3">
          <div>VCSH/nguồn vốn</div>
          <div>213412 VND</div>
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
