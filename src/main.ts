import { createApp } from 'vue';

import App from './App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
//import axiosPlugin from './lib/xhr'
import router from './router';
import store from './store';
import { LoadingPlugin } from 'vue-loading-overlay';
import './css/index';
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './config/i18n';
import 'aos/dist/aos.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css';
import './css/fonts.css';

const app = createApp(App);

app.use(VueAxios, axios);
app.use(LoadingPlugin);
app.use(router);
app.use(store);
app.use(i18n);
app.use(VueAwesomeSwiper);

app.mount("#app");