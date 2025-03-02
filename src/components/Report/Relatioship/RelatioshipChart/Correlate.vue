<template>
  <div class="correlate">
    <el-card>
      <template #header>
        <div class="card-header">
          <b>Tương quan tài sản & nguồn vốn</b>
        </div>
      </template>
      <div class="container">
        <div class="column">
          <!-- Tài sản dài hạn -->

          <!-- Tài sản ngắn hạn -->
          <div
            class="tsdh content"
            :style="{
              height: tsdh + '%',
            }"
          >
            {{ tsdh + "%" }}
          </div>
          <div
            class="tsnh content"
            :style="{
              height: tsnh + '%',
            }"
          >
            {{ tsnh + "%" }}
          </div>
        </div>
        <div class="column">
          <!-- Tài sản dài hạn -->

          <!-- Tài sản ngắn hạn -->
          <div
            class="vdh content"
            :style="{
              height: vdh + '%',
            }"
          >
            {{ vdh + "%" }}
          </div>
          <div
            class="vnh content"
            :style="{
              height: vnh + '%',
            }"
          >
            {{ vnh + "%" }}
          </div>
        </div>
      </div>
      <div class="mt-3 grid grid-cols-2">
        <div class="label">
          <span class="circle tsnh"></span>
          <p>Tài sản ngắn hạn</p>
        </div>

        <div class="label">
          <span class="circle vnh"></span>
          <p>Vốn ngắn hạn</p>
        </div>
        <div class="label">
          <span class="circle tsdh"></span>
          <p>Tài sản dài hạn</p>
        </div>
        <div class="label">
          <span class="circle vdh"></span>
          <p>Vốn dài hạn</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AssetBarChart",
  setup() {
    // Ví dụ về dữ liệu tài sản
    const tsnh = ref(61); // 60% cho tài sản dài hạn
    const tsdh = ref(39); // 40% cho tài sản ngắn hạn
    const vnh = ref(70); // 60% cho tài sản dài hạn
    const vdh = ref(30); // 40% cho tài sản ngắn hạn

    return {
      tsnh,
      tsdh,
      vnh,
      vdh,
    };
  },
});
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  width: 10vw; /* Đặt chiều rộng cột */
  height: 200px; /* Đặt chiều cao cột tổng thể */
  position: relative;
  display: flex;
  flex-direction: column-reverse; /* Đảo ngược để phần tài sản dài hạn ở dưới */
}

.tsnh .tsdh .vnh .vdh {
  width: 100%;
}

.content {
  justify-content: center;
  display: flex;
  align-items: center;
  color: #fff;
}
.vnh {
  background-color: rgb(87, 227, 239);
}
.vdh {
  background-color: rgb(225, 173, 111);
}
.tsnh {
  background-color: rgb(25, 25, 131);
}
.tsdh {
  background-color: rgb(229, 96, 22);
}
.labels {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.label {
  display: flex;
  align-items: center;
  margin: 5px 30px;
  font-size: 12px;
}

.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}
</style>
