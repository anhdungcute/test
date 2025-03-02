<template>
   <el-card>
    <div>
        <apexchart
        height="285"
        class="chart-dash"
          :options="data.chartOptions"
          :series="data.series"
        ></apexchart></div
    >
   </el-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    data() {
      return {
        data: {
          
          series: [{
            name: "STOCK ABC",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
          }],
          chartOptions: {
            chart: {
              type: 'area',
              zoom: {
                enabled: false
              },
              offsetX:0,
              offsetY:0,
              toolbar:  false
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            xaxis: {
              show:false,
              labels:{
                show: true
              },
              axisTicks:{
                show: true
              }
            },
            yaxis: {
                show:true
            },
            legend: {
              horizontalAlign: 'left'
            },
            grid:{
                show:false
            },
          },
          
          
        },
      };
    },
  });
  </script>
  
  <style scoped>
  /* Style tùy chọn cho biểu đồ */
  .chart-dash .apexcharts-xaxis {
    display: none !important;
  }
  </style>
  