<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-span-6"><Analiysis /></div>
    <div class="col-span-3">
      <FluctuationsDTLN />
    </div>
    <div class="col-span-3">
      <OperatingEfficiency />
    </div>
    <div class="col-span-3">
      <FixedCapitalUtilization />
    </div>
    <div class="col-span-3"><Profitability /></div>
  </div>
</template>
<script setup lang="ts">
import Analiysis from "./Analiysis.vue";
import FluctuationsDTLN from "./FluctuationsDT&LN.vue";
import OperatingEfficiency from "./OperatingEfficiency.vue";
import FixedCapitalUtilization from "./FixedCapitalUtilization.vue";
import Profitability from "./Profitability.vue";
</script>
<style>
.el-card__header {
  padding: 5px !important;
  font-size: 13px;
}
</style>
