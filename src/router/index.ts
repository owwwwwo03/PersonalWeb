import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Header.vue';

const routes=[
   {
    path: '/',
    component: Home,
    name: 'home'
   }
];

const router = createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router;