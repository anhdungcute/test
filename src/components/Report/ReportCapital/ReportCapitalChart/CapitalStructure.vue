<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>Cơ cấu nguồn vốn</span>
      </div>
    </template>
    <div>
      <apexchart
        type="donut"
        height="350"
        :options="data.chartOptions"
        :series="data.series"
      ></apexchart>
      <div class="grid grid-cols-2 gap-2">
        <div class="detail">
          <div class="m-3">
            <div>63,55%%</div>
            <div class="font-semibold">Vốn ngắn hạn/nguồn vốn</div>
          </div>
        </div>
        <div class="detail">
          <div class="m-3">
            <div>57%</div>
            <div class="font-semibold">Nợ vay/nguồn vốn</div>
          </div>
        </div>
        <div class="detail">
          <div class="m-3">
            <div>15.234.456</div>
            <div class="font-semibold">CP tài chính</div>
          </div>
        </div>
        <div class="detail">
          <div class="m-3">
            <div>39,25%</div>
            <div class="font-semibold">Vốn dài hạn/nguồn vốn</div>
          </div>
        </div>
        <div class="detail">
          <div class="m-3">
            <div>6%</div>
            <div class="font-semibold">Nợ chiếm dụng/nguồn vốn</div>
          </div>
        </div>
        <div class="detail">
          <div class="m-3">
            <div>0,46%</div>
            <div class="font-semibold">CPTC/DTT</div>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      data: {
        series: [44, 55, 41, 17],

        chartOptions: {
          chart: {
            type: "donut",
          },
          labels: [
            "Nợ chiếm dụng",
            "VCSH",
            "Nợ chiếm dụng dài hạn",
            "Vay ngắn hạn",
          ],
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
