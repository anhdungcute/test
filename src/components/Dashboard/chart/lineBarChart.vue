<template>
    <el-card>
      <div>
        <apexchart
        height="285"
          class="chart-dash"
          :options="data.chartOptions"
          :series="data.series"
        ></apexchart>
      </div>
    </el-card>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    data() {
      return {
         data: {
          
          series: [{
            name: 'Nguồn vốn',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
          }, {
            name: 'Lợi nhuận',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              toolbar: {
                show: false
              },
              zoom: {
                enabled: false
              }
            },
            stroke: {
              width: [0, 4]
            },
            dataLabels: {
              enabled: true,
              enabledOnSeries: [1]
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            yaxis: [{
              title: {
                text: 'Nguồn vốn',
              },
            
            }, {
              opposite: true,
              title: {
                text: 'Lợi nhuận'
              }
            }]
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
  