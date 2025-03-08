<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-span-2">
      <NetCashFlow />
    </div>
    <div class="col-span-4">
      <CashFlow />
    </div>
  </div>
</template>
<script setup lang="ts">
import NetCashFlow from "./NetCashFlow.vue";
import CashFlow from "./CashFlow.vue";
</script>
<style>
.el-card__header {
  padding: 5px !important;
  font-size: 13px;
}
</style>
