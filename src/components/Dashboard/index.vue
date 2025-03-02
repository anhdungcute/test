<template>
  <div>
    <div align="right">
      <el-date-picker
        size="small"
        width="250"
        type="datetimerange"
        start-placeholder="Bắt đầu"
        end-placeholder="Kết thúc"
        format="YYYY-MM-DD HH:mm:ss"
        date-format="YYYY/MM/DD ddd"
        time-format="A hh:mm:ss"
      />
    </div>
    <div class="mt-5 grid grid-cols-3 gap-4">
      <div class="col-span-1">
        <dountChart />
      </div>
      <div class="col-span-2">
        <lineBarChart />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import lineChart from "./chart/lineChart.vue";
import pieChart from "./chart/pieChart.vue";
import barChart from "./chart/barChart.vue";
import lineBarChart from "./chart/lineBarChart.vue";
import dountChart from "./chart/dountChart.vue";
</script>
<style scoped>
.nv {
  background: rgb(34, 193, 195);
  border-radius: 15px;
  /* display: flex; */
  align-items: center;
}
.npt {
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(79, 45, 253, 1) 0%
  );
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.nptnv {
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 45, 182, 1) 0%
  );
  border-radius: 15px;
  display: flex;
  align-items: center;
}
.text-content {
  font-size: 15px;
  color: #fff;
}
</style>
