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
            data: [-132],
          },
          {
            name: "HĐĐT",
            data: [-302],
          },
          {
            name: "HĐTC",
            data: [333],
          },
          {
            name: "TC tiền thuần",
            data: [-101],
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
              return val + "bn";
            },
          },
          grid: {
            show: false,
          },
          plotOptions: {
            bar: {
              colors: {
                ranges: [
                  {
                    from: -100,
                    to: -46,
                    color: "#F15B46",
                  },
                  {
                    from: -45,
                    to: 0,
                    color: "#FEB019",
                  },
                ],
              },
              columnWidth: "80%",
            },
          },
        //   dataLabels: {
        //     enabled: false,
        //   },
          //   yaxis: {
          //     title: {
          //       text: "Growth",
          //     },
          //     labels: {
          //       formatter: function () {
          //         return "%";
          //       },
          //     },
          //   },
          xaxis: {
            type: "categories",
            categories: ["2023"],
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
