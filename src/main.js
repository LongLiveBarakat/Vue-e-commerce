import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import router from "./router";
import "../src/assets/fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css";

createApp(App).use(router).mount("#app");
