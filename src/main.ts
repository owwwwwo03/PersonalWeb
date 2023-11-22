import { createApp } from 'vue';

import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
//import axiosPlugin from './lib/xhr'
import router from './router';
import store from './store';
import { LoadingPlugin } from 'vue-loading-overlay';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './style.css';
import i18n from './config/i18n';

const app =createApp(App);

app.use(VueAxios, axios);
app.use(LoadingPlugin);
app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");