<template>
  <el-card>
    <div>
      <apexchart
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
        series: [
          {
            name: "Tài sản",
            data: [44, 55, 41],
          },
          {
            name: "Nguồn vốn",
            data: [13, 23, 20],
          },
          {
            name: "Lợi nhuận",
            data: [11, 17, 15],
          },
        ],
        chartOptions: {
          chart: {
            type: "bar",
            height: 350,
            stacked: true,
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
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
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10,
              borderRadiusApplication: "end", // 'around', 'end'
              borderRadiusWhenStacked: "last", // 'all', 'last'
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
            type: "datetime",
            categories: ["01/01/2011 GMT", "01/02/2011 GMT", "01/03/2011 GMT"],
          },
          grid: {
            show: false,
          },
          fill: {
            opacity: 1,
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
