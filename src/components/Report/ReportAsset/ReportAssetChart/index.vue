<template>
  <div class="grid grid-cols-2 gap-4">
      <TotalAsset />
      <AssetStructure />
  </div>
  <div>
    <AssetFluctuation />
  </div>
  <div>
    <AssetStructureChanges />
  </div>
</template>
<script setup lang="ts">
import AssetStructure from "./AssetStructure.vue";
import AssetFluctuation from "./AssetFluctuation.vue";
import TotalAsset from "./TotalAsset.vue";
import AssetStructureChanges from "./AssetStructureChanges.vue";
</script>