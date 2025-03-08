<template>
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-6">
        <Analiysis/>
      </div>
      <div class="col-span-3">
        <TotalAsset/>
      </div>
      <div class="col-span-3">
   
      </div>
    </div>
  </template>
  <script setup lang="ts">
import Analiysis from './Analiysis.vue';
import TotalAsset from './IncreasedecreaseTotalAssets.vue'
  </script>
  <style>
  .el-card__header {
    padding: 5px !important;
    font-size: 13px;
  }
  </style>
  