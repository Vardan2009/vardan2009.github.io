import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

import glitch from "./glitch";

const app = createApp(App);

app.use(router);
app.directive("glitch", glitch);

app.mount("#app");
