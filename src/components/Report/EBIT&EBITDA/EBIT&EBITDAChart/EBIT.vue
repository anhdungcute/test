<template>
    <el-card>
      <template #header>
        <div class="card-header">
          <b>EBIT(Lợi nhuận trước vay & thuế)</b>
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
              name: "EBIT",
              type: "column",
              data: [-0.3,-0.2 , -0.4, -0.35],
            },
            {
              name: "Biên lợi nhuận trước vay & thuế",
              type: "line",
              data: [-0.3, -0.1, -0.3, -0.25],
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
            colors: ['#2E93fA', '#0f485b',],
            grid :{
                show: false
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
  