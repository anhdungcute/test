<template>
  <div class="grid grid-cols-2 gap-4">
    <TotalCapital />
    <CapitalStructure />
  </div>
  <div>
    <CapitalFluctuation />
  </div>
  <div>
    <CapitalStructureChanges/>
  </div>
</template>
<script setup lang="ts">
import CapitalStructure from "./CapitalStructure.vue";
import CapitalFluctuation from "./CapitalFluctuation.vue";
import TotalCapital from "./TotalCapital.vue";
import CapitalStructureChanges from "./CapitalStructureChanges.vue";
</script>