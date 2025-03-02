import { defineStore } from "pinia";

interface AuthState {
  isAuthenticated: boolean;
  username: string;
  password: string;
  rememberMe: string;
  loginTime: number | null;
}

const arrAcc = [
  { username: "admin", password: "12345" },
  { username: "user", password: "12345" },
];
const checkAccount = (arr: any, username: string, password: string) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].username === username && arr[i].password === password) {
      return true; // Nếu tìm thấy phần tử có username và password khớp
    }
  }
  return false; // Nếu không tìm thấy phần tử nào khớp
};
export const useAuthStore = defineStore("auth", {
  // state: (): AuthState => ({
  //   isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  //   username: localStorage.getItem("rememberedUsername") || "",
  //   password: localStorage.getItem("rememberedPassword") || "",
  //   rememberMe: localStorage.getItem("rememberMe") || "1",
  //   loginTime: null,
  // }),
  state: () => {
    return {
      AuthState: {
        isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
        username: localStorage.getItem("rememberedUsername") || "",
        password: localStorage.getItem("rememberedPassword") || "",
        rememberMe: localStorage.getItem("rememberMe") || "1",
        loginTime: null,
      } as AuthState,
      // for data that is not yet loaded
      menu: [] as Array<{
        name: string;
        displayName: string;
        show: boolean;
        children?: Array<{
          name: string;
          displayName: string;
          show: boolean;
        }>;
      }>,
    };
  },
  actions: {
    login(username: string, password: string, rememberMe: string, menu: any) {
      // Giả lập thông tin đăng nhập
      if (checkAccount(arrAcc, username, password)) {
        const currentTime = Date.now();
        localStorage.setItem("loginTime", currentTime.toString());
        this.AuthState.isAuthenticated = true;
        this.AuthState.username = username;
        this.AuthState.password = password;
        this.AuthState.rememberMe = rememberMe;
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
      this.AuthState.isAuthenticated = false;
      if (localStorage.getItem("rememberMe") == "1") {
        this.AuthState.username = "";
        this.AuthState.password = "";
        localStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("isAuthenticated");
        localStorage.removeItem("rememberedUsername");
        localStorage.removeItem("rememberedPassword");
        localStorage.removeItem("menu");
      } else {
        localStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("isAuthenticated");
      }
    },
    checkSessionExpiration() {
      console.log("step2");
      const savedLoginTime = localStorage.getItem("loginTime");
      const currentTime = Date.now();

      if (savedLoginTime) {
        const elapsedTime = currentTime - parseInt(savedLoginTime);
        if (elapsedTime > 0.5 * 60 * 1000) {
          console.log("step3");
          // 30 phút sau khi tắt trang web
          this.logout(); // Hết hạn session, đăng xuất người dùng
        } else {
          this.AuthState.loginTime = parseInt(savedLoginTime);
          this.AuthState.isAuthenticated = true;
          this.AuthState.username = localStorage.getItem("username") || "";
        }
      }
    },
    setMenu(menuData: Array<any>) {
      this.menu = menuData;
      localStorage.setItem("menu", JSON.stringify(menuData)); // Store menu in localStorage
    },
    loadMenu() {
      const storedMenu = localStorage.getItem("menu");
      if (storedMenu) {
        this.menu = JSON.parse(storedMenu); // Parse the stored menu from localStorage
      }
    },
  },
});
