<template>
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-6">
        <Analiysis/>
      </div>
      <div class="col-span-3">
        <CostStructure/>
      </div>
      <div class="col-span-3">
        <CostVariation/>
      </div>
      <div class="col-span-3">
        <CostFtructureFluctuation/>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import Analiysis from './Analiysis.vue';
 import CostStructure from './CostStructure.vue';
 import CostVariation from './CostVariation.vue';
 import CostFtructureFluctuation from './CostFtructureFluctuation.vue';
 </script>
  <style>
  .el-card__header {
    padding: 5px !important;
    font-size: 13px;
  }
  </style>
  