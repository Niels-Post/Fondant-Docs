import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import {createWebHistory, createRouter} from "vue-router";
import ContentStart from "@/components/Content/ContentStart";
import DeMicrocontroller from "@/components/Content/Pages/Microcontroller";
import VereistenInstalleren from "@/components/Content/Pages/Installatie";
import MicrocontrollerOnderdelen from "@/components/Content/Pages/MicrocontrollerOnderdelen";
import InformatieVinden from "@/components/Content/Pages/InformatieVinden";

const routes = [
    {
        path: "/",
        name: "Home",
        component: ContentStart
    },
    {
        path: "/Installatie/",
        name: "VereistenInstalleren",
        component: VereistenInstalleren
    },
    {
        path: "/DeMicrocontroller",
        name: "De MicroController",
        component: DeMicrocontroller
    },
    {
        path: "/MicrocontrollerOnderdelen",
        name: "Onderdelen van een Microcontroller",
        component: MicrocontrollerOnderdelen
    },
    {
        path: "/InformatieVinden",
        name: "Informatie Vinden",
        component: InformatieVinden
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash !== "") {
            document.getElementById(to.hash.substring(1)).scrollIntoView({ behavior: "smooth" });
            return false
        } else {
            document.getElementById("content-container").scrollTo({top: 0, behavior: 'smooth'});
            return false;
        }
    },
})

createApp(App)
    .use(router)
    .mount('#app')
