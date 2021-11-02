import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', name: 'Home', component: () => import('@/pages/Home.vue') },
    { path: '/calendar', name: 'Calendar', component: () => import('@/pages/Calendar.vue') },
    { path: '/counturies', name: 'Counturies', component: () => import('@/pages/Counturies.vue') },
    { path: '/slider', name: 'Slider', component: () => import('@/pages/Slider.vue') },
    { path: '/calculator', name: 'Calculator', component: () => import('@/pages/Calculator.vue') },
    { path: '/modal', name: 'Modal', component: () => import('@/pages/Modal.vue') },
 

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;