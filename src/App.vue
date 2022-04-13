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

           <SideBarGroup title="Digitale logica" link="/DigitaleLogica"></SideBarGroup>

           <SideBarGroup title="Seriële Communicatie" link="/SerieleCommunicatie">
              <SideBarLink link="/SerieleCommunicatie/UART">UART</SideBarLink>
              <SideBarLink link="/SerieleCommunicatie/SPI">SPI</SideBarLink>
              <SideBarLink link="/SerieleCommunicatie/I2C">I2C</SideBarLink>
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
        <h5>Buildomgeving</h5>
        <SideBarGroup title="Installatie" link="/Installatie">
           <SideBarLink link="/Installatie#CubeIDE">STM32CubeIDE</SideBarLink>
           <SideBarLink link="/Installatie#CLion">CLion</SideBarLink>
           <SideBarLink link="/Installatie#OpenOCD">OpenOCD</SideBarLink>
           <SideBarLink link="/Installatie#ARM">ARM</SideBarLink>
        </SideBarGroup>

        <SideBarGroup title="Workflow" link="/WorkFlow"></SideBarGroup>

        <hr>
        <h5>Ontwikkelen</h5>

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
