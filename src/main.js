import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import {createWebHistory, createRouter} from "vue-router";
import ContentStart from "@/components/Content/ContentStart";
import DeMicrocontroller from "@/components/Content/Pages/OverEmbedded/Microcontroller";
import VereistenInstalleren from "@/components/Content/Pages/Installatie/Installatie";
import MicrocontrollerOnderdelen from "@/components/Content/Pages/OverEmbedded/Peripherals";
import InformatieVinden from "@/components/Content/Pages/OverEmbedded/InformatieVinden";
import DigitaleLogica from "@/components/Content/Pages/DigitaleLogica";
import SerialCommunication from "@/components/Content/Pages/SerialCommunication";
import UartCommunication from "@/components/Content/Pages/SerialCommunication/UartCommunication";
import SPICommunication from "@/components/Content/Pages/SerialCommunication/SPICommunication";
import I2CCommunication from "@/components/Content/Pages/SerialCommunication/I2CCommunication";

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
        path: "/OverEmbedded/DeMicrocontroller",
        name: "De MicroController",
        component: DeMicrocontroller
    },
    {
        path: "/OverEmbedded/Peripherals",
        name: "Peripherals",
        component: MicrocontrollerOnderdelen
    },
    {
        path: "/OverEmbedded/InformatieVinden",
        name: "Informatie Vinden",
        component: InformatieVinden
    },
    {
        path: "/DigitaleLogica",
        name: "Digitale Logica",
        component: DigitaleLogica
    },
    {
        path: "/SerialCommunication",
        name: "Seriële Communicatie",
        component: SerialCommunication
    },
    {
        path: "/SerialCommunication/UART",
        name: "UART",
        component: UartCommunication
    },
    {
        path: "/SerialCommunication/SPI",
        name: "SPI",
        component: SPICommunication
    },
    {
        path: "/SerialCommunication/I2C",
        name: "I2C",
        component: I2CCommunication
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
