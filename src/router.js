import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import About from './pages/About.vue';
import Contatti from './pages/Contatti.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
    path: '/',
    name: 'home',
    component: AppHome
    },
    {
    path: '/about',
    name: 'about',
    component: About
     },
     {
    path: '/contatti',
    name: 'contatti',
    component: Contatti
    }
    ]
});
export { router };

