<template>
  <div class="form m-0 h-full w-full p-0">
    <div class="bg m-0 h-full w-full p-0">
      <div class="over-lay "></div>
      <div class="container-login ">
        <div>
          <!-- From -->
          <div class="content ">
            <div class="form">
              <div class="content-form-re ">
                <div class="content-form-ab rounded-xl">
                  <div class="my-5 text-center text-white text-2xl font-bold">
                    ĐĂNG NHẬP
                  </div>
                  <div>
                    <el-form
                      status-icon
                      ref="ruleForm"
                      label-width="120px"
                      class="demo-ruleForm"
                      label-position="top"
                    >
                      <el-form-item
                        class="change-color"
                        label="Tên đăng nhập"
                        prop="pass"
                      >
                        <el-input
                          type="password"
                          placeholder="Nhập tên đăng nhập..."
                        >
                        </el-input>
                      </el-form-item>
                      <el-form-item
                        class="change-color"
                        label="Mật khẩu"
                        prop="checkPass"
                      >
                        <el-input
                          type="password"
                          placeholder="Nhập mật khẩu..."
                        ></el-input>
                      </el-form-item>
                      <el-form-item>
                        <div>
                          <el-checkbox class="change-color"
                            >Nhớ đăng nhập</el-checkbox
                          >
                        </div>
                      </el-form-item>
                    </el-form>
                    <div class="mt-5" align="center">
                      <el-button type="primary">Đăng nhập</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- From -->
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.bg {
  position: relative;
}
.img-bg {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-size: cover;
  background: center;
}
.container-login {
  position: absolute;
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* background: transparent; */
  width: 30%;
  height: 60%;
}
.content {
  position: relative;
}
.over-lay {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/bg-login.jpg") no-repeat center center;
  background-size: cover;
  /* filter: blur(8px); */
  /* opacity: 1; */
}
.content-form-re {
  position: relative !important;
}
.content-form-ab {
  position: absolute;
  top: 10%;
  width: 100%;
  box-sizing: border-box;
  padding: 5% 15%;
  background: rgb(0 0 0 / 54%);
}
.change-color .el-form-item__label {
  color: #fff !important;
}
.change-color .el-checkbox__label {
  color: #fff !important;
}
</style>
