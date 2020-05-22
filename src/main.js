import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from "./router";
import store from './store/store'
import { initializationUserAuthentication } from "./store/api/auth";


Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const initAuth = async () => {
  await initializationUserAuthentication();
  new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#app');
};

initAuth();


