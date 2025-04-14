import NotFound from '@/layout/Errors/notFound.vue'
import HeadApp from '@/layout/headApp.vue'
import About from '@/pages/about.vue'
import Admin from '@/pages/admin.vue'
import Home from '@/pages/home.vue'
import Join from '@/pages/join.vue'
import Price from '@/pages/price.vue'
import Projects from '@/pages/projects.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HeadApp,
      children: [
        {
            path: '',
            component: Home,
        },
        {
            path: 'price',
            component: Price
        },
        {
            path: 'projects',
            component: Projects
        },
        {
            path: 'join',
            component: Join
        },
        {
            path: 'about',
            component: About
        }
      ],
    },
    {
        path: '/admpanel',
        component: Admin,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
  ]
})

export default router
