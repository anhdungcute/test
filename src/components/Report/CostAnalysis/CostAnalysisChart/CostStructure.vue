<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <b>Cơ cấu chi phí</b>
      </div>
    </template>
    <div>
      <apexchart
        height="300"
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
        series: [98, 0.7, 0.6, 0.5, 0.2],
        chartOptions: {
          chart: {
            height: 350,
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: "22px",
                },
                value: {
                  fontSize: "16px",
                },
                total: {
                  show: true,
                  label: "Tổng chi phí",
                  formatter: function () {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return "3.306bn";
                  },
                },
              },
            },
          },
          labels: ["Apples", "Oranges", "Bananas", "Berries"],
        },
      },
    };
  },
});
</script>

<style scoped>
.detail {
  /* background: rgb(34, 193, 195); */
  /* border-radius: 15px; */
  border-width: 0 0 1px 0;
  border-color: red;
  display: flex;
  align-items: center;
  font-size: 12px;
}
</style>
