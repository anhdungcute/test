<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <b>Phân tích</b>
      </div>
    </template>
    <div class="grid grid-cols-3 gap-2">
      <div class="content">
        <div class="text-content m-3">
          <div>Biên lợi nhuận gộp</div>
          <div class="success">1,23bn <i class="fa-solid fa-check"></i></div>
          <div class="text-gray-500">Năm trước trả 87bn (-98,58%)</div>
        </div>
      </div>
      <div class="content">
        <div class="text-content m-3">
          <div>Biên lợi nhuận hợạt động</div>
          <div class="success">6 <i class="fa-solid fa-check"></i></div>
          <div class="text-gray-500">Năm trước trả 15 (-57,58%)</div>
        </div>
      </div>
      <div class="content">
        <div class="text-content m-3">
          <div>Biên lợi nhuận ròng</div>
          <div class="success">0 <i class="fa-solid fa-check"></i></div>
          <div class="text-gray-500">Năm trước trả 0 (-9,58%)</div>
        </div>
      </div>
      <div class="content">
        <div class="text-content m-3">
          <div>Tổng tài sản</div>
          <div class="text-red-500">0,12 !</div>
          <div class="text-gray-500">Năm trước trả 0.31 (-60,58%)</div>
        </div>
      </div>
      <div class="content">
        <div class="text-content m-3">
          <div>Tài sản ròng</div>
          <div class="text-red-500">0,12 !</div>
          <div class="text-gray-500">Năm trước trả 0.31 (-60,58%)</div>
        </div>
      </div>
    </div></el-card
  >
</template>
<script setup lang="ts"></script>
<style scoped>
.content {
  border-width: 1px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.text-content {
  font-size: 15px;
  color: #000;
}
.success{
  color: rgb(12, 222, 12);
}
</style>
