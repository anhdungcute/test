<template>
  <el-card>
    <div class="capital">
      <div>
        <el-date-picker
          type="datetime"
          placeholder="Chọn thời gian"
          format="YYYY-MM-DD HH:mm:ss"
          date-format="MMM DD, YYYY"
          time-format="HH:mm"
        />
      </div>
      <div id="nv">
        <el-divider content-position="left"
          >Tương quan tài sản và nguồn vốn</el-divider
        >
        <div class="capital-content grid grid-cols-3 gap-4">
          <div>
            <span>Tài sản ngắn hạn</span>
            <div>
              <el-input
                v-model="capital.total"
                placeholder="Nhập tổng nguồn vốn..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
          <div>
            <span>Tài sản dài hạn</span>
            <div>
              <el-input
                v-model="capital.total"
                placeholder="Nhập tổng nguồn vốn..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
          <div>
            <span>Vốn ngắn hạn</span>
            <div>
              <el-input
                v-model="capital.liabilities"
                placeholder="Nhập vốn ngắn hạn..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
          <div>
            <span>Vốn dài hạn</span>
            <div>
              <el-input
                v-model="capital.liabilities"
                placeholder="Nhập vốn ngắn hạn..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
          <div>
            <span>Tiền & Tiền tương đương tiền</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập VCSH..."
                style="width: 100%"
              />
            </div>
          </div>
          <div>
            <span>Tổng tài sản</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập VCSH..."
                style="width: 100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="ccnv">
        <el-divider content-position="left">Chính sách công nợ</el-divider>
        <div class="capital-content grid grid-cols-3 gap-4">
          <div>
            <span>Phải thu ngắn hạn</span>
            <div>
              <el-input
                v-model="capital.total"
                placeholder="Nhập vốn ngắn hạn..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
          <div>
            <span>Phải thu dài hạn</span>
            <div>
              <el-input
                v-model="capital.total"
                placeholder="Nhập vốn ngắn hạn..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div align="right" class="mt-5">
      <el-button type="primary">Lưu số liệu</el-button>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { ref } from "vue";

const capital = ref({
  total: "",
  liabilities: "",
  vcsh: "",
  kqcapital: "",
  kqvcsh: "",
});
const data = ref({
  capital: {
    total: "",
    liabilities: "",
    vcsh: "",
    kqcapital: "",
    kqvcsh: "",
  },
});
const handleChange = () => {
  capital.value.kqcapital = (
    (Number(capital.value.liabilities) / Number(capital.value.total)) *
    100
  ).toFixed(2);
  console.log("hdjas", capital.value.kqcapital);
};
const handleChangeVCSH = () => {
  capital.value.kqvcsh = (
    (Number(capital.value.vcsh) / Number(capital.value.total)) *
    100
  ).toFixed(2);
  console.log("hdjas", capital.value.kqvcsh);
};
function calculatePercentage(n1: any, n2: any) {
  // Loại bỏ dấu chấm và dấu phẩy khỏi n1 và n2 nếu có
  let cleanedN1 = n1.replace(/[\.,]/g, ""); // Loại bỏ cả dấu chấm và dấu phẩy
  let cleanedN2 = n2.replace(/[\.,]/g, "");

  // Chuyển chuỗi thành số
  cleanedN1 = parseFloat(cleanedN1);
  cleanedN2 = parseFloat(cleanedN2);

  // Kiểm tra để đảm bảo n2 không bằng 0 (tránh chia cho 0)
  if (cleanedN2 === 0) {
    console.log("Lỗi: Không thể chia cho 0");
    return;
  }

  // Tính phần trăm
  let percentage = ((cleanedN1 / cleanedN2) * 100).toFixed(2);

  return percentage;
}
</script>
<style scoped>
.capital-content span {
  font-size: 13px;
}
</style>
