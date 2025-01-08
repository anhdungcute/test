import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from "./App.vue";
import router from "./routes/router";
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

const _pinia = createPinia();

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(ElementPlus)
.use(_pinia)
.use(router)
.mount("#app");
