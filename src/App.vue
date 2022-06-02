<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <SideBar title="Fondant" link="/">
     <template v-slot:sidebar>
        <h5>Theorie</h5>

        <SideBarGroup title="Over Embedded" open_link="/OverEmbedded">
           <SideBarGroup title="Wat is een microcontroller" link="/OverEmbedded/DeMicrocontroller">
              <SideBarLink link="/OverEmbedded/DeMicrocontroller#Microprocessors">Microprocessors</SideBarLink>
              <SideBarLink link="/OverEmbedded/DeMicrocontroller#MicroProcessorsVsMicroControllers">Microprocessors vs
                 Microcontrollers
              </SideBarLink>
              <SideBarLink link="/OverEmbedded/DeMicrocontroller#EmbeddedSystemen">Embedded Systemen</SideBarLink>
           </SideBarGroup>

           <SideBarGroup title="Informatie Vinden" link="/OverEmbedded/InformatieVinden">
              <SideBarLink link="/OverEmbedded/InformatieVinden#OpsplitsingDocumentatie">Opsplitsing van Documentatie
              </SideBarLink>
              <SideBarLink link="/OverEmbedded/InformatieVinden#HetDevBoard">Het (Development) Board</SideBarLink>
              <SideBarLink link="/OverEmbedded/InformatieVinden#DeMicrocontroller">De microcontroller</SideBarLink>
              <SideBarLink link="/OverEmbedded/InformatieVinden#HetSensorBoard">Het sensorboard</SideBarLink>
              <SideBarLink link="/OverEmbedded/InformatieVinden#DeSensorProcessor">De Sensor Processor</SideBarLink>
           </SideBarGroup>

           <SideBarGroup title="Peripherals" open_link="/OverEmbedded/Peripherals">
              <SideBarLink link="/OverEmbedded/Peripherals#OpsplitsingDocumentatie">Introductie</SideBarLink>
           </SideBarGroup>
        </SideBarGroup>


        <SideBarGroup title="Verbindingen Maken" link="/VerbindingenMaken">

           <SideBarGroup title="Digitale logica" link="/DigitaleLogica">
              <SideBarLink link="/DigitaleLogica#Basis">Basis</SideBarLink>
              <SideBarLink link="/DigitaleLogica#OutputPin">Output Pin</SideBarLink>
              <SideBarLink link="/DigitaleLogica#InputPin">Input Pin</SideBarLink>
              <SideBarLink link="/DigitaleLogica#OpenCollectorPin">Open Collector / Open Drain Pin</SideBarLink>

           </SideBarGroup>

           <SideBarGroup title="Seriële Communicatie" link="/SerieleCommunicatie">
              <SideBarGroup title="UART" link="/SerieleCommunicatie/UART">
                 <SideBarLink link="/SerieleCommunicatie/UART#Werking">Werking en parameters</SideBarLink>
                 <SideBarLink link="/SerieleCommunicatie/UART#TryItOut">Try It Out!</SideBarLink>
                 <SideBarLink link="/SerieleCommunicatie/UART#Uitdagingen">Uitdagingen</SideBarLink>
              </SideBarGroup>

              <SideBarGroup title="SPI" link="/SerieleCommunicatie/SPI">
                 <SideBarLink link="/SerieleCommunicatie/SPI#Werking">Werking</SideBarLink>
                 <SideBarLink link="/SerieleCommunicatie/SPI#Parameters">Parameters</SideBarLink>
                 <SideBarLink link="/SerieleCommunicatie/SPI#TryItOut">Try It Out!</SideBarLink>
                 <SideBarLink link="/SerieleCommunicatie/SPI#Uitdagingen">Uitdagingen</SideBarLink>
              </SideBarGroup>

              <SideBarGroup title="I2C" link="/SerieleCommunicatie/I2C">
                 <SideBarLink link="/SerieleCommunicatie/I2C#Adressen">Adressen</SideBarLink>
                 <SideBarLink link="/SerieleCommunicatie/I2C#Werking">Werking</SideBarLink>
                 <SideBarLink link="/SerieleCommunicatie/I2C#Visueel">Visueel</SideBarLink>
                 <SideBarLink link="/SerieleCommunicatie/I2C#Uitdagingen">Uitdagingen</SideBarLink>
              </SideBarGroup>
           </SideBarGroup>

           <SideBarGroup class="fix" title="Analoge logica" link="/AnalogeLogica"></SideBarGroup>
        </SideBarGroup>

        <SideBarGroup title="Geavanceerde functies" link="/GeavanceerdeFuncties">
           <SideBarLink link="/GeavanceerdeFuncties#DMA">DMA</SideBarLink>
           <SideBarLink link="/GeavanceerdeFuncties#Timers">Timers</SideBarLink>
           <SideBarLink link="/GeavanceerdeFuncties#Debugging">Debugging</SideBarLink>
           <SideBarLink link="/GeavanceerdeFuncties#Watchdogs">Watchdogs</SideBarLink>

        </SideBarGroup>


        <hr>
        <h5>Voorbereiding</h5>
        <SideBarGroup title="Installatie" link="/Installatie">
           <SideBarLink link="/Installatie#CubeIDE">STM32CubeIDE</SideBarLink>
           <SideBarLink link="/Installatie#CLion">CLion</SideBarLink>
           <SideBarLink link="/Installatie#OpenOCD">OpenOCD</SideBarLink>
           <SideBarLink link="/Installatie#ARM">ARM</SideBarLink>
        </SideBarGroup>

         <SideBarGroup title="Nieuw project">
            <SideBarGroup title="STM Project aanmaken" link="/Workflow/STMProject">
               <SideBarLink link="/Workflow/STMProject#NieuwProject">Nieuw Project</SideBarLink>
               <SideBarLink link="/Workflow/STMProject#KlokBron">Klokbron</SideBarLink>
               <SideBarLink link="/Workflow/STMProject#DebugBron">Debugbron</SideBarLink>
            </SideBarGroup>

            <SideBarGroup title="CLion configureren" link="/Workflow/CLionProject">
               <SideBarLink link="/Workflow/CLionProject#CLionOpenen">Project openen</SideBarLink>
               <SideBarLink link="/Workflow/CLionProject#BoardConfig">Board config file</SideBarLink>
               <SideBarLink link="/Workflow/CLionProject#LinkerScript">Linkerscript aanpassen</SideBarLink>
               <SideBarLink link="/Workflow/CLionProject#Uitvoeren">Uitvoeren</SideBarLink>
            </SideBarGroup>

            <SideBarGroup title="Fondant instellen" link="/Workflow/FondantInstellen">
               <SideBarLink link="/Workflow/FondantInstellen#FondantKopie">Fondant Kopiëren</SideBarLink>
            </SideBarGroup>

         </SideBarGroup>

        <hr>
        <h5>Ontwikkelen</h5>
        <SideBarGroup title="Voorbeelden" link="/Voorbeelden">
           <SideBarLink link="/Voorbeelden/HelloWorld">Hello World! (blink)</SideBarLink>
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
