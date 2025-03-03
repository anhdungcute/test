<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-span-6"><Analiysis/></div>
    <div class="col-span-3">
      <EBIT/>
    </div>
    <div class="col-span-3">
      <EBITDA/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Analiysis from './Analiysis.vue';
import EBIT from './EBIT.vue';
import EBITDA from './EBITDA.vue';
</script>
<style>
.el-card__header {
  padding: 5px !important;
  font-size: 13px;
}
</style>
