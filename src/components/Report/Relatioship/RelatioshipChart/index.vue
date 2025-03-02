<template>
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-5">
        <Analiysis/>
    </div>
    <div class="col-span-2">
      <Correlate></Correlate>
    </div>
    <div class="col-span-3">
      <WorkingCaptial />
    </div>
    <div class="col-span-2">
      <AlibityToPay/>
    </div>
    <div class="col-span-3">
      <DebtPolicy/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Correlate from "./Correlate.vue";
import WorkingCaptial from "./WorkingCaptial.vue";
import AlibityToPay from "./AlibityToPay.vue";
import DebtPolicy from "./DebtPolicy.vue";
import Analiysis from "./Analiysis.vue";
</script>
<style>
.el-card__header {
  padding: 5px !important;
  font-size: 13px;
}
</style>
