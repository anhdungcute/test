<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>Cơ cấu tài sản</span>
      </div>
    </template>
    <div>
      <apexchart
        type="donut"
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
        series: [44, 55, 41, 17, 30, 25, 60],
        chartOptions: {
          chart: {
            type: "donut",
          },
          labels: [
            "Tiền và TĐT",
            "Đầu tư TC",
            "Phải thu",
            "Tài sản cố định",
            "Tài sản ngắn hạn",
            "BĐS đầu tư",
            "Phải thu ngắn hạn",
          ],
          fill: {
              type: 'gradient',
            },
          plotOptions: {
            pie: {      
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    showAlways: true,
                    label: "Tổng tài sản",
                    fontSize: "12px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                    color: "#373d3f",
                    formatter: function (w: any) {
                      return "419bn";
                    },
                  },
                },
              },
            },
          
          },
          legend: {
            position: "bottom",
            horizontalAlign: "center",
          },
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
