import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../components/about/About.vue';
import Projects from '../components/projects/Projects.vue';
import FabAR from '../components/projects/contents/FabAR.vue';
import Doddle from '../components/projects/contents/Doddle.vue';
import MetaHuman from '../components/projects/contents/MetaHuman.vue';
import VBike from '../components/projects/contents/VBike.vue';
import Kuchipa from '../components/projects/contents/Kuchipa.vue';
import Kick from '../components/projects/contents/Kick.vue';

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
     {
          path: '/projects/fabAR',
          component: FabAR,
          name: 'FabAR'
     },
     {
          path: '/projects/doddle',
          component: Doddle,
          name: 'Doddle'
     },
     {
          path: '/projects/metaHuman',
          component: MetaHuman,
          name: 'MetaHuman'
     },
     {
          path: '/projects/vBike',
          component: VBike,
          name: 'VBike'
     },
     {
          path: '/projects/kuchipa',
          component: Kuchipa,
          name: 'Kuchipa'
     },
     {
          path: '/projects/kick',
          component: Kick,
          name: 'Kick'
     },


];

const router = createRouter({
     history: createWebHistory(),
     routes: routes
});

export default router;