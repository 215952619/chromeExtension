import Vue from "vue";
import App from "./App.vue";

import elementUI from "../utils/element";
Vue.use(elementUI);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: (h) => h(App),
});
