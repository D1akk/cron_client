import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import "./assets/styles/style.css";
import axios from "axios";
import store from "./store";

axios.defaults.baseURL = "https://superpuperuserposer.pythonanywhere.com/";
createApp(App).use(store).use(router, axios).mount("#app");
