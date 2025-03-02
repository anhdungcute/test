<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-span-2"><TotalCapital /></div>
    <div class="col-span-4">
      <CapitalFluctuation />
    </div>
    <div class="col-span-3">
      <CapitalStructure />
    </div>
    <div class="col-span-3">
      <CapitalStructureChanges />
    </div>
  </div>
</template>
<script setup lang="ts">
import CapitalStructure from "./CapitalStructure.vue";
import CapitalFluctuation from "./CapitalFluctuation.vue";
import TotalCapital from "./TotalCapital.vue";
import CapitalStructureChanges from "./CapitalStructureChanges.vue";
</script>
<style>
.el-card__header {
  padding: 5px !important;
  font-size: 13px;
}
</style>
