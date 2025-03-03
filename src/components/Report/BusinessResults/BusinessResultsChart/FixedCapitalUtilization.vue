<template>
    <el-card>
      <template #header>
        <div class="card-header">
          <b>Hiệu suất sử dụng vốn cố định</b>
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
              name: "ROE",
              type: "line",
              data: [25, 45, 28, 35],
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
              width: [ 2],
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
  