<template>
    <el-card>
      <template #header>
        <div class="card-header">
          <b>Hiệu quả hoạt động</b>
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
              name: "EPS(Thu nhập/1 cổ phần)",
              type: "line",
              data: [8396, 6479, 7889, 8001],
            },
            {
              name: "BVPS(Giá trị số sách/1 cổ phần)",
              type: "line",
              data: [93, 175, 106, 114],
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
              width: [ 2, 2],
              curve: "straight",
            },
            plotOptions: {
              bar: {
                columnWidth: "50%",
              },
            },
  
            fill: {
              opacity: [0.85, 1],
            //   gradient: {
            //     inverseColors: false,
            //     shade: "light",
            //     type: "vertical",
            //     opacityFrom: 0.85,
            //     opacityTo: 0.55,
            //     stops: [0, 100, 100, 100],
            //   },
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
  