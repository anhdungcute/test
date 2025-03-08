cost variation
<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <b>Biến động chi phí</b>
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
            name: "Daonh thu thuần",
            type: "line",
            data: [25, 45, 28, 35],
          },
          {
            name: "Giá vốn",
            type: "line",
            data: [8, 15, 5, 10],
          },
          {
            name: "CP tài chính",
            type: "line",
            data: [8, 15, 5, 10],
          },
          {
            name: "Cp bán hàng",
            type: "line",
            data: [8, 15, 5, 10],
          },
          {
            name: "Cp quản lý",
            type: "line",
            data: [8, 15, 5, 10],
          },
          {
            name: "Cp khác",
            type: "line",
            data: [8, 15, 5, 10],
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
            width: [2, 2],
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
          yaxis: {},
          grid: { show: false },
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
