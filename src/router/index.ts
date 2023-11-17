import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../components/about/About.vue';
import Projects from '../components/projects/Projects.vue';

const routes = [
     {
          path: '/',
          component: Home,
          name: 'home'
     },
     {
          path: '/projects',
          component: Projects,
          name: 'Projects'
     },
     {
          path: '/about',
          component: About,
          name: 'About'
     },


];

const router = createRouter({
     history: createWebHistory(),
     routes: routes
});

export default router;