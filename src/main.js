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
import SerialCommunication from "@/components/Content/Pages/SerieleCommunicatie";
import UartCommunication from "@/components/Content/Pages/SerieleCommunicatie/UartCommunication";
import SPICommunication from "@/components/Content/Pages/SerieleCommunicatie/SPICommunication";
import I2CCommunication from "@/components/Content/Pages/SerieleCommunicatie/I2CCommunication";
import VerbindingenMaken from "@/components/Content/Pages/VerbindingenMaken";
import GeavanceerdeFuncties from "@/components/Content/Pages/GeavanceerdeFuncties";

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
        path: "/VerbindingenMaken",
        name: "Verbindingen Maken",
        component: VerbindingenMaken
    },
    {
        path: "/SerieleCommunicatie",
        name: "Seriële Communicatie",
        component: SerialCommunication
    },
    {
        path: "/SerieleCommunicatie/UART",
        name: "UART",
        component: UartCommunication
    },
    {
        path: "/SerieleCommunicatie/SPI",
        name: "SPI",
        component: SPICommunication
    },
    {
        path: "/SerieleCommunicatie/I2C",
        name: "I2C",
        component: I2CCommunication
    },
    {
        path: "/GeavanceerdeFuncties",
        name: "GeavanceerdeFuncties",
        component: GeavanceerdeFuncties
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
