import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import "./assets/tailwind.css";
import VueTheMask from 'vue-the-mask'
loadFonts();

createApp(App).use(router).use(store).use(VueTheMask).mount("#app");
