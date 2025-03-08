<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <b>Lưu chuyển tiền thuần</b>
      </div>
    </template>
    <div>
      <apexchart
        height="500"
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
            name: "HĐKD",
            data: [-18, -40, -51, -24],
          },
          {
            name: "HĐĐT",
            data: [-13, -28, -46, -14],
          },
          {
            name: "HĐTC",
            data: [12, 59, 131, 131],
          },
        ],
        chartOptions: {
          chart: {
            type: "bar",
            height: 350,
            toolbar: { show: false },
          },
          dataLabels: {
            formatter: function (val: any, opt: any) {
              return val;
            },
          },
          grid: {
            show: false,
          },
          plotOptions: {
            bar: {
              columnWidth: "80%",
              dataLabels: {
                total: {
                  enabled: true,
                  style: {
                    fontSize: "13px",
                    fontWeight: 900,
                  },
                },
              },
            },
          },
          xaxis: {
            type: "categories",
            categories: ["Qtr1", "Qtr2", "Qtr3", "Qtr4"],
            labels: {
              rotate: -90,
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
