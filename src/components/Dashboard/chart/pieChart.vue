<template>
  <el-card>
    <div>
      <apexchart
        height="300"
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
        series: [44, 55, 13, 43],
        chartOptions: {
          chart: {
            width: 380,
            type: "pie",
          },
          labels: ["Tài sản", "Nguồn vốn", "Lợi nhuận", "Chi phí"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
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
