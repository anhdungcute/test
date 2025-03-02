<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <b>Khả năng thanh toán</b>
      </div>
    </template>
    <div>
      <apexchart
        height="265"
        :options="data.chartOptions"
        :series="data.series"
      ></apexchart></div
  ></el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      data: {
        series: [
          {
            name: "Thanh toán tức thời",
            data: [1.93, 1.75, 1.67, 1.55],
          },
          {
            name: "Thanh toán hiện hành",
            data: [1.43, 1.36, 1.11, 1.03],
          },
          {
            name: "Thanh toán tổng quát",
            data: [0.9, 0.7, 0.6, 0.4],
          },
        ],
        chartOptions: {
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
            animations: {
              enabled: true,
            },
          },
          stroke: {
            //   width: [5,5,4],
            show: true,
            curve: "smooth",
          },
        //   labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          markers: {
            size: 5,
          },
          xaxis: {
            categories: ["Qtr1", "Qtr2", "Qtr3", "Qtr4"],
          },
        },
      },
    };
  },
});
</script>

<style scoped>
/* Style tùy chọn cho biểu đồ */
</style>
