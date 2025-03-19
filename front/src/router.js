import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";
import Projects from "./pages/projects.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/projects',
            component: Projects,
        },
    ]
})