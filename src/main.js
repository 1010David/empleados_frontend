/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/indexRouter";
import store from "./store/indexStore";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
