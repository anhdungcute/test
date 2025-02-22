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
      <div id="ts">
        <el-divider content-position="left">Tài sản</el-divider>
        <div class="capital-content grid grid-cols-3 gap-4">
          <div>
            <span>Tổng tài sản</span>
            <div>
              <el-input
                v-model="capital.total"
                placeholder="Nhập tổng tài sản..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
          <div>
            <span>TSNH</span>
            <div>
              <el-input
                v-model="capital.liabilities"
                placeholder="Nhập TSNH..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
          <div>
            <span>TSDH</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập TSDH..."
                style="width: 100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="ccts">
        <el-divider content-position="left">Cơ cấu tài sản</el-divider>
        <div class="capital-content grid grid-cols-3 gap-4">
          <div>
            <span>Tiền & TĐT</span>
            <div>
              <el-input
                v-model="capital.total"
                placeholder="Nhập Tiền & TĐT..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
          <div>
            <span>Đầu tư ngắn hạn</span>
            <div>
              <el-input
                v-model="capital.liabilities"
                placeholder="Nhập đầu tư ngắn hạn..."
                style="width: 100%"
                @change="handleChange"
              />
            </div>
          </div>
          <div>
            <span>Phải thu ngắn hạn</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập phải thu ngắn hạn..."
                style="width: 100%"
              />
            </div>
          </div>
          <div>
            <span>Hàng tồn kho</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập hàng tồn kho..."
                style="width: 100%"
              />
            </div>
          </div>
          <div>
            <span>TSNH khác</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập TSNH khác..."
                style="width: 100%"
              />
            </div>
          </div>
          <div>
            <span>Phải thu dài hạn</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập Phải thu dài hạn..."
                style="width: 100%"
              />
            </div>
          </div>
          <div>
            <span>Tài sản cố định</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập Tài sản cố định..."
                style="width: 100%"
              />
            </div>
          </div>
          <div>
            <span>Bất động sản đầu tư</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập Bất động sản đầu tư..."
                style="width: 100%"
              />
            </div>
          </div>
          <div>
            <span>Tài sản dở dang dài hạn</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập tài sản dở dang dài hạn..."
                style="width: 100%"
              />
            </div>
          </div>
          <div>
            <span>Đầu tư dài hạn</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập đầu tư dài hạn..."
                style="width: 100%"
              />
            </div>
          </div>
          <div>
            <span>Tài sản dài hạn khác</span>
            <div>
              <el-input
                v-model="capital.vcsh"
                placeholder="Nhập tài sản dài hạn khác..."
                style="width: 100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div align="right" class="mt-5">
        <el-button type="primary">Lưu số liệu</el-button>
      </div>
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
