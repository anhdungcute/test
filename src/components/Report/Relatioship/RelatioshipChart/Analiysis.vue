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
          <div>Nhu cầu vốn lưu dộng</div>
          <div class="text-red-500">1,23bn !</div>
          <div class="text-gray-500">Năm trước trả 87bn (-98,58%)</div>
        </div>
      </div>
      <div class="content">
        <div class="text-content m-3">
          <div>Số ngày phải thu BQ</div>
          <div class="text-red-500">6 !</div>
          <div class="text-gray-500">Năm trước trả 15 (-57,58%)</div>
        </div>
      </div>
      <div class="content">
        <div class="text-content m-3">
          <div>Số ngày phải trả BQ</div>
          <div class="text-red-500">0 !</div>
          <div class="text-gray-500">Năm trước trả 0 (-9,58%)</div>
        </div>
      </div>
      <div class="content">
        <div class="text-content m-3">
          <div>Hệ số Thanh toán tức thời</div>
          <div class="text-red-500">0,12 !</div>
          <div class="text-gray-500">Năm trước trả 0.31 (-60,58%)</div>
        </div>
      </div>
      <div class="content">
        <div class="text-content m-3">
          <div>Hệ số Thanh toán hiện hành</div>
          <div class="text-red-500">1,00 !</div>
          <div class="text-gray-500">Năm trước trả 1.53 (-34,28%)</div>
        </div>
      </div>
      <div class="content">
        <div class="text-content m-3">
          <div>Hệ số Thanh toán tổng quát</div>
          <div class="text-red-500">1,57 !</div>
          <div class="text-gray-500">Năm trước trả 2 (-21,2%)</div>
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
</style>
