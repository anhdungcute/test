<template>
    <el-card>
      <template #header>
        <div class="card-header">
          <b>Biến động doanh thu , lợi nhuận</b>
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
              name: "Doanh thu thuần",
              type: "column",
              data: [60, 50, 30, 40],
            },
            {
              name: "LNST",
              type: "column",
              data: [10, 35, 25, 20],
            },
            {
              name: "Tỷ suất lợi nhuận",
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
              width: [0, 2, 2],
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
  