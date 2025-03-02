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
            name: "Desktops",
            data: [10, 41, 35, 51],
          },
        ],
        chartOptions: {
          chart: {
            height: 300,
            type: "line",
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
        //   grid: {
        //     row: {
        //       colors: ["#f3f3f3", "transparent"],
        //       opacity: 0.5,
        //     },
        //   },
          markers: {
            size: 5,
          },
          xaxis: {
            categories: ["Quý 1", "Quý 2", "Quý 3", "Quý 4"],
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
