<template>
   <!--  <img alt="Vue logo" src="./assets/logo.png">-->
   <SideBar title="Fondant" link="/">
      <template v-slot:sidebar>
         <h5>Fondant</h5>
         <SideBarGroup title="Introductie" link="/Fondant/WatIsFondant">
            <SideBarLink link="/Fondant/WatIsFondant#DeDocumentatie">De Documentatie</SideBarLink>
            <SideBarLink link="/Fondant/WatIsFondant#DeLibrary">De Library</SideBarLink>
            <SideBarLink link="/Fondant/WatIsFondant#DeNaam">De Naam</SideBarLink>

         </SideBarGroup>

         <hr>
         <h5>Theorie</h5>

         <SideBarGroup title="Wat is een microcontroller" link="/Theorie/WatIsEenMicrocontroller">
            <SideBarLink link="/Theorie/WatIsEenMicrocontroller#Microprocessors">Microprocessors</SideBarLink>
            <SideBarLink link="/Theorie/WatIsEenMicrocontroller#MicroProcessorsVsMicroControllers">Microprocessors vs
               Microcontrollers
            </SideBarLink>
            <SideBarLink link="/Theorie/WatIsEenMicrocontroller#EmbeddedSystemen">Embedded Systemen</SideBarLink>
         </SideBarGroup>


         <SideBarGroup title="Digitale logica" link="/Theorie/DigitaleLogica">
            <SideBarLink link="/Theorie/DigitaleLogica#Basis">Basis</SideBarLink>
            <SideBarLink link="/Theorie/DigitaleLogica#OutputPin">Output Pin</SideBarLink>
            <SideBarLink link="/Theorie/DigitaleLogica#InputPin">Input Pin</SideBarLink>
            <SideBarLink link="/Theorie/DigitaleLogica#OpenCollectorPin">Open Collector / Open Drain Pin</SideBarLink>

         </SideBarGroup>

         <SideBarGroup title="Seriële Communicatie" link="/Theorie/SerieleCommunicatie">
            <SideBarGroup title="UART" link="/Theorie/SerieleCommunicatie/UART">
               <SideBarLink link="/Theorie/SerieleCommunicatie/UART#Werking">Werking en parameters</SideBarLink>
               <SideBarLink link="/Theorie/SerieleCommunicatie/UART#TryItOut">Try It Out!</SideBarLink>
               <SideBarLink link="/Theorie/SerieleCommunicatie/UART#Uitdagingen">Uitdagingen</SideBarLink>
            </SideBarGroup>

            <SideBarGroup title="SPI" link="/Theorie/SerieleCommunicatie/SPI">
               <SideBarLink link="/Theorie/SerieleCommunicatie/SPI#Werking">Werking</SideBarLink>
               <SideBarLink link="/Theorie/SerieleCommunicatie/SPI#Parameters">Parameters</SideBarLink>
               <SideBarLink link="/Theorie/SerieleCommunicatie/SPI#TryItOut">Try It Out!</SideBarLink>
               <SideBarLink link="/Theorie/SerieleCommunicatie/SPI#Uitdagingen">Uitdagingen</SideBarLink>
            </SideBarGroup>

            <SideBarGroup title="I2C" link="/Theorie/SerieleCommunicatie/I2C">
               <SideBarLink link="/Theorie/SerieleCommunicatie/I2C#Adressen">Adressen</SideBarLink>
               <SideBarLink link="/Theorie/SerieleCommunicatie/I2C#Werking">Werking</SideBarLink>
               <SideBarLink link="/Theorie/SerieleCommunicatie/I2C#Visueel">Visueel</SideBarLink>
               <SideBarLink link="/Theorie/SerieleCommunicatie/I2C#Uitdagingen">Uitdagingen</SideBarLink>
            </SideBarGroup>
         </SideBarGroup>

         <SideBarGroup title="Geavanceerde functies" link="/Theorie/GeavanceerdeFuncties">
            <SideBarLink link="/Theorie/GeavanceerdeFuncties#DMA">DMA</SideBarLink>
            <SideBarLink link="/Theorie/GeavanceerdeFuncties#Timers">Timers</SideBarLink>
            <SideBarLink link="/Theorie/GeavanceerdeFuncties#Watchdogs">Watchdogs</SideBarLink>
            <SideBarLink link="/Theorie/GeavanceerdeFuncties#Debugging">Debugging</SideBarLink>

         </SideBarGroup>


         <hr>
         <h5>Voorbereiding</h5>
         <SideBarGroup title="Vereisten installeren" link="/Voorbereiding/VereistenInstalleren">
            <SideBarLink link="/Voorbereiding/VereistenInstalleren#CubeIDE">STM32CubeIDE</SideBarLink>
            <SideBarLink link="/Voorbereiding/VereistenInstalleren#CLion">CLion</SideBarLink>
            <SideBarLink link="/Voorbereiding/VereistenInstalleren#OpenOCD">OpenOCD</SideBarLink>
            <SideBarLink link="/Voorbereiding/VereistenInstalleren#ARM">ARM toolchain</SideBarLink>
            <SideBarLink link="/Voorbereiding/VereistenInstalleren#PulseView">PulseView</SideBarLink>
         </SideBarGroup>

         <SideBarGroup title="Nieuw project" link="/Voorbereiding/NieuwProject">
            <SideBarGroup title="STM Project aanmaken" link="/Voorbereiding/NieuwProject/STMProject">
               <SideBarLink link="/Voorbereiding/NieuwProject/STMProject#NieuwProject">Nieuw Project</SideBarLink>
               <SideBarLink link="/Voorbereiding/NieuwProject/STMProject#KlokBron">Klokbron</SideBarLink>
               <SideBarLink link="/Voorbereiding/NieuwProject/STMProject#DebugBron">Debugbron</SideBarLink>
            </SideBarGroup>

            <SideBarGroup title="CLion configureren" link="/Voorbereiding/NieuwProject/CLionProject">
               <SideBarLink link="/Voorbereiding/NieuwProject/CLionProject#CLionOpenen">Project openen</SideBarLink>
               <SideBarLink link="/Voorbereiding/NieuwProject/CLionProject#BoardConfig">Board config file</SideBarLink>
               <SideBarLink link="/Voorbereiding/NieuwProject/CLionProject#LinkerScript">Linkerscript aanpassen</SideBarLink>
               <SideBarLink link="/Voorbereiding/NieuwProject/CLionProject#Uitvoeren">Uitvoeren</SideBarLink>
            </SideBarGroup>

            <SideBarGroup title="Fondant toevoegen" link="/Voorbereiding/NieuwProject/FondantToevoegen">
               <SideBarLink link="/Voorbereiding/NieuwProject/FondantToevoegen#FondantKopie">Fondant Kopiëren</SideBarLink>
               <SideBarLink link="/Voorbereiding/NieuwProject/FondantToevoegen#Main">Main.c omleiden</SideBarLink>
               <SideBarLink link="/Voorbereiding/NieuwProject/FondantToevoegen#MainCPP">Main.cpp maken</SideBarLink>
            </SideBarGroup>

         </SideBarGroup>


         <hr>
         <h5>Ontwikkelen</h5>

         <SideBarGroup title="Ontwikkelen met Fondant" link="/Ontwikkelen/OntwikkelenMetFondant">
         </SideBarGroup>

         <SideBarGroup title="De Debugger" link="/Ontwikkelen/DeDebugger">
         </SideBarGroup>

         <SideBarGroup title="De Logic Analyser" link="/Ontwikkelen/DeLogicAnalyser">
         </SideBarGroup>

         <SideBarGroup title="Voorbeelden" link="/Ontwikkelen/Voorbeelden">
            <SideBarLink link="/Ontwikkelen/Voorbeelden/HelloWorld">Hello World! (blink)</SideBarLink>
            <SideBarLink link="/Ontwikkelen/Voorbeelden/PinInPinOut">Pin in + Pin out</SideBarLink>
            <SideBarLink link="/Ontwikkelen/Voorbeelden/Pinsdoorgeven">Pins doorgeven</SideBarLink>
            <SideBarLink link="/Ontwikkelen/Voorbeelden/SPI">SPI</SideBarLink>
            <SideBarLink link="/Ontwikkelen/Voorbeelden/SPIDMA">SPI met DMA</SideBarLink>
            <SideBarLink link="/Ontwikkelen/Voorbeelden/Interrupts">Interrupts</SideBarLink>
         </SideBarGroup>

         <hr>
         <h5>Overig</h5>

         <SideBarGroup title="Informatie Vinden" link="/Overig/InformatieVinden">
            <SideBarLink link="/Overig/InformatieVinden#OpsplitsingDocumentatie">Opsplitsing van Documentatie
            </SideBarLink>
            <SideBarLink link="/Overig/InformatieVinden#HetDevBoard">Het (Development) Board</SideBarLink>
            <SideBarLink link="/Overig/InformatieVinden#DeMicrocontroller">De microcontroller</SideBarLink>
            <SideBarLink link="/Overig/InformatieVinden#HetSensorBoard">Het sensorboard</SideBarLink>
            <SideBarLink link="/Overig/InformatieVinden#DeSensorProcessor">De Sensor Processor</SideBarLink>
         </SideBarGroup>

      </template>

      <template v-slot:content>
         <router-view class="col-12 col-xl-8"></router-view>
      </template>
   </SideBar>


</template>

<script>

import SideBar from "@/components/SideBar/SideBar";
import SideBarLink from "@/components/SideBar/SideBarLink";
import SideBarGroup from "@/components/SideBar/SideBarGroup";

export default {
   name: 'App',
   components: {
      SideBar,
      SideBarLink,
      SideBarGroup
   }
}
</script>

<style>
#app {
   display: flex;
   height: 100vh;
}

.emph, .emph_link {
   display: inline;
   background: #a2a2a2;
   color: #e7e7e7;
   padding-left: 10px;
   padding-right: 10px;
   border-radius: 5px;
   font-size: 0.9em;
}

.emph_link {
   text-decoration: none;
   color: #292d41;
   font-weight: bold;
}

.emph_link:hover {
   color: #2f2f2f;
}

.fix {
   display: inline;
   background: #d58888;
   border-radius: 5px;
   padding-left: 10px;
   padding-right: 10px;
}

hr.spacer {
   margin-bottom: 50px;
   margin-top: 50px;
}


</style>
