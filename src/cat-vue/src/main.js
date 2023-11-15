import { createApp } from "vue";
import App from "./App.vue";
import "./scss/main.scss";
import { getAssetsFile } from "./util/pub-use";
// const Pub = usePub();
// const getAssetsFile = Pub.getAssetsFile;

createApp(App).mount("#app");
