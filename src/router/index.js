import { createRouter, createWebHistory } from 'vue-router'
// import store from '@/store'


import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import EmployeView from '../views/EmployeView.vue'
import ServiceView from '../views/ServiceView.vue'


const routes = [
    {
        path: '/',
        name: 'home', component: HomeView,
    },
    {
        path: '/dashboard',
        component: DashboardView,
        meta: {
            requiresAuth: true,
        },
        children: [
            { path: 'employe', name: 'employe', component: EmployeView },
            { path: 'service', name: 'service', component: ServiceView }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router