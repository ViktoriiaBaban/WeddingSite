import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginPage from "@/views/LoginPage.vue";
import WeddingInvitation from '@/views/WeddingInvitation.vue';
import MainPage from '../views/MainPage.vue';
import ChangeAttendFromMailPage from '../views/ChangeAttendFromMailPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Wedding',
        component: WeddingInvitation,
    },
    {
        path: '/:id/:attend',
        name: 'ChangeAttendFromMail',
        component: ChangeAttendFromMailPage,
    },
    {
        path: '/auth',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/main',
        name: 'Main',
        component: MainPage,
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;