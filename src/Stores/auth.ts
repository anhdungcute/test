import { defineStore } from "pinia";

interface AuthState {
  isAuthenticated: boolean;
  username: string;
  password: string;
  rememberMe: string;
  loginTime: number | null;
}
export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
    username: localStorage.getItem("rememberedUsername") || "",
    password: localStorage.getItem("rememberedPassword") || "",
    rememberMe: localStorage.getItem("rememberMe") || "1",
    loginTime: null,
  }),
  actions: {
    login(username: string, password: string, rememberMe: string) {
      // Giả lập thông tin đăng nhập
      if (username === "admin" && password === "12345") {
        const currentTime = Date.now();
        localStorage.setItem("loginTime", currentTime.toString());
        this.isAuthenticated = true;
        this.username = username;
        this.password = password;
        this.rememberMe = rememberMe;
        if (rememberMe) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("rememberedUsername", username);
          localStorage.setItem("rememberedPassword", password);
          localStorage.setItem("rememberMe", rememberMe);
        } else {
          sessionStorage.setItem("isAuthenticated", "true");
        }
      } else {
        throw new Error("Invalid username or password");
      }
    },
    logout() {
      console.log('step4');
      this.isAuthenticated = false;
      if (localStorage.getItem("rememberMe") == "1") {
        this.username = "";
        this.password = "";
        localStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("isAuthenticated");
        localStorage.removeItem("rememberedUsername");
        localStorage.removeItem("rememberedPassword");
      } else {
        localStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("isAuthenticated");
      }
    },
    checkSessionExpiration() {
      console.log('step2');
      const savedLoginTime = localStorage.getItem("loginTime");
      const currentTime = Date.now();

      if (savedLoginTime) {
        const elapsedTime = currentTime - parseInt(savedLoginTime);
        if (elapsedTime > 0.5 * 60 * 1000) {
          console.log('step3');
          // 30 phút sau khi tắt trang web
          this.logout(); // Hết hạn session, đăng xuất người dùng
        } else {
          this.loginTime = parseInt(savedLoginTime);
          this.isAuthenticated = true;
          this.username = localStorage.getItem("username") || "";
        }
      }
    },
  },
});
