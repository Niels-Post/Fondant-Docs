import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import {createWebHistory, createRouter} from "vue-router";
import ContentStart from "@/components/Content/ContentStart";
import _1_CubeIDE from "@/components/Content/Installatie/_1_CubeIDE";
import _2_CLion from "@/components/Content/Installatie/_2_CLion";
import _3_OpenOCD from "@/components/Content/Installatie/_3_OpenOCD";
import _4_ARM from "@/components/Content/Installatie/_4_ARM";

const routes = [
    {
        path: "/",
        name: "Home",
        component: ContentStart
    },
    {
        path: "/Installatie/1_CubeIDE",
        name: "1_CubeIDE",
        component: _1_CubeIDE
    },
    {
        path: "/Installatie/2_CLion",
        name: "2_CLion",
        component: _2_CLion
    },
    {
        path: "/Installatie/3_OpenOCD",
        name: "3_OpenOCD",
        component: _3_OpenOCD
    },
    {
        path: "/Installatie/4_ARM",
        name: "4_ARM",
        component: _4_ARM
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')
