import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";
import headerApp from "./layout/headApp.vue";
import Projects from "./pages/projects.vue";
import NotFound from "./layout/Errors/notFound.vue";
import About from "./pages/about.vue";
import Join from "./pages/join.vue";
import Price from "./pages/price.vue";
import Admin from "./pages/admin.vue";


const routes = [
    {
      path: '/',
      component:headerApp,
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
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router
  