<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <b>Chi tiết biến động vốn</b>
      </div>
    </template>
    <div>
      <apexchart
        type="bar"
        height="378"
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
            name: "Nợ chiếm dụng",
            data: [44, 55, 41, 67],
          },
          {
            name: "Nợ vay",
            data: [13, 23, 20, 8],
          },
          {
            name: "VĐL",
            data: [11, 17, 15, 15],
          },
          {
            name: "LNS chưa phân phối",
            data: [11, 17, 15, 15],
          },
          {
            name: "Quỹ và VCSH khác",
            data: [11, 17, 15, 15],
          },
        ],
        chartOptions: {
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            stackType: "100%",
            toolbar:{
              show:false
            }
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
          dataLabels: {
            formatter: function (val:any, opt:any) {
              return val.toFixed(2) + 'bn';
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
