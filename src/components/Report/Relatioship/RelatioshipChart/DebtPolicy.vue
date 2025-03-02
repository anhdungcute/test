<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <b>Nhu cầu lưu động vốn</b>
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
            name: "Thời gian thu tiền",
            type: "column",
            data: [60, 50, 30, 40],
          },
          {
            name: "Thời gian trả tiền",
            type: "column",
            data: [10, 35, 25, 20],
          },

          {
            name: "Phải thu/TS",
            type: "line",
            data: [40, 45, 55, 60],
          },
          {
            name: "Phải trả/TS",
            type: "line",
            data: [15, 5, 15, 35],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            stacked: false,
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          stroke: {
            width: [0, 2, 5],
            curve: "straight",
          },
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },

          fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
              inverseColors: false,
              shade: "light",
              type: "vertical",
              opacityFrom: 0.85,
              opacityTo: 0.55,
              stops: [0, 100, 100, 100],
            },
          },
          markers: {
            size: 5,
          },
          xaxis: {
            categories: ["Qtr1", "Qtr2", "Qtr3", "Qtr4"],
          },
          yaxis: {
          },
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              // formatter: function (y) {
              //   if (typeof y !== "undefined") {
              //     return y.toFixed(0) + " points";
              //   }
              //   return y;
              // }
            },
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
