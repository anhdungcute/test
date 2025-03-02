<template>
  <el-card >
    <template #header>
      <div class="card-header">
        <b>Biến động tài sản</b>
      </div>
    </template>
    <div>
      <apexchart
      height="475"
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
            name: "Nợ phải trả",
            data: [44, 55],
          },
          {
            name: "VCSH",
            data: [13, 23],
          },
        ],
        chartOptions: {
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            stackType: "100%",
            toolbar :{show:false}
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  position: "bottom",
                  offsetX: -10,
                  offsetY: 0,
                },
              },
            },
          ],
          xaxis: {
            categories: ["Qtr1", "Qtr2", "Qtr3", "Qtr4"],
          },
          fill: {
            opacity: 1,
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
