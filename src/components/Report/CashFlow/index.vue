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
        <el-divider content-position="left">Lưu chuyển tiền thuần</el-divider>
        <div class="capital-content grid grid-cols-3 gap-4">
          <div>
            <span>Lưu chuyển tiền thuần từ hoạt động kinh doanh</span>
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
            <span>Lưu chuyển tiền thuần từ hoạt động đầu tư</span>
            <div>
              <el-input
                v-model="capital.liabilities"
                placeholder="Nhập nợ phải trả..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
          <div>
            <span>Lưu chuyển tiền thuần từ hoạt động tài chính</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập VCSH..."
                style="width: 100%"
              />
            </div>
          </div>
          <div>
            <span>Lưu chuyển tiền thuần trong kỳ</span>
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
