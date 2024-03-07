import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/components/about/About.vue';
import Projects from '@/components/projects/Projects.vue';
import Contact from '@/components/contact/Contact.vue'
import FabAR from '@/components/projects/contents/FabAR.vue';
import Doddle from '@/components/projects/contents/Doddle.vue';
import MetaHuman from '@/components/projects/contents/MetaHuman.vue';
import VBike from '@/components/projects/contents/VBike.vue';
import Kuchipa from '@/components/projects/contents/Kuchipa.vue';
import Kick from '@/components/projects/contents/Kick.vue';

const routes = [
     {
          path: '/PersonalWeb/',
          component: Home,
          name: 'home'
     },
     {
          path: '/',
          component: Home,
          name: 'Home'
     },
     {
          path: '/PersonalWeb/projects',
          component: Projects,
          name: 'Projects'
     },
     {
          path: '/PersonalWeb/about',
          component: About,
          name: 'About'
     },
     {
          path: '/PersonalWeb/contact',
          component: Contact,
          name: 'Contact'
     },
     {
          path: '/PersonalWeb/projects/fabAR',
          component: FabAR,
          name: 'FabAR'
     },
     {
          path: '/PersonalWeb/projects/doddle',
          component: Doddle,
          name: 'Doddle'
     },
     {
          path: '/PersonalWeb/projects/metaHuman',
          component: MetaHuman,
          name: 'MetaHuman'
     },
     {
          path: '/PersonalWeb/projects/vBike',
          component: VBike,
          name: 'VBike'
     },
     {
          path: '/PersonalWeb/projects/kuchipa',
          component: Kuchipa,
          name: 'Kuchipa'
     },
     {
          path: '/PersonalWeb/projects/kick',
          component: Kick,
          name: 'Kick'
     },


];

const router = createRouter({
     history: createWebHistory(),
     routes: routes
});

export default router;