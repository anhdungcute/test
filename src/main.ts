import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./routes/router";
import VueApexCharts from "vue3-apexcharts";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import permissionDirective from "./directive/Permissions.vue";
library.add(fas, far, fab);
dom.watch();

const _pinia = createPinia();

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .directive("show-permission", permissionDirective)
  .use(VueApexCharts)
  .use(ElementPlus)
  .component("fa", FontAwesomeIcon)
  .use(_pinia)
  .use(router)
  .mount("#app");
