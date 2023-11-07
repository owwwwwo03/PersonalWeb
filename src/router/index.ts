import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';

const routes=[
   {
        path: '/',
        component: Home,
        name: 'home'
   },
   {
        path: '/about',
        component: About,
	     name: 'About'
   },
   {
        path: '/projects',
        component: Projects,
        name: 'Projects'
   },
   
];

const router = createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router;