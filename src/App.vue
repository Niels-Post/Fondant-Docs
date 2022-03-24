<template>
  <!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <SideBar title="Fondant">
    <SideBarLink link="/">Start</SideBarLink>



    <SideBarGroup title="1. Installatie" link="/Installatie">
      <SideBarLink link="/Installatie#CubeIDE">1. STM32CubeIDE</SideBarLink>
      <SideBarLink link="/Installatie#CLion">2. CLion</SideBarLink>
      <SideBarLink link="/Installatie#OpenOCD">3. OpenOCD</SideBarLink>
      <SideBarLink link="/Installatie#ARM">4. ARM</SideBarLink>
    </SideBarGroup>

    <SideBarGroup title="2. De Microcontroller" link="/DeMicrocontroller">
      <SideBarLink link="/DeMicrocontroller#Microprocessors">1. Microprocessors</SideBarLink>
      <SideBarLink link="/DeMicrocontroller#MicroProcessorsVsMicroControllers">2. Microprocessors vs Microcontrollers</SideBarLink>
      <SideBarLink link="/DeMicrocontroller#EmbeddedSystemen">3. Embedded Systemen</SideBarLink>
    </SideBarGroup>




  </SideBar>

  <div class="container-fluid ms-1 p-4 content-container " style="background: #e0e4e8; height: 100vh; overflow: auto">
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

  .emph {
    display: inline;
    background: #a2a2a2;
    color: #e7e7e7;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    font-size: 0.9em;
  }


</style>
