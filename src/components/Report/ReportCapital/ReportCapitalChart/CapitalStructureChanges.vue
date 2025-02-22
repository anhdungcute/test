<template>
  <el-card class="mt-5">
    <template #header>
      <div class="card-header">
        <span>Biến động tài sản</span>
      </div>
    </template>
    <div>
      <apexchart
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
            categories: ["2011 Q1", "2011 Q2", "2011 Q3", "2011 Q4"],
          },
          fill: {
            opacity: 1,
          },
          legend: {
            position: "right",
            offsetX: 0,
            offsetY: 50,
          },
        //   dataLabels: {
        //     formatter: function (val: any, opt: any) {
        //       return val.toFixed(2) + "bn";
        //     },
        //   },
        },
      },
    };
  },
});
</script>

<style scoped>
/* Style tùy chọn cho biểu đồ */
</style>
