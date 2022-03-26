<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <SideBar title="Fondant">
    <SideBarLink link="/">Start</SideBarLink>



    <SideBarGroup title="Installatie" link="/Installatie">
      <SideBarLink link="/Installatie#CubeIDE">STM32CubeIDE</SideBarLink>
      <SideBarLink link="/Installatie#CLion">CLion</SideBarLink>
      <SideBarLink link="/Installatie#OpenOCD">OpenOCD</SideBarLink>
      <SideBarLink link="/Installatie#ARM">ARM</SideBarLink>
    </SideBarGroup>

    <SideBarGroup title="Wat is een microcontroller" link="/DeMicrocontroller">
      <SideBarLink link="/DeMicrocontroller#Microprocessors">Microprocessors</SideBarLink>
      <SideBarLink link="/DeMicrocontroller#MicroProcessorsVsMicroControllers">Microprocessors vs Microcontrollers</SideBarLink>
      <SideBarLink link="/DeMicrocontroller#EmbeddedSystemen">Embedded Systemen</SideBarLink>
    </SideBarGroup>

    <SideBarGroup title="Onderdelen van een microcontroller" link="/MicrocontrollerOnderdelen">
      <SideBarLink link="/MicrocontrollerOnderdelen#InformatieVinden">Informatie vinden</SideBarLink>
    </SideBarGroup>






  </SideBar>

  <div class="container-fluid ms-1 p-4 content-container" id="content-container" style="background: #e0e4e8; height: 100vh; overflow: auto">
    <router-view></router-view>

  </div>

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



</style>
