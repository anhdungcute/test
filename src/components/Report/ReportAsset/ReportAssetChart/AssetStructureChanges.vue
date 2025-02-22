<template>
  <el-card class="mt-5">
    <template #header>
      <div class="card-header">
        <span>Biến động tài sản</span>
      </div>
    </template>
    <div>
      <apexchart
        type="area"
        :options="data.chartOptions"
        :series="data.series"
      ></apexchart>
      </div
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
            name: "Tài sản ngắn hạn",
            data: [31, 40, 28, 51],
          },
          {
            name: "Tài sản dài hạn ",
            data: [40, 50, 45, 60],
          },
        ],
        chartOptions: {
          chart: {
            height: 350,
            type: "area",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "category",
            categories: [
              "Quý 1",
              "Quý 2",
              "Quý 3",
              "Quý 4",
            ],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
        },
      },
    };
  },
});
</script>

<style scoped></style>
