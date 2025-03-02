<template>
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-2">
      <TotalAsset />
    </div>
    <div class="col-span-3">
      <AssetFluctuation />
    </div>
    <div class="col-span-2">
      <AssetStructure />
    </div>
    <div class="col-span-3">
      <AssetStructureChanges />
    </div>
  </div>
  <div></div>
</template>
<script setup lang="ts">
import AssetStructure from "./AssetStructure.vue";
import AssetFluctuation from "./AssetFluctuation.vue";
import TotalAsset from "./TotalAsset.vue";
import AssetStructureChanges from "./AssetStructureChanges.vue";
</script>
<style>
.el-card__header {
  padding: 5px !important;
  font-size: 13px;
}
</style>
